import { Scene } from "phaser"

export interface MapActionInterface {
    /**
     * MapActionInterface 
     * - Action can be done by player when on Map
     * - Example: Teleport, cut tree, or other interact action
     */
    label: string // Label Name to show on Action Button
    data: ActionTeleportData | ActionDialogData 
    run( scene: Scene ): void
}

export class ActionTeleportData {
    mapKey: string  // teleport/enter to > mapKey
    spawnKey: string
}

export class ActionDialogData{
    dialogKey: string
}