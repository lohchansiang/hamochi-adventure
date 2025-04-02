import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";

export default class  ModalLoader{

    static preload( scene: Phaser.Scene ){
        
    }
    
    private scene: Scene
    private container: GameObjects.Container
    private rect: GameObjects.Rectangle
    private text: GameObjects.Text

    constructor( scene:Scene ){
        this.scene = scene;

        this.container = this.scene.add.container(GameLib.midX,GameLib.midY).setDepth(10000);

        this.rect = this.scene.add.rectangle(0,0,GameLib.screenWidth, GameLib.screenHeight,0x000000);
        this.container.add(this.rect);

        this.text = this.scene.add.text(0,0,'Loading...',{fontSize:'80px',fontStyle: 'bold'}).setOrigin(0.5);
        this.container.add(this.text);
    }

    close( callback?: Function ){
        this.text.setVisible( false );
        
        this.scene.tweens.add({
            targets: this.container, // The object to fade out
            alpha: 0,            // Fade to fully transparent
            duration: 1000,      // Duration in milliseconds (1 second)
            ease: 'Linear',      // Linear easing (smooth fade)
            repeat: 0,           // Run once (no repeats)
            yoyo: false,          // Don’t reverse the tween
            onCompleteHandler: ()=>{
                if( callback) callback();
            } 
        });
    }
}