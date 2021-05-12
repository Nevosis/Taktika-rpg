import * as PIXI from "pixi.js";
import eventEmitter from "../utils/events";
import { LEFT_PRESSED } from "../services/interractionService/keyboard";

const scale = 3;
const birdAssetWidth = 17;
const birdWidth = birdAssetWidth * scale;
const birdAssetHeight = 12;
const birdHeight = birdAssetHeight * scale;

export function setBirdAsSprite(stage: PIXI.Container): void {
    let sprite2visible = true;
    const mainBird = getBird();
    const birdToHide = getBird();

    mainBird.anchor.set(0, 0);
    birdToHide.anchor.set(0, 0);
    //mainBird.position.set(gameWidth / 2, gameHeight / 2);
    mainBird.position.set(birdWidth, birdHeight);
    birdToHide.position.set(0 * birdWidth, 0 * birdHeight);
    birdToHide.interactive = true;

    birdToHide.on("click", () => {
        birdToHide.animationSpeed = (birdToHide.animationSpeed + 0.1) % 1;
        console.warn(birdToHide.animationSpeed);
    });

    birdToHide.on("mousedown", () => {
        console.warn("2");
    });

    stage.addChild(mainBird);
    stage.addChild(birdToHide);

    // Supprime le sprite apres 2s
    setTimeout(() => {
        stage.removeChild(mainBird);
    }, 2000);

    // left press show/hide sprite \o/
    eventEmitter.addListener(LEFT_PRESSED, () => {
        sprite2visible = !sprite2visible;
        birdToHide.visible = sprite2visible;
    });
}



function getBird(): PIXI.AnimatedSprite {
    const bird = new PIXI.AnimatedSprite([
        PIXI.Texture.from("birdUp.png"),
        PIXI.Texture.from("birdMiddle.png"),
        PIXI.Texture.from("birdDown.png"),
    ]);

    bird.loop = true;

    bird.animationSpeed = 0.4;
    bird.play();
    bird.scale.set(scale);

    return bird;
}
