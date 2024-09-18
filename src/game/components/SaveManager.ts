import { Scene } from "phaser"

// Data Structure
// Container > Player Data, Vocabs Data
// Player Data > Health, Coin


/* Vocabs Data
    Structure
    {
        blueprints: string[],
        owned: string[],
    }
*/

type PlayerVocabs = {
    blueprints: string[],
    owned: string[]
}

export default class SaveManager{

    scene: Scene
    playerVocabs: PlayerVocabs

    constructor(scene:Scene){
        this.scene = scene

        // Initiate Data Container
        this.playerVocabs = {
            blueprints: [],
            owned: []
        }

        // Initiate: should be loading saved data on load
    }
    
    resetSaveData(){
        localStorage.removeItem('playerVocabs');
    }

    demoGetString():string{
        return localStorage.getItem('playerVocabs')||'';
    }

    saveDataToStorage(){
        // 
    }

    loadDataFromStorage(){
        
    }
}