import { IMapEnd } from "../interfaces/IMapEnd"
import { IMapEntityConfig } from "../interfaces/IMapEntityConfig"
import { mapTemple } from "./data/maps/MapTemple"
import { mapVillage } from "./data/maps/MapVillage"

export class MapData{
    key: string
    defaultSpawn: number // Start spawn X
    mapStart: IMapEnd
    mapEnd: IMapEnd
    wallEndKey?: string
    layerSkyKey: string | null
    layerBackKey: string | null
    layerMainKeys: Array<string>
    backEntityList: Array<IMapEntityConfig> 
    frontEntityList: Array<IMapEntityConfig> 
    
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