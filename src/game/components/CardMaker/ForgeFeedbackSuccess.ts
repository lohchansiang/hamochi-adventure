import { CardMaker } from "@/game/scenes/CardMaker"
import { GameObjects, Scene } from "phaser"

export default class forgeFeedbackSuccess{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    oriX: number
    oriY: number
    //
    hitEffect: GameObjects.Sprite
    container: GameObjects.Container
    sprite: GameObjects.Sprite
    //

    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene
        this.oriX = x
        this.oriY = y

        this.container = scene.add.container(x,y);
        
        let size:number = 100;
        this.sprite = scene.add.sprite(0,0,'forgeFeedbackBulb');
        this.sprite.setDisplaySize(size,size);

        this.container.add(this.sprite);
        
        this.hitEffect = scene.add.sprite(x,y,'forgeFeedbackHit');
        this.hitEffect.setDisplaySize(size,size);

        this.scene.tweens.add({
            targets: this.hitEffect,
            scale: 2,
            alpha: 0,
            duration: 1000,
            ease: 'Power2',
            onComplete: ()=>{
                this.hitEffect.destroy();
            }
        })

        // Move to Forge Bar
        this.scene.tweens.chain(
            {
                targets: this.container,
                tweens: [
                    {
                        // x: "-=100",
                        y: "-=50",
                        scale: 2,
                        duration: 200,
                    },        
                    {
                        // x: "-=50",
                        y: "+=50",
                        scale: 3,
                        duration: 200,
                        ease: 'Bounce'
                    },   
                    {
                        x: this.scene.forgeBar.getTargetX(),
                        y: this.scene.forgeBar.getTargetY(),
                        scale: 1,
                        duration: 200,
                        delay:300
                    } 
                ],
                onComplete: ()=>{
                    this.scene.events.emit('forge-feedback');
                    this.container.destroy();
                }
            }
        )
    }
}