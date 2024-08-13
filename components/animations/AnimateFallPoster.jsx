import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

export default function AnimateFallPoster() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

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
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>Animated Box</Text>
      </Animated.View>
      <Button title="Run Animation" onPress={runAnimation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Espacio para el botón
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
  },
});
