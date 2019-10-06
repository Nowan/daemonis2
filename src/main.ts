import "phaser";

import "./style/game.scss";
import Game from "./ts/Game";

window.onload = () => {
    const game = new Game(document.getElementById("gameCanvas") as HTMLCanvasElement);
};