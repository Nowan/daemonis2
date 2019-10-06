export default class PreloaderScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        
    }

    create() {
        this.game.scene.start("Game");
    }
}