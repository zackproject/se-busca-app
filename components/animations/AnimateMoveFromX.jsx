import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { StyleSheet, Image, View } from "react-native";

export function AnimateMoveFromX(props) {
  const { myCharacter } = props;
  const translateX = useSharedValue(-10);

  useEffect(() => {
    startAnimation();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const startAnimation = () => {
    translateX.value = withRepeat(
      withTiming(200, {
        duration: 3000, // Duración de 1 segundo
        easing: Easing.linear,
      }),
      -1, // Repetición infinita
      true // Invertir la dirección
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Image source={myCharacter} style={styles.imageCharacter} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Agrega estilos al contenedor si es necesario
  },
  imageCharacter: {
    width: 70,
    height: 70,
  },
});
