/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AppText({ theText, fontWeights, fontSize, marginVertical = 5 }) {
  return (
    <Text
      style={{
        marginVertical: marginVertical,
        fontWeight: fontWeights,
        fontSize: fontSize,
      }}
    >
      {theText}
    </Text>
  );
}

const styles = StyleSheet.create({
  textstyle: {},
});

export default AppText;
