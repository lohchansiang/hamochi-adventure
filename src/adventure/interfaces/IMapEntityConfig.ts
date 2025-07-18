import { IMapAction } from "./IMapAction"

export interface IMapEntityConfig{
    /**
     * MapEntityConfig:
     * - Config data used to generate MapEntity
     * - Written into MapData for generate Map
     */
    type: MapEntityType // Type is not important, just as group types
    mapObjectKey: string // mapObjectKey / CharacterKey
    x: number
    y: number
    isFlip: boolean
    collisionRange: number
    showCollision?: boolean
    label? : string
    spawnKey? : string
    action? : IMapAction
}

export enum MapEntityType{
    DECO,
    INTERACT,
    NPC,
    ENEMY,
    BLOCK, // Block movement
}