import * as PIXI from "pixi.js";
import { pixelSquareRatio, height, width } from "./services/mapService/config"

export const gameWidth = width * pixelSquareRatio;

export const gameHeight = height * pixelSquareRatio;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function loadGameAssets() {
    console.warn("loadGameAssets");
    return new Promise<void>((resolve, rej) => {
        console.warn("loadGameAssets PROMISE");
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", "./assets/simpleSpriteSheet.json");
        // loader.add("charactersx8", "./assets/chars/charx8.json");
        //loader.add("charactersx16", "./assets/chars/charx16.json");
        loader.add("charactersx16", "./assets/chars/Barbarianx16.json");

        loader.onComplete.once(() => {
            console.warn("comple");
            resolve();
        });

        loader.onError.once((errorMessage, loader, ressource) => {
            console.warn(errorMessage);
            console.warn(loader);
            console.warn(ressource);
            rej();
        });

        loader.load();
    });

}