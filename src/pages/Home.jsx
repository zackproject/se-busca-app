import Score from "../components/Score";
import { Dimensions, StyleSheet, Text, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
export function Home() {
  // const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SE BUSCA</Text>
      <Link style={styles.btn} href="/game" accessibilityLabel="Jugar al juego">
        JUGAR
      </Link>
      <Score />
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: width > 400 ? 40 : 32,
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
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
