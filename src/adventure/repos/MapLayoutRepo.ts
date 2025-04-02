import { Scene } from "phaser"

export class MapLayout{
    key: string
    imagePath: string | null
    textureKey: string 
}

export class MapLayoutRepo
{
    static mapLayouts: MapLayout[] = [
        {
            key: 'mapLayerSkyGarden',
            imagePath: 'garden/LayerSky.png',
            textureKey: 'LayerSkyGarden',
        },
        {
            key: 'mapLayerBackGarden',
            imagePath: 'garden/LayerBack.png',
            textureKey: 'LayerBackGarden',
        },
        {
            key: 'mapLayerMainGarden',
            imagePath: 'garden/LayerMain.png',
            textureKey: 'LayerMainGarden',
        },
        //
        {
            key: 'mapLayerBackTemple',
            imagePath: 'temple/LayerBackX2.png',
            textureKey: 'LayerBackTemple',
        },
        {
            key: 'mapLayerMainTemple',
            imagePath: 'temple/LayerMain.png',
            textureKey: 'LayerMainTemple',
        },
    ]

    static preload( scene: Phaser.Scene ){
        // 
        let folderPath: string = '/assets/adventure/maps/layouts/'
        this.mapLayouts.forEach(( mapLayout )=>{
            scene.load.image(
                mapLayout.textureKey,
                folderPath + mapLayout.imagePath
            );
        });
    }

    constructor ()
    {
        
    }

    static getMapLayout( key:string ):MapLayout | undefined{
        return this.mapLayouts.find((mapLayout)=> {return mapLayout.key == key})
    }

    static getTextureKey( key:string ):string | null{
        let textureKey: string |null = null
        let layout:MapLayout|undefined = MapLayoutRepo.getMapLayout( key );

        if( layout ){
            textureKey = layout.textureKey;
        }
        
        return textureKey; 
    }
}