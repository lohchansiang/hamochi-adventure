import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"
import { ACard } from "./CardRepo"
import HealthBar from "./HealthBar"
import OpponentAttackBar from "./OpponentAttackBar"

export default class Opponent{

    scene: Scene
    card: ACard

    maxHp: number = 2
    attackTime: number = 15
    //
    avatar: GameObjects.Sprite
    currentHp: number
    //
    healthBar: HealthBar
    attackBar: OpponentAttackBar

    
    constructor( scene:Scene, card: ACard ){
        this.scene = scene
        this.card = card

        this.currentHp = this.maxHp

        // Render Opponent
        this.avatar = this.scene.add.sprite( GameLib.centerX(), 200, card.spriteKey )

        // Render Health
        this.healthBar = new HealthBar(this.scene, GameLib.centerX(), 350)
        this.healthBar.container.scale = 0.8
        this.renderHealth()

        this.renderAttackBar()
    }

    renderHealth(){
        this.healthBar.renderHealth(this.currentHp,this.maxHp)
    }

    renderAttackBar(){
        // Render Player Attack Bar
        this.attackBar = new OpponentAttackBar( this.scene, GameLib.screenWidth/2,450, this.attackTime );
        this.attackBar.resume();
    }
    
    damage(value:number){
        let newHp = this.currentHp - value
        if( newHp >= 0 && newHp <= this.maxHp ){
            this.currentHp = newHp;
        }else if( newHp < 0 ){
            this.currentHp = 0
        }else if( newHp > this.maxHp ){
            this.currentHp = this.maxHp
        }
        console.log(this.currentHp)
        this.renderHealth()

        this.scene.events.emit('opponent-update')
    }

    resetAttackBar(){
        this.attackBar.resetProgressBar();
    }

    stopAttackBar(){
        this.attackBar.pause();
    }

    resumeAttack(){
        this.scene.time.delayedCall(1000,()=>{
            this.attackBar.resume();
        },[],this);
       
    }
}