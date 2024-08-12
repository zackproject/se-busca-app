import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

export default function Timer(props) {
  console.log(props);
  const { time, userSeconds } = props;
  const [counter, setCounter] = useState(parseInt(time));
  useEffect(() => {
    // Si el contador llega a 0, se detiene.
    if (counter === 0) return;

    // Configura un intervalo que disminuye el contador cada segundo.
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonte o el contador cambie.
    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    setCounter((prevCounter) => prevCounter + userSeconds);
  }, [userSeconds]);

  return <Text style={styles.counterText}>{counter}</Text>;
}

const styles = StyleSheet.create({
  counterText: {
    color: "yellow",
    fontSize: 40,
  },
});
