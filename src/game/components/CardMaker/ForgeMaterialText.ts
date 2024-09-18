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
    outerBase: GameObjects.NineSlice
    innerBase: GameObjects.NineSlice
    text: GameObjects.Text
    //

    constructor( scene:CardMaker, x: number, y: number, vocab:Vocab ){
        this.scene = scene
        this.oriX = x
        this.oriY = y
        this.vocab = vocab

        this.container = scene.add.container(x,y);
        
        let size:number = 250;

        this.outerBase = scene.add.nineslice(0,0,'panelWhite',0,550,150,50,50,50,50);
        this.outerBase.setTint(0xFFFFFF);

        this.innerBase = scene.add.nineslice(0,0,'panelWhite',0,550-30,150-30,50,50,50,50);
        this.innerBase.setTint(scene.manager.colorText);

        this.container.add(this.outerBase);
        this.container.add(this.innerBase);


        this.text = scene.add.text(0,0,vocab.name,{ 
                                            fontSize:'32px',
                                            color:'black',
                                            fontStyle:'bold',
                                            fontFamily:'Arial',
                                            wordWrap: { width: size-20, useAdvancedWrap: true },
                                        }).setOrigin(0.5);
        this.container.add(this.text);
        
        this.container.setSize(size,size);
        this.container.setInteractive({draggable: true});

        // this.scene.input.enableDebug(this.container,0x00ff00);
        this.scene.input.setDraggable(this.container);

        this.container.setData('type','ForgeMaterialText');
        this.container.setData('key',vocab.key);
    }
}