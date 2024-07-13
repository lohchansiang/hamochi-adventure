import GameLib from "@/lib/GameLib";
import RectButton from "@/lib/components/RectButton";
import { GameObjects, Scene } from "phaser";

export default class ModalSimpleMessage extends Phaser.Scene{
    
    static preload( scene: Phaser.Scene ){
        //
    }

    parent: Phaser.Scene
    sceneKey: string
    //
    backdrop: GameObjects.Rectangle
    //
    container: GameObjects.Container
    panel: GameObjects.Rectangle
    title: GameObjects.Text
    button: RectButton
    //
    callback: Function | null

    constructor(parent: Scene, sceneKey: string, text: string, callback: Function | null = null) {
        super(sceneKey);
        
        this.parent = parent
        this.sceneKey = sceneKey
        this.callback = callback
        //
        parent.scene.add(sceneKey,this,true)
        this.backdrop = this.add.rectangle(GameLib.screenWidth/2,GameLib.screenHeight/2,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5)

        this.container = this.add.container(GameLib.screenWidth/2,GameLib.screenHeight/2)

        this.panel = this.add.rectangle(0,0,GameLib.screenWidth-200,1000,0xe6e6e6)
        this.container.add(this.panel)

        this.title = this.add.text(0,0,text,{
            font: 'bold 60px Arial',
            color: '#00000',
            align: 'center',  // 'left'|'center'|'right'|'justify'
        },)
        this.title.setOrigin(0.5,0.5)
        this.container.add(this.title)

        this.button = new RectButton(this,GameLib.screenWidth/2,GameLib.screenHeight/2 + 300, 'OK')
        this.button.onPressed(()=>{
            this.close();
        })
    }

    close(){
        if( this.callback ) this.callback()
        this.scene.remove(this.sceneKey)
    }
  }