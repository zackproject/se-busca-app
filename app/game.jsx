import { Home } from "../src/pages/Home";
import { StyleSheet, View, ImageBackground, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {} from "expo-status-bar";
import background from "../assets/background.png";
import { Game } from "../src/pages/Game";
export default function Page() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        imageStyle={{ resizeMode: "repeat" }}
        source={background}
        style={styles.imageBack}
      >
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
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