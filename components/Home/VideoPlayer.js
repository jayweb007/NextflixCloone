import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

//
//

//////
const VideoPlayer = ({ episode }) => {
  const [status, setStatus] = useState({});
  const video = useRef(null);

  ////
  return (
    <View style={{ paddingBottom: 10 }}>
      <Video
        ref={video}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        source={{
          uri: episode.video,
        }}
        // posterSource={{ uri: episode.poster }}
        // posterStyle={{
        //   resizeMode: "contain",
        // }}
        // usePoster={true}
        resizeMode="contain"
        useNativeControls
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
