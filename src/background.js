import {Actor, Vector} from 'excalibur/';
import {Resources} from './resources.js';
import {Player} from './characterScripts/player.js';

export class background extends Actor {
    

    constructor() {
        super();
        this.graphics.use(Resources.Background.toSprite());
        this.pos = new Vector(600, 400);
        this.actions.follow(Player, 0);
    }

    onInitialize(Engine) {

    }

}