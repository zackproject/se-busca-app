import { StyleSheet, View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import wanted from "../assets/characters/wanted.png";
import luffy from "../assets/characters/luffy.png";

export function Game() {
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
        <View style={{ alignItems: "center", alignContent: "flex-end" }}>
          <Text style={{ color: "white" }}>TIEMPO</Text>
          <Text style={{ color: "yellow", fontSize: 40 }}>88</Text>
        </View>
        <View>
          <Image
            source={wanted}
            style={{ height: 160, width: 164, position: "relative" }}
          ></Image>
          <Image
            source={luffy}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
              left: "50%",
              bottom: 20,
              transform: [{ translateX: -35 }],
            }}
          ></Image>
        </View>
        <View style={{ alignItems: "center", alignContent: "center" }}>
          <MaterialIcons name="star" color="gray" size={20} />
          <MaterialIcons name="star" color="gray" size={20} />
          <MaterialIcons name="star" color="gray" size={20} />
          <MaterialIcons name="star" color="gray" size={20} />
          <MaterialIcons
            name="star"
            color="black"
            size={30}
            style={{ color: "yellow" }}
          />
          <Text style={{ color: "white", position: "absolute", bottom: 0 }}>
            3
          </Text>
        </View>
      </View>
      <View style={styles.element2}>
        <Image source={luffy} style={{ height: 70, width: 70 }}></Image>
      </View>
      <View style={styles.element3}>
        <MaterialIcons name="play-circle-outline" color="white" size={30} />
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
