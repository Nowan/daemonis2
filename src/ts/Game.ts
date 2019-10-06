import BootScene from "./scene/Boot";
import PreloaderScene from "./scene/Preloader";
import GameScene from "./scene/Game";

export default class Game extends Phaser.Game {
    constructor(gameCanvas : HTMLCanvasElement) {
        super({
            width: 800,
            height: 600,
            type: Phaser.WEBGL,
            canvas: gameCanvas
        });

        this.scene.add("Boot", BootScene, false);
        this.scene.add("Preloader", PreloaderScene, false);
        this.scene.add("Game", GameScene, false);

        this.scene.start("Boot");
    }
}