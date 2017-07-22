/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>

class MainState extends Phaser.State {
    constructor() {
        super();
    }

    init() {
        console.log("init()");
    }

    preload() {
        console.log("preload()");
    }

    create() {
        console.log("create()");
    }

    update() {
        console.log("update()");
    }
}

export { MainState };
