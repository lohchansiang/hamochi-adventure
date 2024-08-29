import GameLib from "@/lib/GameLib"
import { Vocab } from "@/lib/repos/DeckRepo"
import { GameObjects, Scene, Types } from "phaser"

export default class VocabCardFull{

    static preload( scene: Phaser.Scene ){
        
    }

    scene: Scene
    container: GameObjects.Container
    cardBase: GameObjects.Sprite
    vocabSprite: GameObjects.Sprite
    cardSelect: GameObjects.Rectangle
    //
    isDisabled: boolean = false
    onPressCallback: Function | null
    //
    vocab: Vocab
    buttonState: string // default, selected, disabled
    status: string // owned, broken, none

    constructor( scene:Scene, x:number, y:number, width:number, height:number , vocab:Vocab ){
        this.scene = scene;
        this.vocab = vocab;

        this.container = scene.add.container(x,y);

        this.cardSelect = this.scene.add.rectangle(0,0,width+20,height+20,0x98dbfa);
        this.cardSelect.setVisible(false);

        this.cardBase = this.scene.add.sprite(0,0,'vocabCardBase');
        this.cardBase.setDisplaySize(width,height);
        
        this.vocabSprite = this.scene.add.sprite(0,0,vocab.textureKey);
        this.vocabSprite.setDisplaySize(width-50, width-50);

        this.cardBase.setInteractive();
        this.cardBase.on('pointerdown',()=>{
            if( !this.isDisabled && this.onPressCallback ){
                this.onPressCallback();
            }
        },this);

        this.container.add(this.cardSelect);
        this.container.add(this.cardBase);
        this.container.add(this.vocabSprite);
        
        this.setButtonState('default');
        this.setStatus('none');
    }

    setButtonState( state: string){
        this.buttonState = state;

        switch (state) {
            case 'default':
                this.container.setScale(1);
                this.cardSelect.setVisible(false);
                break;
            case 'selected':
                this.container.setScale(1.1);
                this.cardSelect.setVisible(true);
                break;
            case 'disabled':
                this.container.setScale(1);
                this.cardSelect.setVisible(false);
                break;
            default:
                break;
        }
    }

    setStatus( status: string ){
        this.status = status;

        switch (status) {
            case 'owned':
                
                break;
            case 'broken':
                
                break;
            default:
                // none

                break;
        }
    }

    clean(){
        this.container.destroy();
    }
}