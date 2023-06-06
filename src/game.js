import { Actor, Engine, Vector, Color, Follow, Camera, TileMap} from "excalibur/";
import { Resources, ResourceLoader} from './resources.js'; 
import { Player} from './characterScripts/player.js';
import { DevTool } from "@excaliburjs/dev-tools";
import { background } from "./background.js";
import {TiledMapResource} from "@excaliburjs/plugin-tiled";


class Game extends Engine {

    constructor(){
        super({width:1200, height:800});
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame(){
        let tiledMapData = Resources.TileMap.data.getExcaliburObjects();
        console.log(tiledMapData[0]["objects"]);
        Resources.TileMap.addTiledMapToScene(game.currentScene);
        const backgroundSprite = new background();
        this.add(backgroundSprite);
        let player = new Player();
        this.add(player);
        game.currentScene.add(player.boosterCooldown);
        let cam = game.currentScene.camera;
        cam.strategy.lockToActor(player);
        game.currentScene.camera.zoom = 1.6;
    }
}

const game = new Game();
const devtool = new DevTool(game);

