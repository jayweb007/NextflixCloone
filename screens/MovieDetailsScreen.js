import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Picker } from "@react-native-picker/picker";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Movie, Season, Episode } from "../src/models";
// import movie from "../assets/data/movie";
import EpisodeItem from "../components/Home/EpisodeItem";
import VideoPlayer from "../components/Home/VideoPlayer";

//
const statusBarHeight = getStatusBarHeight();
//
// const firstSeason = movie.seasons.items[0];
// const firstEpisode = firstSeason.episodes.items[0];
//
const MovieDetailsScreen = () => {
  const [movie, setMovie] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const [currentSeason, setCurrentSeason] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const seasonNames = seasons ? seasons.map((season) => season.name) : [];

  const route = useRoute();

  //FETCHING MOVIES
  useEffect(() => {
    const fetchMovie = async () => {
      const result = await DataStore.query(Movie, route?.params?.id);
      // console.log("ONE MOVI", result);
      setMovie(result);
    };

    fetchMovie();
  }, []);

  // FETCHING SEASONS
  useEffect(() => {
    if (!movie) {
      return;
    }

    const fetchSeasons = async () => {
      const movieSeasons = (await DataStore.query(Season)).filter(
        (c) => c?.movie?.id === movie?.id
      );
      setSeasons(movieSeasons);
      setCurrentSeason(movieSeasons[0]);
      // console.log("SEASONS==", movieSeasons);
    };

    fetchSeasons();
  }, [movie]);

  //FETCHING EPISODES
  useEffect(() => {
    if (!currentSeason) {
      return;
    }

    const fetchEpisodes = async () => {
      const seasonEpisodes = (await DataStore.query(Episode)).filter(
        (c) => c?.season?.id === currentSeason?.id
      );
      setEpisodes(seasonEpisodes);
      setCurrentEpisode(seasonEpisodes[0]);
    };

    fetchEpisodes();
  }, [currentSeason]);

  //Page Loader
  if (!movie) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  //
  return (
    <View style={styles.container}>
      {currentEpisode && <VideoPlayer episode={currentEpisode} />}

      <FlatList
        data={episodes}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        style={{ marginBottom: "auto" }}
        ListHeaderComponent={
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  color: "#00aa00",
                  fontSize: 17,
                  fontWeight: "bold",
                  paddingRight: 20,
                }}
              >
                98% match
              </Text>
              <Text style={{ paddingRight: 10, color: "lightgray" }}>
                {movie.year}
              </Text>
              <View
                style={{
                  width: 35,
                  height: 25,
                  backgroundColor: "yellow",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                >
                  12+
                </Text>
              </View>
              <Text style={{ paddingHorizontal: 10, color: "#ccc" }}>
                {movie.numberOfSeasons} Seasons
              </Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                height: 40,
                backgroundColor: "white",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="play" size={24} color="black" />
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                  fontWeight: "bold",
                  paddingLeft: 10,
                }}
              >
                Play
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                height: 40,
                backgroundColor: "#3C4245",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 15,
              }}
            >
              <AntDesign name="download" size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: "bold",
                  paddingLeft: 10,
                }}
              >
                Download
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "#ccc" }}>{movie.plot}</Text>
            <Text style={{ color: "gray", marginTop: 10, marginBottom: 2 }}>
              Cast: {movie.cast}...more
            </Text>
            <Text style={{ color: "gray" }}>Creator: {movie.creator}</Text>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 15,
                  paddingLeft: 22,
                  paddingRight: 22,
                  paddingBottom: 20,
                  borderBottomWidth: 3,
                  borderBottomColor: "#FF0000",
                  marginRight: 20,
                }}
              >
                <AntDesign name="plus" size={24} color="#ccc" />
                <Text
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 10,
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  My List
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 15,
                  paddingLeft: 25,
                  paddingRight: 25,
                  paddingBottom: 20,
                  marginRight: 20,
                }}
              >
                <AntDesign name="like2" size={24} color="#ccc" />
                <Text
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 10,
                    color: "#686D76",
                    fontWeight: "bold",
                  }}
                >
                  Rate
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 15,
                  paddingLeft: 25,
                  paddingRight: 25,
                  paddingBottom: 20,
                  marginRight: 20,
                }}
              >
                <Ionicons name="paper-plane-outline" size={24} color="#ccc" />
                <Text
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 10,
                    color: "#686D76",
                    fontWeight: "bold",
                  }}
                >
                  Share
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  paddingTop: 10,
                  paddingRight: 20,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                EPISODES
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: 19,
                }}
              >
                MORE LIKE THIS
              </Text>
            </View>

            {/* Picker */}
            {currentSeason && (
              <Picker
                style={
                  Platform.OS === "android"
                    ? {
                        color: "#fff",
                        backgroundColor: "#3d3c3c",
                        height: 50,
                        width: 130,
                        marginTop: 15,
                      }
                    : {
                        backgroundColor: "white",
                        textAlign: "left",
                        width: "40%",
                        color: "#fff",
                      }
                }
                itemStyle={{ backgroundColor: "#ffffff" }}
                mode="dropdown"
                selectedValue={currentSeason?.name}
                onValueChange={(itemValue, itemIndex) => {
                  setCurrentSeason(seasons[itemIndex]);
                }}
                dropdownIconColor={"#fff"}
              >
                {seasonNames.map((seasonName) => (
                  <Picker.Item
                    label={seasonName}
                    value={seasonName}
                    key={seasonName}
                  />
                ))}
              </Picker>
            )}
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: statusBarHeight,
    backgroundColor: "#151515",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 5,
    color: "#ffffff",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
});
