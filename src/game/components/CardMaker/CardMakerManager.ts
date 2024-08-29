import GameLib from "@/lib/GameLib"
import { GameObjects, Scene } from "phaser"
import { Deck, DeckRepo, Vocab } from "@/lib/repos/DeckRepo"
import ForgeMaterialImage from "./ForgeMaterialImage"
import { get } from "http"

export default class CardMakerManager{

    scene: Scene
    owned: string[]
    broken: string[]
    //
    selectedDeckKey: string
    selectedVocabKey: string
    //
    maxFailChance: number = 3
    currentFailChance: number = 3
    //
    targetImage: number = 2
    targetText: number = 2
    targetAudio: number = 2
    currentImage: number = 0
    currentText: number = 0
    currentAudio: number = 0
    //
    colorImage: number = 0xCDFADB
    colorText: number = 0xFFCF96
    colorAudio: number = 0xFF8080

    constructor(scene:Scene){
        this.scene = scene

        this.broken = ['apple','banana','pear'];
        this.owned = ['apple'];

        this.resetForgeValues();
        this.resetSelectedVocab();
    }

    getVocabStatus( vocabKey:string ):string{
        if( this.owned.includes(vocabKey) ){
            return 'owned';
        }else if( this.broken .includes(vocabKey) ){
            return 'broken';
        }else{
            return 'none';
        }
    }

    getTotalTarget():number{
        return this.targetImage + this.targetText + this.targetAudio;
    }

    getTotalCurrent():number{
        return this.currentImage + this.currentText + this.currentAudio;
    }

    setSelectedVocab( deckKey:string, vocabKey:string ){
        this.selectedDeckKey = deckKey;
        this.selectedVocabKey = vocabKey;
    }

    resetSelectedVocab(){
        this.selectedDeckKey = "";
        this.selectedVocabKey = "";
    }

    resetForgeValues(){
        this.currentFailChance = 3;
        //
        this.currentImage = 0;
        this.currentText = 0;
        this.currentAudio = 0;
    }

    generateChoices(){
        let choices: Vocab[] = [];

        let deck:Deck|undefined = DeckRepo.getDeck(this.selectedDeckKey);
        if( deck != undefined ){
            let answerIndex:number = deck.vocabs.findIndex((vocab)=>{
                return this.selectedVocabKey == vocab.key;
            })
            
            choices.push(deck.vocabs[answerIndex]);

            let otherIndexs = GameLib.getRandomNumbers(0,deck.vocabs.length-1,3,[answerIndex]);
            otherIndexs.forEach((i)=>{
                choices.push(deck.vocabs[i]);
            })
        }

        if( choices.length > 0 ) choices = GameLib.shuffle(choices);
        return choices;
    }

    checkAnswer( gameObject: GameObjects.GameObject ):boolean{
        let isCorrect:boolean = false;

        let type:string = gameObject.getData('type');
        if( gameObject.getData('key') == this.selectedVocabKey ){
            if( type == 'ForgeMaterialImage' ){
                this.addForgeImageValue();
            }else if( type == 'ForgeMaterialText' ){
                this.addForgeTextValue();
            }else if( type == 'ForgeMaterialAudio' ){
                this.addForgeAudioValue();
            }

            isCorrect = true;
        }else{
            // Reduce Failed Chance
            this.minusFailedChanceValue();
        }

        this.scene.events.emit('forge-answered');

        return isCorrect;
    }

    addForgeImageValue(){
        this.currentImage +=1;
        if( this.currentImage > this.targetImage ){
            this.currentImage = this.targetImage;
        }
    }

    addForgeTextValue(){
        this.currentText +=1;
        if( this.currentText > this.targetText ){
            this.currentText = this.targetText;
        }
    }
    
    addForgeAudioValue(){
        this.currentAudio +=1;
        if( this.currentAudio > this.targetAudio ){
            this.currentAudio = this.targetAudio;
        }
    }

    minusFailedChanceValue(){
        this.currentFailChance -= 1;
        if( this.currentFailChance < 0 ){
            this.currentFailChance = 0;
        }
    }

    checkWinCondition():boolean{
        if( this.getTotalCurrent() == this.getTotalTarget() ){
            return true;
        }

        return false;
    }

    checkLoseCondition():boolean{
        if( this.currentFailChance == 0 ){
            return true;
        }

        return false;
    }

    addSelectedToOwned(){
        if( this.selectedVocabKey != "" && !this.owned.includes(this.selectedVocabKey) ){
            this.owned.push(this.selectedVocabKey);
        }
    }
}