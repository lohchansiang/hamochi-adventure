import { GameScene } from "@/adventure/scenes/GameScene"
import { Scene } from "phaser"
import { MapActionInterface } from "./Interface/MapActionInterface"

export class MapActionExit implements MapActionInterface{
    label: string // Action Label
    mapKey: string
    spawnKey: string

    constructor( label: string, mapKey: string, spawnKey: string ){
        this.label = label
        this.mapKey = mapKey
        this.spawnKey = spawnKey
    }

    run( scene: Scene ){
        if (scene instanceof GameScene) {
            scene.clean();
        }
        
        scene.scene.start('GameScene',{mapKey:this.mapKey, spawnKey:this.spawnKey});
    }
}