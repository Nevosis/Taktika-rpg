import * as PIXI from "pixi.js";
import { pixelSquareRatio, height, width } from "./services/mapService/config"

export const gameWidth = width * pixelSquareRatio;

export const gameHeight = height * pixelSquareRatio;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function loadGameAssets() {
    return new Promise<void>((resolve, rej) => {
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", "./assets/simpleSpriteSheet.json");

        loader.onComplete.once(() => {
            console.warn("comple");
            resolve();
        });

        loader.onError.once((e) => {
            rej();
        });

        loader.load();
    });

}