import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"

export default class OpponentAttackBar{
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
    timedEvent: Phaser.Time.TimerEvent
    //
    isPaused: boolean

    constructor( scene:Scene, x: number, y: number, target: number = 5 ){
        this.scene = scene
        this.target = target

        this.startX = x - (this.width/2)
        this.startY = y - (this.height/2)

        this.progressBox = this.scene.add.graphics();
        this.progressBox.fillStyle(0x222222, 0.8);
        this.progressBox.fillRect(this.startX, this.startY, this.width, this.height);

        this.progressBar = this.scene.add.graphics();
        this.renderProgressBar()

        this.timedEvent = this.scene.time.addEvent({ delay: 1000, callback: this.onCountDown, callbackScope: this, loop: true })
        this.pause();
    }

    onCountDown ()
    {
        if( !this.isPaused ){
            this.addValue(1)
        }
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
            this.scene.events.emit('opponent-attack')
            this.pause()
        }
    }

    pause(){
        this.isPaused = true;
    }

    resume(){
        this.isPaused = false;
    }

    renderProgressBar(){
        let width = ( this.width - (2*this.padding) ) * ( this.current / this.target)
        let height = this.height - (2*this.padding)
        this.progressBar.fillStyle(0x00ff00, 1);
        this.progressBar.fillRect(this.startX+this.padding, this.startY+this.padding, width, height);
    }

    resetProgressBar(){
        this.current = 0;
        
        this.progressBar.clear()
        this.renderProgressBar()
    }
}