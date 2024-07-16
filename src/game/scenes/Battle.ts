import GameLib from '@/lib/GameLib';
import { EventBus } from '../EventBus';
import { Game, GameObjects, Scene } from 'phaser';
import RectButton from '@/lib/components/RectButton';
import GameManager from '../components/GameManager';
import DebugButton from '@/lib/components/DebugButton';
import { ACard, CardRepo } from '../components/CardRepo';
import Opponent from '../components/Opponent';
import HealthBar from '../components/HealthBar';
import Match from '../components/Match';
import PlayerAttackBar from '../components/PlayerAttackBar';
import ModalQuestion from '../modals/ModalQuestion';

export class Battle extends Scene
{
    gameManager: GameManager
    camera: Phaser.Cameras.Scene2D.Camera;
    //
    gameOverText : Phaser.GameObjects.Text;
    button: RectButton
    //
    player: GameObjects.Sprite
    playerHealthBar: HealthBar
    playerAttackBar: PlayerAttackBar
    //
    opponent: Opponent
    //
    match: Match
    isDone: boolean
    //
    modalQuestion: ModalQuestion
    //
    centerMessage: GameObjects.Text

    constructor ()
    {
        super('Battle');
    }

    create ( data: any )
    {   
        // Reset Data
        this.isDone = false

        this.modalQuestion = new ModalQuestion(this,'ModalQuestion');
        this.modalQuestion.callbackCorrect = ()=>{
            console.log('callbackCorrect')
            this.playerAttack(true)
        }
        this.modalQuestion.callbackWrong = ()=>{
            console.log('callbackWrong')
            this.playerAttack(false)
        }

        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xe6e6e6);

        this.gameManager = new GameManager(this);
        this.gameManager.loadData()

