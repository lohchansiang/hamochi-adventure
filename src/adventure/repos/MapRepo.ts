import { MapEndInterface } from "../components/Map/MapEnds/Interface/MapEndInterface"
import MapEntityConfig from "../components/Map/MapEntityConfigs/MapEntityConfig"
import { mapTemple } from "./data/maps/MapTemple"
import { mapVillage } from "./data/maps/MapVillage"

export class MapData{
    key: string
    defaultSpawn: number // Start spawn X
    mapStart: MapEndInterface
    mapEnd: MapEndInterface
    wallEndKey?: string
    layerSkyKey: string | null
    layerBackKey: string | null
    layerMainKeys: Array<string>
    backEntityList: Array<MapEntityConfig> 
    frontEntityList: Array<MapEntityConfig> 
    
}

export class MapRepo
{
    static maps: MapData[] = [
        mapTemple,
        mapVillage
    ]
   
    constructor ()
    {

    }

    static getMapData( key:string ):MapData | undefined{
        return this.maps.find((mapObj)=> {return mapObj.key == key})
    }
}