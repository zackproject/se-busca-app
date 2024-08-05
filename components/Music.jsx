import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";
export function Music() {
  /* <MaterialIcons name="music-off" color="white" size={30} /> */
  const [isMusic, setMusic] = useState(true);
  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sakebinks.mp3")
    );
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
    <>
      {isMusic && (
        <Pressable onPress={stopSound}>
          <MaterialIcons name="music-note" color="white" size={30} />
        </Pressable>
      )}

      {!isMusic && (
        <Pressable onPress={playSound}>
          <MaterialIcons name="music-off" color="white" size={30} />
        </Pressable>
      )}
    </>
  );
}
