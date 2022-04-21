import { getGame } from "../../game"
import eventEmitter from "../../utils/events";


export const ADD_CHARACTER = "ADD_CHARACTER";
export const PRINT_GAME_VALUES = "PRINT_GAME_VALUES";
export const RESET_GAME_VALUES = "RESET_GAME_VALUES";

export function initGameEvents() {
    const game = getGame();
    eventEmitter.addListener(ADD_CHARACTER, () => {
        game.addChar("toto");
    });
    eventEmitter.addListener(PRINT_GAME_VALUES, () => {
        game.printGameValues();
    });
    eventEmitter.addListener(RESET_GAME_VALUES, () => {
        game.resetValues();
    });


}