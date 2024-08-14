import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
export function AnimateMoveFromY(props) {
  const { children, zIndex, bottom, left } = props;
  const translateY = useSharedValue(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const startAnimation = () => {
    translateY.value = withRepeat(
      withTiming(200, {
        duration: 3000, 
        easing: Easing.linear,
      }),
      -1, 
      true 
    );
  };

  return (
    <Animated.View
      style={[
        {
          zIndex: zIndex,
          bottom: bottom,
          left: left,
          position: "absolute",
        },
        animatedStyle,
      ]}
    >
      {children}
    </Animated.View>
  );
}
