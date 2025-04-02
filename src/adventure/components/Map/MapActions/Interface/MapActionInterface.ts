import { Scene } from "phaser"

export interface MapActionInterface {
    /**
     * MapActionInterface 
     * - Action can be done by player when on Map
     * - Example: Teleport, cut tree, or other interact action
     */
    label: string // Show in action button
    mapKey: string // teleport/enter to > mapKey
    spawnKey: string
    run( scene: Scene ): void
}