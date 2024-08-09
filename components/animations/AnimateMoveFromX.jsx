import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
export function AnimateMoveFromX(props) {
  const { children, height, width, zIndex } = props;
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
    <Animated.View
      style={[{ width: width, height: height, zIndex: zIndex }, animatedStyle]}
    >
      {children}
    </Animated.View>
  );
}
