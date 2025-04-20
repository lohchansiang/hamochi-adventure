import { Scene } from "phaser"

/**
 * To Understand
 * - MapObject as isolated data for object which can be reused in maps
 *      - Only store rendering data (for sprite and anim)
 * - MapEntities as MapObject that already added into map
 *      - Store position data
 *      - Store action data?
 */
export class MapObjectTexture{
    key: string
    imagePath: string | null
    textureKey: string 
    textureType: string // image, spritesheet
    frameWidth?: number
    frameHeight?: number
    animationIdle? (scene:Scene, mapObject: MapObjectTexture): void
}

export class MapObjectTextureRepo
{
    static mapObjectTextures: MapObjectTexture[] = [
        {
            key: 'baricade',
            imagePath: 'Baricade.png',
            textureKey: 'baricade',
            textureType: 'image'
        },
        {
            key: 'fence',
            imagePath: 'Fence.png',
            textureKey: 'fence',
            textureType: 'image'
        },
        {
            key: 'templeWall',
            imagePath: 'TempleWall.png',
            textureKey: 'templeWall',
            textureType: 'image'
        },
        {
            key: 'signboardNext',
            imagePath: 'SignboardNext.png',
            textureKey: 'signboardNext',
            textureType: 'image'
        },
        {
            key: 'buildingMushroom',
            imagePath: 'MushroomHouse.png',
            textureKey: 'buildingMushroom',
            textureType: 'image'
        },
        {
            key: 'gateBack',
            imagePath: 'GateBack.png',
            textureKey: 'gateBack',
            textureType: 'image'
        },
        {
            key: 'gateFront',
            imagePath: 'GateFront.png',
            textureKey: 'gateFront',
            textureType: 'image'
        },
        {
            key: 'templeDoorBack',
            imagePath: 'TempleDoorBackX2.png',
            textureKey: 'templeDoorBack',
            textureType: 'image'
        },
        {
            key: 'templeDoorFront',
            imagePath: 'TempleDoorFrontX2.png',
            textureKey: 'templeDoorFront',
            textureType: 'image'
        },
        {
            key: 'templeTorch',
            imagePath: 'TempleTorch.png',
            textureKey: 'templeTorch',
            textureType: 'image',
        },
        {
            key: 'templeColumn',
            imagePath: 'TempleColumn.png',
            textureKey: 'templeColumn',
            textureType: 'image',
        },
        {
            key: 'templePortal',
            imagePath: 'SpritesheetPortal.png',
            textureKey: 'SpritesheetPortal',
            textureType: 'spritesheet',
            frameWidth: 250,
            frameHeight: 350,
            animationIdle: (scene:Scene, mapObject: MapObjectTexture) => {

                console.log('Add Animation: ' + MapObjectTextureRepo.getIdleAnimKey(mapObject) );
                scene.anims.create({
                    key: MapObjectTextureRepo.getIdleAnimKey(mapObject),
                    frameRate: 3,
                    frames: scene.anims.generateFrameNumbers(mapObject.textureKey, { start: 0, end: 2 }),
                    repeat: -1
                });
            }
        },
    ]

    static preload( scene: Phaser.Scene ){
        // 
        let folderPath: string = '/assets/adventure/maps/objects/'
        this.mapObjectTextures.forEach(( mapObjectTexture )=>{
            if( mapObjectTexture.textureType == 'image' ){
                scene.load.image(
                    mapObjectTexture.textureKey,
                    folderPath + mapObjectTexture.imagePath
                );
            }else if( mapObjectTexture.textureType == 'spritesheet' ){
                if( mapObjectTexture.frameWidth != undefined && mapObjectTexture.frameHeight ){
                    scene.load.spritesheet(
                        mapObjectTexture.textureKey,
                        folderPath + mapObjectTexture.imagePath,
                        {
                            frameWidth: mapObjectTexture.frameWidth,
                            frameHeight: mapObjectTexture.frameHeight,
                        }
                    );
                }
            }
        });
    }

    constructor ()
    {
        
    }
    
    static prepareAnims( scene: Scene ){
        // Prepare Animation
        this.mapObjectTextures.forEach(( mapObjectTexture )=>{
            if( mapObjectTexture.animationIdle ){
                mapObjectTexture.animationIdle(scene,mapObjectTexture);
            }
        });
    }

    static getIdleAnimKey( object: MapObjectTexture ):string{
        return object.key + '_anim_idle';
    }

    static getMapObject( key:string ):MapObjectTexture | undefined{
        return this.mapObjectTextures.find((mapObjectTexture)=> {return mapObjectTexture.key == key})
    }
}