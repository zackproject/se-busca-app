import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  Easing,
} from "react-native-reanimated";
import React, { useEffect } from "react";

export function AnimateRotate(props) {
  const { children, height, width, zIndex } = props;
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
        duration: 4000, // Duración de 2 segundos
        easing: Easing.linear,
      }),
      -1, // Repetición infinita
      false // No invertir la dirección
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