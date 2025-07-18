import { Scene } from "phaser"

export interface IMapAction {
    /**
     * MapActionInterface 
     * - Action can be done by player when on Map
     * - Example: Teleport, cut tree, or other interact action
     */
    label: string // Label Name to show on Action Button
    data: ActionTeleportData | ActionDialogData | ActionCombatData
    run( scene: Scene, onActionEndCallback?: Function ): void
}

export class ActionTeleportData {
    mapKey: string  // teleport/enter to > mapKey
    spawnKey: string
}

export class ActionDialogData{
    dialogKey: string
}

export class ActionCombatData{
    opponentKey: string
}