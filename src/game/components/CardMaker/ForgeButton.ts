import { GameObjects, Scene, Tweens } from "phaser";

export default class ForgeButton extends Phaser.GameObjects.Container{
    
    static preload( scene: Phaser.Scene ){
        //
    }

    scene: Scene

    spriteBase: GameObjects.Sprite
    spriteHammer: GameObjects.Sprite 
    isDisabled: boolean = false

    tweenPulse: Tweens.Tween
    onPressedCallback: Function

    constructor(scene: Scene, x:number = 0, y:number = 0 ) {
        super(scene, x, y, []);
        
        this.scene = scene;

        this.spriteBase = this.scene.add.sprite(0,0,'buttonCircleAction');
        this.spriteHammer = this.scene.add.sprite(0,0,'hammer').setRotation(Phaser.Math.DegToRad(45));

        this.add(this.spriteBase);
        this.add(this.spriteHammer);
        
        this.spriteBase.setInteractive();
        this.spriteBase.on('pointerdown',()=>{
            if( this.isDisabled ) return;

            this.setScale(1);

            if( this.onPressedCallback ) this.onPressedCallback();
        },this);

        this.spriteBase.on('pointerover',()=>{
            if( this.isDisabled ) return;
            
            this.setScale(1.05);
        },this);
        
        this.spriteBase.on('pointerout',()=>{
            this.setScale(1);
        },this);

        scene.add.existing(this);

        this.tweenPulse = scene.tweens.add({
            targets: this,
            scale: 1.05,
            duration: 500,
            repeat: -1,
            yoyo: true
        }).pause();
    }

    setDisabled( isDisabled: boolean){
        this.isDisabled = isDisabled

        // Update render
        if(this){
            if( this.isDisabled ){
                var effect = this.postFX.addColorMatrix();
                effect.grayscale(1, true);

                this.tweenPulse.pause();
                this.tweenPulse.reset();
            }else{
                this.postFX.clear();
                this.tweenPulse.play();
            }
        }
    }
  }