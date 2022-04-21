
import * as PIXI from "pixi.js";
import { barbarian, CharacterAssetType } from "./character.types";
import { pixelSquareRatio } from "../mapService/config";



export type CharacterType = {
    charType: CharacterAssetType,
    squareSprite: PIXI.Sprite,
    position: {
        x: number,
        y: number,
    }
    damage: number
}

export class Character {
    name: string;
    pos: { x: number, y: number }
    pixiChar;

    constructor(name, posX, posY, stage) {
        this.name = name;
        this.pos = { x: posX, y: posY };
        this.pixiChar = this.initPixiCharacter(posX, posY);
        stage.addChild(this.pixiChar.charSprite);
    }

    talk() {
        console.log(this.name + " is talking...");
    }

    printValues() {
        console.log("name : ", this.name);
        console.log("pos : ", this.pos);
    }

    private onOver(_pixiChar) {
        // Pointer over
        _pixiChar.charSprite.on("pointerover", () => {
            _pixiChar.charSprite.texture = PIXI.Texture.from(barbarian.textureSquareBlue);
        });
        _pixiChar.charSprite.on("pointerdown", () => {
            _pixiChar.charSprite.texture = PIXI.Texture.from(barbarian.textureSquareRed);
        });
        _pixiChar.charSprite.on("pointerout", () => {
            _pixiChar.charSprite.texture = PIXI.Texture.from(barbarian.textureFrom);
        });

    }

    private initPixiCharacter(posX, posY) {
        const charSprite = new PIXI.Sprite(PIXI.Texture.from(barbarian.textureFrom));

        charSprite.interactive = true;
        charSprite.anchor.set(0, 0);
        charSprite.scale.set(4, 4);
        charSprite.position.set(posX * pixelSquareRatio, posY * pixelSquareRatio);

        let _pixiChar = {
            charType: barbarian,
            charSprite: charSprite,
            position: {
                x: posX,
                y: posY,
            },
        };
        this.onOver(_pixiChar);
        return _pixiChar;
    }
}