import { MapActionExit } from "../MapActions/MapActionExit";
import MapEntityConfig from "../MapEntityConfigs/MapEntityConfig";
import { MapEndInterface, MapEndKey, MapEndSide } from "./Interface/MapEndInterface"

export class MapEndExit implements MapEndInterface{
    key: MapEndKey
    mapKey: string | undefined
    spawnKey: string | undefined

    constructor( mapKey?:string, spawnKey?:string ){
        this.key = MapEndKey.EXIT
        this.mapKey = mapKey
        this.spawnKey = spawnKey
    }

    wallConfigs(positionX: number, side: MapEndSide): Array<MapEntityConfig>{
        // Should be no wall object
        let offset: number = 125; // 
        return [
            
        ];
    }
}