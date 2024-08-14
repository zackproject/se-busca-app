import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { getScoreStorage } from "../utils/storage";

export default function Score() {
  const [score, setScore] = useState([0, 0, 0, 0, 0]);
  useEffect(() => {
    getScoreStorage().then((data) => {
      setScore(data);
    });
  }, []);

  return (
    <View>
      <Text style={styles.scoreText}>PUNTUACIÓN</Text>
      {score.map((e, i) => {
        return (
          <View key={i} style={styles.scoreItem}>
            <Text style={styles.scoreText}>{i + 1}.</Text>
            <Text style={styles.scoreText}>{e}</Text>
            <MaterialIcons name="star" color="white" size={20} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  scoreText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingBottom:10
  },
  scoreItem: {
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "white", // border: 1px solid
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "100%",
  },
});
