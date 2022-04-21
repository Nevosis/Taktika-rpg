
import eventEmitter from "../../utils/events";
import * as PIXI from "pixi.js";
import { height, width, pixelSquareRatio, squares, SquareType } from "./config";
import { ITEM_POINTED } from "../../utils/debug";




export type Case = {
    squareType: SquareType,
    squareSprite: PIXI.Sprite,
    position: {
        x: number,
        y: number,
    }
    damage: number
}

function getCaseTextureOver(_case: Case) {
    if (_case.squareType.damagable && _case.damage >= _case.squareType.damagable.damageTreeshold) {
        return _case.squareType.damagable.textureFromSelectedDamagable;
    }
    return _case.squareType.textureFromSelected;
}

function getCaseTextureOut(_case: Case) {
    if (_case.squareType.damagable && _case.damage >= _case.squareType.damagable.damageTreeshold) {
        return _case.squareType.damagable.textureFromDamagable;
    }
    return _case.squareType.textureFrom;
}

function damageUnit(_case: Case) {
    _case.damage += 1;

}

function onOver(_case: Case) {
    _case.squareSprite.on("pointerdown", () => {
        damageUnit(_case);
        console.warn("damage")
        _case.squareSprite.texture = PIXI.Texture.from(getCaseTextureOver(_case));
        eventEmitter.emit(ITEM_POINTED, _case, "case");
    });

    // Pointer over
    _case.squareSprite.on("pointerover", () => {
        eventEmitter.emit(ITEM_POINTED, _case, "case");
        _case.squareSprite.texture = PIXI.Texture.from(getCaseTextureOver(_case));
    });

    // Pointer OUT
    _case.squareSprite.on("pointerout", () => {
        _case.squareSprite.texture = PIXI.Texture.from(getCaseTextureOut(_case));
    });
}

export function initSquareSprite(posX: number, posY: number, stage: PIXI.Container, square: SquareType): Case {
    const squareSprite = new PIXI.Sprite(PIXI.Texture.from(square.textureFrom));

    squareSprite.interactive = square.interractive;
    squareSprite.anchor.set(0, 0);
    squareSprite.scale.set(4, 4);
    squareSprite.position.set(posX * pixelSquareRatio, posY * pixelSquareRatio);

    let _case = {
        squareType: square,
        squareSprite: squareSprite,
        position: {
            x: posX,
            y: posY,
        },
        damage: 0
    };

    if (square.interractive) {
        onOver(_case);
    }

    return _case;
}
