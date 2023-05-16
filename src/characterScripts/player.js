import {Actor, Vector} from 'excalibur/';
import {Resources} from '../resources.js';

export class Player extends Actor {
    

    constructor() {
        super();
        this.graphics.use(Resources.Player.toSprite());
        this.useGraphicBounds = true;
        this.pos = new Vector(600, 400);
        this.vel = new Vector(20, 20);
    }

    onInitialize(Engine) {

    }

}