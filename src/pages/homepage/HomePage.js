/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import AppContainer from "./components/AppContainer";
import AppText from "./components/AppText";
import CustomBtn from "./components/CustomBtn";

function HomePage(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [quote, setQuote] = useState("");
  const [isScrollable, setIsScrollable] = useState(false);
  const [randomDogImgUrl, SetRandomDogImgUrl] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {}, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setQuote("");
    SetRandomDogImgUrl("");
    setCount(0);
    setCount2(0);
    setIsScrollable(false);
    setRefreshing(false);
  }, []);

  let getIdea = async () => {
    try {
      let quote = await axios.get("https://www.boredapi.com/api/activity");
      if (quote.status == 200) {
        setQuote(quote.data);
        setCount(count + 1);
        setIsScrollable(false);
      }
    } catch (error) {
      setQuote("Network Error, please try again");
    }
  };

  let getDogImages = async () => {
    try {
      let imgUrl = await axios.get("https://dog.ceo/api/breeds/image/random");
      if (imgUrl.status == 200) {
        setIsScrollable(true);
        SetRandomDogImgUrl(imgUrl.data);
        setCount2(count2 + 1);
      }
    } catch (error) {
      SetRandomDogImgUrl("Network Error, please try again");
    }
  };

  return (
    <ScrollView
      scrollEnabled={isScrollable}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <AppContainer>
        <View style={styles.container}>
          {/* greetings */}
          <AppText
            fontSize={20}
            fontWeights={"500"}
            theText={
              "Welcome, Nothing to do? great! Come let me give you something to do."
            }
          />
          <AppText
            fontSize={15}
            fontWeights={"500"}
            theText={"i have a curated list of fun activities to do 😊"}
          />
          <AppText
            fontSize={15}
            fontWeights={"500"}
            theText={
              "Click on the button below and see what you can do for us          "
            }
          />

          {/* create a button to generate the random idea and increase the counter */}
          <CustomBtn onPress={getIdea} btnTitle={"Press Here"} />

          {/* show the number of times you have tapped the btn */}
          {count >= 1 ? (
            <AppText
              fontSize={10}
              theText={`this is the number of activities you have seem: ${count}`}
            />
          ) : (
            ""
          )}

          {/* show the randomly generated quotes */}
          {quote == "" ? (
            ""
          ) : (
            <View>
              <AppText
                fontSize={15}
                fontWeights={"500"}
                marginVertical={0}
                theText={`Here is a task: ${
                  quote.activity ? quote.activity : quote
                }`}
              />
              <AppText
                fontSize={15}
                fontWeights={"500"}
                marginVertical={0}
                theText={`Type: ${quote.type ? quote.type : quote}`}
              />
            </View>
          )}

          {/* show some ginger to actually get up */}
          {count == 3 ? (
            <AppText
              fontSize={15}
              fontWeights={"500"}
              theText={"Get up, atleast stand up"}
            />
          ) : count == 4 ? (
            <AppText
              fontSize={15}
              fontWeights={"500"}
              theText={"Seriously get up"}
            />
          ) : count == 5 ? (
            <AppText
              fontSize={15}
              fontWeights={"500"}
              theText={"Try any of the previos suggestions"}
            />
          ) : count == 6 ? (
            <AppText
              fontSize={15}
              fontWeights={"500"}
              theText={"Didnt see anything you like/can do?"}
            />
          ) : count == 7 ? (
            <AppText
              fontSize={15}
              fontWeights={"500"}
              theText={"Keeping going you find something"}
            />
          ) : count >= 20 ? (
            <AppText
              fontSize={15}
              fontWeights={"500"}
              theText={"Get something doing with your life"}
            />
          ) : (
            ""
          )}

          {/* write a review or request */}
          <AppText
            theText={
              "if you dont like the type of activities, write a request to the api team to add more activities"
            }
          />

          {/* middle of screen */}
          <View style={{ alignItems: "center" }}>
            <AppText fontSize={20} fontWeights={"500"} theText={"OR"} />
          </View>

          {/* Random Dog images section */}
          <AppText
            fontSize={20}
            fontWeights={"500"}
            theText={"You can view random pictures of Dogs and maybe Cats"}
          />

          {/* create a button to generate the random jobs and increase the counter */}
          <CustomBtn onPress={getDogImages} btnTitle={"Feeling Lucky"} />

          {/* the number of times you have tapped the btn */}
          {count2 >= 1 ? (
            <AppText
              fontSize={13}
              theText={`this is the number of times you have seen Dog images: ${count2}`}
            />
          ) : (
            ""
          )}

          {/* show the randomly generated images */}
          <View style={{ alignItems: "center" }}>
            {randomDogImgUrl == "Network Error, please try again" ? (
              <Text>"Network Error, please try again"</Text>
            ) : (
              <Image
                source={{ uri: randomDogImgUrl.message }}
                style={{ height: 400, width: 400, marginTop: 20 }}
              />
            )}
          </View>

          {/* show a btn to download the image */}
          {randomDogImgUrl.message ? (
            <View>
              <Text style={{ textAlign: "center", marginTop: 5 }}>
                Like the image? save it
              </Text>
              <CustomBtn
                onPress={() => console.log("download btn pressed")}
                btnTitle={"Download"}
              />
            </View>
          ) : (
            ""
          )}

          {/* add more */}
        </View>
      </AppContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default HomePage;
