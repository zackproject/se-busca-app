import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  Easing,
} from "react-native-reanimated";
import { StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

export function AnimateRotate(props) {
  const { myCharacter } = props;
  const rotation = useSharedValue(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = rotation.value * 360;
    return {
      transform: [
        { rotate: `${rotate}deg` },
        { translateX: -50 },
        { rotate: `${-rotate}deg` },
      ],
    };
  });

  const startAnimation = () => {
    rotation.value = withRepeat(
      withTiming(1, {
        duration: 2000, // Duración de 2 segundos
        easing: Easing.linear,
      }),
      -1, // Repetición infinita
      false // No invertir la dirección
    );
  };

  return (
    <Animated.View style={animatedStyle}>
      <Image source={myCharacter} style={styles.imageCharacter} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageCharacter: {
    width: 70,
    height: 70,
    // zIndex: 1,
  },
});
