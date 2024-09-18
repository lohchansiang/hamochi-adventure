import { Vocab } from "@/lib/repos/DeckRepo"
import { GameObjects, Scene } from "phaser"


export default class VocabAudioPlayer{

    static preload( scene: Scene ){

    }

    scene: Scene
    oriX: number
    oriY: number
    vocab: Vocab 
    //
    container: GameObjects.Container
    baseCircle: GameObjects.Arc
    iconPlay: GameObjects.Sprite
    iconPause: GameObjects.Sprite
    //
    sound: Phaser.Sound.NoAudioSound| Phaser.Sound.WebAudioSound | Phaser.Sound.HTML5AudioSound

    constructor( scene:Scene, x: number, y: number, size:number, vocab:Vocab ){
        this.scene = scene
        this.oriX = x
        this.oriY = y
        this.vocab = vocab

        this.container = scene.add.container(x,y);
        //
        this.baseCircle = scene.add.circle(0,0,size/2,0xF7CC4F);
        this.baseCircle.setStrokeStyle(10,0x5d5d5d)
        this.container.add(this.baseCircle);

        this.iconPlay = scene.add.sprite(0,0,'iconPlay').setTint(0x5d5d5d);
        this.iconPlay.setDisplaySize(size*0.6,size*0.6);
        this.container.add(this.iconPlay);
        // this.iconPlay.setVisible(false);

        this.iconPause = scene.add.sprite(0,0,'iconPause').setTint(0x5d5d5d);
        this.iconPause.setDisplaySize(size*0.6,size*0.6);
        this.container.add(this.iconPause);
        this.iconPause.setVisible(false);

        // Sound Instance
        this.sound = scene.sound.add(vocab.textureKey);
        this.sound.on('play', ()=>{
            this.iconPause.setVisible(true);
            this.iconPlay.setVisible(false);
        })
        this.sound.on('pause', ()=>{
            this.iconPause.setVisible(false);
            this.iconPlay.setVisible(true);
        })
        this.sound.on('resume', ()=>{
            this.iconPause.setVisible(true);
            this.iconPlay.setVisible(false);
        })
        this.sound.on('stop', ()=>{
            this.iconPause.setVisible(false);
            this.iconPlay.setVisible(true);
        })
        this.sound.on('complete', ()=>{
            this.iconPause.setVisible(false);
            this.iconPlay.setVisible(true);
        })

        this.container.setInteractive(new Phaser.Geom.Circle(0, 0, size/2), Phaser.Geom.Circle.Contains)

        this.container.on('pointerdown',()=>{
            this.baseCircle.fillColor = 0xF7CC4F;
            if( this.sound.isPlaying ){
                this.sound.pause();
            }else{
                this.sound.play();
            }
        },this);
        this.container.on('pointerup',()=>{
            // this.baseCircle.fillColor
            this.baseCircle.fillColor = 0xF7CC4F;
        },this);
        this.container.on('pointerover',()=>{
            this.baseCircle.fillColor = 0xf5d57a;
        },this);
        this.container.on('pointerout',()=>{
            this.baseCircle.fillColor = 0xF7CC4F;
        },this);
    }


}