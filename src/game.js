import { Actor, Engine, Vector, Color} from "excalibur";
import { Resources, ResourceLoader} from './resources.js'; 
import { Player} from './characterScripts/player.js';
import { DevTool } from "@excaliburjs/dev-tools";
import { background } from "./background.js";


class Game extends Engine {

    constructor(){
        super({width:1200, height:800});
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame(){
        console.log("start");
        let player = new Player();
        this.add(player);
        game.currentScene.camera.strategy.lockToActor(player);
        let backgroundSprite = new background();
        this.add(backgroundSprite);
    }
}

const game = new Game();
const devtool = new DevTool(game);