import eventEmitter from "../utils/events";

export const ITEM_POINTED = "itemPointed";

let debugs = {
    itemPointed: ""
};

function updateDebugElement() {
    const test = `<h3>This is the text which has been inserted by JS</h3><div>Pointed:${debugs.itemPointed}</div>`;
    document.getElementById("Debug").innerHTML = test;

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