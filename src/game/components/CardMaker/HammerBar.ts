import { CardMaker } from "@/game/scenes/CardMaker"
import { GameObjects } from "phaser"
import CardMakerManager from "./CardMakerManager"

export default class HammerBar{

    static preload( scene: Phaser.Scene ){
        
    }

    scene: CardMaker
    manager: CardMakerManager
    //
    sprites: GameObjects.Sprite[] 
    oriX: number
    oriY: number
    //
    container: GameObjects.Container
    
    constructor( scene:CardMaker, x:number, y:number ){
        this.scene = scene
        this.manager = scene.manager
        this.oriX = x
        this.oriY = y

        this.container = scene.add.container(x,y);
        this.container.y = -1000;
        this.renderHammer();
    }

    renderHammer(){
        if( this.sprites && this.sprites.length > 0 ){
            this.sprites.forEach((h:GameObjects.Sprite)=>{
                h.destroy()
            })
        }

        this.sprites = []

        const gap:number = 120;
        const totalWidth:number = gap* (this.manager.maxFailChance-1)
        let startX:number = -totalWidth/2; 
        let startY:number = 0; 
        for(var i=0;i<this.manager.maxFailChance;i++){
            if( i < this.manager.currentFailChance ){
                let sprite:GameObjects.Sprite = this.scene.add.sprite(startX+(gap*i),startY,'hammer');

                sprite.setDisplaySize(100,100);
                sprite.rotation = Phaser.Math.DegToRad(45);

                this.sprites.push(sprite)
                this.container.add(sprite)
            }else{
                let sprite:GameObjects.Sprite = this.scene.add.sprite(startX+(gap*i),startY,'hammerBroke');
                let cross: GameObjects.Sprite = this.scene.add.sprite(startX+(gap*i),startY,'iconCross');
                cross.setTint(0xff0000);

                sprite.setDisplaySize(100,100);
                sprite.rotation = Phaser.Math.DegToRad(45);
                cross.setDisplaySize(80,80);
                // cross.x += sprite.displayWidth/3
                // cross.y += sprite.displayHeight/3

                this.sprites.push(sprite)
                this.container.add(sprite)

                this.sprites.push(cross)
                this.container.add(cross)
            }
        }
    }

    enter(){
        this.renderHammer();
        
        // Prepare Tween
        this.scene.tweens.add({
            targets: this.container,
            y: this.oriY,
            ease: 'Power2',
            duration: 500,
        });
    }

    exit(){
        // Prepare Tween
        this.scene.tweens.add({
            targets: this.container,
            y: this.oriY-1000,
            ease: 'Power2',
            duration: 500
        });
    }
}