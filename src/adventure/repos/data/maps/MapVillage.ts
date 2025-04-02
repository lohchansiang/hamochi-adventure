import { MEC_Portal } from "@/adventure/components/Map/MapEntityConfigs/Interacts/MEC_Portal";
import { MapData } from "../../MapRepo";
import { MapEndBarricade } from "@/adventure/components/Map/MapEnds/MapEndBarricade";
import { MapActionTeleport } from "@/adventure/components/Map/MapActions/MapActionTeleport";
import { MapEndExit } from "@/adventure/components/Map/MapEnds/MapEndExit";
import { MapActionExit } from "@/adventure/components/Map/MapActions/MapActionExit";

export const mapVillage: MapData =  {
        key: 'village',
        defaultSpawn: 1000,
        mapStart: new MapEndExit( 'village', 'right' ),
        mapEnd: new MapEndExit( 'village','left' ),
        layerSkyKey: 'mapLayerSkyGarden',
        layerBackKey: 'mapLayerBackGarden',
        layerMainKeys: [
            'mapLayerMainGarden',
            'mapLayerMainGarden',
            'mapLayerMainGarden',
        ],
        backEntityList: [
            new MEC_Portal(900,'Temple','temple_to_village',new MapActionTeleport('teleport','temple','temple_to_village'))
            // {
            //     type: 'deco',
            //     mapObjectKey: 'baricade',
            //     x: 450,
            //     y: -100,
            //     isFlip: false,
            //     collisionRange: 0,
            // },
            // {
            //     type: 'deco',
            //     mapObjectKey: 'baricade',
            //     x: 450,
            //     y: 0,
            //     isFlip: false,
            //     collisionRange: 0,
            // },
            // {
            //     type: 'building',
            //     mapObjectKey: 'templePortal',
            //     x: 900,
            //     y: -150,
            //     isFlip: false,
            //     collisionRange: 200,
            //     showCollision: true,
            //     label: "Temple",
            //     spawnKey: 'temple_to_village',
            //     action: new MapActionTeleport('teleport','temple','village_to_temple')
            // },
            // {
            //     type: 'deco',
            //     mapObjectKey: 'signboardNext',
            //     x: 2500,
            //     y: -200,
            //     isFlip: false,
            //     collisionRange: 0,
            // },
            // {
            //     type: 'deco',
            //     mapObjectKey: 'gateBack',
            //     x: 5000,
            //     y: 0,
            //     isFlip: false,
            //     collisionRange: 0,
            // },
            // {
            //     type: 'building',
            //     mapObjectKey: 'buildingMushroom',
            //     x: 7000,
            //     y: -200,
            //     isFlip: false,
            //     collisionRange: 300,
            //     showCollision: true,
            //     label: "MUSHROOM HOUSE",
            //     // action: new MapActionTeleport('Temple','temple')
            // },
        ],
        frontEntityList: [
            // {
            //     type: 'deco',
            //     mapObjectKey: 'gateFront',
            //     x: 5000,
            //     y: 0,
            //     isFlip: false,
            //     collisionRange: 0,
            // },
        ]
    }