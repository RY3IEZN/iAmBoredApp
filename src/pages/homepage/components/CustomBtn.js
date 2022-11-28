/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomBtn({ onPress, btnTitle }) {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={styles.randomiserBtn} onPress={onPress}>
        <Text>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  randomiserBtn: {
    marginVertical: 5,
    height: 50,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomBtn;
