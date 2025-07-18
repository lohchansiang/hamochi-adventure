import { GameScene } from "@/adventure/scenes/GameScene"
import { Scene } from "phaser"
import { IMapAction, ActionTeleportData } from "../../../interfaces/IMapAction"

export class MapActionTeleport implements IMapAction{
    label: string // Action Label
    data: ActionTeleportData

    constructor( label: string, data: ActionTeleportData ){
        this.label = label
        this.data = data
    }

    run(scene: Scene, onActionEndCallback?: Function): void {
        if (scene instanceof GameScene) {
            if( onActionEndCallback ) onActionEndCallback();
            //
            scene.clean();
            scene.scene.start('GameScene',{mapKey:this.data.mapKey, spawnKey:this.data.spawnKey});
        }
    }
}