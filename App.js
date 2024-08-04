import { StyleSheet, View, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import background from "./assets/background.png";

// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Home } from "./components/Home";
// import background from "./assets/background.png";
export default function App() {
  // const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <ImageBackground
        imageStyle={{ resizeMode: "repeat" }}
        source={background}
        style={styles.imageBack}
      >
        <View style={styles.container}>
          <StatusBar style="light" />
          <Home />
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
