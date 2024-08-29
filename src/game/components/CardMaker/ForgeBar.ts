import { CardMaker } from "@/game/scenes/CardMaker"
import GameLib from "@/lib/GameLib"
import { GameObjects, Scene, Tweens } from "phaser"
import CardMakerManager from "./CardMakerManager"

export default class ForgeBar{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    manager: CardMakerManager
    //
    width: number = 900
    height: number = 60
    padding: number = 15
    oriX:number
    oriY:number
    startX: number
    startY: number
    //
    container: GameObjects.Container
    progressBar: GameObjects.Graphics
    progressBarInner: GameObjects.Graphics
    progressBarBase: GameObjects.Graphics
    //
    imageEndPoint: GameObjects.Container
    textEndPoint: GameObjects.Container
    audioEndPoint: GameObjects.Container
    //
    
    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene
        this.manager = scene.manager
        this.oriX = x
        this.oriY = y
        this.startX = - (this.width/2)
        this.startY = - (this.height/2)

        this.container = scene.add.container(x,y);
        this.container.y -= 1000;

        // Progress Bar Container
        this.progressBarBase = this.scene.add.graphics();
        this.progressBarBase.fillStyle(GameLib.colorPanelBg, 1);
        this.progressBarBase.fillRect(
                this.startX - this.padding, 
                this.startY - this.padding - this.height/2, 
                this.width + (this.padding*2), 
                this.height + (this.padding*2)
            );
        this.container.add(this.progressBarBase);

        // Progress Bar Inner
        this.progressBarInner = this.scene.add.graphics();
        this.progressBarInner.fillStyle(GameLib.colorPanelBgDark, 1);
        this.progressBarInner.fillRect(
            this.startX, 
            this.startY - this.height/2, 
            this.width, 
            this.height
        );
        this.container.add(this.progressBarInner);
        
        // Main Progress Bar
        this.progressBar = this.scene.add.graphics();
        this.container.add(this.progressBar);

        // End Point Calculation
        const totalTarget:number = this.manager.getTotalTarget();
        const imageEndPosX =  this.startX + this.manager.targetImage/totalTarget * this.width;
        const textEndPosX =  this.startX + (this.manager.targetImage+this.manager.targetText)/totalTarget * this.width;
        const audioEndPosX = this.startX + (this.manager.targetImage+this.manager.targetText+this.manager.targetAudio)/totalTarget * this.width;
        
        // Image End Point
        this.imageEndPoint = this.scene.add.container(imageEndPosX, this.startY );
        let imageLine:GameObjects.Rectangle = this.scene.add.rectangle(0,0,10,(this.height+this.padding*2),GameLib.colorPanelBg);
        this.imageEndPoint.add(imageLine);
        
        // Text End Point
        this.textEndPoint = this.scene.add.container(textEndPosX, this.startY );
        let textLine:GameObjects.Rectangle = this.scene.add.rectangle(0,0,10,(this.height+this.padding*2),GameLib.colorPanelBg);
        this.textEndPoint.add(textLine);

        // Audio End Point
        this.audioEndPoint = this.scene.add.container(audioEndPosX, this.startY );
        let audioLine:GameObjects.Rectangle = this.scene.add.rectangle(0,0,10,(this.height+this.padding*2),GameLib.colorPanelBg);
        this.audioEndPoint.add(audioLine);

        this.container.add( this.imageEndPoint );
        this.container.add( this.textEndPoint );
        this.container.add( this.audioEndPoint );

        this.updateProgressBar();
    }

    updateProgressBar(){
        let width = ( this.manager.getTotalCurrent() / this.manager.getTotalTarget()) * ( this.width );
        this.progressBar.fillStyle(0x00ff00, 1);
        this.progressBar.fillRect(this.startX, this.startY - this.height/2, width, this.height);
    }

    enter(){
        this.progressBar.clear();
        this.updateProgressBar();

        // Prepare Tween
        this.scene.tweens.add({
            targets: this.container,
            y: this.oriY,
            ease: 'Power2',
            duration: 500
        });
    }

    exit(){
        // Prepare Tween
        this.scene.tweens.add({
            targets: this.container,
            y: this.oriY-1000,
            ease: 'Power2',
            duration: 500
        });
    }

    getTargetX(){
        return this.oriX + this.startX + 100;
    }

    getTargetY(){
        return this.oriY + this.startY;
    }
}