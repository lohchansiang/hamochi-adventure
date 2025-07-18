import { GameScene } from "@/adventure/scenes/GameScene"
import { Scene } from "phaser"
import { IMapAction, ActionCombatData } from "../../../interfaces/IMapAction"

export class MapActionCombat implements IMapAction{
    label: string // Action Label
    data: ActionCombatData

    constructor( label: string, data: ActionCombatData ){
        this.label = label
        this.data = data
    }

    run(scene: Scene, onActionEndCallback?: Function): void {
        if (scene instanceof GameScene ) {
            if( onActionEndCallback ) onActionEndCallback();
            //
            scene.scene.launch('CombatScene',{opponentKey:this.data.opponentKey});
        }
    }
}