import { parse } from "path"
import { Scene } from "phaser"

// Data Structure
// Container > Player Data, Vocabs Data
// Player Data > Health, Coin


/* Vocabs Data
    Structure
    {
        forged: string[],
        owned: string[],
    }
*/

type PlayerVocabs = {
    owned: string[],
    forged: string[],
}

export default class SaveManager{

    scene: Scene
    playerVocabs: PlayerVocabs
    // callback
    onVocabSaveUpdated: Function

    constructor(scene:Scene){
        this.scene = scene

        // Initiate Data Container
        this.playerVocabs = {
            owned: [],
            forged: []
        }

        // Initiate: should be loading saved data on load
        this.loadDataFromStorage();
    }
    
    resetSaveData(){
        this.playerVocabs = {
            owned: [],
            forged: []
        }

        this.saveDataToStorage();
    }

    clearDataFromStorage(){
        localStorage.removeItem('playerVocabs');
    }

    saveDataToStorage(){
        // 
        localStorage.setItem('playerVocabs',JSON.stringify(this.playerVocabs));
        
        if( this.onVocabSaveUpdated ) this.onVocabSaveUpdated();
    }

    loadDataFromStorage(){
        let dataString:string | null = localStorage.getItem('playerVocabs')
        if( dataString ){
            let data = JSON.parse(dataString);
            
            if( data.owned ) this.playerVocabs.owned = data.owned;
            if( data.forged ) this.playerVocabs.forged = data.forged;
        }
    }

    checkIsForgedVocab( vocabKey:string ): boolean{
        if( this.playerVocabs && this.playerVocabs.forged ){
            if( this.playerVocabs.forged.includes(vocabKey) ){
                return true;
            }
        }

        return false;
    }

    checkIsOwnedVocab( vocabKey:string ): boolean{
        if( this.playerVocabs && this.playerVocabs.owned ){
            if( this.playerVocabs.owned.includes(vocabKey) ){
                return true;
            }
        }

        return false;
    }

    // getVocabStatus( vocabKey:string ):string{
    //     if( this.playerVocabs ){
    //         if( this.playerVocabs.forged.includes(vocabKey) ){
    //             return 'forged';
    //         }else if( this.playerVocabs.owned.includes(vocabKey) ){
    //             return 'owned';
    //         }else{
    //             return 'none';
    //         }
    //     }
    //     return 'none';
    // }

    addOwnedVocab( vocabKey:string ){
       if(this.playerVocabs && this.playerVocabs.owned){
            if( !this.playerVocabs.owned.includes(vocabKey) ){
                this.playerVocabs.owned.push(vocabKey);

                this.saveDataToStorage();
            }
       } 
    }

    addForgedVocab( vocabKey:string ){
        if(this.playerVocabs && this.playerVocabs.forged){
             if( !this.playerVocabs.forged.includes(vocabKey) ){
                 this.playerVocabs.forged.push(vocabKey);
 
                 this.saveDataToStorage();
             }
        } 
    }
}