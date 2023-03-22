
import * as PIXI from "pixi.js";
import { barbarian, CharacterAssetType } from "./character.types";
import { pixelSquareRatio } from "../mapService/config";
import { ITEM_POINTED } from "../mapService/square";
import {
    movement as A_movement,
    hitMyself as A_hitMyself,
    healMyself as A_healMyself,
} from "../actionsService/action.config";
import { Action } from "../actionsService/action.types";
import { CHARACTER_SELECTED } from "./character.events";
import eventEmitter from "../../utils/events";



export type CharacterType = {
    charType: CharacterAssetType,
    squareSprite: PIXI.Sprite,
    position: {
        x: number,
        y: number,
    }
    damage: number
}

export enum CharacterState {
    IDLE = "IDLE",
    SELECTED = "SELECTED",
    BUSY = "BUSY",
}

let characterStateMap = {
    [CharacterState.IDLE]: { texture: "textureFrom" },
    [CharacterState.SELECTED]: { texture: "textureSquareWhite" },
    [CharacterState.BUSY]: { texture: "textureSquarePurple" },
};

export class Character {
    name: string;
    pos: { x: number, y: number }
    pixiChar;
    state: CharacterState = CharacterState.IDLE;
    actionsAvailable: Action[] = [];

    constructor(name, posX, posY, stage) {
        this.name = name;
        this.pos = { x: posX, y: posY };
        this.pixiChar = this.initPixiCharacter(posX, posY);
        stage.addChild(this.pixiChar.charSprite);
        this.initEvents();
        this.initActionsAvailable();
    }

    talk() {
        console.log(this.name + " is talking...");
    }

    printValues() {
        console.log("name : ", this.name);
        console.log("pos : ", this.pos);
    }

    private getCharacterTextureFromState() {
        return barbarian[characterStateMap[this.state].texture];
    }

    private onOver(_pixiChar) {
        // Pointer over
        _pixiChar.charSprite.on("pointerover", () => {
            _pixiChar.charSprite.texture = PIXI.Texture.from(barbarian.textureSquareWhite);
        });
        _pixiChar.charSprite.on("pointerdown", () => {
            if (this.state === CharacterState.SELECTED) {
                this.state = CharacterState.IDLE;
            } else {
                this.setCharacterSelected();
            }
            _pixiChar.charSprite.texture = PIXI.Texture.from(this.getCharacterTextureFromState());
        });
        _pixiChar.charSprite.on("pointerout", () => {
            _pixiChar.charSprite.texture = PIXI.Texture.from(this.getCharacterTextureFromState());
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

    private initEvents() {
        eventEmitter.addListener(ITEM_POINTED, (item, type) => {
            if (this.state === CharacterState.SELECTED) {
                this.moveUnit(item.position.x, item.position.y);
                this.state = CharacterState.IDLE;
            }
        });
    }

    private initActionsAvailable() {
        this.actionsAvailable = [A_movement,
            A_hitMyself,
            A_healMyself];
    }

    private moveUnit(posX, posY) {
        this.pos = { x: posX, y: posY };
        this.pixiChar.charSprite.position.set(posX * pixelSquareRatio, posY * pixelSquareRatio);
    }

    private setCharacterSelected() {
        this.state = CharacterState.SELECTED;

        eventEmitter.emit(CHARACTER_SELECTED, this);
    }
}