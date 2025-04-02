import { MapActionInterface } from "../MapActions/Interface/MapActionInterface"

export default interface MapEntityConfig{
    /**
     * MapEntityConfig:
     * - Config data used to generate MapEntity
     * - Written into MapData for generate Map
     */
    type: MapEntityType // Type is not important, just as group types
    mapObjectKey: string
    x: number
    y: number
    isFlip: boolean
    collisionRange: number
    showCollision?: boolean
    label? : string
    spawnKey? : string
    action? : MapActionInterface
}

export enum MapEntityType{
    DECO,
    INTERACT, 
    BLOCK, // Block movement
}