import ModalDebugPanel from "@/adventure/modals/ModalDebugPanel";
import DebugButton from "@/lib/components/DebugButton";
import GameLib from "@/lib/GameLib";
import { Scene } from "phaser";

export class QuickDebug {
    // Static property to hold the single instance, typed as GameManager or null
    private static instance: QuickDebug | null = null;

    // Public properties with types
    public logs: string[];

    // Private constructor to prevent direct instantiation
    private constructor() {
        this.logs = [
            'Log start...'
        ];
    }

    // Static method to get or create the singleton instance
    public static getInstance(): QuickDebug {
        if (!QuickDebug.instance) {
            QuickDebug.instance = new QuickDebug();
        }
        return QuickDebug.instance;
    }

    public pushLog(log: string): void {
        if( log ){
            this.logs.push(log);  
        }
    }

    public renderDebugButton( scene: Scene ){
        let debugPanel: ModalDebugPanel = new ModalDebugPanel(scene);
        let debugButton: DebugButton = new DebugButton( scene,150,GameLib.screenHeight-100,'Debug');
        debugButton.onPressed(()=>{
            debugPanel.open();
        })

        debugButton.setScale( 0.5);
        debugButton.setDepth(1000);
    }
}