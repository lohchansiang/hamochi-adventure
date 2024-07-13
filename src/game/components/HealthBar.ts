import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"

export default class HealthBar{

    static preload( scene: Phaser.Scene ){
        scene.load.image('health','assets/adventure/game/health.png')
        scene.load.image('healthNone','assets/adventure/game/healthNone.png')
    }

    scene: Scene
    //
    health: GameObjects.Sprite[] 
    centerX: number
    centerY: number
    //
    container: GameObjects.Container
    
    constructor( scene:Scene, x:number, y:number ){
        this.scene = scene
        this.centerX = x
        this.centerY = y

        this.container = scene.add.container(x,y);
    }

    renderHealth( currentHp: number, maxHp: number ){
        if( this.health && this.health.length > 0 ){
            this.health.forEach((h:GameObjects.Sprite)=>{
                h.destroy()
            })
        }

        this.health = []

        const gap:number = 100;
        const totalWidth:number = gap* (maxHp-1)
        let startX:number = - (totalWidth/2); 
        let startY:number = 0; 
        for(var i=0;i<maxHp;i++){
            if( i < currentHp ){
                let love:GameObjects.Sprite = this.scene.add.sprite(startX+(gap*i),startY,'health') 
                this.health.push(love)
                this.container.add(love)
            }else{
                let none:GameObjects.Sprite = this.scene.add.sprite(startX+(gap*i),startY,'healthNone') 
                this.health.push(none)
                this.container.add(none)
            }
        }
    }
}