import GameLib from "@/lib/GameLib";
import { GameObjects, Scene, Tweens } from "phaser"

export default class Box{
    static preload( scene: Scene ){
        scene.load.setPath('assets');

        scene.load.image('boxClose','/learn/BoxClose.png');
        scene.load.image('boxOpen','/learn/BoxOpen.png');
        scene.load.image('pulse','/learn/Pulse.png');
        scene.load.image('arrow','/learn/arrowButton.png');

        scene.load.audio('soundOpenBox','/learn/audio/openBox.mp3')
    }

    private scene: Scene
    private container: GameObjects.Container
    private box: GameObjects.Sprite
    private arrow: GameObjects.Sprite
    private animArrow: Phaser.Tweens.Tween
    private tag: GameObjects.Text
    
    isOpen: boolean = false
    onOpenCallback: () => void

    constructor(scene:Scene, x:number, y:number){
        this.scene = scene

        this.container = this.scene.add.container(x,y);

        this.box = this.scene.add.sprite(0,0,'boxClose');
        this.arrow = this.scene.add.sprite(0,-200,'arrow')
        this.arrow.setRotation(Phaser.Math.DegToRad(-90));
        this.arrow.setScale(0.4);


        this.container.add(this.box);
        this.container.add(this.arrow);

        this.animArrow = this.scene.tweens.add({
            targets: this.arrow,
            y: "-=15",
            duration: 500, 
            ease: 'Cubic',
            repeat: -1, 
            yoyo: true,
        });

        this.animArrow.pause();
        this.arrow.setVisible(false);
    }

    getContainer():GameObjects.Container{
      return this.container;  
    }

    show(){
        this.container.setVisible(true);
    }

    hide(){
        this.container.setVisible(false);
    }

    reset(){
        this.box.setTexture('boxClose');
        this.isOpen = false;
    }

    setTag( name: 'A' | 'B' | 'C' | 'D' ){
        this.tag = this.scene.add.text(-50,80,name,{
            color: 'black',
            fontSize: 100
        }).setOrigin(0.5);
        this.container.add(this.tag);
    }

    enableInput(){
        this.animArrow.play();
        this.arrow.setVisible(true);

        this.box.setInteractive();
        this.box.once('pointerdown', (pointer: Phaser.Input.Pointer) => {
            this.open();
            //
            if( this.onOpenCallback != undefined ){
                this.onOpenCallback();
            }
        });
    }

    open(){
        this.box.setTexture('boxOpen');
        this.scene.sound.play('soundOpenBox');
        this.animArrow.pause();
        this.arrow.setVisible(false);
        this.isOpen = true;
    }
}