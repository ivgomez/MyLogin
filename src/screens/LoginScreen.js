import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert
} from "react-native";
import { connect, useDispatch } from "react-redux";
import { login, signup } from "../actions/index";
import { Formik } from "formik";
import { string, object } from "yup";

const LoginScreen = props => {
  const { dispatch } = props;
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatcher = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const validationSchema = object().shape({
    email: string().required("* email is required"),
    password: string().required("* password is required")
  });

  const authHandler = async values => {
    let action;
    if (isSignup) {
      action = signup(values.email, values.password);
    } else {
      action = login(values.email, values.password);
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate("Startup");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        authHandler(values);
      }}
    >
      {({ handleChange, errors, handleBlur, handleSubmit, values }) => (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.screen}>
          <ScrollView>
            <View style={styles.authContainer}>
              <Text>Email</Text>
              <TextInput
                id="email"
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <Text>{errors.email}</Text>
              <Text>Password</Text>
              <TextInput
                id="password"
                value={values.password}
                keyboardType="default"
                secureTextEntry
                minLength={5}
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <Text>{errors.password}</Text>
            </View>

            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color="blue" />
              ) : (
                <Button title={isSignup ? "Sign Up" : "Login"} onPress={handleSubmit} />
              )}
            </View>
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
      )}
    </Formik>
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
