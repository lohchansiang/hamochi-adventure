import { GameObjects, Scene } from 'phaser';
import { EventBus } from '../EventBus';
import RectButton from '@/lib/components/RectButton';
import GameLib from '@/lib/GameLib';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    title: GameObjects.Text;
    logoTween: Phaser.Tweens.Tween | null;
    button: RectButton;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(GameLib.screenWidth/2, GameLib.screenHeight/2, 'mainMenuBg');

        this.button = new RectButton(this, GameLib.screenWidth/2, GameLib.screenHeight/2, "Start");
        this.button.onPressed(()=>{
            this.changeScene()
        })

        this.title = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/4, 'Hamochi Adventure', {
            fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }
    
    changeScene ()
    {
        this.scene.start('Game');
    }
}
