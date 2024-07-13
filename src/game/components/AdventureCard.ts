import RectButton from "@/lib/components/RectButton";
import { GameObjects, Scene } from "phaser";
import GameManager from "./GameManager";
import { ACard, CardRepo } from "./CardRepo";
import ModalAdventureCard from "../modals/ModalAdventureCard";
import { Game } from "../scenes/Game";

export default class AdventureCard extends GameObjects.Container{
    static preload( scene: Scene ){
        scene.load.image("cardChest", "assets/adventure/game/card/cardChest.png");
        scene.load.image("cardHeal", "assets/adventure/game/card/cardHeal.png");
        scene.load.image("cardWorm", "assets/adventure/game/card/cardWorm.png");
        scene.load.image("cardEnd", "assets/adventure/game/card/cardEnd.png");
        scene.load.image("cardRock", "assets/adventure/game/card/cardRock.png");
    }

    gameManager: GameManager
    slotNumber: number
    rect: GameObjects.Rectangle
    title: GameObjects.Text
    sprite: GameObjects.Sprite
    button: RectButton
    cardData: ACard | undefined
    isCompleted: boolean = false

    constructor(scene:Game, x: number, y: number, key:string, gameManager: GameManager, slotNumber: number ){
        super(scene, x, y);
        this.slotNumber = slotNumber
        this.gameManager = gameManager

        console.log('Render Card > ' + slotNumber)

        this.cardData = CardRepo.findCard(key)
        if( this.cardData == undefined ){
            console.error('Unable to get Card Data for key > '+ key)
            return 
        }

        this.rect = scene.add.rectangle(0,0,250,400,0xd3d3d3);
        this.rect.setStrokeStyle(5,0x000000);

        this.title = scene.make.text({
            x: 0,
            y: -150,
            text: this.cardData.title,
            origin: {x: 0.5, y: 0.5},
            style: {
                fontSize: '40px',
                fontFamily: 'Arial',
                color: '#00000',
                align: 'center',  // 'left'|'center'|'right'|'justify'
            },
        })

        this.sprite = scene.make.sprite({
            x: 0,
            y: -50,
            key: this.cardData.spriteKey,
            add: true
        });
        this.sprite.displayWidth = 120
        this.sprite.displayHeight = 120

        this.button = new RectButton(scene, 0, 100, this.cardData.actionText);
        this.button.scale = 0.5
        this.button.onPressed( ()=>{
            if( this.cardData?.onPress ) this.cardData.onPress(this)
        })

        // Add Object into Container
        this.add(this.rect);
        this.add(this.title);
        this.add(this.sprite);
        this.add(this.button);

        // Add Container to Scene (to Display)
        scene.add.existing(this);
    }

    clean(){
        this.rect.destroy()
        this.button.destroy()
        this.title.destroy()
        this.sprite.destroy()
        
        this.gameManager.clearCardKey(this.slotNumber)
    }

    openModalResult(){
        if( this.scene && this.cardData ){
            new ModalAdventureCard(this.scene,'sceneModalCard', this)
        }else{
            this.isCompleted = true
            this.clean()
        }
    }
}