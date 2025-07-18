import { GameObjects, Scene, Tweens } from "phaser";
import { AvatarMask, AvatarState } from "./AvatarEnum";
import { CharacterData, CharacterRepo, MochiAvatarData } from "@/adventure/repos/CharacterRepo";
import AvatarMaskRenderer from "./AvatarMochiMaskRenderer";
import { MochiTextureRepo } from "@/adventure/repos/MochiTextureRepo";
import { IAvatar } from "../../interfaces/IAvatar";

export default class AvatarMochiRenderer implements IAvatar{
    static preload( scene: Scene ){
        //
    }

    private scene: Scene
    private width:number = 300
    private height:number = 500
    private oriX: number
    private oriY: number
    //
    private container: GameObjects.Container
    private avatarContainer: GameObjects.Container
    //
    private base: GameObjects.Sprite
    private baseStroke: GameObjects.Sprite
    private eye: GameObjects.Sprite
    private hair: GameObjects.Sprite
    private mouth: GameObjects.Sprite
    private cheek: GameObjects.Sprite
    private shadow: GameObjects.Sprite
    // Mask
    private avatarMask: AvatarMaskRenderer
    // Groups
    private groupFace: GameObjects.Group
    // States
    private currentAvatarState: AvatarState
    // Animations
    private tweenIdle: Tweens.Tween
    private tweenIdleShadow: Tweens.Tween
    private tweenWalk: Tweens.Tween
    private tweenWalkShadow: Tweens.Tween
    private tweenJump: Tweens.TweenChain
    private tweenJumpShadow: Tweens.Tween
    private tweenFall: Tweens.TweenChain
    private tweenFallShadow: Tweens.Tween
    //
    private charData: CharacterData | undefined

    constructor(scene:Scene, x: number, y: number ){
        this.scene = scene;
        this.oriX = x;
        this.oriY = y;

        this.container = this.scene.add.container(x,y);
        this.avatarContainer = scene.add.container(0,0);
        this.container.add(this.avatarContainer);
    }

