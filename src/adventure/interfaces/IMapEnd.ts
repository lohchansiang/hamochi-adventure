import { IMapEntityConfig } from "./IMapEntityConfig"

export interface IMapEnd {
    /**
     * MapEndInterface 
     * - Map End, Wall or teleport
     * - Example: Teleport, cut tree, or other interact action
     */
    key: MapEndKey
    mapKey?: string | undefined
    spawnKey?: string | undefined
    wallConfigs( positionX: number, side: MapEndSide ): Array<IMapEntityConfig>
}

export enum MapEndSide{
    LEFT,
    RIGHT
}

export enum MapEndKey{
    WALL,
    EXIT
}