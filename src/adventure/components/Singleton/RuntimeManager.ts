import { Scene } from "phaser";

export default class RuntimeManager{
    // Static property to hold the single instance, typed as GameManager or null
    private static instance: RuntimeManager | null = null;

    // Runtime active
    private mapKey: string = 'temple'
    private activeScene: Scene

    constructor(){

    }

    public static getInstance(): RuntimeManager {
        if (!RuntimeManager.instance) {
            RuntimeManager.instance = new RuntimeManager();
        }
        return RuntimeManager.instance;
    }

    // register current Scene
    registerScene( scene: Scene ){
        this.activeScene = scene
    }
}