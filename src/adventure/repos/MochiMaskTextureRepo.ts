import { Scene } from "phaser"

export class MochiMaskTextureRepo
{
    static preload( scene: Phaser.Scene ){
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

    constructor ()
    {
        
    }
}