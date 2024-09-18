import { CardMaker } from "@/game/scenes/CardMaker"
import { Vocab } from "@/lib/repos/DeckRepo"
import { GameObjects, Scene } from "phaser"
import VocabAudioPlayer from "./VocabAudioPlayer"

export default class ForgeMaterialAudio{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    oriX: number
    oriY: number
    vocab: Vocab 
    //
    container: GameObjects.Container
    outerBase: GameObjects.Arc
    innerBase: GameObjects.Arc
    //
    rect: GameObjects.Rectangle
    sprite: GameObjects.Sprite
    text: GameObjects.Text
    //
    audioPlayer: VocabAudioPlayer
    
    constructor( scene:CardMaker, x: number, y: number, vocab:Vocab ){
        this.scene = scene
        this.oriX = x
        this.oriY = y
        this.vocab = vocab

        this.container = scene.add.container(x,y);
        
        let size:number = 250;

        this.outerBase = scene.add.circle(0,0,150,0xFFFFFF);
        this.innerBase = scene.add.circle(0,0,150-15,scene.manager.colorAudio);

        this.container.add(this.outerBase);
        this.container.add(this.innerBase);

        this.sprite = scene.add.sprite(0,0,'iconAudio').setTint(0xFFD6D5);
        this.sprite.setDisplaySize(150,150);
        this.container.add(this.sprite);

        this.audioPlayer = new VocabAudioPlayer(scene,150,0,120,vocab);
        this.container.add(this.audioPlayer.container);
    

        // this.audioButton = new SpriteButton(scene,150,0,'vocabAudio');
        // this.audioButton.onPressedCallback = ()=>{
        //     scene.sound.play(vocab.textureKey);
        // }

        // this.text = scene.add.text(0,size/2-50,vocab.name,{ 
        //                                     fontSize:'32px',
        //                                     color:'black',
        //                                     wordWrap: { width: size-20, useAdvancedWrap: true },
        //                                 }).setOrigin(0.5);
        // this.container.add(this.text);
        
        this.container.setSize(size,size);
        this.container.setInteractive({draggable: true});

        // this.scene.input.enableDebug(this.container,0x00ff00);
        this.scene.input.setDraggable(this.container);

        this.container.setData('type','ForgeMaterialAudio');
        this.container.setData('key',vocab.key);
    }
}