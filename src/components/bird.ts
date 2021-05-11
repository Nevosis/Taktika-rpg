import * as PIXI from "pixi.js";
import { gameWidth, gameHeight } from "../config";

export function setBirdAsSprite(stage: PIXI.Container): void {
    const birdFromSprite = getBird();
    birdFromSprite.anchor.set(0.5, 0.5);
    birdFromSprite.position.set(gameWidth / 2, gameHeight / 2);
    stage.addChild(birdFromSprite);
}



function getBird(): PIXI.AnimatedSprite {
    const bird = new PIXI.AnimatedSprite([
        PIXI.Texture.from("birdUp.png"),
        PIXI.Texture.from("birdMiddle.png"),
        PIXI.Texture.from("birdDown.png"),
    ]);

    bird.loop = true;

    bird.animationSpeed = 0.1;
    bird.play();
    bird.scale.set(3);

    return bird;
}
