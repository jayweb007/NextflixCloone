import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//
//

const EpisodeItem = ({ episode, onPress }) => {
  //
  return (
    <Pressable
      style={{ paddingHorizontal: 10 }}
      onPress={() => onPress(episode)}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 10,
        }}
      >
        <Image
          style={{
            height: 75,
            aspectRatio: 16 / 9,
            resizeMode: "cover",
            borderRadius: 5,
          }}
          source={{ uri: episode.poster }}
        />
        <View
          style={{
            flexDirection: "column",
            marginRight: "auto",
            marginLeft: 7,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#bdbdbd" }}>
            {episode.title}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#727272" }}>
            {episode.duration}
          </Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text
        style={{
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: "#222831",
        }}
      >
        {episode.plot}
      </Text>
    </Pressable>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({});
