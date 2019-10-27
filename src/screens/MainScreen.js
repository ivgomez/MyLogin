import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Main screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default MainScreen;
