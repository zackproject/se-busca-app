import { StyleSheet, View, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
// import Animated from "react-native-reanimated";
import { NavbarGame } from "./NavbarGame.jsx";
import { randPercent } from "../utils/randNum.js";
import { useEffect, useState, useRef } from "react";
import { Wanted } from "../utils/Wanted.js";
import { Music } from "./Music.jsx";
import { AnimationRotate } from "./animations/AnimationRotate.jsx";

export function Game() {
  const insets = useSafeAreaInsets();
  const [characterList, setCharacterList] = useState();
  // const intervalRef = useRef(null); // useRef to store interval ID
  const [myCharacter, setMyCharacter] = useState();
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [numberOfCharacters, setNumberOfCharacters] = useState(4);

  const [isPlaying, setPlaying] = useState(true);
  const [characterXY, setCharacterXY] = useState([
    randPercent() + "%",
    randPercent() + "%",
  ]);

  const generatePanel = () => {
    const myChar = Wanted.getRandCharacter();
    setCharacterList(Wanted.getRandPanel(myChar, numberOfCharacters));
    setMyCharacter(myChar);
  };

  const callCorrect = () => {
    if (isPlaying) {
      setScore(score + 1);
      setPlaying(false);
      setNumberOfCharacters((prev) => {
        return Wanted.addCharactersPanel(score, prev);
      });

      setTimeout(() => {
        setCharacterXY([randPercent() + "%", randPercent() + "%"]);
        setPlaying(true);
        generatePanel();
      }, 1000);
    }
  };

  const callInCorrect = () => {
    alert("Mal");
  };

  useEffect(() => {
    if (isPlaying) {
      generatePanel();
    }
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
          isPlaying &&
          characterList.map((e, i) => (
            <Pressable
              key={i}
              style={{
                position: "absolute",
                bottom: randPercent() + "%",
                left: randPercent() + "%",
              }}
              onPress={callInCorrect}
            >
              <AnimationRotate myCharacter={Wanted.getCharacterImage(e)} />
            </Pressable>
          ))}
        {myCharacter && (
          <Pressable
            style={{
              position: "absolute",
              bottom: characterXY[0],
              left: characterXY[1],
            }}
            onPress={callCorrect}
          >
            {/*{ zIndex: 1 }*/}
            <AnimationRotate
              myCharacter={Wanted.getCharacterImage(myCharacter)}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.element3}>
        <Pressable style={styles.btn} onPress={callCorrect}>
          <MaterialIcons name="play-circle-outline" color="white" size={30} />
        </Pressable>
        <Music />
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
