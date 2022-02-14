import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Auth } from "aws-amplify";

const Downloads = () => {
  //
  //
  const singOut = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={singOut}>
        <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: "Arial" }}>
          LogOut
        </Text>
      </Pressable>
    </View>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
