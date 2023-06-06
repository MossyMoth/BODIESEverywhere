import { Actor, Vector, Animation, SpriteSheet, Engine, AnimationStrategy } from 'excalibur';
import { Resources } from '../resources.js';

export class Booster extends Actor{

    constructor () {
        super();
        this.animationSheet = SpriteSheet.fromImageSource({
            image: Resources.BoostAnimation,
            grid: {
                rows: 3,
                columns: 3,
                spriteWidth: 8,
                spriteHeight: 8
            }
        });

        this.boostAnim = Animation.fromSpriteSheet(this.animationSheet, [0, 1, 2, 3, 4, 5, 6, 7, 8], 100, AnimationStrategy.Freeze);

        this.pos = new Vector(0, 19);
        this.graphics.use(this.boostAnim);
    }

    onPreUpdate() {
        if (this.boostAnim.done) {
            this.kill;
        }
    }
}
