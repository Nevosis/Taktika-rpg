
import eventEmitter from "../../utils/events";
import { keyboard } from "../../utils/keyboard";

export const LEFT_PRESSED = "leftPressed";
export const LEFT_RELEASED = "leftReleased";
export const RIGHT_PRESSED = "rightPressed";
export const RIGHT_RELEASED = "rightReleased";
export const UP_PRESSED = "upPressed";
export const UP_RELEASED = "upReleased";
export const DOWN_PRESSED = "downPressed";
export const DOWN_RELEASED = "downReleased";


export function initKeyboardInterraction() {
    const left = keyboard("ArrowLeft"),
        up = keyboard("ArrowUp"),
        right = keyboard("ArrowRight"),
        down = keyboard("ArrowDown");

    eventEmitter.addListener("toto", () => {
        console.warn("jkfldjflds");
    });

    left.press = () => {
        eventEmitter.emit(LEFT_PRESSED);
    };
    left.release = () => {
        eventEmitter.emit(LEFT_RELEASED);
    };
    right.press = () => {
        eventEmitter.emit(RIGHT_PRESSED);
    };
    right.release = () => {
        eventEmitter.emit(RIGHT_RELEASED);
    };
    up.press = () => {
        eventEmitter.emit(UP_PRESSED);
    };
    up.release = () => {
        eventEmitter.emit(UP_RELEASED);
    };
    down.press = () => {
        eventEmitter.emit(DOWN_PRESSED);
    };
    down.release = () => {
        eventEmitter.emit(DOWN_RELEASED);
    };
}