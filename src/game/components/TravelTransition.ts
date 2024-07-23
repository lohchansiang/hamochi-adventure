import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";

export default class TravelTransition{

    static preload( scene: Scene ){
        scene.load.spritesheet('smoke', 'assets/adventure/game//SpritesheetWalkingSmoke.png', { frameWidth: 486, frameHeight: 300 });
        scene.load.image("shock", "assets/adventure/game/shock.png");
    }

    scene: Scene
    container: GameObjects.Container
    rect: GameObjects.Rectangle
    avatar: GameObjects.Sprite
    shock: GameObjects.Sprite
    smoke: GameObjects.Sprite

    constructor( scene:Scene, x: number, y: number ){
        this.scene = scene

        this.container = scene.add.container(x,y).setDepth(999);
        this.rect = scene.add.rectangle(0, 0, GameLib.screenWidth + 100, GameLib.screenHeight/2, 0xf5f5dc).setStrokeStyle(5,0x000000)
        this.container.add(this.rect);

        this.avatar = scene.add.sprite( 0, 0,'player').setScale(1.3);
        this.container.add(this.avatar);

        this.smoke = scene.add.sprite( -180, -120,'smoke').setScale(1.5);
        this.container.add(this.smoke);

        this.shock = scene.add.sprite( 220, -150,'shock').setScale(0.8);
        this.container.add(this.shock);

        // Add Anim
        this.scene.anims.create({
            key: "walking",
            frameRate: 7,
            frames: this.scene.anims.generateFrameNumbers("smoke", { start: 0, end: 7 }),
            repeat: -1
        });

        
        this.container.setVisible( false );
    }

    runTransition( callback: Function ){
        this.container.setVisible( true );

        this.smoke.play('walking');
        this.smoke.alpha = 1;
        this.shock.alpha = 0;

        // Tween out
        this.scene.tweens.add({
            targets: this.avatar,
            y: '-=80',
            duration: 400,
            ease:'Power2',
            yoyo: true,
            repeat: 1,
        }).on('complete', ()=>{
            this.smoke.stop();
            this.smoke.alpha = 0;
            this.shock.alpha = 1;

            this.scene.time.delayedCall(1500, ()=>{
                this.container.setVisible( false )
                if( callback ) callback()
            })
            
        });
    }
}