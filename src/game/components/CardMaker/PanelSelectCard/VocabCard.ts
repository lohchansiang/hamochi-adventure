import GameLib from "@/lib/GameLib"
import { Vocab } from "@/lib/repos/DeckRepo"
import { GameObjects, Scene, Tweens, Types } from "phaser"

export class VocabCardConfig{
    withForgeCondition: boolean = false
}

export default class VocabCard{

    static preload( scene: Phaser.Scene ){
        
    }

    scene: Scene
    width: number
    height: number
    container: GameObjects.Container
    containerCard: GameObjects.Container
    cardBase: GameObjects.Sprite
    vocabSprite: GameObjects.Sprite
    vocabText: GameObjects.Text
    cardSelect: GameObjects.Rectangle
    cardCrack: GameObjects.Sprite
    //
    cardIconOwned: GameObjects.Container
    cardIconForge: GameObjects.Container
    //
    onPressCallback: Function | null
    //
    vocab: Vocab
    buttonState: string // default, selected, disabled
    status: string // owned, broken, none
    //
    canSelect: boolean = false
    tweenPulse: Tweens.Tween

    constructor( scene:Scene, x:number, y:number, width:number, height:number, vocab:Vocab, config: VocabCardConfig = new VocabCardConfig() ){
        this.scene = scene;
        this.width = width
        this.height = height
        this.vocab = vocab;

        this.container = scene.add.container(x,y);
        this.containerCard = scene.add.container(0,0);

        const selectSize:number = width*0.1;
        this.cardSelect = this.scene.add.rectangle(0,0,width+selectSize,this.height+selectSize,0x98dbfa);
        this.cardSelect.setVisible(false);

        // BOC: Render Card
        this.cardBase = this.scene.add.sprite(0,0,'vocabCardBase');
        this.cardBase.setDisplaySize(width,this.height);
        
        this.vocabSprite = this.scene.add.sprite(0,-this.height*0.1,vocab.textureKey);
        this.vocabSprite.setDisplaySize(width*0.6, width*0.6);

        this.vocabText = this.scene.add.text(
                                        0,
                                        this.height*0.25,
                                        vocab.name,
                                        {
                                            color:'black',
                                            fontSize:32,
                                            fontFamily:'Arial',
                                            wordWrap: { width: width, useAdvancedWrap: true },
                                            align:'center'
                                        }).setOrigin(0.5,0.5)
        
        this.cardCrack = this.scene.add.sprite(0,0,'vocabCardCrack');
        this.cardCrack.setDisplaySize(width,this.height);
        this.cardCrack.blendMode = Phaser.BlendModes.ADD;
        this.cardCrack.setVisible(false);

        this.containerCard.add(this.cardBase);
        this.containerCard.add(this.vocabSprite);
        this.containerCard.add(this.vocabText);
        // EOC

        this.container.add(this.cardSelect);
        this.container.add(this.containerCard);
        this.container.add(this.cardCrack); 
        
        if( config.withForgeCondition ){
            const iconSize = width*0.35;
            // Icon Owned
            this.cardIconOwned = this.scene.add.container(width*0.4,this.height*0.4);
            let ownedCircle:GameObjects.Arc = this.scene.add.circle(0,0,iconSize/2,GameLib.colorSuccess);
            let ownedIcon:GameObjects.Sprite = this.scene.add.sprite(0,0,'iconTick');
            ownedIcon.setDisplaySize(iconSize/2,iconSize/2);
            this.cardIconOwned.add(ownedCircle);
            this.cardIconOwned.add(ownedIcon);
            this.cardIconOwned.setVisible(false);
                                            
            // Icon Forge
            this.cardIconForge = this.scene.add.container(width*0.4,this.height*0.4);
            let forgeCircle:GameObjects.Arc = this.scene.add.circle(0,0,iconSize/2,GameLib.colorYellow);
            let forgeIcon:GameObjects.Sprite = this.scene.add.sprite(0,0,'hammer');
            forgeIcon.setDisplaySize(iconSize*0.8,iconSize*0.8);
            this.cardIconForge.add(forgeCircle);
            this.cardIconForge.add(forgeIcon);
            this.cardIconForge.setVisible(false);

            this.container.add(this.cardIconOwned);
            this.container.add(this.cardIconForge);

            // Forge Tweens
            this.tweenPulse = this.scene.tweens.add({
                targets:this.container,  
                scale: 1.05, 
                ease: 'Linear',
                duration: 500,
                repeat: -1,
                yoyo: true,
            }).pause();
        }

        this.setStatus('broken');
    }

    setInteractive(){
        this.cardBase.setInteractive();
        this.cardBase.on('pointerdown',()=>{
            if( this.onPressCallback && this.canSelect ){
                this.onPressCallback();
            }
        },this);

        this.cardBase.on('pointerover',()=>{
            this.cardSelect.setVisible(true);
        },this);

        this.cardBase.on('pointerout',()=>{
            this.cardSelect.setVisible(false);
        },this);
    }

    setStatus( status: string ){
        this.status = status;

        // Reset Clear Grayscale
        this.containerCard.postFX.clear();
        this.containerCard.setAlpha(1);
        
        // Reset Hide Icons
        this.cardIconOwned?.setVisible(false);
        this.cardIconForge?.setVisible(false);
        
        this.tweenPulse?.pause();
        this.tweenPulse?.reset();

        switch (status) {
            case 'owned':
                this.cardBase.setTexture('vocabCardBase');
                this.vocabSprite.setVisible(true);
                this.vocabText.setVisible(true);
                this.cardCrack.setVisible(false);

                this.cardIconOwned?.setVisible(true);
                this.cardIconOwned?.setAlpha(0.6);
                this.containerCard.setAlpha(0.6);
                this.canSelect = false;
                break;
            case 'broken':
                this.cardBase.setTexture('vocabCardBase');
                this.vocabText.setVisible(true);
                this.vocabSprite.setVisible(true);
                this.cardCrack.setVisible(true);

                var effect = this.containerCard.postFX.addColorMatrix();
                effect.grayscale(1, true);

                this.cardIconForge?.setVisible(true);
                this.canSelect = true;
                break;
            default:
                // none
                this.cardBase.setTexture('vocabCardBaseBack');
                this.vocabSprite.setVisible(false);
                this.vocabText.setVisible(false);
                this.cardCrack.setVisible(false);
                
                this.status = 'none';
                this.containerCard.setAlpha(0.6);
                this.canSelect = false;
                break;
        }

        if( this.canSelect ){
            this.tweenPulse?.play();
        }
    }

    clean(){
        this.container.destroy();
    }

    static calculateHeight( width:number ):number{
        return 1360/980*width;
    }
}