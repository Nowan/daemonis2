export default class BootScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        
    }

    create() {
        this.game.scene.start("Preloader");
    }
}