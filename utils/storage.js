const SCORE_STORAGE = "score-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setScoreStorage = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(SCORE_STORAGE, jsonValue);
  } catch (e) {
    console.log("Error set Score Storage");
  }
};

export const getScoreStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(SCORE_STORAGE);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.log("Error get Score Storage");
  }
  return [0, 0, 0, 0, 0];
};
