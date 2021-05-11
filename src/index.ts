/* eslint-disable */
import * as PIXI from "pixi.js";
import "./style.css";
import {gameWidth,gameHeight} from './config';
import {setBirdAsSprite} from "./components/bird";

declare const VERSION: string;

console.log(`Welcome from pixi-typescript-boilerplate ${VERSION}`);

const app = new PIXI.Application({
    backgroundColor: 0xd3d3d3,
    width: gameWidth,
    height: gameHeight,
});

const stage = app.stage;

window.onload = async (): Promise<void> => {
    await loadGameAssets();

    document.body.appendChild(app.view);
    resizeCanvas();

    setBirdAsSprite(stage);
    /* const birdFromSprite = getBird();
    birdFromSprite.anchor.set(0.5, 0.5);
    birdFromSprite.position.set(gameWidth / 2, gameHeight / 2);

    stage.addChild(birdFromSprite); */
};

async function loadGameAssets(): Promise<void> {
    return new Promise((res, rej) => {
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", "./assets/simpleSpriteSheet.json");

        loader.onComplete.once(() => {
            res();
        });

        loader.onError.once(() => {
            rej();
        });

        loader.load();
    });
}

function resizeCanvas(): void {
    const resize = () => {
        console.warn("mao");
        // Resize le render a tout l'écran tout le temps
        //app.renderer.resize(window.innerWidth, window.innerHeight);
        // Fait le scale
        //app.stage.scale.x = window.innerWidth / gameWidth;
        //app.stage.scale.y = window.innerHeight / gameHeight;
    };

    resize();

    window.addEventListener("resize", resize);
}
