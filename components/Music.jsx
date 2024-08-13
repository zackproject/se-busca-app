import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export function Music() {
  const [isMusic, setMusic] = useState(true);
  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sakebinks.mp3")
    );
    sound.setIsLoopingAsync(true);
    setSound(sound);
    await sound.playAsync();
    setMusic(true);
  };

  const stopSound = async () => {
    sound.unloadAsync();
    setSound(new Audio.Sound());
    setMusic(false);
  };

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    // if music on : playsound & music-note
    // if music off: stopSound & music-off
    <Pressable onPress={isMusic ? stopSound : playSound}>
      <MaterialIcons
        name={isMusic ? "music-note" : "music-off"}
        color="white"
        size={30}
      />
    </Pressable>
  );
}
