import { useEffect } from "react";
import { Home } from "../src/pages/Home";
import { StyleSheet, View, ImageBackground, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import background from "../assets/background.png";
import * as SystemUI from "expo-system-ui";

export default function Page() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("gray");
  }, []);

  return (
    <SafeAreaProvider>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={background}
        style={styles.imageBack}
      >
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <View style={styles.container}>
          <Home />
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
  },
  imageStyle: {
    resizeMode: "repeat",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
