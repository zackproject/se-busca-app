import sebusca from "./images";
import { randNum } from "./randNum";

const characterList = sebusca.clasic;
// const special = sebusca.special;
// const myCharacter = null;
const numberOfCharacters = 20;
export class Wanted {
  static getRandPanel(myCharacter) {
    let i = 0;
    let newLlista = [];
    // Quant personatges repetits volem
    while (i < numberOfCharacters - 1) {
      //Per tots el personatges disponibles, agafa un character random
      let rand = randNum(0, characterList.length - 1);
      let randCharacter = characterList[rand];
      //Si el que busca no es el triat, el fica, el nostre ha de ser unic
      if (randCharacter !== myCharacter) {
        newLlista.push(randCharacter);
        /// Si el fica incrementa el bucle
        i++;
      }
    }
    newLlista.push(myCharacter);

    return newLlista;
  }

  static getRandCharacter() {
    //Cada 45 punts es Wally
    // if (this.points % 35 == 0 && this.points > 0) {
    //  this.myCharacter = this.special;
    //     return;
    //   }
    //Pot ser que la llista de characters siguin 10 pero nomes jugo amb 4 (numberOfCharacters)
    let rand = randNum(0, characterList.length - 1);
    myCharacter = characterList[rand];
    return myCharacter;
  }

  static isCorrect(clickCharacter, myCharacter) {
    return clickCharacter.id === myCharacter.id;
  }

  static getCharacterImage(myCharacter) {
    return myCharacter.image;
  }

  static getCharacterName(myCharacter) {
    return myCharacter.name;
  }
}
