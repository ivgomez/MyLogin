import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const isAuth = useSelector(state => !!state.auth.token);
  const token = useSelector(state => state.auth.token);
  const expirationToken = useSelector(state => state.auth.expiryTime);
  var tempTime = moment.duration(expirationToken);
  console.log("tempTime ", tempTime._data.minutes);
  return (
    <View style={styles.screen}>
      <Text>Main screen</Text>
      <Text>TOKEN: </Text>
      {isAuth && <Text>{token}</Text>}
      <Text>EXPIRATION MINUTES: {tempTime._data.minutes || ""} </Text>
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
