import { GameObjects, Scene } from "phaser";

export default class RectButton extends Phaser.GameObjects.Container{
    
    static preload( scene: Phaser.Scene ){
        scene.load.spritesheet("greenButtons", "assets/adventure/components/greenButtons.png",{ frameWidth: 400, frameHeight: 200 });
    }

    buttonSprite: GameObjects.Sprite
    buttonText: GameObjects.Text
    textOffsetUp: number = -25
    textOffsetDown: number = -15
    isInitClick: boolean = false

    onPressedCallback: Function

    constructor(scene: Scene, x:number = 0, y:number = 0, text:string = "" ) {
        //check if config contains a scene
        if (!scene) {
            console.log('missing scene');
            return;
        }

        super(scene, x, y, []);
        
        this.buttonSprite = scene.make.sprite({
            x: 0,
            y: 0,
            key: 'greenButtons',
            add: true
        });

        this.buttonText = scene.make.text({
            x: 0,
            y: this.textOffsetUp,
            text: text,
            origin: {x: 0.5, y: 0.5},
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#ffffff',
                align: 'center',  // 'left'|'center'|'right'|'justify'
            },
        });

        // Add Button Sprite to Container
        this.add(this.buttonSprite);
        this.add(this.buttonText);
        
        scene.add.existing(this);
        this.buttonSprite.setInteractive();
        this.buttonSprite.on('pointerdown',this.onDown,this);
        this.buttonSprite.on('pointerup',this.onUp,this);
        this.buttonSprite.on('pointerover',this.onHover,this);
        this.buttonSprite.on('pointerout',this.onOut,this);
    }

    onDown(){
        this.buttonSprite.setFrame(2)
        this.buttonText.y = this.textOffsetDown;

        this.isInitClick = true
    }

    onUp(){
        this.buttonSprite.setFrame(0)
        this.buttonText.y = this.textOffsetUp;

        if( this.isInitClick && this.onPressedCallback ){
            this.onPressedCallback()
        }

        this.isInitClick = false
    }

    onOut(){
        this.buttonSprite.setFrame(0)
        this.buttonText.y = this.textOffsetUp;

        this.isInitClick = false
    }

    onHover(){
        this.buttonSprite.setFrame(1)
        this.buttonText.y = this.textOffsetUp;
    }

    onPressed( callback: Function ){
        this.onPressedCallback = callback
    }
  }