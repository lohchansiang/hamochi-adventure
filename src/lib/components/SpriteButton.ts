import { GameObjects, Scene } from "phaser";

export default class SpriteButton extends Phaser.GameObjects.Container{
    
    static preload( scene: Phaser.Scene ){
        //
    }

    buttonSprite: GameObjects.Sprite
    isInitClick: boolean = false
    isDisabled: boolean = false

    onPressedCallback: Function

    constructor(scene: Scene, x:number = 0, y:number = 0, key:string ) {
        //check if config contains a scene
        if (!scene) {
            console.log('missing scene');
            return;
        }

        super(scene, x, y, []);
        
        this.buttonSprite = scene.make.sprite({
            x: 0,
            y: 0,
            key: key,
            add: true
        });

        // Add Button Sprite to Container
        this.add(this.buttonSprite);
        
        scene.add.existing(this);
        this.buttonSprite.setInteractive();
        this.buttonSprite.on('pointerdown',this.onDown,this);
        this.buttonSprite.on('pointerup',this.onUp,this);
        this.buttonSprite.on('pointerover',this.onHover,this);
        this.buttonSprite.on('pointerout',this.onOut,this);
    }

    onDown(){
        if( this.isDisabled ) return

        this.buttonSprite.setScale(1.0)
        this.isInitClick = true
    }

    onUp(){
        if( this.isDisabled ) return

        this.buttonSprite.setScale(1.0)
        if( this.isInitClick && this.onPressedCallback ){
            this.onPressedCallback()
        }

        this.isInitClick = false
    }

    onOut(){
        if( this.isDisabled ) return

        this.buttonSprite.setScale(1.0)
        this.isInitClick = false
    }

    onHover(){
        if( this.isDisabled ) return

        this.buttonSprite.setScale(1.1)
    }

    onPressed( callback: Function ){
        this.onPressedCallback = callback
    }

    setDisabled( isDisabled: boolean){
        this.isDisabled = isDisabled

        // Update render
        if(this.buttonSprite){
            if( this.isDisabled ){
                this.buttonSprite.tint = 0xff0000
            }else{
                this.buttonSprite.tint = 0xffffff
            }
        }
    }
  }