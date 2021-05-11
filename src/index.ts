import * as PIXI from "pixi.js";
import "./style.css";
import { gameWidth, gameHeight, loadGameAssets } from "./config";
import { setBirdAsSprite } from "./components/bird";

declare const VERSION: string;

console.log(`Welcome from pixi-typescript-boilerplate ${VERSION}`);

const app = new PIXI.Application({
    backgroundColor: 0xd3d3d3,
    width: gameWidth,
    height: gameHeight,
    antialias: true,    // default: false
    transparent: true, // default: false
    resolution: 1       // default: 1
});

const stage = app.stage;

window.onload = async (): Promise<void> => {
    await loadGameAssets();
    setInterval(() => {
        app.renderer.backgroundColor = Math.random() * 0xFFFFFF;
    }, 12000);

    document.body.appendChild(app.view);
    resizeCanvas();

    setBirdAsSprite(stage);
};

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
