import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  Easing,
} from "react-native-reanimated";
import { View, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { Wanted } from "../utils/Wanted";

export function AnimationComponent(props) {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = rotation.value * 360;
    return {
      transform: [
        { rotate: `${rotate}deg` },
        { translateX: -80 },
        { rotate: `${-rotate}deg` }
      ],
    };
  });

  const startAnimation = () => {
    rotation.value = withRepeat(
      withTiming(1, {
        duration: 2000,  // Duración de 2 segundos
        easing: Easing.linear,
      }),
      -1, // Repetición infinita
      false // No invertir la dirección
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Animated.View style={animatedStyle}>
          <Image
            source={Wanted.getCharacterImage(Wanted.getRandCharacter())}
            style={styles.imageCharacter}
          />
        </Animated.View>
      </View>
      <Button
        title="Cambia"
        onPress={startAnimation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCharacter: {
    width: 100,
    height: 100,
    zIndex: 1,
  },
});

export default AnimationComponent;
