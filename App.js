import { StyleSheet, View, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import background from "./assets/background.png";
import { Home } from "./src/pages/Home"
import { Game } from "./src/pages/Game"
export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        imageStyle={{ resizeMode: "repeat" }}
        source={background}
        style={styles.imageBack}
      >
        <View style={styles.container}>
          <StatusBar style="light" />
          <Game />
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  imageBack: { width: "100%", height: "100%" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
