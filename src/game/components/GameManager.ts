import GameLib from "@/lib/GameLib"
import { Scene } from "phaser"

export default class GameManager{

    scene: Scene
    maxStep: number = 5
    maxHp: number = 3
    //
    currentStep: number = 0
    currentHp: number = 3
    coin: number = 0
    //
    cardKey1: string
    cardKey2: string
    cardKey3: string
    //
    battleSlotNumber: number

    constructor(scene:Scene){
        this.scene = scene
    }

    heal(){
        let newHp = this.currentHp + 1
        if( newHp >= 0 && newHp <= this.maxHp ){
            this.currentHp = newHp;
        }

        this.scene.events.emit('player-update')
    }

    damage( value: number = 1){
        let newHp = this.currentHp - value
        if( newHp < 0 ) newHp = 0
        if( newHp > this.maxHp ) newHp = this.maxHp

        this.currentHp = newHp;

        this.scene.events.emit('player-update')
    }

    addStep(){
        let newStep = this.currentStep + 1

        if( newStep < 0 ) newStep = 0
        if( newStep > this.maxStep ) newStep = this.maxStep

        this.currentStep = newStep;

        this.scene.events.emit('player-update')
    }

    addCoin( value: number ){
        this.coin += value

        this.scene.events.emit('player-update')
    }

    getHpString():string{
        return "Hitpoints: " + this.currentHp + "/" + this.maxHp
    }

    getStepString():string{
        return "Distance: " + this.currentStep + "/" + this.maxStep
    }

    getCoinString():string{
        return "Coin: " + this.coin
    }

    generateCardKeys(){
        let keys: string[] = ['chest','heal','battle']
        keys = GameLib.shuffle(keys)

        this.cardKey1 = keys[0]
        this.cardKey2 = keys[1]
        this.cardKey3 = keys[2]
    }

    getCardKey( slotNumber: number):string{
        if( slotNumber == 1 ) return this.cardKey1;
        if( slotNumber == 2 ) return this.cardKey2;
        if( slotNumber == 3 ) return this.cardKey3;

        return ''
    }
    
    clearCardKey( slotKey: number ){
        if( slotKey == 1 ) this.cardKey1 = '';
        if( slotKey == 2 ) this.cardKey2 = '';
        if( slotKey == 3 ) this.cardKey3 = '';

        console.log( "CardKeys > " + this.cardKey1 + "," + this.cardKey2 + "," + this.cardKey3);
        this.scene.events.emit('card-update') // Update Next
    }

    saveData(){
        let saveData = {
            hp: this.currentHp,
            coin: this.coin,
            step: this.currentStep,
            cardKey1: this.cardKey1,
            cardKey2: this.cardKey2,
            cardKey3: this.cardKey3,
            battleSlotNumber: this.battleSlotNumber
        }

        this.scene.registry.setFreeze(false);
        this.scene.registry.set('play', JSON.stringify(saveData));
        this.scene.registry.setFreeze(true);
    }

    loadData(){
        this.scene.registry.setFreeze(false);

        if( this.scene.registry.has('play') ){
            let loadData = JSON.parse(this.scene.registry.get('play'));

            this.coin = loadData.coin
            this.currentHp = loadData.hp
            this.currentStep = loadData.step
            this.cardKey1 = loadData.cardKey1
            this.cardKey2 = loadData.cardKey2
            this.cardKey3 = loadData.cardKey3
            this.battleSlotNumber = loadData.battleSlotNumber
        }
        
        this.scene.registry.setFreeze(true);

        this.scene.events.emit('player-update')
        this.scene.events.emit('card-update')
    }

    clearData(){
        this.scene.registry.reset()
    }

    checkCanNext():boolean{
        // Can Next if only no battle 
        if( this.cardKey1 == 'battle' ) return false;
        if( this.cardKey2 == 'battle' ) return false;
        if( this.cardKey3 == 'battle' ) return false;

        return true;
    }

    checkGameStatus():string{
        let status:string = 'ongoing';

        if( this.currentHp == 0 ){
            status = 'lose';
        }

        if( this.currentStep == this.maxStep ){
            status = 'win';
        }

        return status
    }

    setBattleSlotNumber( slotNumber: number ){
        if( this.getCardKey(slotNumber) == 'battle' ){
            this.battleSlotNumber = slotNumber
            this.scene.events.emit('start-battle')
        }   
    }
}