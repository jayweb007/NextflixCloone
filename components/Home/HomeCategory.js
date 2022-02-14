import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import {
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Movie } from "../../src/models";

//
//
const HomeCategory = ({ category }) => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter(
        (c) => c?.category?.id === category?.id
      );
      setMovies(result);
      console.log(result);
    };

    fetchMovies();
  }, []);

  const onMoviePress = (movie) => {
    navigation.navigate("MovieDetailsScreen", { id: movie?.id });
  };

  ///
  return (
    <>
      <Text style={styles.title}>{category?.title}</Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image style={styles.image} source={{ uri: item.poster }} />
          </Pressable>
        )}
      />
    </>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: 15,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});
