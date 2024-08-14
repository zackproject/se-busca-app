import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { NavbarGame } from "../components/NavbarGame.jsx";
import { randNum, randPercent } from "../utils/randNum.js";
import { useEffect, useState } from "react";
import { Wanted } from "../entities/Wanted.js";
import { Music } from "../components/Music.jsx";
import { AnimationComponent } from "../components/animations/AnimationComponent.jsx";
import { animations } from "../components/animations/animationList.js";

export function Game() {
  const insets = useSafeAreaInsets();
  const [characterList, setCharacterList] = useState([]);
  const [myCharacter, setMyCharacter] = useState(null);
  const [myCharacterPanel, setMyCharacterPanel] = useState(null);

  const [score, setScore] = useState(0);
  const [nCharacters, setNCharacters] = useState(4);
  const [isPlaying, setPlaying] = useState(false);
  const [isCorrect, setCorrect] = useState(true);
  const [characterXY, setCharacterXY] = useState(["20%", "20%"]);
  const [numAnimation, setNumAnimation] = useState(0);
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
    setMyCharacterPanel(myCharacter);
    setBottom(() => fillRandPercent());
    setLeft(() => fillRandPercent());
    // generate panel 2D & animations characters

    setTimeout(() => {
      setanimationI(() => fillRandAnimations());
      setNumAnimation(randNum(0, animations.length - 1));
      setCharacterXY([randPercent(), randPercent()]);
      setMyCharacterPanel(myChar);
      setCorrect(true);
      setPlaying(true);
    }, 1995);
  };

  const callCorrect = () => {
    if (isPlaying) {
      setScore((prev) => prev + 1);
      setCounter((prev) => prev + Wanted.addSeconds());
      setNCharacters((prev) => Wanted.addCharactersPanel(score, prev));
      setCorrect(true);
      setPlaying(false);
      generatePanel();
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
      setCorrect(false);
      setCounter(0);
      return;
    }
    let interval;

    if (isPlaying && counter > 0) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }
    // on change counter dismount (prevent multiple intervals overlaping)
    return () => clearInterval(interval);
  }, [isPlaying, counter]);

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
      {counter <= 0 && (
        <Pressable style={styles.btn} onPress={() => console.log("The end")}>
          <Text style={styles.text}>SALIR</Text>
        </Pressable>
      )}

      <View style={styles.element2}>
        {isPlaying &&
          characterList &&
          isCorrect &&
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
        {isCorrect && myCharacterPanel && characterList && (
          <AnimationComponent
            iAnimation={numAnimation}
            zIndex={1}
            bottom={characterXY[0]}
            left={characterXY[1]}
          >
            <Pressable onPress={callCorrect}>
              <Image
                source={Wanted.getCharacterImage(myCharacterPanel)}
                style={styles.imageCharacter}
              />
            </Pressable>
          </AnimationComponent>
        )}
      </View>
      <View style={styles.element3}>
        {counter > 0 && (
          <Pressable
            onPress={() => {
              setCorrect(!isCorrect);
              setPlaying(!isPlaying);
            }}
          >
            <MaterialIcons
              name={isCorrect ? "play-circle-outline" : "pause-circle"}
              color="white"
              size={30}
            />
          </Pressable>
        )}
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
  btn: {
    borderColor: "white", // border: 1px solid
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    width: "100%",
    position: "absolute",
    top: "50%",
    zIndex: 2,
    backgroundColor: "#020202ab", // transparent black
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