    renderAvatar( characterKey:string ){
        // Get Avatar Data
        this.charData = CharacterRepo.getCharacterData( characterKey );

        if( this.charData && this.charData.avatarMochi ){
            let bodyBaseTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.bodyBase);
            let bodyStrokeTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.bodyStroke);
            let mouthTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.mouth);
            let eyeTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.eye);

            this.base = this.scene.add.sprite(0,0,bodyBaseTexture).setTint(this.charData.avatarMochi.bodyColor).setOrigin(0.5,1);
            this.baseStroke = this.scene.add.sprite(0,0,bodyStrokeTexture).setOrigin(0.5,1);
            this.mouth = this.scene.add.sprite(0,0,mouthTexture).setOrigin(0.5,1);
            this.eye = this.scene.add.sprite(0,0,eyeTexture).setOrigin(0.5,1);
            this.avatarContainer.add(this.base);
            this.avatarContainer.add(this.baseStroke);
            this.avatarContainer.add(this.mouth);
            this.avatarContainer.add(this.eye);
            
            if( this.charData.avatarMochi.hair.length > 0 ){
                let hairTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.hair[0]);

                this.hair = this.scene.add.sprite(0,0,hairTexture).setOrigin(0.5,1);
                this.avatarContainer.add(this.hair);

                if( this.charData.avatarMochi.hairColor != undefined ){
                    this.hair.setTint(this.charData.avatarMochi.hairColor);
                }
            }

            let bodyCheekTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.cheek);
            let bodyShadowTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.shadow);
            this.cheek = this.scene.add.sprite(0,0,bodyCheekTexture).setOrigin(0.5,1);
            this.shadow = this.scene.add.sprite(0,0,bodyShadowTexture).setOrigin(0.5,1);
            
            this.avatarContainer.add(this.cheek);

            this.groupFace = this.scene.add.group();
            this.groupFace.add(this.eye);
            this.groupFace.add(this.mouth);

            this.container.add(this.shadow);
            this.container.sendToBack(this.shadow);

            this.avatarMask = new AvatarMaskRenderer(this.scene,this);
            this.avatarContainer.add(this.avatarMask.getContainer());

            this.container.setScale(0.4);
            this.prepareAnims();    

            this.setAvatarState(AvatarState.IDLE);
        }
    }

    private prepareAnims(){
        // Blink Animation
        if( this.charData && this.charData.avatarMochi ){
            let eyeTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.eye);
            let eyeBlinkTexture: string = MochiTextureRepo.getTextureKey(this.charData.avatarMochi.eyeBlink);

            this.eye.anims.create({
                key: 'blink',
                frames: [
                    { key: eyeTexture },
                    { key: eyeBlinkTexture },
                ],
                duration: 500,
                repeat: -1,
                repeatDelay: 5000,
                yoyo: true,
            });

            // Hair Animation, if have
            if( this.charData.avatarMochi.hair && this.charData.avatarMochi.hair.length > 1 ){
                // Prepare Frames
                let frames: { key: string; }[] = [];
                this.charData.avatarMochi.hair.forEach((textureKey: string)=>{
                    frames.push({key: MochiTextureRepo.getTextureKey(textureKey) });
                });

                this.hair.anims.create({
                    key: 'animHair',
                    frames: frames,
                    duration: 500,
                    repeat: -1,
                    repeatDelay: 5000,
                    yoyo: true,
                });
            }
        }

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
                this.avatarMask.setEmojiMask(AvatarMask.PAIN);

                this.currentAvatarState = newState
                break;
            case AvatarState.FAINT:
                this.avatarMask.setEmojiMask(AvatarMask.DIZZY);

                this.currentAvatarState = newState
                break;
            case AvatarState.ATTACK:
                this.avatarMask.setEmojiMask(AvatarMask.SHOUT);

                this.currentAvatarState = newState
                break;
            case AvatarState.PUSH:
                this.avatarContainer.scaleX = 1.10;
                this.avatarContainer.scaleY = 0.85;
                this.shadow.scaleX = 1.10;

                this.avatarMask.setEmojiMask(AvatarMask.NERVOUS);

                this.currentAvatarState = newState
                break;
            case AvatarState.HIDDEN:
                this.scene.tweens.add({
                    targets: [this.avatarContainer, this.shadow],
                    alpha: 0,
                    ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: 500,
                    onStart:()=>{
                        this.avatarContainer.alpha = 1
                        this.shadow.alpha = 1
                    }
                });

                // Eye Blink
                this.eye.play('blink');

                this.currentAvatarState = newState
                break;
            case AvatarState.APPEAR:
                this.scene.tweens.add({
                    targets: [this.avatarContainer, this.shadow],
                    alpha: 1,
                    ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: 500,
                    onStart:()=>{
                        this.avatarContainer.alpha = 0
                        this.shadow.alpha = 0
                    }
                });

                // Eye Blink
                this.eye.play('blink');

                this.currentAvatarState = newState
                break;
            default:
                break;
        }
    }

    private stopCurrentState(){
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
                this.avatarMask.clearEmojiMask();

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.FAINT:
                this.avatarMask.clearEmojiMask();
                this.avatarContainer.scale = 1;

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.ATTACK:
                this.avatarMask.clearEmojiMask();

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.PUSH:
                this.avatarContainer.scale = 1;
                this.shadow.scaleX = 1;
                this.avatarMask.clearEmojiMask();

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.HIDDEN:
                this.eye.stop();
                this.eye.setTexture('avatarEye0');

                this.currentAvatarState = AvatarState.NONE;
                break;
            case AvatarState.APPEAR:
                this.eye.stop();
                this.eye.setTexture('avatarEye0');

                this.currentAvatarState = AvatarState.NONE;
                break;
            default:
                break;
        }
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
            this.avatarMask.setFlipX(false);
        }else if( direction < 0 ){
            this.base.setFlipX(true);
            this.baseStroke.setFlipX(true);
            this.eye.setFlipX(true);
            this.hair.setFlipX(true);
            this.mouth.setFlipX(true);
            this.cheek.setFlipX(true);
            this.shadow.setFlipX(true);
            this.avatarMask.setFlipX(true);
        }
    }

    setEmojiMask( maskKey: AvatarMask ){
        this.avatarMask.setEmojiMask(maskKey);
    }

    hideFace( faceKey: string = 'all' ){
        if( faceKey == 'eye' ){
            this.eye.setVisible(false);
        }else if( faceKey == 'mouth' ){
            this.mouth.setVisible(false);
        }else if( faceKey == 'all' ){
            this.groupFace.setVisible(false);
        }
    }

    showFace(){
        this.groupFace.setVisible(true);
    }

    clean(){
        //
    }

    setPositionX( x:number ){
        this.container.x = x
    }

    getContainer(): GameObjects.Container{
        return this.container;
    }
}