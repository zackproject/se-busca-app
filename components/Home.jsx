import Score from "./Score";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Home() {
  // const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SE BUSCA</Text>
      <Pressable style={styles.btn} onPress={() => alert("Let's play")}>
        <Text style={styles.btnText}>JUGAR</Text>
      </Pressable>
      <Score />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly", // Space elements vertically with equal space around them
    alignItems: "center", // Center elements horizontally
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "white",
    width: "100%",
  },
  btn: {
    borderColor: "white", // border: 1px solid
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    width: 200,
    backgroundColor: "black",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
