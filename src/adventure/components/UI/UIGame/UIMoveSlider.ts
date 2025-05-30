import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";
import { InputMovement } from "../../Player/PlayerEnum";
import { GameScene } from "@/adventure/scenes/GameScene";
import { GameState } from "../../Game/GameSceneManager";

export default class UIMoveSlider{
    static preload( scene: Scene ){
        scene.load.image("scrollHandler", "assets/adventure/components/scrollHandle.png");
        scene.load.image("scrollBar", "assets/adventure/components/scrollBar.png");
    }

    private scene: GameScene
    private container: GameObjects.Container
    //
    private trackWidth: number = 500
    // private track: GameObjects.Rectangle
    private handleSprite: GameObjects.Sprite
    //
    private trackSprite: GameObjects.Sprite
    //
    private fixedPoints: Array<number>
    private inputMovement: InputMovement
    //
    
    constructor(scene:GameScene,x:number,y:number){
        this.scene = scene;

        this.container = this.scene.add.container(x,y);

        this.fixedPoints = [
            - this.trackWidth / 2,
            0,
            this.trackWidth / 2
        ];

        this.trackSprite = this.scene.add.sprite(0,0,'scrollBar');
        this.trackSprite.setDisplaySize(this.trackWidth,30);
        this.container.add(this.trackSprite);

        this.handleSprite = this.scene.add.sprite(0,0,'scrollHandler');
        this.container.add(this.handleSprite);
        
        // Enable drag on the thumb
        // this.handle.setInteractive();
        // this.scene.input.setDraggable(this.handle);
        this.handleSprite.setName('UIMoveHandle');
        this.handleSprite.setInteractive();
        this.scene.input.setDraggable(this.handleSprite);
        this.updateMoveState();

        // Set up drag events
        this.scene.input.on('drag', (pointer: Phaser.Input.Pointer, gameObject: any, dragX: number, dragY: number) => {
            if( this.scene.manager.gameState != GameState.PLAY ) return;
            
            if( gameObject.name == 'UIMoveHandle' ){
                // Lock the thumb's x position and constrain it vertically within the track bounds
                gameObject.x = Phaser.Math.Clamp(dragX, this.fixedPoints[0], this.fixedPoints[2]);
                gameObject.y = 0;

                this.updateMoveState();
            }
        });
        
        // Snap the thumb to the nearest fixed point when the drag ends
        this.scene.input.on('dragend', (pointer: Phaser.Input.Pointer, gameObject: any) => {
            if( gameObject.name == 'UIMoveHandle' ){
                // Find the closest fixed point
                const closestPoint = this.fixedPoints.reduce((prev, curr) => 
                    Math.abs(curr - gameObject.x) < Math.abs(prev - gameObject.x) ? curr : prev
                );

                // Tween to the closest fixed point for a smooth snap effect
                this.scene.tweens.add({
                    targets: gameObject,
                    x: closestPoint,
                    duration: 200,
                    ease: 'Power2',
                    onComplete: ()=>{
                        this.updateMoveState();
                    }
                });
            }
        });
    }

    private updateMoveState(){
        if( this.handleSprite.x > this.trackWidth/4 ){
            this.inputMovement = InputMovement.RIGHT;
        }else if( this.handleSprite.x < -this.trackWidth/4){
            this.inputMovement = InputMovement.LEFT;
        }else{
            this.inputMovement = InputMovement.NONE;
        }
    }

    stop(){
        this.handleSprite.x = 0;
        this.updateMoveState();
    }

    getContainer(): GameObjects.Container{
        return this.container;
    }

    getInputMovement():InputMovement{
        return this.inputMovement;
    }

    show(){
        this.container.setVisible(true);
    }

    hide(){
        this.container.setVisible(false);
    }
}