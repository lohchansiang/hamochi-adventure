import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"

export default class PlayerAttackBar{

    static preload( scene: Scene ){
        scene.load.image("bulb", "assets/adventure/game/bulb.png");
        scene.load.image("bulbBack", "assets/adventure/game/bulbBack.png");
    }

    scene: Scene
    //
    target: number
    current: number = 0
    //
    width: number = 400
    height: number = 50
    padding: number = 10
    startX: number
    startY: number
    //
    progressBar: GameObjects.Graphics
    progressBox: GameObjects.Graphics
    //
    bulbContainer: GameObjects.Container
    bulb: GameObjects.Sprite
    bulbBack: GameObjects.Sprite
    //
    callbackBulbButton: Function | null
    
    constructor( scene:Scene, x: number, y: number, target: number = 20 ){
        this.scene = scene
        this.target = target

        this.startX = x - (this.width/2)
        this.startY = y - (this.height/2)

        this.progressBox = this.scene.add.graphics();
        this.progressBox.fillStyle(0x222222, 0.8);
        this.progressBox.fillRect(this.startX, this.startY, this.width, this.height);

        this.progressBar = this.scene.add.graphics();
        this.renderProgressBar()

        this.renderBulbButton()
    }

    addValue( value :number){
        let newCurrent = this.current + value

        if( newCurrent > this.target ){
            newCurrent = this.target
        }else if( newCurrent < 0 ){
            newCurrent = 0;
        }
        
        this.current = newCurrent
        this.renderProgressBar()

        if( this.current == this.target ){
            this.scene.events.emit('player-attack')
        }
    }

    renderProgressBar(){
        let width = ( this.width - (2*this.padding) ) * ( this.current / this.target)
        let height = this.height - (2*this.padding)
        this.progressBar.fillStyle(0x00ff00, 1);
        this.progressBar.fillRect(this.startX+this.padding, this.startY+this.padding, width, height);
    }

    renderBulbButton(){
        this.bulbContainer = this.scene.add.container(GameLib.screenWidth/2,GameLib.screenHeight/2).setDepth(900);
        this.bulbBack = this.scene.add.sprite(0,0,'bulbBack');
        this.bulb = this.scene.add.sprite(0,0,'bulb');

        this.bulbContainer.add(this.bulbBack);
        this.bulbContainer.add(this.bulb);

        this.bulbBack.setInteractive();
        this.bulbBack.on('pointerdown',()=>{

            // Reset Player Bar
            this.resetProgressBar();

            if( this.callbackBulbButton ) this.callbackBulbButton();
        },this)

        this.hideBulbButton()
    }

    showBulbButton(){
        this.bulbBack.setInteractive();
        this.bulbContainer.setVisible(true);
    }

    hideBulbButton(){
        this.bulbBack.disableInteractive();
        this.bulbContainer.setVisible(false);
    }

    resetProgressBar(){
        this.current = 0;
        
        this.progressBar.clear()
        this.renderProgressBar()
    }
}