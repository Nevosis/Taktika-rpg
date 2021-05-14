import * as PIXI from "pixi.js";

// 1 square = 16x16 pixel
export const pixelSquareRatio = 16;

export const height = 50;
export const width = 50;

const water = {
    textureFrom: "groundBlue.png",
    textureFromSelected: "groundBlue.png",
    interractive: false,
};

const dirt = {
    textureFrom: "groundWhite.png",
    textureFromSelected: "groundBrowny.png",
    interractive: true,
    damagable: {
        damageTreeshold: 5,
        textureFromDamagable: "groundRed.png",
        textureFromSelectedDamagable: "groundRed.png",
    }
};

export type SquareType = {
    textureFrom: string;
    textureFromSelected: string;
    interractive: boolean;
    damagable?: {
        damageTreeshold?: number,
        textureFromDamagable?: string,
        textureFromSelectedDamagable?: string,
    }
}

export const squares = Object.freeze({
    WATER: water,
    DIRT: dirt,
});