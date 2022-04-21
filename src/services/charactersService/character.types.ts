
export const barbarian: CharacterAssetType = {
    textureFrom: "barbarian_clean.png",
    textureSquareBlack: "barbarian_square_black.png",
    textureSquareRed: "barbarian_square_red.png",
    textureSquareBlue: "barbarian_square_blue.png",
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
    interractive?: boolean;
}

export enum CharacterClasses {
    BARBARIAN = "BARBARIAN",
    MAGICIAN = "MAGICIAN",
}