import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import wanted from "../assets/characters/wanted.png";
import { useEffect, useState } from "react";

export function NavbarGame(props) {
  const { image, name, time, score } = props;
  const [starColor, setStarColor] = useState([
    "gray",
    "gray",
    "gray",
    "gray",
    "gray",
  ]);

  useEffect(() => {
    setStarColor(() => {
      if (score === 0) {
        return ["gray", "gray", "gray", "gray", "gray"];
      }
      if (score % 5 === 1) {
        return ["white", "gray", "gray", "gray", "gray"];
      }
      if (score % 5 === 2) {
        return ["yellow", "yellow", "gray", "gray", "gray"];
      }
      if (score % 5 === 3) {
        return ["yellow", "yellow", "yellow", "gray", "gray"];
      }
      if (score % 5 === 4) {
        return ["yellow", "yellow", "yellow", "yellow", "gray"];
      }
      if (score % 5 === 0) {
        return ["yellow", "yellow", "yellow", "yellow", "yellow"];
      }
    });
  }, [score]);

  return (
    <>
      <View style={styles.time}>
        <Text style={{ color: "white" }}>TIEMPO</Text>
        <Text style={{ color: "yellow", fontSize: 40 }}>{time}</Text>
      </View>
      <View>
        <Image source={wanted} alt="Se busca" style={styles.wanted} />
        <Image source={image} alt={name} style={styles.imageWanted} />
      </View>
      <View style={styles.stars}>
        <MaterialIcons name="star" color={starColor[4]} size={24} />
        <MaterialIcons name="star" color={starColor[3]} size={24} />
        <MaterialIcons name="star" color={starColor[2]} size={24} />
        <MaterialIcons name="star" color={starColor[1]} size={24} />
        <MaterialIcons name="star" color={starColor[0]} size={34} />

        <Text style={styles.score}>{score}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  time: {
    alignItems: "center",
    alignContent: "flex-end",
  },
  wanted: {
    height: 160,
    width: 164,
    position: "relative",
  },
  imageWanted: {
    height: 70,
    width: 70,
    position: "absolute",
    left: "50%",
    bottom: 20,
    transform: [{ translateX: -35 }],
  },
  score: {
    zIndex: 1,
    color: "rgb(248, 70, 70)",
    fontSize: 20,
  },
  stars: {
    alignItems: "center",
    alignContent: "center",
  },
});
