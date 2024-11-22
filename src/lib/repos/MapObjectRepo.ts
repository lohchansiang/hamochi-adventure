export class MapObject{
    key: string
    imagePath: string | null
    textureKey: string 
}

export class MapObjectRepo
{
    static mapObjects: MapObject[] = [
        {
            key: 'baricade',
            imagePath: 'Baricade.png',
            textureKey: 'baricade',
        },
        {
            key: 'signboardNext',
            imagePath: 'SignboardNext.png',
            textureKey: 'signboardNext',
        },
        {
            key: 'buildingMushroom',
            imagePath: 'MushroomHouse.png',
            textureKey: 'buildingMushroom',
        },
        {
            key: 'gateBack',
            imagePath: 'GateBack.png',
            textureKey: 'gateBack',
        },
        {
            key: 'gateFront',
            imagePath: 'GateFront.png',
            textureKey: 'gateFront',
        },
    ]

    static preload( scene: Phaser.Scene ){
        // 
        let folderPath: string = '/assets/adventure/maps/objects/'
        this.mapObjects.forEach(( mapObject )=>{
            scene.load.image(mapObject.textureKey,folderPath + mapObject.imagePath);
        });
    }

    constructor ()
    {
        
    }

    static getMapObject( key:string ):MapObject | undefined{
        return this.mapObjects.find((mapObj)=> {return mapObj.key == key})
    }
}