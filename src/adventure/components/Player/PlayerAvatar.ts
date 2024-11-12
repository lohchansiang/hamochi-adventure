import { GameObjects, Scene, Tweens } from "phaser";
import { AvatarMask, AvatarState } from "./PlayerEnum";

export default class PlayerAvatar extends GameObjects.Container{
    static preload( scene: Scene ){
        scene.load.image("avatarBase", "assets/adventure/components/avatar/CB0030_hamster.png");
        scene.load.image("avatarBaseStroke", "assets/adventure/components/avatar/CB0030_hamster_stroke.png");
        scene.load.image("avatarEye0", "assets/adventure/components/avatar/CE0000_default.png");
        scene.load.image("avatarEye1", "assets/adventure/components/avatar/CE0000_default_F1.png");
        scene.load.image("avatarHair", "assets/adventure/components/avatar/CH0000_default.png");
        scene.load.image("avatarMouth", "assets/adventure/components/avatar/CM0030_hamster.png");
        scene.load.image("avatarCheek", "assets/adventure/components/avatar/CC0000_default.png");
        scene.load.image("avatarShadow", "assets/adventure/components/avatar/CS0000_default.png");
        //
        scene.load.image("maskSmile", "assets/adventure/components/mask/M0010.png");
        scene.load.image("maskLaugh", "assets/adventure/components/mask/M0011.png");
        scene.load.image("maskLaughWithEye", "assets/adventure/components/mask/M0012.png");
        scene.load.image("maskSmileWithEye", "assets/adventure/components/mask/M0013.png");
        scene.load.image("maskStar", "assets/adventure/components/mask/M0014.png");
        scene.load.image("maskAngry", "assets/adventure/components/mask/M0020.png");
        scene.load.image("maskMad", "assets/adventure/components/mask/M0021.png");
        scene.load.image("maskCry", "assets/adventure/components/mask/M0031.png");
        scene.load.image("maskNervous01", "assets/adventure/components/mask/M0070.png");
        scene.load.image("maskNervous02", "assets/adventure/components/mask/M0071.png");
        scene.load.image("maskShout", "assets/adventure/components/mask/M0090.png");
        scene.load.image("maskPain", "assets/adventure/components/mask/MaskPain.png");
        scene.load.spritesheet('spritesheetMaskFaint', 'assets/adventure/components/mask/SpritesheetMaskFaint.png', { frameWidth: 500, frameHeight: 600 });
    }

    scene: Scene
    width:number = 300
    height:number = 500
    oriX: number
    oriY: number
    //
    avatarContainer: GameObjects.Container
    base: GameObjects.Sprite
    baseStroke: GameObjects.Sprite
    eye: GameObjects.Sprite
    hair: GameObjects.Sprite
    mouth: GameObjects.Sprite
    cheek: GameObjects.Sprite
    shadow: GameObjects.Sprite
    // Mask
    emojiMask: GameObjects.Sprite
    // Groups
    groupFace: GameObjects.Group
    // States
    currentAvatarState: AvatarState
    currentAvatarMask: AvatarMask
    // Animations
    tweenIdle: Tweens.Tween
    tweenIdleShadow: Tweens.Tween
    tweenWalk: Tweens.Tween
    tweenWalkShadow: Tweens.Tween
    tweenJump: Tweens.TweenChain
    tweenJumpShadow: Tweens.Tween
    tweenFall: Tweens.TweenChain
    tweenFallShadow: Tweens.Tween
    

    constructor(scene:Scene, x: number, y: number ){
        super(scene, x, y);
       
        this.oriX = x
        this.oriY = y

        scene.add.existing(this);

        this.avatarContainer = scene.add.container(0,0);
        this.add(this.avatarContainer);

        this.base = scene.add.sprite(0,0,'avatarBase').setTint(0xFFD48A).setOrigin(0.5,1);
        this.baseStroke = scene.add.sprite(0,0,'avatarBaseStroke').setOrigin(0.5,1);
        this.eye = scene.add.sprite(0,0,'avatarEye0').setOrigin(0.5,1);
        this.hair = scene.add.sprite(0,0,'avatarHair').setOrigin(0.5,1);
        this.mouth = scene.add.sprite(0,0,'avatarMouth').setOrigin(0.5,1);
        this.cheek = scene.add.sprite(0,0,'avatarCheek').setOrigin(0.5,1);
        this.shadow = scene.add.sprite(0,0,'avatarShadow').setOrigin(0.5,1);
        
        this.avatarContainer.add(this.base);
        this.avatarContainer.add(this.baseStroke);
        this.avatarContainer.add(this.eye);
        this.avatarContainer.add(this.hair);
        this.avatarContainer.add(this.mouth);
        this.avatarContainer.add(this.cheek);

        this.groupFace = this.scene.add.group();
        this.groupFace.add(this.eye);
        this.groupFace.add(this.mouth);

        this.add(this.shadow);
        this.sendToBack(this.shadow);

        this.emojiMask = scene.add.sprite(0,0,'maskPain').setOrigin(0.5,1).setVisible(false);
        this.avatarContainer.add(this.emojiMask);

        this.prepareAnims();    

        this.setAvatarState(AvatarState.WALK);
    }

