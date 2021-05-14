import * as PIXI from "pixi.js";
import { height, width, pixelSquareRatio, squares, SquareType } from "./config";




function onOver(squareUnit: PIXI.Sprite, square: SquareType) {
    squareUnit.on("click", () => {
        squareUnit.texture = PIXI.Texture.from(square.textureFromSelected);
    });
    console.warn(squareUnit.accessiblePointerEvents)

    // Pointer over
    squareUnit.on("pointerover", () => {
        squareUnit.texture = PIXI.Texture.from(square.textureFromSelected);
    });

    // Pointer OUT
    squareUnit.on("pointerout", () => {
        squareUnit.texture = PIXI.Texture.from(square.textureFrom);
    });
}

export function initSquare(posX: number, posY: number, stage: PIXI.Container, square: SquareType) {
    const squareUnit = new PIXI.Sprite(PIXI.Texture.from(square.textureFrom));
    squareUnit.interactive = square.interractive;
    squareUnit.anchor.set(0, 0);
    squareUnit.position.set(posX * pixelSquareRatio, posY * pixelSquareRatio);

    if (square.interractive) {
        onOver(squareUnit, square);
    }
    stage.addChild(squareUnit);
}
