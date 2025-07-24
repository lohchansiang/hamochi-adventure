import { GameObjects, Scene } from "phaser";

export default class CloseButton extends Phaser.GameObjects.Container{
    
    static preload( scene: Phaser.Scene ){
        scene.load.spritesheet("closeButton", "assets/adventure/components/SpritesheetButtonMenuCross.png",{ frameWidth: 256, frameHeight: 256 });
    }

    buttonSprite: GameObjects.Sprite
    isInitClick: boolean = false

    onPressedCallback: Function

    constructor(scene: Scene, x:number = 0, y:number = 0 ) {
        //check if config contains a scene
        if (!scene) {
            console.log('missing scene');
            return;
        }

        super(scene, x, y, []);
        
        this.buttonSprite = scene.make.sprite({
            x: 0,
            y: 0,
            key: 'closeButton',
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
        this.buttonSprite.setFrame(2)

        this.isInitClick = true
    }

    onUp(){
        this.buttonSprite.setFrame(0)

        if( this.isInitClick && this.onPressedCallback ){
            this.onPressedCallback()
            if( this.scene.cache.audio.exists('basicClose') ){
                this.scene.sound.play('basicClose');
            }
        }

        this.isInitClick = false
    }

    onOut(){
        this.buttonSprite.setFrame(0)

        this.isInitClick = false
    }

    onHover(){
        this.buttonSprite.setFrame(1)
    }

    onPressed( callback: Function ){
        this.onPressedCallback = callback
    }
  }