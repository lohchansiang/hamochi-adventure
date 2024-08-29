import { CardMaker } from "@/game/scenes/CardMaker"
import GameLib from "@/lib/GameLib"
import { GameObjects, Scene, Tweens } from "phaser"
import CardMakerManager from "./CardMakerManager"
import { Vocab } from "@/lib/repos/DeckRepo"
import ForgeMaterialImage from "./ForgeMaterialImage"
import ForgeMaterialText from "./ForgeMaterialText"
import ForgeMaterialAudio from "./ForgeMaterialAudio"

export default class ForgeBottomContainer{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    manager: CardMakerManager
    oriX: number
    oriY: number
    //
    container: GameObjects.Container
    innerRect: GameObjects.Rectangle
    outerRect: GameObjects.Rectangle
    //
    gapX: number  
    gapY: number
    choices: GameObjects.Container[] = []

    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene;
        this.manager = scene.manager;
        this.oriX = x;
        this.oriY = y;
        const padding:number = 15;
        this.gapX = GameLib.screenWidth/4-padding*2;
        this.gapY = GameLib.screenHeight/8-padding*2;

        this.container = scene.add.container(x,y);
    
        
        this.outerRect = scene.add.rectangle(0,0,GameLib.screenWidth,GameLib.midY,GameLib.colorPanelBg);
        
        this.innerRect = scene.add.rectangle(0,0,GameLib.screenWidth-padding*2,GameLib.midY-padding*2,GameLib.colorPanelBgDark);
        
        // Drop Zone
        // this.innerRect.setInteractive(undefined,undefined,true);
        
        this.container.add(this.outerRect);
        this.container.add(this.innerRect);

        // Move container to out of screen
        this.container.y += 1000;
    }

    enter(){
        this.clearChoices();
        
        // Prepare Tween
        this.scene.tweens.add({
            targets: this.container,
            y: this.oriY,
            ease: 'Power2',
            duration: 500,
            onComplete:()=>{
               this.generateNext(); 
            }
        });
    }

    exit(){
        this.clearChoices();

        // Prepare Tween
        this.scene.tweens.add({
            targets: this.container,
            y: this.oriY+1000,
            ease: 'Power2',
            duration: 500
        });
    }

    clearChoices(){
        this.choices.forEach((choice)=>{
            choice.destroy();
        });
        this.choices = [];
    }

    generateNext(){
        this.clearChoices();

        if( this.manager.currentText >= this.manager.targetText ){
            this.generateAudioChoices();
        }else if( this.manager.currentImage >= this.manager.targetImage ){
            this.generateTextChoices();
        }else{
            this.generateImageChoices();
        }
    }

    generateImageChoices(){
        let vocabs:Vocab[] = this.manager.generateChoices();

        if( vocabs.length == 4 ){
            let imageChoice1:ForgeMaterialImage = new ForgeMaterialImage(this.scene,this.oriX-this.gapX,this.oriY-this.gapY,vocabs[0]);
            let imageChoice2:ForgeMaterialImage = new ForgeMaterialImage(this.scene,this.oriX+this.gapX,this.oriY-this.gapY,vocabs[1]);
            let imageChoice3:ForgeMaterialImage = new ForgeMaterialImage(this.scene,this.oriX-this.gapX,this.oriY+this.gapY,vocabs[2]);
            let imageChoice4:ForgeMaterialImage = new ForgeMaterialImage(this.scene,this.oriX+this.gapX,this.oriY+this.gapY,vocabs[3]);

            this.choices.push( imageChoice1.container );
            this.choices.push( imageChoice2.container );
            this.choices.push( imageChoice3.container );
            this.choices.push( imageChoice4.container );
        }
    }

    generateTextChoices(){
        let vocabs:Vocab[] = this.manager.generateChoices();

        if( vocabs.length == 4 ){
            let choice1:ForgeMaterialText = new ForgeMaterialText(this.scene,this.oriX-this.gapX,this.oriY-this.gapY,vocabs[0]);
            let choice2:ForgeMaterialText = new ForgeMaterialText(this.scene,this.oriX+this.gapX,this.oriY-this.gapY,vocabs[1]);
            let choice3:ForgeMaterialText = new ForgeMaterialText(this.scene,this.oriX-this.gapX,this.oriY+this.gapY,vocabs[2]);
            let choice4:ForgeMaterialText = new ForgeMaterialText(this.scene,this.oriX+this.gapX,this.oriY+this.gapY,vocabs[3]);

            this.choices.push( choice1.container );
            this.choices.push( choice2.container );
            this.choices.push( choice3.container );
            this.choices.push( choice4.container );
        }
    }

    generateAudioChoices(){
        let vocabs:Vocab[] = this.manager.generateChoices();

        if( vocabs.length == 4 ){
            let choice1:ForgeMaterialAudio = new ForgeMaterialAudio(this.scene,this.oriX-this.gapX,this.oriY-this.gapY,vocabs[0]);
            let choice2:ForgeMaterialAudio = new ForgeMaterialAudio(this.scene,this.oriX+this.gapX,this.oriY-this.gapY,vocabs[1]);
            let choice3:ForgeMaterialAudio = new ForgeMaterialAudio(this.scene,this.oriX-this.gapX,this.oriY+this.gapY,vocabs[2]);
            let choice4:ForgeMaterialAudio = new ForgeMaterialAudio(this.scene,this.oriX+this.gapX,this.oriY+this.gapY,vocabs[3]);

            this.choices.push( choice1.container );
            this.choices.push( choice2.container );
            this.choices.push( choice3.container );
            this.choices.push( choice4.container );
        }
    }
}