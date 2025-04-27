import { Scene } from "phaser"

export class AvatarTexture{
    key: string
    imagePath: string | null
    textureType: string // image, spritesheet
    frameWidth?: number
    frameHeight?: number
}

export class AvatarTextureRepo
{
    static textures: AvatarTexture[] = [
        {
            key: 'empty',
            imagePath: 'Empty.png',
            textureType: 'image'
        },
        {
            key: 'defaultCheek',
            imagePath: 'CC0000_default.png',
            textureType: 'image'
        },
        {
            key: 'defaultEye',
            imagePath: 'CE0000_default.png',
            textureType: 'image'
        },
        {
            key: 'defaultEyeBlink',
            imagePath: 'CE0000_default_F1.png',
            textureType: 'image'
        },
        {
            key: 'defaultMouth',
            imagePath: 'CM0030_default.png',
            textureType: 'image'
        },
        {
            key: 'defaultHair',
            imagePath: 'CH0000_default.png',
            textureType: 'image'
        },
        {
            key: 'defaultShadow',
            imagePath: 'CS0000_default.png',
            textureType: 'image'
        },
        {
            key: 'hamochiBody',
            imagePath: 'hamster/CB0030_hamster.png',
            textureType: 'image'
        },
        {
            key: 'hamochiBodyStroke',
            imagePath: 'hamster/CB0030_hamster_stroke.png',
            textureType: 'image'
        },
        {
            key: 'hamochiHair',
            imagePath: 'hamster/CH0030_hamster.png',
            textureType: 'image'
        },
        {
            key: 'owlBody',
            imagePath: 'owl/CB0050_owl_F0.png',
            textureType: 'image'
        },
        {
            key: 'owlBodyStroke',
            imagePath: 'owl/CO0050_owl_F0.png',
            textureType: 'image'
        },
        {
            key: 'owlMouth',
            imagePath: 'owl/CM0050_owl_F0.png',
            textureType: 'image'
        },
        // Cat
        {
            key: 'catBody',
            imagePath: 'cat/CB0030_cat_color.png',
            textureType: 'image'
        },
        {
            key: 'catBodyStroke',
            imagePath: 'cat/CB0030_cat_line.png',
            textureType: 'image'
        },
        {
            key: 'catMouth',
            imagePath: 'cat/CB0030_cat_mouth.png',
            textureType: 'image'
        },
        // Rabbit
        {
            key: 'rabbitBody',
            imagePath: 'rabbit/CB0040_rabbit_color.png',
            textureType: 'image'
        },
        {
            key: 'rabbitBodyStroke',
            imagePath: 'rabbit/CB0040_rabbit_line.png',
            textureType: 'image'
        },
        {
            key: 'rabbitMouth',
            imagePath: 'rabbit/CB0040_rabbit_mouth.png',
            textureType: 'image'
        },
        // Bear
        {
            key: 'bearBody',
            imagePath: 'bear/CB0020_bear_color.png',
            textureType: 'image'
        },
        {
            key: 'bearBodyStroke',
            imagePath: 'bear/CB0020_bear_line.png',
            textureType: 'image'
        },
        {
            key: 'bearMouth',
            imagePath: 'bear/CB0020_bear_mouth.png',
            textureType: 'image'
        },
    ]

    static preload( scene: Phaser.Scene ){
        // 
        let folderPath: string = '/assets/adventure/components/avatar/'
        this.textures.forEach(( texture )=>{
            if( texture.textureType == 'image' ){
                scene.load.image(
                    AvatarTextureRepo.getTextureKey( texture.key ),
                    folderPath + texture.imagePath
                );
            }else if( texture.textureType == 'spritesheet' ){
                if( texture.frameWidth != undefined && texture.frameHeight ){
                    scene.load.spritesheet(
                        AvatarTextureRepo.getTextureKey( texture.key ),
                        folderPath + texture.imagePath,
                        {
                            frameWidth: texture.frameWidth,
                            frameHeight: texture.frameHeight,
                        }
                    );
                }
            }
        });
    }

    constructor ()
    {
        
    }
    
    static getTextureKey( textureKey: string ){
        const prefix: string = 'avatar_';
        return prefix + textureKey;
    }
}