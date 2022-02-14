import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

//
//
const MovieItem = ({ movie }) => {
  const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState("");

  const onMoviePress = () => {
    navigation.navigate("MovieDetailsScreen", { id: movie?.id });
  };

  //FETCHING Image from S3 Storage
  useEffect(() => {
    if (movie.poster.startsWith("http")) {
      setImageUrl(movie.poster);
      return;
    }
    const picture = async () => {
      await Storage.get(movie.poster).then((result) => setImageUrl(result));
      //   await Storage.get("banner.jpeg").then((result) => console.log(result));
    };

    picture();
  }, []);

  //
  return (
    <Pressable onPress={onMoviePress}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
    </Pressable>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});
