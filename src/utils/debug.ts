import eventEmitter from "../utils/events";
import { ADD_CHARACTER, PRINT_GAME_VALUES, RESET_GAME_VALUES } from "../services/gameService/game.events";
import { ITEM_POINTED } from "../services/mapService/square";


let debugs = {
    itemPointed: ""
};

function updateDebugElement() {
    const test = `<h3>This is the text which has been inserted by JS</h3><div>Pointed:${debugs.itemPointed}</div>${createDebugButtons()}`;
    document.getElementById("Debug").innerHTML = test;
    document.getElementById("charButton").onclick = function () {
        eventEmitter.emit(ADD_CHARACTER);
    };
    document.getElementById("printGameValues").onclick = function () {
        eventEmitter.emit(PRINT_GAME_VALUES);
    };
    document.getElementById("resetValues").onclick = function () {
        eventEmitter.emit(RESET_GAME_VALUES);
    };
}


function createDebugButtons() {
    return `
    <button id="charButton">Create char</button>
    <button id="printGameValues">printGameValues</button>
    <button id="resetValues">resetValues</button>
`;
}

export function debug() {
    var node = document.createElement("div");
    node.setAttribute("id", "Debug");

    document.body.appendChild(node);
    eventEmitter.addListener(ITEM_POINTED, (item, type) => {
        if (type === "case") {
            debugs.itemPointed = item.damage;
        }
        updateDebugElement();
    });
    updateDebugElement();
}