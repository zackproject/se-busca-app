import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

export function AnimateRotateDiagonal(props) {
  const { children, height, width, zIndex } = props;

  // Define shared values for translateX, translateY, and rotation
  const translateX = useSharedValue(-10);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate.value}deg` },
      ],
    };
  });

  const startAnimation = () => {
    translateX.value = withRepeat(
      withTiming(-100, {
        duration: 1000, // 1 segundo para ir a -100px
        easing: Easing.linear,
      }),
      -1, // Repetición infinita
      true // Invertir la dirección
    );

    translateY.value = withRepeat(
      withTiming(-100, {
        duration: 1000, // 1 segundo para ir a -100px
        easing: Easing.linear,
      }),
      -1, // Repetición infinita
      true // Invertir la dirección
    );

    rotate.value = withRepeat(
      withTiming(360, {
        duration: 3000, // 1 segundo para rotar 360 grados
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
