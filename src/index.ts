import * as PIXI from "pixi.js";
import "./style.css";
import { gameWidth, gameHeight, loadGameAssets } from "./config";
import { initMapService } from "./services/mapService/map";
import { setBirdAsSprite } from "./components/bird";
import { initKeyboardInterraction } from "./services/interractionService/keyboard";
import { debug } from "./utils/debug";
import { initGame } from "./game"
import { initGameEvents } from "./services/gameService/game.events";


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
    try {
        await loadGameAssets();
        setInterval(() => {
            app.renderer.backgroundColor = Math.random() * 0xFFFFFF;
        }, 12000);

        initKeyboardInterraction();

        document.body.appendChild(app.view);

        debug();
        resizeCanvas();

        initMapService(stage);
        setBirdAsSprite(stage);
        initGame(stage);
        initGameEvents();
    } catch (e) {
        console.warn(e);
    }
};

function resizeCanvas(): void {
    const resize = () => {
        // Resize le render a tout l'écran tout le temps
        //app.renderer.resize(window.innerWidth, window.innerHeight);
        // Fait le scale
        //app.stage.scale.x = window.innerWidth / gameWidth;
        //app.stage.scale.y = window.innerHeight / gameHeight;
    };

    resize();

    window.addEventListener("resize", resize);
}
