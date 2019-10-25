import React, { useState } from "react";
import { View, Button, ScrollView, TextInput, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
//import { signup, login } from "";

const LoginScreen = props => {
  const { dispatch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.screen}>
      <ScrollView>
        <Text>Email</Text>
        <TextInput
          id="email"
          label="E-Mail"
          keyboardType="email-address"
          required
          email
          autoCapitalize="none"
          errorText="Please enter a valid email address."
          initialValue=""
        />
        <Text>Password</Text>
        <TextInput
          id="password"
          label="Password"
          keyboardType="default"
          secureTextEntry
          required
          minLength={5}
          autoCapitalize="none"
          errorText="Please enter a valid password."
          initialValue=""
        />

        <View style={styles.buttonContainer}>
          <Button
            title={`Switch to ${isSignup ? "Login" : "Sign Up"}`}
            onPress={() => {
              setIsSignup(prevState => !prevState);
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  buttonContainer: {
    marginTop: 10
  }
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapDispatchToProps)(LoginScreen);
