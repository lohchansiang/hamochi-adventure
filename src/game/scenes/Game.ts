import { EventBus } from '../EventBus';
import { GameObjects, Scene } from 'phaser';
import AdventureCard from '../components/AdventureCard';
import GameLib from '@/lib/GameLib';
import GameManager from '../components/GameManager';
import DebugButton from '@/lib/components/DebugButton';
import SpriteButton from '@/lib/components/SpriteButton';
import HealthBar from '../components/HealthBar';
import ProgressionBar from '../components/ProgressionBar';

export class Game extends Scene
{
    renderDebug: boolean = true
    gameManager: GameManager
    //
    camera: Phaser.Cameras.Scene2D.Camera;
    cards: Array<AdventureCard|null>
    card1: AdventureCard | null
    card2: AdventureCard | null
    card3: AdventureCard | null
    //
    stepText: GameObjects.Text 
    hpText: GameObjects.Text 
    coinText: GameObjects.Text
    health: GameObjects.Sprite[] 
    //
    progressionBar: ProgressionBar
    playerHealthBar: HealthBar
    player: GameObjects.Sprite
    //
    nextButton: SpriteButton
    nextHint: GameObjects.Text

    constructor ()
    {
        super('Game');
    }

    create ( data:any )
    {
        let isContinue:boolean = false
        if( data && data.isContinue ){
            isContinue = true
            this.scene.settings.data = {}
        }

        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xe6e6e6);

        // Init Data
        this.gameManager = new GameManager(this);
        this.cards = [null,null,null];
        

        if( isContinue ){
            this.gameManager.loadData()
        }

        // Render Debug Button
        if( this.renderDebug ){
            this.renderDebugRegenerate()
            // this.renderDebugDamage()
            // this.renderDebugHeal()
            // this.renderDebugSaveLoad()
        }

        // Events 
        // Start > game-entry, game-start, new-step, player-update, card-update, start=battle
        this.events.once('game-entry',()=>{
            // TODO: Player avatar entry
            // TODO: UI entry

            // TEMP: Show all related entities
            // Render Next Button
            // this.renderNextButton();
            
            // Render Player Step & HP (Run Once)
            this.initUI();

            this.events.emit('game-start');
        })

        this.events.once('game-start',()=>{
            // Start 
            if( isContinue ){
                // render loaded cards
                this.renderCards();
            }else{
                // New Step
                this.events.emit('new-step');
            }
        })

        this.events.addListener('new-step',()=>{
            this.gameManager.generateCardKeys();
            this.renderCards();
        })

        this.events.addListener('player-update',()=>{
            this.updateUI()
            this.checkWinCondition()
        })

        this.events.addListener('card-update',()=>{
            this.renderCards()
        })

        this.events.addListener('start-battle',()=>{
            this.gotoBattleScene()
        })

