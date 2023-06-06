import { ImageSource, Sound, Resource, Loader } from "excalibur/";
import { TiledMapResource} from "@excaliburjs/plugin-tiled";
import playerSprite from './assets/player_default.png';
import backgroundSprite from './assets/BODIES_background.png';
import boosterAnimationSprite from './assets/booster_animation.png';
import BEMap from './assets/BE_map.tmx';

const Resources = {
    Player: new ImageSource(playerSprite),
    Background: new ImageSource(backgroundSprite),
    BoostAnimation: new ImageSource(boosterAnimationSprite),
    TileMap: new TiledMapResource(BEMap)
};

const ResourceLoader = new Loader([
    Resources.Player, Resources.Background, Resources.BoostAnimation, Resources.TileMap
]);

export { Resources, ResourceLoader};