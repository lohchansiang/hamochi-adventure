import { EventBus } from '../EventBus';
import { GameObjects, Scene } from 'phaser';
import AdventureCard from '../components/AdventureCard';
import GameLib from '@/lib/GameLib';
import GameManager from '../components/GameManager';
import DebugButton from '@/lib/components/DebugButton';
import SpriteButton from '@/lib/components/SpriteButton';
import HealthBar from '../components/HealthBar';

export class Game extends Scene
{
    renderDebug: boolean = true
    gameManager: GameManager
    //
    camera: Phaser.Cameras.Scene2D.Camera;
    card1: AdventureCard
    card2: AdventureCard
    card3: AdventureCard
    //
    stepText: GameObjects.Text 
    hpText: GameObjects.Text 
    coinText: GameObjects.Text
    health: GameObjects.Sprite[] 
    playerHealthBar: HealthBar
    player: GameObjects.Sprite
    //
    nextButton: SpriteButton
    nextHint: GameObjects.Text
    //

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
        
        this.gameManager = new GameManager(this);
        if( isContinue ){
            this.gameManager.loadData()
            this.initStep( !(isContinue) )
        }

        // Render Next Button
        this.renderPlayerAvatar()
        this.renderNextButton()

        // Render Player Step & HP (Run Once)
        this.renderUI()

        // Render Debug Button
        if( this.renderDebug ){
            this.renderDebugRegenerate()
            // this.renderDebugDamage()
            // this.renderDebugHeal()
            // this.renderDebugSaveLoad()
        }

        // Add Listener
        this.events.addListener('player-update',()=>{
            this.updateUI()
            this.checkWinCondition()
        })

        this.events.addListener('card-update',()=>{
            this.initStep(false)
            this.nextButton.setDisabled(!this.gameManager.checkCanNext())
        })

        this.events.addListener('start-battle',()=>{
            this.gotoBattleScene()
        })

        EventBus.emit('current-scene-ready', this);
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
            this.gameManager.addStep()
            
            if( this.gameManager.checkGameStatus() == 'ongoing' ){
                this.initStep()
            }
        })
    }

    renderUI(){
        this.stepText = this.add.text(GameLib.screenWidth/2,100,this.gameManager.getStepString(),{fontSize:40,color:'black'})
        this.stepText.setOrigin(0.5,0.5)

        this.coinText = this.add.text(GameLib.screenWidth/2,GameLib.screenHeight - 260,this.gameManager.getCoinString(),{fontSize:40,color:'black'})
        this.coinText.setOrigin(0.5,0.5)

        this.hpText = this.add.text(GameLib.screenWidth/2,GameLib.screenHeight - 320,this.gameManager.getHpString(),{fontSize:40,color:'black'})
        this.hpText.setOrigin(0.5,0.5)
        //
        this.playerHealthBar = new HealthBar(this,GameLib.screenWidth/2,GameLib.screenHeight-400)
        this.renderHealth()
    }

    updateUI(){
        this.stepText.setText(this.gameManager.getStepString())
        this.coinText.setText(this.gameManager.getCoinString())
        this.hpText.setText(this.gameManager.getHpString())

        this.renderHealth()
    }

    renderHealth(){
        this.playerHealthBar.renderHealth(this.gameManager.currentHp,this.gameManager.maxHp)
    }

    renderPlayerAvatar(){
        this.player = this.add.sprite( 200, GameLib.screenHeight/2 + 100,'player')
    }

    renderNextButton(){
        this.nextHint = this.add.text(GameLib.screenWidth - 200,GameLib.screenHeight/2 + 200,'Go',{fontSize:40,color:'black'}).setOrigin(0.5)
        this.nextButton = new SpriteButton(this, GameLib.screenWidth - 200, GameLib.screenHeight/2 + 100, 'next')

        this.nextButton.onPressed(()=>{
            this.gameManager.addStep()
            
            if( this.gameManager.checkGameStatus() == 'ongoing' ){
                this.initStep()
            }
        })
    }

    initStep( regen:boolean = true ){
        if( regen )  this.gameManager.generateCardKeys()
        this.renderCards()
    }

    renderCards(){
        if(this.card1) this.card1.destroy()
        if(this.card2) this.card2.destroy()
        if(this.card3) this.card3.destroy()
        
        if( this.gameManager.getCardKey(1) ){
            this.card1 = new AdventureCard(this, GameLib.screenWidth/4, GameLib.screenHeight/3, this.gameManager.getCardKey(1), this.gameManager,1);
        }
        if( this.gameManager.getCardKey(2) ){
            this.card2 = new AdventureCard(this, GameLib.screenWidth/2, GameLib.screenHeight/3, this.gameManager.getCardKey(2), this.gameManager,2);
        }
        if( this.gameManager.getCardKey(3) ){
            this.card3 = new AdventureCard(this, GameLib.screenWidth/4*3, GameLib.screenHeight/3, this.gameManager.getCardKey(3), this.gameManager,3);
        }   

        this.nextButton.setDisabled(!this.gameManager.checkCanNext())
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
        this.events.removeListener('player-update');
        this.events.removeListener('card-update');
        this.events.removeListener('start-battle');

        this.cameras.resetAll()
    }
}
