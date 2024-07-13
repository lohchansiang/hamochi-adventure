import GameLib from '@/lib/GameLib';
import { EventBus } from '../EventBus';
import { Scene } from 'phaser';
import RectButton from '@/lib/components/RectButton';

export class GameOver extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    //
    gameOverText : Phaser.GameObjects.Text;
    button: RectButton

    constructor ()
    {
        super('GameOver');
    }

    create ( data: any )
    {   
        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xe6e6e6);

        this.gameOverText = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/2 - 200, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);
        
        let statusText: string = "???";
        if( data.status == 'win' ) statusText = 'Level Completed!!!';
        if( data.status == 'lose' ) statusText = 'Try Again!!!';

        this.gameOverText = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/2, statusText, {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        this.button = new RectButton(this, GameLib.screenWidth/2, GameLib.screenHeight/2+200, "Restart");
        this.button.onPressed(()=>{
            this.changeScene()
        })
        
        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('MainMenu');
    }
}
