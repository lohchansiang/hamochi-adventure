import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";


export class StoryScene extends Scene
{   
    constructor ()
    {
        super('StoryScene');
    }

    camera: Phaser.Cameras.Scene2D.Camera
    worldContainer: GameObjects.Container

    create ( data:any )
    {
        // Add Ref 
        // let ref = this.add.sprite(GameLib.midX, GameLib.midY, 'ref1');
        // ref.alpha = 0.5

        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xffffff);

        this.worldContainer = this.add.container(GameLib.midX,1080);
    }
}