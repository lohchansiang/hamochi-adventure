import { GameObjects } from "phaser";
import { MapActionInterface } from "../MapActions/Interface/MapActionInterface";
import MapEntityConfig from "./MapEntityConfig";

export interface MapEntity {
    /**
     * MapEntity  
    */
    isReady: boolean
    isMiniMap: boolean
    //
    getContainer():GameObjects.Container
    getAction():MapActionInterface | null
    isCollided( currentX:number ):boolean
    setActive( isActive:boolean ):void
    getConfig():MapEntityConfig
}
