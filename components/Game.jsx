import { StyleSheet, View, Pressable, Image, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import sebusca from "../utils/images.js";
// import Animated from "react-native-reanimated";
import { NavbarGame } from "./NavbarGame.jsx";
export function Game() {
  const image = sebusca.clasic[0].image;
  const insets = useSafeAreaInsets();
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
        <NavbarGame image={image} time={40} score={132} />
      </View>
      <View style={styles.element2}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            key={index}
            source={image}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
              bottom: index + "0%",
              left: index + "0%",
            }}
          ></Image>
        ))}
      </View>
      <View style={styles.element3}>
        <Pressable style={styles.btn} onPress={() => alert("Pause")}>
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
