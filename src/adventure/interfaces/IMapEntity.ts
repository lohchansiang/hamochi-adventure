import { GameObjects } from "phaser";
import { IMapAction } from "./IMapAction";
import { IMapEntityConfig } from "./IMapEntityConfig";

export interface IMapEntity {
    /**
     * MapEntity  
    */
    isReady: boolean
    isMiniMap: boolean
    //
    getContainer():GameObjects.Container
    getActions(): Array<IMapAction>
    isCollided( currentX:number ):boolean
    setActive( isActive:boolean ):void
    getConfig():IMapEntityConfig
}
