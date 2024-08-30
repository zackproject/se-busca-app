import sebusca from "../utils/images";
import { randNum } from "../utils/randNum";

const mCharacterList = sebusca.clasic;
// const specialCharacter = sebusca.special;
// const special = sebusca.special;

export class Wanted {
  static getRandPanel(myCharacter, numberOfCharacters) {
    let i = 0;
    let newLlista = [];
    // Quant personatges repetits volem
    while (i < numberOfCharacters - 1) {
      let rand = randNum(0, mCharacterList.length - 1);
      let randCharacter = mCharacterList[rand];
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
    let rand = randNum(0, mCharacterList.length - 1);
    myCharacter = mCharacterList[rand];
    return myCharacter;
  }

  static getBrook() {
    return mCharacterList[0];
  }

  static updateScore(scoreList, newScore) {
    let copiaList = scoreList;
    copiaList.push(parseInt(newScore));
    copiaList = copiaList.sort((a, b) => b - a); // Ordenar de forma descendente usando una función de comparación
    copiaList.pop();
    return copiaList;
  }

  static getCharacterImage(myCharacter) {
    return myCharacter.image;
  }

  static addSeconds(score = 0) {
    if (score % 50 == 0 && score > 1) {
      return 5;
    }

    if (score > 40) {
      return 1;
    }

    return 2;
  }

  static removeSeconds() {
    return -10;
  }

  static getCharacterName(myCharacter) {
    return myCharacter.name;
  }
}
