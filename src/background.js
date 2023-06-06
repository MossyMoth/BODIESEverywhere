import {Actor, Vector, ActionsComponent} from 'excalibur/';
import {Resources} from './resources.js';
import {Player} from './characterScripts/player.js';

export class background extends Actor {
    

    constructor() {
        super();
        this.graphics.use(Resources.Background.toSprite());
        this.scale = new Vector(10, 10);
        this.pos = new Vector(600, 400);
    }

    onInitialize(Engine) {

    }

}