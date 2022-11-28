/** @format */

import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

function AppContainer({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default AppContainer;
