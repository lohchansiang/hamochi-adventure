import { CardMaker } from "@/game/scenes/CardMaker"
import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"
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
    outerCircle: GameObjects.Arc
    innerCircle: GameObjects.Arc
    //
    noCardDisplay: GameObjects.Text
    selectedVocab: VocabCard | null
    buttonSelectCard: SpriteButton
    //
    radius:number = 250

    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene
        this.oriX = x
        this.oriY = y

        this.container = scene.add.container(x,y);
        
        const thickness:number = 15;
        this.outerCircle = scene.add.circle(0,0,this.radius,GameLib.colorPanelBg);
        this.innerCircle = scene.add.circle(0,0,this.radius-thickness,0xffffff);

        this.noCardDisplay = this.scene.add.text(0,0,'?',{
            fontSize: '300px',
            fontFamily: 'Arial',
            color: '#c0c0c0',
        }).setOrigin(0.5,0.5).setVisible(false);

        this.buttonSelectCard = new SpriteButton(scene,this.radius-thickness/2,0,'buttonAdd');
        this.buttonSelectCard.onPressedCallback = ()=>{
            this.scene.events.emit('open-panel');
        }

        this.container.add(this.outerCircle);
        this.container.add(this.innerCircle);
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
    }

    renderSelectedCard( vocab:Vocab ){
        this.clearSelectedCard();

        this.noCardDisplay.setVisible(false);
        this.selectedVocab = new VocabCard(this.scene,0,0,250,VocabCard.calculateHeight(250),vocab);
        this.container.add(this.selectedVocab.container);
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