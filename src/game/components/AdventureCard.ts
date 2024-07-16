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
        scene.load.image("cardMove", "assets/adventure/game/card/cardMove.png");
    }

    width:number = 300
    height:number = 500
    oriX: number
    oriY: number
    canInput: boolean
    gameManager: GameManager
    slotNumber: number
    rect: GameObjects.Rectangle
    title: GameObjects.Text
    sprite: GameObjects.Sprite
    button: RectButton
    cardData: ACard | undefined
    // isCompleted: boolean = false
    

    constructor(scene:Game, x: number, y: number, key:string, gameManager: GameManager, slotNumber: number ){
        super(scene, x, y);
        this.slotNumber = slotNumber
        this.gameManager = gameManager
        this.oriX = x
        this.oriY = y
        this.canInput = false
        console.log('Render Card > ' + slotNumber)

        this.cardData = CardRepo.findCard(key)
        if( this.cardData == undefined ){
            console.error('Unable to get Card Data for key > '+ key)
            return 
        }

        this.rect = scene.add.rectangle(0,0,this.width,this.height,0xd3d3d3);
        this.rect.setStrokeStyle(5,0x000000);

        this.title = scene.make.text({
            x: 0,
            y: - (this.height/2 - 50),
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

        this.button = new RectButton(scene, 0, this.height/2 -80, 'Open');
        this.button.scale = 0.5
        this.button.onPressed( ()=>{
            if( this.cardData?.onPress && this.canInput ) this.cardData.onPress(this)
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
            new ModalAdventureCard(this.scene,'sceneModalCard', this);
        }else{
            this.complete();
        }
    }

    animIn( callback: Function | null = null ){
        // update position
        this.y = this.oriY - 400
        this.alpha = 0
        this.setVisible(true)

        // Tween in
        this.scene.tweens.add({
            targets: this,
            y: this.oriY,
            duration: 250,
            alpha:1,
            ease:'Power1'
        }).on('complete', ()=>{
            this.canInput = true
            if( this.slotNumber == this.gameManager.completedBattleSlotNumber ){
                console.log('Complete Battle > ' +  this.gameManager.completedBattleSlotNumber);
                this.gameManager.completedBattleSlotNumber = 0;
                this.complete();
            }
            if( callback ) callback();
        });
    }

    complete( callback: Function | null = null ){
        this.canInput = false

        // Tween in
        this.scene.tweens.add({
            targets: this,
            duration: 250,
            alpha:0,
            ease:'Linear'
        }).on('complete', ()=>{
            this.clean();
            if( callback ) callback();
        });
    }
}