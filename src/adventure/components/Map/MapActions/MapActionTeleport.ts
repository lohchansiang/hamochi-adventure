import { GameScene } from "@/adventure/scenes/GameScene"
import { Scene } from "phaser"
import { MapActionInterface, ActionTeleportData } from "./Interface/MapActionInterface"

export class MapActionTeleport implements MapActionInterface{
    label: string // Action Label
    data: ActionTeleportData

    constructor( label: string, data: ActionTeleportData ){
        this.label = label
        this.data = data
    }

    run( scene: Scene ){
        if (scene instanceof GameScene) {
            scene.clean();
        }
        scene.scene.start('GameScene',{mapKey:this.data.mapKey, spawnKey:this.data.spawnKey});
    }
}