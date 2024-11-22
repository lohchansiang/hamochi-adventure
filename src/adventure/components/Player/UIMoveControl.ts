import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";
import { InputMovement } from "./PlayerEnum";

export default class UIMoveControl{
    static preload( scene: Scene ){
        scene.load.image("arrowButton", "assets/adventure/components/arrowButton.png");
    }

    scene: Scene
    container: GameObjects.Container
    //
    spriteLeft: GameObjects.Sprite
    spriteRight: GameObjects.Sprite
    //
    inputMovement: InputMovement
    //
    leftKey!: Phaser.Input.Keyboard.Key | undefined
    rightKey!: Phaser.Input.Keyboard.Key | undefined
    //
    activePress: Array<string> = []

    constructor(scene:Scene,x:number,y:number){
        this.scene = scene;

        this.container = this.scene.add.container(x,y);
        
        this.spriteLeft = this.scene.add.sprite(-150,0,'arrowButton').setScale(0.5);
        this.container.add(this.spriteLeft);

        this.spriteRight = this.scene.add.sprite(150,0,'arrowButton').setScale(0.5);
        this.spriteRight.setFlipX(true);
        this.container.add(this.spriteRight);

        this.spriteLeft.setInteractive();
        this.spriteLeft.on('pointerdown',()=>{
            this.spriteLeft.setAlpha(0.8);
            this.setLeft();
        });
        
        this.spriteLeft.on('pointerup',()=>{
            this.spriteLeft.setAlpha(1);
            this.unsetLeft();
        });

        this.spriteLeft.on('pointerout',()=>{
            this.spriteLeft.setAlpha(1);
            this.unsetLeft();
        });

        this.spriteRight.setInteractive();
        this.spriteRight.on('pointerdown',()=>{
            this.spriteRight.setAlpha(0.8);
            this.setRight();
        });
        this.spriteRight.on('pointerup',()=>{
            this.spriteRight.setAlpha(1);
            this.unsetRight();
        });
        this.spriteRight.on('pointerout',()=>{
            this.spriteRight.setAlpha(1);
            this.unsetRight();
        });

        if( this.scene && this.scene.input && this.scene.input.keyboard){
            this.scene.input.keyboard.on('keydown-LEFT', () => {
                this.setLeft();
            });
    
            this.scene.input.keyboard.on('keydown-RIGHT', () => {
                this.setRight();
            });
    
            this.scene.input.keyboard.on('keyup-LEFT', () => {
                this.unsetLeft();
            });
    
            this.scene.input.keyboard.on('keyup-RIGHT', () => {
                this.unsetRight();
            });
        }
    }

    setRight(){
        if( !this.activePress.includes('right') ){
            this.activePress.push('right');
        }
        
        this.updateMoveState();
    }

    setLeft(){
        if( !this.activePress.includes('left') ){
            this.activePress.push('left');
        }
        
        this.updateMoveState();
    }

    unsetRight(){
        let index = this.activePress.indexOf('right');
        if (index > -1) { 
            this.activePress.splice(index, 1);
        }
        this.updateMoveState();
    }

    unsetLeft(){
        let index = this.activePress.indexOf('left');
        if (index > -1) { 
            this.activePress.splice(index, 1);
        }
        this.updateMoveState();
    }
    
    updateMoveState(){
        if( this.activePress.includes('left') && this.activePress.includes('right') ){
            this.inputMovement = InputMovement.NONE;
        }else if( this.activePress.length > 0 && this.activePress[0] == 'left' ){
            this.inputMovement = InputMovement.LEFT;
        }else if( this.activePress.length > 0 && this.activePress[0] == 'right' ){
            this.inputMovement = InputMovement.RIGHT;
        }else{
            this.inputMovement = InputMovement.NONE;
        }   
    }
}