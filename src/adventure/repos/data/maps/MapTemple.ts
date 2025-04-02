import { MapActionTeleport } from "@/adventure/components/Map/MapActions/MapActionTeleport";
import { MapData } from "../../MapRepo";
import { MapEndTempleWall } from "@/adventure/components/Map/MapEnds/MapEndTempleWall";
import { MEC_TempleColumn } from "@/adventure/components/Map/MapEntityConfigs/Decos/MEC_TempleColumn";
import { MEC_TempleDoorBack } from "@/adventure/components/Map/MapEntityConfigs/Decos/MEC_TempleDoorBack";
import { MEC_TempleDoorFront } from "@/adventure/components/Map/MapEntityConfigs/Decos/MEC_TempleDoorFront";
import { MEC_Torch } from "@/adventure/components/Map/MapEntityConfigs/Decos/MEC_Torch";
import { MEC_Portal } from "@/adventure/components/Map/MapEntityConfigs/Interacts/MEC_Portal";

export const mapTemple: MapData =  {
        key: 'temple',
        defaultSpawn: 1000,
        mapStart: new MapEndTempleWall(),
        mapEnd: new MapEndTempleWall(),
        layerSkyKey: null,
        layerBackKey: 'mapLayerBackTemple',
        layerMainKeys: [
            'mapLayerMainTemple',
            'mapLayerMainTemple',
        ],
        backEntityList: [
            new MEC_TempleColumn(1200),
            new MEC_TempleColumn(2400),
            new MEC_TempleColumn(3600),
            new MEC_TempleColumn(4800),
            new MEC_Torch(1200),
            new MEC_Torch(2400),
            new MEC_Torch(3600),
            new MEC_Torch(4800),
            new MEC_TempleDoorBack(4000),
            new MEC_Portal(900,'Village','temple_to_village',new MapActionTeleport('teleport','village','temple_to_village'))
            // {
            //     type: 'deco',
            //     mapObjectKey: 'fence',
            //     x: 1500,
            //     y: -50,
            //     isFlip: true,
            //     collisionRange: 50,
            // },
        ],
        frontEntityList: [
            new MEC_TempleDoorFront(4000),
        ]
    }

    // this.backEntityList.forEach((entity) => {
    //     switch (entity.refKey) {
    //         case 'startPortal':
    //             if( entity.mapObjectData ){
    //                 scene.anims.create({
    //                     key: "portalDefault",
    //                     frameRate: 3,
    //                     frames: scene.anims.generateFrameNumbers(entity.mapObjectData.textureKey, { start: 0, end: 2 }),
    //                     repeat: -1
    //                 });

    //                 entity.itemRef?.play('portalDefault')
    //             }
    //             break;
        
    //         default:
    //             break;
    //     }
        
    // })