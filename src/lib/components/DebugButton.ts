import { GameObjects, Scene } from "phaser";

export default class DebugButton extends Phaser.GameObjects.Container{
    
    static preload( scene: Phaser.Scene ){
        //
    }

    buttonBox: GameObjects.Rectangle
    buttonText: GameObjects.Text
    isInitClick: boolean = false

    onPressedCallback: Function

    constructor(scene: Scene, x:number = 0, y:number = 0, text:string = "" ) {
        //check if config contains a scene
        if (!scene) {
            console.log('missing scene');
            return;
        }

        super(scene, x, y, []);
        
        this.buttonBox = scene.add.rectangle(0, 0, 400, 150, 0xff0000);

        this.buttonText = scene.make.text({
            x: 0,
            y: 0,
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
        this.add(this.buttonBox);
        this.add(this.buttonText);
        
        scene.add.existing(this);
        this.buttonBox.setInteractive();
        this.buttonBox.on('pointerdown',this.onDown,this);
        this.buttonBox.on('pointerup',this.onUp,this);
        this.buttonBox.on('pointerover',this.onHover,this);
        this.buttonBox.on('pointerout',this.onOut,this);
    }

    onDown(){
        this.buttonBox.fillColor = 0xcc0000
        this.isInitClick = true
    }

    onUp(){
        this.buttonBox.fillColor = 0xff0000

        if( this.isInitClick && this.onPressedCallback ){
            this.onPressedCallback()
        }

        this.isInitClick = false
    }

    onOut(){
        this.buttonBox.fillColor = 0xff0000
        this.isInitClick = false
    }

    onHover(){
        this.buttonBox.fillColor = 0xff6666
    }

    onPressed( callback: Function ){
        this.onPressedCallback = callback
    }
  }