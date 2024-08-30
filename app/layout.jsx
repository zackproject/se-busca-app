import { StyleSheet, View, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import background from '../assets/background.png';

export default function LayoutPage({ children }) {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="black" />
      <View style={styles.rootContainer}>
        <ImageBackground
          imageStyle={{ resizeMode: 'repeat' }}
          source={background}
          style={styles.imageBack}
        >
          <View style={styles.container}>
            {children}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'black', // Ensures background color is black initially
  },
  imageBack: {
    flex: 1, // Ensures ImageBackground covers the whole screen
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});
