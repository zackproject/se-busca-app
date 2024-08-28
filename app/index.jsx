import { Home } from "../src/pages/Home";
import { StyleSheet, View, ImageBackground, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import background from "../assets/background.png";

export default function Page() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        imageStyle={{ resizeMode: "repeat" }}
        source={background}
        style={styles.imageBack}
      >
        <View style={styles.container}>
          {/* Establece el fondo del StatusBar como negro */}
          <StatusBar barStyle="light-content" backgroundColor="black" />
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
