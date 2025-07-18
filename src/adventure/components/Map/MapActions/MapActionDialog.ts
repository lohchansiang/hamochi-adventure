import { GameScene } from "@/adventure/scenes/GameScene"
import { Scene } from "phaser"
import { ActionDialogData, IMapAction } from "../../../interfaces/IMapAction"

export class MapActionDialog implements IMapAction{
    label: string // Action Label
    data: ActionDialogData

    constructor( label: string, data: ActionDialogData ){
        this.label = label
        this.data = data
    }

    run( scene: Scene, onActionEndCallback: Function ){
        if (scene instanceof GameScene) {
            scene.dialogController.triggerDialog(this.data.dialogKey, onActionEndCallback );
        }
    }
}