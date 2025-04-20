import { GameObjects, Scene } from "phaser";
import { AvatarMask } from "./AvatarEnum";
import AvatarRenderer from "./AvatarRenderer";

export default class AvatarMaskRenderer{
    static preload( scene: Scene ){
        // Image load at AvatarMaskTextureRepo
    }

    private scene: Scene
    private avatar: AvatarRenderer
    private container: GameObjects.Container
    private maskSprite: GameObjects.Sprite
    private currentAvatarMask: AvatarMask

    constructor(scene:Scene, avatar: AvatarRenderer ){
        this.scene = scene;
        this.avatar = avatar;

        this.container = this.scene.add.container(0,0);
        this.maskSprite = this.scene.add.sprite(0,0,'maskPain').setOrigin(0.5,1);

        this.container.add(this.maskSprite);

        this.prepareAnims();
        this.clearEmojiMask();
    }

    private prepareAnims(){
        // Faint Animation
        this.maskSprite.anims.create({
            key: 'animFaint',
            frameRate: 5,
            frames: this.scene.anims.generateFrameNumbers("spritesheetMaskFaint", { start: 0, end: 2 }),
            repeat: -1,
        });

        // Nervous Animation
        this.maskSprite.anims.create({
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
    }
    
    getContainer(): GameObjects.Container{
        return this.container;
    }

    setEmojiMask( maskKey: AvatarMask ){
        if( maskKey == this.currentAvatarMask ) return;

        this.clearEmojiMask();

        switch (maskKey) {
            case AvatarMask.SMILE:
                this.avatar.hideFace('mouth');

                this.maskSprite.setTexture('maskSmile');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.LAUGH:
                this.avatar.hideFace('mouth');

                this.maskSprite.setTexture('maskLaugh');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.LAUGHEYE:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskLaughWithEye');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.SMILEEYE:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskSmileWithEye');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.STAR:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskStar');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.ANGRY:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskAngry');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.MAD:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskMad');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.CRY:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskCry');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.SHOUT:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskShout');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.NERVOUS:
                this.avatar.hideFace();

                this.maskSprite.play('animNervous');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;

            case AvatarMask.PAIN:
                this.avatar.hideFace();

                this.maskSprite.setTexture('maskPain');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;
            
            case AvatarMask.DIZZY:
                this.avatar.hideFace();

                this.maskSprite.play('animFaint');
                this.maskSprite.setVisible(true);

                this.currentAvatarMask = maskKey;
                break;
            default:
                break;
        }
    }

    clearEmojiMask(){
        
        switch ( this.currentAvatarMask ) {
            case AvatarMask.NERVOUS:
                this.maskSprite.stop();
                break;
            case AvatarMask.DIZZY:
                this.maskSprite.stop();
                break;
            default:
                break;
        }

        this.maskSprite.setTexture('maskSmileWithEye');
        this.maskSprite.setVisible(false);
        this.avatar.showFace();

        this.currentAvatarMask = AvatarMask.NONE;
    }

    setFlipX(isFilp:boolean){
        this.maskSprite.setFlipX(isFilp);
    }
}