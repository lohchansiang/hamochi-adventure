import { CardMaker } from "@/game/scenes/CardMaker"
import GameLib from "@/lib/GameLib"
import { Vocab } from "@/lib/repos/DeckRepo"
import { GameObjects, Scene } from "phaser"

export default class ForgeMaterialText{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    oriX: number
    oriY: number
    vocab: Vocab 
    //
    container: GameObjects.Container
    rect: GameObjects.Rectangle
    text: GameObjects.Text
    //

    constructor( scene:CardMaker, x: number, y: number, vocab:Vocab ){
        this.scene = scene
        this.oriX = x
        this.oriY = y
        this.vocab = vocab

        this.container = scene.add.container(x,y);
        
        let size:number = 250;
        this.rect = scene.add.rectangle(0,0,size,size,scene.manager.colorText);
        this.text = scene.add.text(0,0,vocab.name,{ 
                                            fontSize:'32px',
                                            color:'black',
                                            fontStyle:'bold',
                                            fontFamily:'Arial',
                                            wordWrap: { width: size-20, useAdvancedWrap: true },
                                        }).setOrigin(0.5);

        this.container.add(this.rect);
        this.container.add(this.text);
        
        this.container.setSize(size,size);
        this.container.setInteractive({draggable: true});

        // this.scene.input.enableDebug(this.container,0x00ff00);
        this.scene.input.setDraggable(this.container);

        this.container.setData('type','ForgeMaterialText');
        this.container.setData('key',vocab.key);
    }
}