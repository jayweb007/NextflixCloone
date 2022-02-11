import {
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//
//
const HomeCategory = ({ category }) => {
  const navigation = useNavigation();

  const onMoviePress = (movie) => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
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
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
});
