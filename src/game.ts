import { Game } from "./services/gameService/game";

let game;

export function initGame(stage) {
    game = new Game(stage);
}


export function getGame() {
    return game;
}
