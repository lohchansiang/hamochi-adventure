import GameLib from "@/lib/GameLib";
import { GameObjects, Scene, Tweens } from "phaser"
import { Translatable } from "./QuestionGenerator";
import BasicButton from "@/lib/components/BasicButton";
import { DialogData } from "../repos/data/DialogData";

export class Progress{
    key: string
    name: Translatable
    dialogData: DialogData
    requirement?: string 
}

export default class ProgressRenderer{
    private scene: Scene
    private x: number
    private y: number
    private progress: Progress
    //
    container: GameObjects.Container
    button: BasicButton 
    status: GameObjects.Sprite
    
    isOpen: boolean = false
    onOpenCallback: () => void

    constructor(scene:Scene, x:number, y:number, progress: Progress){
        this.scene = scene
        this.x = x
        this.y = y
        this.progress = progress

        this.container = this.scene.add.container(x,y);

        this.button = new BasicButton(this.scene,0,0,progress.name.zh,'md');
        this.container.add(this.button);

        this.status = this.scene.add.sprite(250,0,'iconTick');
        this.status.setTint(0x22bb33);
        this.status.setDisplaySize(80,80);
        this.container.add(this.status);
    }

    updateProgress( currentProgress: Array<string> ){
        let canStart: boolean = false;
        let isDone: boolean = false;

        if( this.progress.requirement == undefined ){
            canStart = true;
        }
        currentProgress.forEach((current)=>{
            if( current == this.progress.key ){
                isDone = true;
            }
            
            if( current == this.progress.requirement ){
                canStart = true;
            }
        })

        // reset
        this.button.setDisabled(true);
        this.status.setVisible(false);
        if( canStart ){
            this.button.setDisabled(false);
        }
        if( isDone ){
            this.status.setVisible(true);
        }
    }
}