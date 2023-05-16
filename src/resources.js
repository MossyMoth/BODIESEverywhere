import { ImageSource, Sound, Resource, Loader } from "excalibur/";
import playerSprite from './assets/player_default.png';
import backgroundSprite from './assets/BODIES_background.png';

const Resources = {
    Player: new ImageSource(playerSprite),
    Background: new ImageSource(backgroundSprite)
};

const ResourceLoader = new Loader([
    Resources.Player, Resources.Background
]);

export { Resources, ResourceLoader};