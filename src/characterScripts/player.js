import { Actor, Vector, Input, Engine, Timer } from 'excalibur/';
import { Resources } from '../resources.js';
import { Booster } from './booster.js';

export class Player extends Actor {

    facingDirection
    boosterCooldown
    boosterOnCooldown

    constructor() {
        super();
        this.graphics.use(Resources.Player.toSprite());
        this.useGraphicBounds = true;
        this.pos = new Vector(600, 400);
        this.boosterCooldown = new Timer({
            fcn: () => console.log("false cooldown"),
            repeats: false,
            interval: 1200,
            fcn: () => this.boosterOnCooldown = false
          })
    }

    onInitialize(Engine) {
        this.facingDirection = 0;
    }

    onPreUpdate(engine) {
        this.playerMovement(engine);
    }

     playerMovement(engine) {
        let noInput = true;
        if (!this.boosterOnCooldown) {

            if (engine.input.keyboard.wasPressed(Input.Keys.W) && noInput) {
                this.facingDirection = 0;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            } 
            if (engine.input.keyboard.wasPressed(Input.Keys.X) && noInput) {
                this.facingDirection = 3.14159265359;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            }
            if (engine.input.keyboard.wasPressed(Input.Keys.A) && noInput) {
                this.facingDirection = 4.71238898038;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            }
            if (engine.input.keyboard.wasPressed(Input.Keys.D) && noInput) {
                this.facingDirection = 1.57079632679;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            }
            if (engine.input.keyboard.wasPressed(Input.Keys.Q) && noInput) {
                this.facingDirection = 5.49778714378;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            }
            if (engine.input.keyboard.wasPressed(Input.Keys.E) && noInput) {
                this.facingDirection = 0.78539816339;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            }
            if (engine.input.keyboard.wasPressed(Input.Keys.Z) && noInput) {
                this.facingDirection = 3.92699081699;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            }
            if (engine.input.keyboard.wasPressed(Input.Keys.C) && noInput) {
                this.facingDirection = 2.35619449019;
                noInput = false;
                this.addChild(new Booster);
                this.boosterOnCooldown = true;
                this.boosterCooldown.start();
            }

        }
        
        this.rotation = this.facingDirection; //number(x) -> x * 180/PI -> angle in degrees

        if (noInput === false) {
            this.vel = new Vector(Math.sin(this.facingDirection) * 100 + this.vel.x, -Math.cos(this.facingDirection) * 100 + this.vel.y);

            if (this.vel.x >= 300) {
                this.vel.x = 300;
            }
            
            if (this.vel.y >= 300) {
                this.vel.y = 300;
            }
            
            if (this.vel.x <= -300) {
                this.vel.x = -300;
            }
            
            if (this.vel.y <= -300) {
                this.vel.y = -300;
            }
        }
        noInput = true;
    }
    
}



