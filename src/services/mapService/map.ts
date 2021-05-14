import * as PIXI from "pixi.js";
import { height, width, pixelSquareRatio, squares, SquareType } from "./config";
import { initSquareSprite, Case } from "./square";





export function initMapService(stage: PIXI.Container) {
    let map: Case[][] = [];

    for (let x = 0; x < width; x++) {
        map.push([])
        for (let y = 0; y < height; y++) {
            if (x === 0 || x === width - 1 || y === 0 || y === height - 1)
                map[x].push(initSquareSprite(x, y, stage, squares.WATER));
            else
                map[x].push(initSquareSprite(x, y, stage, squares.DIRT));
        }
    }
    map.forEach(line => {
        line.forEach((_case) => { stage.addChild(_case.squareSprite); });
    });
}