/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />

import { MainState } from "./mainState";

let game = new Phaser.Game(640, 480, Phaser.AUTO, "");

game.state.add("mainState", MainState);

window.onload = () => {
    game.state.start("mainState");
}