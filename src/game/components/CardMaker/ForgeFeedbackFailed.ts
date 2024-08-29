import { CardMaker } from "@/game/scenes/CardMaker"
import { GameObjects, Scene } from "phaser"

export default class ForgeFeedbackFailed{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    oriX: number
    oriY: number
    //
    container: GameObjects.Container
    hitEffect: GameObjects.Sprite
    sprite: GameObjects.Sprite
    //

    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene
        this.oriX = x
        this.oriY = y

        this.container = scene.add.container(x,y);
        let size:number = 250;
        this.hitEffect = scene.add.sprite(0,0,'forgeFeedbackHit');
        this.hitEffect.setDisplaySize(size,size);

        this.sprite = scene.add.sprite(0,0,'hammerBroke');
        this.sprite.setRotation(Phaser.Math.DegToRad(45));
        this.sprite.setDisplaySize(size*1.2,size*1.2);

        this.container.add(this.hitEffect);
        this.container.add(this.sprite);
        // Fade out
        this.scene.tweens.add({
            targets: this.container,
            scale: 2,
            alpha: 0,
            duration: 1000,
            ease: 'Power2',
            onComplete: ()=>{
                this.scene.events.emit('forge-feedback');
                this.container.destroy();
            }
        })
    }
}