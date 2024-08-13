import { StyleSheet, View, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
// import Animated from "react-native-reanimated";
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
  // const intervalRef = useRef(null); // useRef to store interval ID
  const [myCharacter, setMyCharacter] = useState(null);
  const [score, setScore] = useState(0);
  const [numberOfCharacters, setNumberOfCharacters] = useState(4);
  const [isPlaying, setPlaying] = useState(true);
  const [characterXY, setCharacterXY] = useState(["20%", "20%"]);
  const [numAnimation, setNumAnimation] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [animationI, setanimationI] = useState([]);
  const [bottomI, setBottom] = useState([]);
  const [leftI, setLeft] = useState([]);
  const [counter, setCounter] = useState(60);
  useEffect(() => {
    // Si el contador llega a 0, se detiene.
    if (counter === 0) return;

    // Configura un intervalo que disminuye el contador cada segundo.
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonte o el contador cambie.
    return () => clearInterval(interval);
  }, [counter]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const generatePanel = () => {
    const myChar = Wanted.getRandCharacter();
    setanimationI(() =>
      Array(numberOfCharacters)
        .fill()
        .map(() => randNum(0, animations.length - 1))
    );

    setBottom(() =>
      Array(numberOfCharacters)
        .fill()
        .map(() => randPercent())
    );

    setLeft(() =>
      Array(numberOfCharacters)
        .fill()
        .map(() => randPercent())
    );

    setCharacterList(Wanted.getRandPanel(myChar, numberOfCharacters));
    setMyCharacter(myChar);
    startTimer();
  };

  const callCorrect = () => {
    if (isPlaying) {
      stopTimer();
      setScore(score + 1);
      // setUserSeconds(Wanted.addSeconds());
      setPlaying(false);
      setCounter((prev) => prev + Wanted.addSeconds());

      setNumberOfCharacters((prevNumber) =>
        Wanted.addCharactersPanel(score, prevNumber)
      );

      setTimeout(() => {
        setNumAnimation(randNum(0, animations.length - 1));
        setCharacterXY([randPercent(), randPercent()]);
        setPlaying(true);
        generatePanel();
      }, 1000);
    }
  };

  const callInCorrect = () => {
    setCounter((prev) => prev + Wanted.removeSeconds());
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
            time={counter}
            score={score}
          />
        )}
      </View>
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
