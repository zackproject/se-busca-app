import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import wanted from "../../../assets/characters/wanted.png";
export default function AnimateFallPoster(props) {
  const { image, name } = props;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const [wantedImage, setWantedImage] = useState("");
  useEffect(() => {
    runAnimation();
    setTimeout(() => {
      setWantedImage(image);
    }, 1000);
  }, [image]);

  const runAnimation = () => {
    translateX.value = withSequence(
      withTiming(-200, { duration: 1000 }),
      withTiming(200, { duration: 50 }),
      withTiming(0, { duration: 1000 })
    );

    translateY.value = withSequence(
      withTiming(-200, { duration: 1000 }),
      withTiming(-200, { duration: 50 }),
      withTiming(0, { duration: 1000 })
    );

    rotate.value = withSequence(
      withTiming(180, { duration: 1000 }),
      withTiming(180, { duration: 50 }),
      withTiming(360, { duration: 1000 })
    );

    scale.value = withSequence(
      withTiming(0.2, { duration: 1000 }),
      withTiming(0.2, { duration: 50 }),
      withTiming(1, { duration: 1000 })
    );

    opacity.value = withSequence(
      withTiming(0, { duration: 1000 }),
      withTiming(0, { duration: 50 }),
      withTiming(1, { duration: 1000 })
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate.value}deg` },
        { scale: scale.value },
      ],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[animatedStyle]}>
      <Image source={wanted} alt="Se busca" style={styles.wanted} />
      <Image source={wantedImage} alt={name} style={styles.imageWanted} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  // poster
  wanted: {
    height: 160,
    width: 164,
    position: "relative",
  },
  imageWanted: {
    height: 70,
    width: 70,
    position: "absolute",
    left: "50%",
    bottom: 20,
    transform: [{ translateX: -35 }],
  },
});
