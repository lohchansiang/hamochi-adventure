import { CardMaker } from "@/game/scenes/CardMaker"
import BasicButton from "@/lib/components/BasicButton"
import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"

export default class forgeResultFailed{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    oriX: number
    oriY: number
    //
    container: GameObjects.Container
    backdrop: GameObjects.Rectangle
    panel: GameObjects.Rectangle
    npcContainer: GameObjects.Container

    text: GameObjects.Text
    button: BasicButton
    //

    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene
        this.oriX = x
        this.oriY = y

        this.container = scene.add.container(x,y);
        
        this.backdrop = scene.add.rectangle(0,0,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5);
        this.container.add(this.backdrop);

        this.panel = scene.add.rectangle(0,-200,GameLib.screenWidth+200,GameLib.midY-100,0xeeeeee);
        this.panel.setStrokeStyle(10,0x000000);
        this.container.add(this.panel);

        this.text = scene.add.text(0,-400,
                                    'Failed to Forged!!!',
                                    {
                                        fontSize:'64px',
                                        fontFamily: 'Arial',
                                        color: 'red',
                                        fontStyle: 'bold'
                                    }).setOrigin(0.5);
        this.container.add(this.text);

        this.button = new BasicButton(scene,0,0,'OK','md');
        this.button.onPressedCallback = ()=>{
            this.scene.events.emit('result-closed');
            this.container.destroy();
        }
        
        this.container.add(this.button);
    }
}