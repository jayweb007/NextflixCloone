import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import HomeCategory from "../components/Home/HomeCategory";
import categories from "../assets/data/categories";

// const firstCategory = categories.items[0];
const statusBarHeight = getStatusBarHeight();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    // paddingTop: statusBarHeight,
    backgroundColor: "#000000",
  },
});
