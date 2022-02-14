import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { DataStore } from "aws-amplify";

import { getStatusBarHeight } from "react-native-status-bar-height";
import HomeCategory from "../components/Home/HomeCategory";
import { Category } from "../src/models";

//
const statusBarHeight = getStatusBarHeight();

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await DataStore.query(Category);
      // console.log(response);

      setCategories(response);
    };

    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
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
