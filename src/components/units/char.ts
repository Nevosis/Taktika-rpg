import * as PIXI from "pixi.js";
import eventEmitter from "../../utils/events";

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

    // CLICK
    birdToHide.on("click", () => {
        birdToHide.animationSpeed = Number(((birdToHide.animationSpeed + 0.1) % 1).toFixed(1));
    });

    // Pointer over
    birdToHide.on("pointerover", () => {
        birdToHide.textures[0] = PIXI.Texture.from("birdUpSel.png");
        birdToHide.textures[1] = PIXI.Texture.from("birdMiddleSel.png");
        birdToHide.textures[2] = PIXI.Texture.from("birdDownSel.png");
        birdToHide.texture = PIXI.Texture.from("birdUpSel.png");
        if (birdToHide.currentFrame === 0)
            birdToHide.texture = PIXI.Texture.from("birdUpSel.png");
        if (birdToHide.currentFrame === 1)
            birdToHide.texture = PIXI.Texture.from("birdMiddleSel.png");
        if (birdToHide.currentFrame === 2)
            birdToHide.texture = PIXI.Texture.from("birdDownSel.png");
    });
    // Pointer OUT
    birdToHide.on("pointerout", () => {
        birdToHide.textures[0] = PIXI.Texture.from("birdUp.png");
        birdToHide.textures[1] = PIXI.Texture.from("birdMiddle.png");
        birdToHide.textures[2] = PIXI.Texture.from("birdDown.png");
        if (birdToHide.currentFrame === 0)
            birdToHide.texture = PIXI.Texture.from("birdUp.png");
        if (birdToHide.currentFrame === 1)
            birdToHide.texture = PIXI.Texture.from("birdMiddle.png");
        if (birdToHide.currentFrame === 2)
            birdToHide.texture = PIXI.Texture.from("birdDown.png");
    });


    stage.addChild(mainBird);
    stage.addChild(birdToHide);

    // Supprime le sprite apres 2s
    setTimeout(() => {
        stage.removeChild(mainBird);
    }, 2000);

}



function getBird(): PIXI.AnimatedSprite {
    const bird = new PIXI.AnimatedSprite([
        PIXI.Texture.from("birdUp.png"),
        PIXI.Texture.from("birdMiddle.png"),
        PIXI.Texture.from("birdDown.png"),
    ]);

    bird.loop = true;

    bird.animationSpeed = 0;
    bird.play();
    bird.scale.set(scale);

    return bird;
}
