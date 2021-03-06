import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import { getStatusBarHeight } from "react-native-status-bar-height";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

const statusBarHeight = getStatusBarHeight();
const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: "#fff",
  },
});
