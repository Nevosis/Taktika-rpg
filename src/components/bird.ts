import * as PIXI from "pixi.js";
//import { gameWidth, gameHeight } from "../config";
const scale = 3;
const birdAssetWidth = 17;
const birdWidth = birdAssetWidth * scale;
const birdAssetHeight = 12;
const birdHeight = birdAssetHeight * scale;

export function setBirdAsSprite(stage: PIXI.Container): void {
    let sprite2visible = true;
    const birdFromSprite = getBird();
    const birdFromSprite2 = getBird();

    birdFromSprite.anchor.set(0, 0);
    birdFromSprite2.anchor.set(0, 0);
    //birdFromSprite.position.set(gameWidth / 2, gameHeight / 2);
    birdFromSprite.position.set(birdWidth, birdHeight);
    birdFromSprite2.position.set(0 * birdWidth, 0 * birdHeight);

    stage.addChild(birdFromSprite);
    stage.addChild(birdFromSprite2);

    // Supprime le sprite apres 2s
    setTimeout(() => {
        stage.removeChild(birdFromSprite);
    }, 2000);

    // Cache et racchiche le sprite 2 en interval
    setInterval(() => {
        sprite2visible = !sprite2visible;
        birdFromSprite2.visible = sprite2visible;
    }, 750);
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