    prepareAnims(){
        // Blink Animation
        this.eye.anims.create({
            key: 'blink',
            frames: [
                {
                    key: 'avatarEye0'
                },
                {
                    key: 'avatarEye1'
                },
            ],
            duration: 500,
            repeat: -1,
            repeatDelay: 5000,
            yoyo: true,
        });

        // Faint Animation
        this.emojiMask.anims.create({
            key: 'animFaint',
            frameRate: 5,
            frames: this.scene.anims.generateFrameNumbers("spritesheetMaskFaint", { start: 0, end: 2 }),
            repeat: -1,
        });

        // Nervous Animation
        this.emojiMask.anims.create({
            key: 'animNervous',
            frames: [
                {
                    key: 'maskNervous01'
                },
                {
                    key: 'maskNervous02'
                },
            ],
            duration: 500,
            repeat: -1,
        });

        // Idle Tween
        this.tweenIdle = this.scene.tweens.add({
            targets: this.avatarContainer,
            scaleY: 0.95,
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1500,
            repeat: -1,            // -1: infinity
            yoyo: true,
            onStart:()=>{
                this.avatarContainer.scale = 1
            }
        });
        this.tweenIdle.pause();
        
        // Idle Shadow Tween
        this.tweenIdleShadow = this.scene.tweens.add({
            targets: this.shadow,
            scaleX: 0.98,
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1500,
            repeat: -1,            // -1: infinity
            yoyo: true,
            onStart:()=>{
                this.shadow.scale = 1
            }
        });
        this.tweenIdleShadow.pause();

        // Idle Tween
        this.tweenWalk = this.scene.tweens.add({
            targets: this.avatarContainer,
            scaleY: 1.10,
            scaleX: 0.90,
            ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 500,
            repeat: -1,            // -1: infinity
            yoyo: true,
            onStart:()=>{
                this.avatarContainer.scale = 1
            }
        });
        this.tweenWalk.pause();

        // Idle Walk Tween
        this.tweenWalkShadow = this.scene.tweens.add({
            targets: this.shadow,
            scaleX: 0.9,
            ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 500,
            repeat: -1,            // -1: infinity
            yoyo: true,
            onStart:()=>{
                this.shadow.scale = 1
            }
        });
        this.tweenWalkShadow.pause();
    }

    setAvatarState( newState: AvatarState ){
        if( newState == this.currentAvatarState ) return;
        
        this.stopCurrentState();

        switch (newState) {
            case AvatarState.IDLE:
                this.tweenIdle.play();
                this.tweenIdleShadow.play();

                // Eye Blink
                this.eye.play('blink');

                this.currentAvatarState = newState
                break;
            
            case AvatarState.WALK:
                this.tweenWalk.play();
                this.tweenWalkShadow.play();
                
                // Eye Blink
                this.eye.play('blink');

                this.currentAvatarState = newState
                break;

            case AvatarState.JUMP:
                // Jump Tween, Run Once
                this.tweenJump = this.scene.tweens.chain({
                    targets: this.avatarContainer,
                    tweens:[
                        {
                            scaleX: 1.1,
                            scaleY: 0.9,
                            ease: 'Cubic',  
                            duration: 200,
                            onStart:()=>{
                                this.avatarContainer.scale = 1;
                                this.eye.setTexture('avatarEye1');

                                this.tweenJumpShadow = this.scene.tweens.add({
                                    targets: this.shadow,
                                    scaleX: 1.1,
                                    ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                                    duration: 200,
                                    onStart:()=>{
                                        this.shadow.scale = 1
                                    }
                                });
                            }
                        },
                        {
                            scaleX: 0.85,
                            scaleY: 1.10,
                            ease: 'Cubic',  
                            duration: 200,
                            onStart:()=>{
                                this.avatarContainer.scale = 1;
                                this.eye.setTexture('avatarEye0');

                                if( this.tweenJumpShadow ){
                                    this.tweenJumpShadow.stop();
                                }

                                this.tweenJumpShadow = this.scene.tweens.add({
                                    targets: this.shadow,
                                    scaleX: 0.85,
                                    ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                                    duration: 200,
                                });
                            }
                        }
                    ]
                });

                this.currentAvatarState = newState
                break;

            case AvatarState.MIDAIR:
                
                this.avatarContainer.scaleX = 0.85;
                this.avatarContainer.scaleY = 1.10;
                this.shadow.scaleX = 0.85;

                // Eye Blink
                this.eye.play('blink');

                this.currentAvatarState = newState
                break;

            case AvatarState.FALL:
                // Fall Tween, Run Once
                this.tweenFall = this.scene.tweens.chain({
                    targets: this.avatarContainer,
                    tweens:[
                        {
                            scaleX: 1.10,
                            scaleY: 0.85,
                            ease: 'Cubic',  
                            duration: 200,
                            onStart:()=>{
                                this.avatarContainer.scaleX = 0.85;
                                this.avatarContainer.scaleY = 1.10;

                                this.tweenFallShadow = this.scene.tweens.add({
                                    targets: this.shadow,
                                    scaleX: 1.1,
                                    ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                                    duration: 200,
                                    onStart:()=>{
                                        this.shadow.scale = 1
                                    }
                                });
                            }
                        },
                        {
                            scaleX: 1,
                            scaleY: 1,
                            ease: 'Elastic',  
                            duration: 200,
                            onStart:()=>{
                                if( this.tweenFallShadow ){
                                    this.tweenFallShadow.stop();
                                }

                                this.tweenFallShadow = this.scene.tweens.add({
                                    targets: this.shadow,
                                    scaleX: 1,
                                    ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                                    duration: 200,
                                });
                            }
                        }
                    ]
                });

                this.currentAvatarState = newState
                break;
            
            case AvatarState.HURT:
                this.setEmojiMask(AvatarMask.PAIN);

                this.currentAvatarState = newState
                break;
            case AvatarState.FAINT:
                this.setEmojiMask(AvatarMask.DIZZY);

                this.currentAvatarState = newState
                break;
            case AvatarState.ATTACK:
                this.setEmojiMask(AvatarMask.SHOUT);

                this.currentAvatarState = newState
                break;
            case AvatarState.PUSH:
                this.avatarContainer.scaleX = 1.10;
                this.avatarContainer.scaleY = 0.85;
                this.shadow.scaleX = 1.10;

                this.setEmojiMask(AvatarMask.NERVOUS);

                this.currentAvatarState = newState
                break;
            default:
                break;
        }
    }

