import { CardMaker } from "@/game/scenes/CardMaker"
import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"

export default class forgeFeedbackSuccess{

    static preload( scene: Scene ){

    }

    scene: CardMaker
    oriX: number
    oriY: number
    //
    container: GameObjects.Container
    sprite: GameObjects.Sprite
    //
    hitCircle: GameObjects.Arc

    constructor( scene:CardMaker, x: number, y: number ){
        this.scene = scene
        this.oriX = x
        this.oriY = y

        this.container = scene.add.container(x,y);
        
        let size:number = 100;
        this.sprite = scene.add.sprite(0,0,'forgeFeedbackBulb');
        this.sprite.setDisplaySize(size,size);

        this.container.add(this.sprite);
        
        this.hitCircle = scene.add.circle(x,y,10,GameLib.colorSuccess,0.5);

        this.scene.tweens.add({
            targets: this.hitCircle,
            scale: 30,
            duration: 800,
            ease: 'Power2',
            onComplete: ()=>{
                //
            }
        })

        this.scene.tweens.add({
            targets: this.hitCircle,
            alpha: 0,
            duration: 500,
            delay: 500,
            ease: 'Power2',
            onComplete: ()=>{
                this.hitCircle.destroy();
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

        this.scene.sound.play('forgeSuccess');
    }
}