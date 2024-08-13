import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { NavbarGame } from "./NavbarGame.jsx";
import { randNum, randPercent } from "../utils/randNum.js";
import { useEffect, useState, useRef } from "react";
import { Wanted } from "../utils/Wanted.js";
import { Music } from "./Music.jsx";
import { AnimationComponent } from "./animations/AnimationComponent.jsx";
import { animations } from "./animations/animationList.js";

export function Game() {
  const insets = useSafeAreaInsets();
  const [characterList, setCharacterList] = useState([]);
  const [myCharacter, setMyCharacter] = useState(null);
  const [score, setScore] = useState(0);
  const [nCharacters, setNCharacters] = useState(4);
  const [isPlaying, setPlaying] = useState(true);
  const [characterXY, setCharacterXY] = useState(["20%", "20%"]);
  const [numAnimation, setNumAnimation] = useState(0);
  const [timer, isTimer] = useState(true);
  const [animationI, setanimationI] = useState([]);
  const [bottomI, setBottom] = useState([]);
  const [leftI, setLeft] = useState([]);
  const [counter, setCounter] = useState(60);

  const fillRandPercent = () => {
    return Array(nCharacters)
      .fill()
      .map(() => randPercent());
  };

  const fillRandAnimations = () => {
    return Array(nCharacters)
      .fill()
      .map(() => randNum(0, animations.length - 1));
  };

  const generatePanel = () => {
    const myChar = Wanted.getRandCharacter();
    // generate  characters
    setCharacterList(Wanted.getRandPanel(myChar, nCharacters));
    setMyCharacter(myChar);
    // generate panel 2D & animations characters
    setanimationI(() => fillRandAnimations());
    setBottom(() => fillRandPercent());
    setLeft(() => fillRandPercent());
    setNumAnimation(randNum(0, animations.length - 1));
    setCharacterXY([randPercent(), randPercent()]);
  };

  const callCorrect = () => {
    if (isPlaying) {
      setScore((prev) => prev + 1);
      setPlaying(false);
      setCounter((prev) => prev + Wanted.addSeconds());

      setNCharacters((prev) => Wanted.addCharactersPanel(score, prev));
      //isTimer(false);

      setTimeout(() => {
        // after 2 seconds do this
        generatePanel();

        setPlaying(true);
        // isTimer(true);
      }, 2000);
    }
  };

  const callInCorrect = () => {
    setCounter((prev) => prev + Wanted.removeSeconds());
  };

  useEffect(() => {
    generatePanel();
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      // if not time set button visible
      alert("Sin tiempo");
      setCounter(0);
      return;
    }

    const interval = setInterval(() => {
      if (timer) {
        // if is not in transition and is in game
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    // on change counter dismount (prevent multiple intervals overlaping)
    return () => clearInterval(interval);
  }, [counter]);

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
            time={counter}
            score={score}
          />
        )}
      </View>
      <Pressable onPress={() => console.log("The end")}>
        <Text>SALIR</Text>
      </Pressable>
      <View style={styles.element2}>
        {characterList &&
          isPlaying &&
          characterList.map((e, i) => (
            <AnimationComponent
              iAnimation={animationI[i]}
              zIndex={0}
              key={i}
              bottom={bottomI[i]}
              left={leftI[i]}
            >
              <Pressable onPress={callInCorrect}>
                <Image
                  source={Wanted.getCharacterImage(e)}
                  style={styles.imageCharacter}
                />
              </Pressable>
            </AnimationComponent>
          ))}
        {myCharacter && characterList && (
          <AnimationComponent
            iAnimation={numAnimation}
            zIndex={1}
            bottom={characterXY[0]}
            left={characterXY[1]}
          >
            <Pressable onPress={callCorrect}>
              <Image
                source={Wanted.getCharacterImage(myCharacter)}
                style={styles.imageCharacter}
              />
            </Pressable>
          </AnimationComponent>
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
  imageCharacter: {
    width: 70,
    height: 70,
  },
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
