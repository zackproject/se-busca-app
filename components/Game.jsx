import { StyleSheet, View, Pressable, Image, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
// import Animated from "react-native-reanimated";
import { NavbarGame } from "./NavbarGame.jsx";
import { randPercent } from "../utils/randNum.js";
import { useEffect, useState, useRef } from "react";
import { Wanted } from "../utils/Wanted.js";

export function Game() {
  const insets = useSafeAreaInsets();
  const [characterList, setCharacterList] = useState();
  const intervalRef = useRef(null); // useRef to store interval ID
  const [myCharacter, setMyCharacter] = useState();
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);

  const startCounter = () => {
    setTime(60); // Reset counter
    intervalRef.current = setInterval(() => {
      setTime((prevCounter) => {
        if (prevCounter <= 0) {
          clearInterval(intervalRef.current);
          return prevCounter;
        }
        return prevCounter - 1;
      });
    }, 1000);
  };

  const generatePanel = () => {
    const myChar = Wanted.getRandCharacter();
    setCharacterList(Wanted.getRandPanel(myChar));
    setMyCharacter(myChar);
  };

  const checkCorrect = (e) => {
    const isCorrect = Wanted.isCorrect(e, myCharacter);
    if (isCorrect) {
      generatePanel();
      setScore(score + 1);
    } else {
      alert("Mal");
    }
  };
  useEffect(() => {
    // startCounter();
  }, []);

  useEffect(() => {
    generatePanel();
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        width: "100%",
        height: "100%",
      }}
    >
      <View style={styles.element1}>
        {myCharacter && (
          <NavbarGame
            image={Wanted.getCharacterImage(myCharacter)}
            name={Wanted.getCharacterName(myCharacter)}
            time={time}
            score={score}
          />
        )}
      </View>
      <View style={styles.element2}>
        {characterList &&
          characterList.map((e, i) => (
            <Pressable
              key={i}
              style={{
                position: "absolute",
                bottom: randPercent() + "%",
                left: randPercent() + "%",
              }}
              onPress={() => checkCorrect(e)}
            >
              <Image
                source={Wanted.getCharacterImage(e)}
                alt={Wanted.getCharacterName(e)}
                style={{
                  height: 70,
                  width: 70,
                }}
              />
            </Pressable>
          ))}
      </View>
      <View style={styles.element3}>
        <Pressable style={styles.btn} onPress={checkCorrect}>
          <MaterialIcons name="play-circle-outline" color="white" size={30} />
        </Pressable>
        <MaterialIcons name="music-note" color="white" size={30} />
        {/* <MaterialIcons name="music-off" color="white" size={30} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  element1: {
    flexGrow: 0,
    flexShrink: 1,
    //backgroundColor: "red",
    borderBottomWidth: 1,
    borderBottomColor: "white", // border: 1px solid
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  element2: {
    flexGrow: 1,
    flexShrink: 1,
    position: "relative",
    overflow: "hidden",
    //backgroundColor: "blue",
  },
  element3: {
    flexGrow: 0,
    flexShrink: 1,
    //backgroundColor: "green",
    borderTopWidth: 1,
    borderTopColor: "white", // border: 1px solid
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
});