        EventBus.emit('current-scene-ready', this);
        this.events.emit('game-entry');
    }

    renderDebugSaveLoad(){
        let debugSaveButton:DebugButton = new DebugButton(this,GameLib.screenWidth - 150, GameLib.screenHeight - 200,'Save')
        debugSaveButton.scale = 0.5
        this.add.existing(debugSaveButton)
        debugSaveButton.onPressed(()=>{
            this.gameManager.saveData()
        })
        
        let debugLoadButton:DebugButton = new DebugButton(this,GameLib.screenWidth - 150, GameLib.screenHeight - 100,'Load')
        debugLoadButton.scale = 0.5
        this.add.existing(debugLoadButton)
        debugLoadButton.onPressed(()=>{
            this.gameManager.loadData()
        })
    }

    renderDebugDamage(){
        let debugDamageButton:DebugButton = new DebugButton(this,150, GameLib.screenHeight - 100,'-1 Hp')
        debugDamageButton.scale = 0.5
        this.add.existing(debugDamageButton)
        debugDamageButton.onPressed(()=>{
            this.gameManager.damage()
        })
    }
    
    renderDebugHeal(){
        let debugHealButton: DebugButton= new DebugButton(this,150, GameLib.screenHeight - 200,'+1 Hp')
        debugHealButton.scale = 0.5
        this.add.existing(debugHealButton)
        debugHealButton.onPressed(()=>{
            this.gameManager.heal()
        })
    }

    renderDebugRegenerate(){
        let debugRegenerateButton:DebugButton = new DebugButton(this,150,GameLib.screenHeight - 300,'Skip')
        debugRegenerateButton.scale = 0.5
        this.add.existing(debugRegenerateButton)
        debugRegenerateButton.onPressed(()=>{
            this.gameManager.nextStep()
        })
    }

    initUI(){
        this.stepText = this.add.text(GameLib.screenWidth/2,50,this.gameManager.getStepString(),{fontSize:40,color:'black'})
        this.stepText.setOrigin(0.5,0.5)

        this.coinText = this.add.text(GameLib.screenWidth/2,GameLib.screenHeight - 260,this.gameManager.getCoinString(),{fontSize:40,color:'black'})
        this.coinText.setOrigin(0.5,0.5)

        // this.hpText = this.add.text(GameLib.screenWidth/2,GameLib.screenHeight - 320,this.gameManager.getHpString(),{fontSize:40,color:'black'})
        // this.hpText.setOrigin(0.5,0.5)
        
        // Render Health Bar
        this.playerHealthBar = new HealthBar(this,GameLib.screenWidth/2,GameLib.screenHeight-400);
        this.updateHealth();

        // Render Avatar
        this.renderPlayerAvatar()

        // Render Progression
        this.progressionBar = new ProgressionBar(this,GameLib.screenWidth/2, 100, this.gameManager.maxStep);
        this.updateProgress();
    }

    updateUI(){
        if( this.stepText ) this.stepText.setText(this.gameManager.getStepString())
        if( this.coinText ) this.coinText.setText(this.gameManager.getCoinString())
        if( this.hpText ) this.hpText.setText(this.gameManager.getHpString())

        this.updateProgress();
        this.updateHealth();
    }

    updateProgress(){
        this.progressionBar.updateProgressValue(this.gameManager.currentStep);
    }
    
    updateHealth(){
        this.playerHealthBar.renderHealth(this.gameManager.currentHp,this.gameManager.maxHp);
    }

    renderPlayerAvatar(){
        this.player = this.add.sprite( 200, GameLib.screenHeight/2 + 100,'player')
    }

    renderNextButton(){
        this.nextHint = this.add.text(GameLib.screenWidth - 200,GameLib.screenHeight/2 + 200,'Go',{fontSize:40,color:'black'}).setOrigin(0.5)
        this.nextButton = new SpriteButton(this, GameLib.screenWidth - 200, GameLib.screenHeight/2 + 100, 'next')

        this.nextButton.onPressed(()=>{
            this.gameManager.nextStep();
        })
    }

    renderCards(){
        this.renderCard(0);
        this.renderCard(1);
        this.renderCard(2);
        // if( this.card1 
        //     && this.card1.cardData 
        //     && this.card1.cardData.key != this.gameManager.getCardKey(1) 
        // ){
        //     this.card1.destroy();
        //     this.card1 = null;
        // } 
        // if( this.card2 
        //     && this.card2.cardData 
        //     && this.card2.cardData.key != this.gameManager.getCardKey(2) 
        // ){
        //     this.card2.destroy();
        //     this.card1 = null;
        // } 
       
        // if(this.card2) this.card2.destroy()
        // if(this.card3) this.card3.destroy()
        
        // if( this.gameManager.getCardKey(1) &&){
        //     this.card1 = new AdventureCard(this, 200, GameLib.screenHeight/3, this.gameManager.getCardKey(1), this.gameManager,1);
        // }
        // if( this.gameManager.getCardKey(2) ){
        //     this.card2 = new AdventureCard(this, GameLib.screenWidth/2, GameLib.screenHeight/3, this.gameManager.getCardKey(2), this.gameManager,2);
        // }
        // if( this.gameManager.getCardKey(3) ){
        //     this.card3 = new AdventureCard(this, GameLib.screenWidth - 200, GameLib.screenHeight/3, this.gameManager.getCardKey(3), this.gameManager,3);
        // }   

        //this.nextButton.setDisabled(!this.gameManager.checkCanNext())
    }

    renderCard( index: number ){
        // Check if need to destroy without notice
        this.resetCard( index );

        let xPositions: number[] = [200,GameLib.screenWidth/2, GameLib.screenWidth - 200];
        let y: number = GameLib.screenHeight/3;

        // Rerender Card if no card found and have active card key
        if( !this.cards[index] || this.cards[index] == null ){
            if( this.gameManager.getCardKey(index+1) ){
                // New Card
                this.cards[index] = new AdventureCard(this, xPositions[index], y, this.gameManager.getCardKey(index+1), this.gameManager,index+1);
            }
        }

        if( this.cards[index] != null && this.cards[index] ){
            this.cards[index].setVisible(false);
            this.cards[index].animIn();
        }
    }

    resetCard(index: number){
        if( !this.cards ) return;
        if( !this.cards[index] ) return;
        if( this.cards[index] == null ) return;
        if( !this.cards[index].cardData ) return;

        if( this.cards[index].cardData.key != this.gameManager.getCardKey(index+1) ){
            this.cards[index].destroy();
            this.cards[index] = null;
        }
    }

    checkWinCondition(){
        if( this.gameManager.checkGameStatus() != 'ongoing' ){
            this.gotoGameOverScene()
        }
    }
    
    gotoGameOverScene(){
        this.clean()
        this.gameManager.clearData()
        this.scene.start('GameOver',{status:this.gameManager.checkGameStatus()});
    }

    gotoBattleScene(){
        this.clean()
        this.gameManager.saveData()
        this.scene.start('Battle');
    }

    clean(){
        this.events.removeListener('game-entry');
        this.events.removeListener('game-start');
        this.events.removeListener('new-step');
        this.events.removeListener('player-update');
        this.events.removeListener('card-update');
        this.events.removeListener('start-battle');

        this.cameras.resetAll()
    }
}