    stopCurrentState(){
        switch (this.currentAvatarState) {
            case AvatarState.IDLE:
                //
                this.tweenIdle.restart();
                this.tweenIdle.pause();

                this.tweenIdleShadow.restart();
                this.tweenIdleShadow.pause();

                this.eye.stop();
                this.eye.setTexture('avatarEye0');

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.WALK:
                //
                this.tweenWalk.restart();
                this.tweenWalk.pause();

                this.tweenWalkShadow.restart();
                this.tweenWalkShadow.pause();

                this.eye.stop();
                this.eye.setTexture('avatarEye0');

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.JUMP:
                this.eye.stop();
                this.eye.setTexture('avatarEye0');

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.MIDAIR:
                this.eye.stop();
                this.eye.setTexture('avatarEye0');

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.FALL:
                this.eye.stop();
                this.eye.setTexture('avatarEye0');

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.HURT:
                this.clearEmojiMask();

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.FAINT:
                this.clearEmojiMask();
                this.avatarContainer.scale = 1;

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.ATTACK:
                this.clearEmojiMask();

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.PUSH:
                this.avatarContainer.scale = 1;
                this.shadow.scaleX = 1;
                this.clearEmojiMask();

                this.currentAvatarState = AvatarState.NONE;
                break;
            default:
                break;
        }
    }

    setEmojiMask( maskKey: AvatarMask ){
        if( maskKey == this.currentAvatarMask ) return;

        this.clearEmojiMask();

        switch (maskKey) {
            case AvatarMask.SMILE:
                this.mouth.setVisible(false);

                this.emojiMask.setTexture('maskSmile');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.LAUGH:
                this.mouth.setVisible(false);

                this.emojiMask.setTexture('maskLaugh');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.LAUGHEYE:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskLaughWithEye');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.SMILEEYE:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskSmileWithEye');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.STAR:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskStar');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.ANGRY:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskAngry');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.MAD:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskMad');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.CRY:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskCry');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.SHOUT:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskShout');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.NERVOUS:
                this.groupFace.setVisible(false);

                this.emojiMask.play('animNervous');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.PAIN:
                this.groupFace.setVisible(false);

                this.emojiMask.setTexture('maskPain');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;
            
            case AvatarMask.DIZZY:
                this.groupFace.setVisible(false);

                this.emojiMask.play('animFaint');
                this.emojiMask.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;
            default:
                break;
        }
    }

    clearEmojiMask(){
        
        switch ( this.currentAvatarMask ) {
            case AvatarMask.NERVOUS:
                this.emojiMask.stop();
                break;
            case AvatarMask.DIZZY:
                this.emojiMask.stop();
                break;
            default:
                break;
        }

        this.emojiMask.setTexture('maskSmileWithEye');
        this.emojiMask.setVisible(false);
        this.groupFace.setVisible(true);

        this.currentAvatarMask = AvatarMask.NONE;
    }

    setDirection( direction: number ){
        if( direction > 0 ){
            this.base.setFlipX(false);
            this.baseStroke.setFlipX(false);
            this.eye.setFlipX(false);
            this.hair.setFlipX(false);
            this.mouth.setFlipX(false);
            this.cheek.setFlipX(false);
            this.shadow.setFlipX(false);
            this.emojiMask.setFlipX(false);
        }else if( direction < 0 ){
            this.base.setFlipX(true);
            this.baseStroke.setFlipX(true);
            this.eye.setFlipX(true);
            this.hair.setFlipX(true);
            this.mouth.setFlipX(true);
            this.cheek.setFlipX(true);
            this.shadow.setFlipX(true);
            this.emojiMask.setFlipX(true);
        }
    }

    clean(){
        //
    }
}