import GameLib from "@/lib/GameLib";
import RectButton from "@/lib/components/RectButton";
import { GameObjects, Scene } from "phaser";
import AdventureCard from "../components/AdventureCard";
import CloseButton from "@/lib/components/CloseButton";

export default class ModalAdventureCard extends Phaser.Scene{
    
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
    description: GameObjects.Text
    sprite: GameObjects.Sprite
    button: RectButton
    closeButton: CloseButton

    constructor(parent: Scene, sceneKey: string, card: AdventureCard) {
        super(sceneKey);
        
        this.parent = parent
        this.sceneKey = sceneKey
        //
        parent.scene.add(sceneKey,this,true)
        this.backdrop = this.add.rectangle(GameLib.screenWidth/2,GameLib.screenHeight/2,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5)

        this.container = this.add.container(GameLib.screenWidth/2,GameLib.screenHeight/2)

        this.panel = this.add.rectangle(0,0,GameLib.screenWidth-200,1200,0xe6e6e6)
        this.container.add(this.panel)

        if( card.cardData ){
            this.title = this.add.text(0,-400,card.cardData.title,{
                font: 'bold 60px Arial',
                color: '#00000',
                align: 'center',  // 'left'|'center'|'right'|'justify'
            },)
            this.title.setOrigin(0.5,0.5)
            this.container.add(this.title)

            this.description = this.add.text(0,150,card.cardData.description,{
                font: '40px Arial',
                color: '#00000',
                align: 'center',  // 'left'|'center'|'right'|'justify'
            },)
            this.description.setOrigin(0.5,0.5)
            this.container.add(this.description)
            
            this.sprite = this.add.sprite(0,-100,card.cardData.spriteKey)
            this.sprite.scale = 1.2
            this.container.add(this.sprite)
        }

        this.closeButton = new CloseButton(this,350, -500)
        this.closeButton.buttonSprite.displayHeight = 150
        this.closeButton.buttonSprite.displayWidth = 150
        this.closeButton.onPressed(()=>{
            this.close();
        })
        this.container.add(this.closeButton)

        this.button = new RectButton(this,GameLib.screenWidth/2,GameLib.screenHeight/2 + 400, 'OK')
        this.button.onPressed(()=>{
            if( card && card.cardData && card.cardData.onResult ){
                card.cardData.onResult(card);
            }
            this.close();
        })
    }

    renderSuccessResult(){

    }

    renderErrorResult(){

    }

    close(){
        this.scene.remove(this.sceneKey)
    }
  }