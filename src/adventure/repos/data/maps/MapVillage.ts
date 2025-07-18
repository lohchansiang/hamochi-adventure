import { MEC_Portal } from "@/adventure/components/Map/MapEntityConfigs/Interacts/MEC_Portal";
import { MapData } from "../../MapRepo";
import { MapEndBarricade } from "@/adventure/components/Map/MapEnds/MapEndBarricade";
import { MapActionTeleport } from "@/adventure/components/Map/MapActions/MapActionTeleport";
import { MapEndExit } from "@/adventure/components/Map/MapEnds/MapEndExit";
import { MapActionExit } from "@/adventure/components/Map/MapActions/MapActionExit";
import { MEC_NpcOwl } from "@/adventure/components/Map/MapEntityConfigs/Npcs/MEC_NpcOwl";
import { MEC_NpcKaty } from "@/adventure/components/Map/MapEntityConfigs/Npcs/MEC_NpcKaty";
import { MEC_NpcBeary } from "@/adventure/components/Map/MapEntityConfigs/Npcs/MEC_NpcBeary";
import { MEC_NpcRuby } from "@/adventure/components/Map/MapEntityConfigs/Npcs/MEC_NpcRuby";
import { MEC_EnemyBear } from "@/adventure/components/Map/MapEntityConfigs/Enemys/MEC_EnemyBear";

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
            new MEC_Portal(900,'Temple','temple_to_village',new MapActionTeleport('teleport',{mapKey:'temple',spawnKey:'temple_to_village'})),
            new MEC_NpcOwl(1500),
            new MEC_NpcKaty(4000),
            new MEC_NpcBeary(4500),
            new MEC_NpcRuby(5000),
            new MEC_EnemyBear(2500),
        ],
        frontEntityList: [
            //
        ]
    }