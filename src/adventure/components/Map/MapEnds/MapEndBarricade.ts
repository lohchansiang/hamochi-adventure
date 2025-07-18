import { MEC_Barricade } from "../MapEntityConfigs/Blocks/MEC_Barricade";
import { IMapEnd, MapEndKey, MapEndSide } from "../../../interfaces/IMapEnd"
import { IMapEntityConfig } from "@/adventure/interfaces/IMapEntityConfig";

export class MapEndBarricade implements IMapEnd{
    key: MapEndKey

    constructor(){
        this.key = MapEndKey.WALL
    }

    wallConfigs(positionX: number, side: MapEndSide): Array<IMapEntityConfig>{
        let offset: number = 125; // 
        
        let x: number = positionX - offset
        if( side == MapEndSide.RIGHT ){
            x = positionX + offset
        }

        return [
            new MEC_Barricade(x)
        ];
    }
}