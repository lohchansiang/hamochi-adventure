import { GameScene } from "@/adventure/scenes/GameScene"
import { Scene } from "phaser"
import { ActionDialogData, MapActionInterface } from "./Interface/MapActionInterface"

export class MapActionDialog implements MapActionInterface{
    label: string // Action Label
    data: ActionDialogData

    constructor( label: string, data: ActionDialogData ){
        this.label = label
        this.data = data
    }

    run( scene: Scene ){
        if (scene instanceof GameScene) {
            scene.dialogController.triggerDialog(this.data.dialogKey);
        }
        
    }
}