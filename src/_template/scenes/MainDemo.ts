import GameLib from '@/lib/GameLib';
import { EventBus } from '../EventBus';
import { GameObjects, Scene } from 'phaser';

export class MainDemo extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    //
    text: GameObjects.Text
    //

    constructor ()
    {
        super('MainDemo');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xe6e6e6);

        this.text = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/2, 'Demo Screen', {
            fontFamily: 'Arial Black', fontSize: 60, color: '##000',
            // stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }
}
