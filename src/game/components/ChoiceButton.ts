import { GameObjects, Scene } from "phaser";

export default class ChoiceButton extends Phaser.GameObjects.Container{
    
    static preload( scene: Phaser.Scene ){
        //
    }
    boxWidth: number
    boxHeight: number
    buttonBox: GameObjects.Rectangle
    buttonText: GameObjects.Text
    isInitClick: boolean
    isSelected: boolean
    isAnswer: boolean
    //
    onPressedCallback: Function

    constructor(scene: Scene, x:number = 0, y:number = 0, width:number, height:number , text:string, isAnswer:boolean ) {
        //check if config contains a scene
        if (!scene) {
            console.log('missing scene');
            return;
        }

        super(scene, x, y, []);
        
        // Init Data
        this.isSelected = false;
        this.isInitClick = false;

        this.boxWidth = width
        this.boxHeight = height
        this.isAnswer = isAnswer;
        
        this.buttonBox = scene.add.rectangle(0, 0, width, height, 0xffffff);

        this.buttonText = scene.make.text({
            x: 0,
            y: 0,
            text: text,
            origin: {x: 0.5, y: 0.5},
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#000000',
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

        // this.renderAnswerTag()
    }

    onDown(){
        this.buttonBox.fillColor = 0xffffff
        this.isInitClick = true
    }

    onUp(){
        this.buttonBox.fillColor = 0xffffff

        if( this.isInitClick && this.onPressedCallback ){
            this.onPressedCallback( this )
        }

        this.isInitClick = false
    }

    onOut(){
        this.buttonBox.fillColor = 0xffffff
        this.isInitClick = false
    }

    onHover(){
        this.buttonBox.fillColor = 0xffffff
    }

    onPressed( callback: Function ){
        this.onPressedCallback = callback
    }

    showCorrectState(){
        this.buttonBox.disableInteractive();
        if( this.isSelected ){
            this.buttonBox.fillColor = 0x00ff00
        }
    }

    showWrongState(){
        this.buttonBox.disableInteractive();
        if( this.isSelected ){
            this.buttonBox.fillColor = 0xff0000
        }
        if( this.isAnswer ){
            this.renderAnswerTag()
        }
    }

    renderAnswerTag(){
        let circle = this.scene.add.circle(this.boxWidth/2 - 20,0, 30,0xff0000)
        let text = this.scene.add.text(this.boxWidth/2 - 20,0,"A",{fontSize:40}).setOrigin(0.5)
        this.add(circle);
        this.add(text);
    }
  }