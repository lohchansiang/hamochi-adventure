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
    demoGetCardButton: DebugButton
    demoSaveButton: DebugButton
    //
    demoAdventureButton: DebugButton
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

        this.title = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/4, 'Demo Testground', {
            fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        // this.cardMakerButton = new DebugButton(this,GameLib.screenWidth/2, GameLib.screenHeight/2 + 250, 'Card Maker');
        // this.cardMakerButton.onPressed(()=>{
        //     this.scene.start('CardMaker');
        // })

        // Left Buttons
        this.testGroundButton = new DebugButton(this,GameLib.screenWidth/4, GameLib.screenHeight/2 + 480, 'Demo Avatar');
        this.testGroundButton.setScale(0.6);
        this.testGroundButton.onPressed(()=>{
            this.scene.start('TestGround');
        })

        this.demoGetCardButton = new DebugButton(this,GameLib.screenWidth/4, GameLib.screenHeight/2 + 600, 'Blueprints');
        this.demoGetCardButton.setScale(0.6);
        this.demoGetCardButton.onPressed(()=>{
            this.scene.start('DemoGetCard');
        })

        this.demoSaveButton = new DebugButton(this,GameLib.screenWidth/4, GameLib.screenHeight/2 + 720, 'Demo Save');
        this.demoSaveButton.setScale(0.6);
        this.demoSaveButton.onPressed(()=>{
            this.scene.start('DemoSave');
        })

        // Right Buttons
        this.cardMakerButton = new DebugButton(this,GameLib.screenWidth/4*3, GameLib.screenHeight/2 + 480, 'Card Maker');
        this.cardMakerButton.setScale(0.6);
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