        // Render Center Message
        this.centerMessage = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/2 -150,'',{
            font: 'bold 60px Arial',
            color: '#00000',
            align: 'center',  // 'left'|'center'|'right'|'justify'
        },).setOrigin(0.5).setVisible(false)

        // Get Opponent Data
        let cardKey = this.gameManager.getCardKey( this.gameManager.battleSlotNumber )
        let card:ACard|undefined = CardRepo.findCard(cardKey)
        if( card == undefined ){
            console.log('Unable to find Card Data')
            this.simulateWin()
            return 
        }
        
        // Render Opponent Sprite
        this.opponent = new Opponent(this,card);

        // Render Player
        this.player = this.add.sprite(GameLib.screenWidth/2,GameLib.screenHeight -200, 'player')
        this.playerHealthBar = new HealthBar(this,GameLib.screenWidth/2,GameLib.screenHeight-350)
        this.renderHealth()

        // Render Player Attack Bar
        this.playerAttackBar = new PlayerAttackBar( this, GameLib.screenWidth/2,GameLib.screenHeight-450, 20 )
        this.playerAttackBar.callbackBulbButton = ()=>{
            this.playerAttackBar.hideBulbButton();
            this.modalQuestion.startQuestion();
        }

        // Render Match
        this.match = new Match(this,GameLib.screenWidth/2,GameLib.screenHeight/2-50)
        // this.match.setTarget(this.playerAttackBar.startX, this.playerAttackBar.startY);
        this.match.setTarget(this.player.x, this.player.y);
        this.match.callbackScore = ( value: number )=>{
            // Add Tween
            this.playerAttackBar.addValue(value);
        }

        this.events.addListener('player-update',()=>{
            // WHen Player Health Changes
            this.renderHealth()
            this.checkWinLoseCondition()
        })

        this.events.addListener('opponent-update',()=>{
            // When Opponent Health Changes
            this.checkWinLoseCondition()
        })
        
        this.events.addListener('player-attack',()=>{
            // Stop Opponent Bar
            this.opponent.stopAttack();

            // Stop & Hide Matching
            this.match.hide()

            // Show Attack Button
            this.playerAttackBar.showBulbButton()
        })
        
        this.events.addListener('opponent-attack',()=>{
            // Stop Opponent Bar
            this.opponent.stopAttack();

            // Stop Matching
            this.match.hide();

            this.opponentAttack();
        })

        this.events.addListener('continue',()=>{
            this.centerMessage.setVisible(false);
            
            if( !this.isDone ){
                // Start Matching
                this.match.show();
                
                // Resume Opponent Bar
                this.opponent.resumeAttack();
            }
        })

        this.events.addListener('battle-end',()=>{
            this.isDone = true;
            this.match.hide();
            this.opponent.stopAttack();
        })

        // Debug
        let debugWin:DebugButton = new DebugButton(this, 150, GameLib.screenHeight -100,'Set Win')
        debugWin.scale = 0.5
        this.add.existing(debugWin)
        debugWin.onPressed(()=>{
            this.simulateWin()
        })
        
        let debugLose:DebugButton = new DebugButton(this, 150, GameLib.screenHeight -200,'Set Lose')
        debugLose.scale = 0.5
        this.add.existing(debugLose)
        debugLose.onPressed(()=>{
            this.simulateLose()
        })

        let debugAttack:DebugButton = new DebugButton(this, GameLib.screenWidth -150, GameLib.screenHeight -200,'Attack')
        debugAttack.scale = 0.5
        this.add.existing(debugAttack)
        debugAttack.onPressed(()=>{
            this.opponent.stopAttack();
            this.match.hide();
            this.playerAttack(true)
        })

        EventBus.emit('current-scene-ready', this);
    }

    renderHealth(){
        this.playerHealthBar.renderHealth(this.gameManager.currentHp,this.gameManager.maxHp)
    }

    playerAttack( isSuccess:boolean ){
        this.centerMessage.setText('Player Attacking!');
        this.centerMessage.setVisible(true);

        this.time.delayedCall(1000,()=>{
            if( isSuccess ){
                this.centerMessage.setText('Mr. Worm HP -1');
                this.opponent.damage(1);
            }else{
                this.centerMessage.setText('Attack failed!!!');
            }
        },[],this);
        //
        this.time.delayedCall(2000,()=>{
            this.events.emit('continue');
        },[],this)
    }

    opponentAttack(){
        this.centerMessage.setText('Mr. Worm Attacking!');
        this.centerMessage.setVisible(true);
        
        this.time.delayedCall(1000,()=>{
            this.centerMessage.setText('Player HP -1');
            //
            this.gameManager.damage();
            this.opponent.resetAttack();
        },[],this);
        
        //
        this.time.delayedCall(2000,()=>{
            this.events.emit('continue');
        },[],this)
    }

    simulateWin(){
        this.processWin()
    }

    simulateLose(){
        this.gameManager.damage()
        this.gameManager.damage()
        this.gameManager.damage()
    }
    
    checkWinLoseCondition(){
        if( !this.isDone ){
            if( this.gameManager.currentHp <= 0 ){
                this.processLose()
            }
    
            if( this.opponent.currentHp <= 0 ){
                this.processWin()
            }
        }
    }

    processWin(){
        this.events.emit('battle-end');

        this.time.delayedCall(1000,()=>{
            this.renderEnding( 'win' )
        },[],this);
    }

    processLose(){
        this.events.emit('battle-end');

        this.time.delayedCall(1000,()=>{
            this.renderEnding( 'lose' )
        },[],this);
    }

    renderEnding( status: string ){
        let text:string = 'Invalid Status...'
        if( status == 'win' ) text = "Mr. Worm fainted.";
        if( status == 'lose' ) text = "You fainted!";

        let endText = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/2 -150,text,{
            font: 'bold 60px Arial',
            color: '#00000',
            align: 'center',  // 'left'|'center'|'right'|'justify'
        },)
        endText.setOrigin(0.5,0.5)

        let button = new RectButton(this,GameLib.screenWidth/2,GameLib.screenHeight/2 + 200, 'OK')
        button.onPressed(()=>{
            if( status == 'win' ) this.handleWin()
            if( status == 'lose' ) this.handleLose()
        })
    }

    handleWin(){
        this.clean()
        this.gameManager.setCompletedBattleSlotNumber(this.gameManager.battleSlotNumber);
        this.gameManager.setBattleSlotNumber(0);
        this.gameManager.saveData()
        this.scene.start('Game',{isContinue:true});
    }

    handleLose(){
        this.clean()
        this.gameManager.clearData()
        this.scene.start('GameOver',{status:this.gameManager.checkGameStatus()});
    }
   
    clean(){
        this.events.removeListener('player-update');
        this.events.removeListener('opponent-update');
        this.events.removeListener('player-attack');
        this.events.removeListener('opponent-attack');
        this.events.removeListener('continue');
        this.events.removeListener('battle-end');
        this.cameras.resetAll();

        this.scene.remove('ModalQuestion');
    }
}
