import { GameObjects, Scene } from "phaser";

export default class PlayerController extends GameObjects.Container{
    static preload( scene: Scene ){
    }

    
    constructor(scene:Scene, x: number, y: number ){
        super(scene, x, y);


    }
}