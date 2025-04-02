import { MapActionExit } from "../../MapActions/MapActionExit"
import MapEntityConfig from "../../MapEntityConfigs/MapEntityConfig"

export interface MapEndInterface {
    /**
     * MapEndInterface 
     * - Map End, Wall or teleport
     * - Example: Teleport, cut tree, or other interact action
     */
    key: MapEndKey
    mapKey?: string | undefined
    spawnKey?: string | undefined
    wallConfigs( positionX: number, side: MapEndSide ): Array<MapEntityConfig>
}

export enum MapEndSide{
    LEFT,
    RIGHT
}

export enum MapEndKey{
    WALL,
    EXIT
}