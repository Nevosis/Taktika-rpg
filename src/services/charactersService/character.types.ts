
export const barbarian: CharacterAssetType = {
    textureFrom: "barbarian_clean.png",
    textureSquareBlack: "barbarian_square_black.png",
    textureSquareRed: "barbarian_square_red.png",
    textureSquareBlue: "barbarian_square_blue.png",
    textureSquareCyan: "barbarian_square_cyan.png",
    textureSquareGreen: "barbarian_square_green.png",
    textureSquareWhite: "barbarian_square_white.png",
    textureSquarePurple: "barbarian_square_purple.png",
};

export const magician = {
    textureFrom: "magician.png",
    textureFromSelected: "magician.png",
};


export type CharacterAssetType = {
    textureFrom: string;
    textureSquareBlack: string;
    textureSquareRed: string;
    textureSquareBlue: string;
    textureSquareCyan: string;
    textureSquareGreen: string;
    textureSquareWhite: string;
    textureSquarePurple: string;
    interractive?: boolean;
}

export enum CharacterClasses {
    BARBARIAN = "BARBARIAN",
    MAGICIAN = "MAGICIAN",
}