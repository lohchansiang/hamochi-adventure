import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";

export default class ProgressionBar{

    static preload( scene: Scene ){
        scene.load.image("endFlagSmall", "assets/adventure/game/endFlagSmall.png");
    }

    scene: Scene
    max: number
    current: number
    //
    width: number = GameLib.screenWidth-140
    height: number = 20
    radius: number = 20
    padding: number = 5
    startX: number
    startY: number
    endX: number
    //
    progressBar: GameObjects.Graphics
    progressBox: GameObjects.Graphics
    flag: GameObjects.Sprite
    flagBack : GameObjects.Sprite
    
    constructor( scene:Scene, x: number, y: number, max: number ){
        this.scene = scene

        this.current = 0
        this.max = max
        this.startX = x - (this.width/2)
        this.startY = y - (this.height/2)
        this.endX = this.startX + this.width

        this.progressBox = this.scene.add.graphics();
        this.progressBox.fillStyle(0x222222, 1);
        this.progressBox.fillRect(this.startX, this.startY, this.width, this.height);
        this.progressBox.fillCircle(this.startX - this.radius/2, this.startY + this.height/2,this.radius)
        // this.progressBox.fillCircle(this.endX + this.radius/2, this.startY + this.height/2,this.radius)

        this.progressBar = this.scene.add.graphics();

        this.flag = this.scene.add.sprite(this.endX + this.radius/2, this.startY + this.height/2,'endFlagSmall')
        this.flag.displayHeight = 80;
        this.flag.displayWidth = 80;

        this.updateProgressBar()
    }

    updateProgressValue( value:number ){
        let newCurrent = value

        if( newCurrent > this.max ){
            newCurrent = this.max
        }else if( newCurrent < 0 ){
            newCurrent = 0;
        }
        
        this.current = newCurrent
        console.log('progress > '+this.current)
        this.updateProgressBar()
    }

    updateProgressBar(){
        let width = ( this.width - (2*this.padding) ) * ( this.current / this.max)
        let height = this.height - (2*this.padding)
        this.progressBar.fillStyle(0xffff00, 1);
        this.progressBar.fillCircle(this.startX - this.radius/2, this.startY + this.height/2,this.radius-this.padding)
        this.progressBar.fillRect(this.startX+this.padding, this.startY+this.padding, width, height);
    }

    resetProgressBar(){
        this.current = 0;
        
        this.progressBar.clear()
        this.updateProgressBar()
    }
}