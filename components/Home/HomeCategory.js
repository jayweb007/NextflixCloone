import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  Pressable,
  View,
} from "react-native";
import { Movie } from "../../src/models";
import MovieItem from "./MovieItem";

//
//
const HomeCategory = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter(
        (c) => c?.category?.id === category?.id
      );
      setMovies(result);
      // console.log(result);
    };

    fetchMovies();
  }, []);

  ///
  return (
    <>
      <Text style={styles.title}>{category?.title}</Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MovieItem movie={item} />}
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
});
