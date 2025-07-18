import { IMapEntityConfig } from "@/adventure/interfaces/IMapEntityConfig"
import { IMapEnd, MapEndKey, MapEndSide } from "../../../interfaces/IMapEnd"

export class MapEndExit implements IMapEnd{
    key: MapEndKey
    mapKey: string | undefined
    spawnKey: string | undefined

    constructor( mapKey?:string, spawnKey?:string ){
        this.key = MapEndKey.EXIT
        this.mapKey = mapKey
        this.spawnKey = spawnKey
    }

    wallConfigs(positionX: number, side: MapEndSide): Array<IMapEntityConfig>{
        // Should be no wall object
        let offset: number = 125; // 
        return [
            
        ];
    }
}