import * as PIXI from "pixi.js";
import { height, width, pixelSquareRatio, squares, SquareType } from "./config";
import { initSquare } from "./square";





export function initMapService(stage: PIXI.Container) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (x === 0 || x === width - 1 || y === 0 || y === height - 1)
                initSquare(x, y, stage, squares.WATER);
            else
                initSquare(x, y, stage, squares.DIRT);

        }
    }

}