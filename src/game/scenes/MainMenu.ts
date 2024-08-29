import { GameObjects, Scene } from 'phaser';
import { EventBus } from '../EventBus';
import RectButton from '@/lib/components/RectButton';
import GameLib from '@/lib/GameLib';
import DebugButton from '@/lib/components/DebugButton';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    title: GameObjects.Text;
    logoTween: Phaser.Tweens.Tween | null;
    button: RectButton;
    //
    testGroundButton: DebugButton
    cardMakerButton: DebugButton

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

        this.testGroundButton = new DebugButton(this,GameLib.screenWidth/2, GameLib.screenHeight/2 + 300, 'Test Ground');
        this.testGroundButton.onPressed(()=>{
            this.scene.start('TestGround');
        })

        this.cardMakerButton = new DebugButton(this,GameLib.screenWidth/2, GameLib.screenHeight/2 + 500, 'Card Maker');
        this.cardMakerButton.onPressed(()=>{
            this.scene.start('CardMaker');
        })

        EventBus.emit('current-scene-ready', this);
    }
    
    changeScene ()
    {
        this.scene.start('Game');
    }
}
