import { CHARACTER_SELECTED } from "../charactersService/character.events";
import { Action } from "../actionsService/action.types";

import eventEmitter from "../../utils/events";

function initActionButtonsHtml(actions: Action[]) {
    let buttonsHtml = "";
    actions.forEach(action => {
        buttonsHtml += `<button id="${action.name}_button_id" class="actionButton">${action.name}</button>`;
    });
    return buttonsHtml;
}

function initActionButtonsActions(actions: Action[]) {
    actions.forEach(action => {
        document.getElementById(`${action.name}_button_id`).onmouseover = function () {
            document.getElementById("ActionDescription").innerHTML = `${action.name} : ${action.description}`;
        };
        document.getElementById(`${action.name}_button_id`).onclick = function () {

        };
    });
}

function updateActionsElement(actions: Action[]) {
    const actionHtml = `
    <div>
        ${initActionButtonsHtml(actions)}
    </div>`;
    document.getElementById("Actions").innerHTML = actionHtml;
    initActionButtonsActions(actions)
    /*  document.getElementById("moveCharButton").onmouseover = function () {
         console.log("mouse over");
     };
     document.getElementById("moveCharButton").onmouseleave = function () {
         console.log("mouse leave");
     }; */
}

export function initActionsContainer() {
    const actionNode = document.createElement("div");
    actionNode.setAttribute("id", "Actions");
    const actionDescriptionNode = document.createElement("div");
    actionDescriptionNode.setAttribute("id", "ActionDescription");

    document.body.appendChild(actionNode);
    document.body.appendChild(actionDescriptionNode);
    eventEmitter.addListener(CHARACTER_SELECTED, (item, type) => {
        console.log(item.actionsAvailable);
        updateActionsElement(item.actionsAvailable);
    });
}