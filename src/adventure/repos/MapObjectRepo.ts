import { Scene } from "phaser"

/**
 * To Understand
 * - MapObject as isolated data for object which can be reused in maps
 *      - Only store rendering data (for sprite and anim)
 * - MapEntities as MapObject that already added into map
 *      - Store position data
 *      - Store action data?
 */
export class MapObject{
    key: string
    imagePath: string | null
    textureKey: string 
    textureType: string // image, spritesheet
    frameWidth?: number
    frameHeight?: number
    animationIdle? (scene:Scene, mapObject: MapObject): void
}

export class MapObjectRepo
{
    static mapObjects: MapObject[] = [
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
            animationIdle: (scene:Scene, mapObject: MapObject) => {

                console.log('Add Animation: ' + MapObjectRepo.getIdleAnimKey(mapObject) );
                scene.anims.create({
                    key: MapObjectRepo.getIdleAnimKey(mapObject),
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
        this.mapObjects.forEach(( mapObject )=>{
            if( mapObject.textureType == 'image' ){
                scene.load.image(
                    mapObject.textureKey,
                    folderPath + mapObject.imagePath
                );
            }else if( mapObject.textureType == 'spritesheet' ){
                if( mapObject.frameWidth != undefined && mapObject.frameHeight ){
                    scene.load.spritesheet(
                        mapObject.textureKey,
                        folderPath + mapObject.imagePath,
                        {
                            frameWidth: mapObject.frameWidth,
                            frameHeight: mapObject.frameHeight,
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
        this.mapObjects.forEach(( mapObject )=>{
            if( mapObject.animationIdle ){
                mapObject.animationIdle(scene,mapObject);
            }
        });
    }

    static getIdleAnimKey( object: MapObject ):string{
        return object.key + '_anim_idle';
    }

    static getMapObject( key:string ):MapObject | undefined{
        return this.mapObjects.find((mapObj)=> {return mapObj.key == key})
    }
}