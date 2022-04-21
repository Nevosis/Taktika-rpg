import { Character } from "../charactersService/character";

export class Game {
    characters: Character[] = [];
    stage;
    constructor(stage) {
        this.stage = stage;
    }

    addChar(name: string) {
        this.characters.push(new Character(name, 5, 5, this.stage));
    }

    printGameValues() {
        console.log("Chars : ", this.characters);
    }

    resetValues() {
        this.characters = [];
        console.log(this.stage);
        //  initMapService(this.stage);
    }

}