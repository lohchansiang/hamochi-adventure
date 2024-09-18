import { CardMaker } from "@/game/scenes/CardMaker"
import GameLib from "@/lib/GameLib"
import { GameObjects, Scene, Tweens } from "phaser"
import VocabCard from "./PanelSelectCard/VocabCard"
import SpriteButton from "@/lib/components/SpriteButton"
import { Vocab } from "@/lib/repos/DeckRepo"
import ForgeFeedbackFailed from "./ForgeFeedbackFailed"
import forgeFeedbackSuccess from "./ForgeFeedbackSuccess"

export default class ForgeMainCircle{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    oriX: number
    oriY: number
    //
    container: GameObjects.Container
    panelBase: GameObjects.NineSlice
    //
    outerCircle: GameObjects.Arc
    innerCircle: GameObjects.Arc
    anvilCardSlot: GameObjects.Sprite
    //
    noCardDisplay: GameObjects.Text
    selectedVocab: VocabCard | null
    buttonSelectCard: GameObjects.Container
    tweenPulse: Tweens.Tween
    //
    radius:number = 250

    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene
        this.oriX = x
        this.oriY = y

        const colorLight:number = 0xFEF9F3;
        const colorDark:number = 0xF8EBDC;
        const colorDarker:number = 0xE3CAB0;

        this.container = scene.add.container(x,y);
        
        this.panelBase = scene.add.nineslice(0,0,'panelWhite',0,1000,600,50,50,50,50)
        this.panelBase.setTint(colorDark);
        this.container.add(this.panelBase);

        const thickness:number = 15;
        this.outerCircle = scene.add.circle(0,0,this.radius,colorDark).setStrokeStyle(10,colorLight);
        this.innerCircle = scene.add.circle(0,0,this.radius-thickness,colorLight);
        this.container.add(this.outerCircle);
        this.container.add(this.innerCircle);

        this.anvilCardSlot = scene.add.sprite(0,0,'vocabCardWhite');
        this.anvilCardSlot.setTint(colorDarker);
        this.anvilCardSlot.setDisplaySize(250,VocabCard.calculateHeight(250));
        this.container.add(this.anvilCardSlot);

        this.noCardDisplay = this.scene.add.text(0,0,'?',{
            fontSize: '200px',
            fontFamily: 'Arial',
            color: '#FFFFFF',
        }).setOrigin(0.5,0.5).setVisible(false);

        this.buttonSelectCard = scene.add.container(GameLib.quaterX,0);
        let baseSprite:GameObjects.Sprite = scene.add.sprite(0,0,'buttonCircleAction');
        baseSprite.setDisplaySize(150,150);
        let iconSprite:GameObjects.Sprite = scene.add.sprite(10,0,'buttonCardSelect');
        iconSprite.setDisplaySize(100,100);
        this.buttonSelectCard.add(baseSprite);
        this.buttonSelectCard.add(iconSprite);

        baseSprite.setInteractive();
        baseSprite.on('pointerdown',()=>{
            this.scene.events.emit('open-panel');
        });

        baseSprite.on('pointerover',()=>{
            this.buttonSelectCard.setScale(1.05);
        },this);

        baseSprite.on('pointerout',()=>{
            this.buttonSelectCard.setScale(1);
        },this);

        this.tweenPulse = scene.tweens.add({
            targets: this.buttonSelectCard,
            scale: 1.05,
            duration: 500,
            repeat: -1,
            yoyo: true
        }).pause();

       
        this.container.add(this.noCardDisplay);
        this.container.add(this.buttonSelectCard);

        this.container.name = 'MainCircle'
    }

    clearSelectedCard(){
        // clear
        if( this.selectedVocab ){
            this.selectedVocab.clean();
            this.selectedVocab = null
        }

        this.noCardDisplay.setVisible(true);


        if( this.tweenPulse ){
            this.tweenPulse.play();
        }
    }

    renderSelectedCard( vocab:Vocab ){
        this.clearSelectedCard();

        this.noCardDisplay.setVisible(false);
        this.selectedVocab = new VocabCard(this.scene,0,0,250,VocabCard.calculateHeight(250),vocab);
        this.container.add(this.selectedVocab.container);

        if( this.tweenPulse ){
            this.tweenPulse.pause();
            this.tweenPulse.reset();
        }
    }

    exitForge(){
        this.buttonSelectCard.setVisible(true);
        this.container.removeInteractive();

        this.removeDragDropListener();
    }

    enterForge(){
        this.buttonSelectCard.setVisible(false);
        this.container.setInteractive(new Phaser.Geom.Circle(0,0,this.radius+50),Phaser.Geom.Circle.Contains,true);
        this.addDragDropListener();

        // this.scene.input.enableDebug(this.container,0x00ff00);
    }

    updateForgeNextRound(){
        // When Change round
        if( this.selectedVocab ){
            if( this.scene.manager.getNextKey() == 'audio' ){
                this.selectedVocab.enableAudio();
            }else{
                this.selectedVocab.disableAudio();
            }
        }
    }

    addDragDropListener(){
        this.scene.input.on('dragstart', function (pointer: Phaser.Input.Pointer, gameObject: any)
        {
            gameObject.setDepth(999);
        }, this);

        this.scene.input.on('drag', (pointer: Phaser.Input.Pointer, gameObject: any, dragX:number, dragY: number) =>
        {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });


        this.scene.input.on('drop', (pointer: Phaser.Input.Pointer, gameObject: any, target: any) =>
        {
            if( target.name == 'MainCircle' ){
                let isCorrect:boolean = this.scene.manager.checkAnswer(gameObject);
                if( isCorrect ) this.showSuccessFeedback();
                else this.showFailedFeedback();
                gameObject.destroy();
            }
        });

        this.scene.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: any, dropped:boolean) =>
        {

            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });
    }
    
    showSuccessFeedback(){
        let success: forgeFeedbackSuccess = new forgeFeedbackSuccess(this.scene,this.oriX,this.oriY);
    }

    showFailedFeedback(){
        let failed: ForgeFeedbackFailed = new ForgeFeedbackFailed(this.scene,this.oriX,this.oriY);
    }

    removeDragDropListener(){
        this.scene.input.removeListener('dragstart');
        this.scene.input.removeListener('drag');
        this.scene.input.removeListener('dragend');
        this.scene.input.removeListener('drop');
    }
}