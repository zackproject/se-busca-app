import sebusca from "./images";
import { randNum } from "./randNum";

const characterList = sebusca.clasic;
// const specialCharacter = sebusca.special;

// const special = sebusca.special;
// const myCharacter = null;
export class Wanted {
  static getRandPanel(myCharacter, numberOfCharacters) {
    let i = 0;
    let newLlista = [];
    // Quant personatges repetits volem
    while (i < numberOfCharacters - 1) {
      let rand = randNum(0, characterList.length - 1);
      let randCharacter = characterList[rand];
      if (randCharacter !== myCharacter) {
        newLlista.push(randCharacter);
        i++;
      }
    }
    return newLlista;
  }

  static addCharactersPanel(score, numberOfCharacters) {
    if (score % 50 == 0 && score > 5) {
      return parseInt(numberOfCharacters / 2);
    }
    if (score % 5 == 0 && score > 5) {
      return numberOfCharacters + 4;
    }
    return numberOfCharacters;
  }

  static getRandCharacter() {
    let rand = randNum(0, characterList.length - 1);
    myCharacter = characterList[rand];
    return myCharacter;
  }

  static getBrook() {
    return characterList[0];
  }

  static getCharacterImage(myCharacter) {
    return myCharacter.image;
  }

  static getCharacterName(myCharacter) {
    return myCharacter.name;
  }
}
