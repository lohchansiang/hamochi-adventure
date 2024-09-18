import { EventBus } from '../EventBus';
import { Scene, GameObjects, Game } from 'phaser';
import GameLib from '@/lib/GameLib';
import CloseButton from '@/lib/components/CloseButton';
import HammerBar from '../components/CardMaker/HammerBar';
import { DeckRepo, Vocab } from '@/lib/repos/DeckRepo';
import BasicButton from '@/lib/components/BasicButton';
import ForgeBar from '../components/CardMaker/ForgeBar';
import CardMakerManager from '../components/CardMaker/CardMakerManager';
import PanelSelectCard from '../components/CardMaker/PanelSelectCard/PanelSelectCard';
import ForgeButton from '../components/CardMaker/ForgeButton';
import ForgeBottomContainer from '../components/CardMaker/ForgeBottomContainer';
import ForgeMainCircle from '../components/CardMaker/ForgeMainCircle';
import forgeResultSuccess from '../components/CardMaker/ForgeResultSuccess';
import forgeResultFailed from '../components/CardMaker/ForgeResultFailed';

export class CardMaker extends Scene
{
    manager: CardMakerManager
    forgeStates: string[] = ['prepare','select','forge', 'result']
    currentForgeState: string
    // 
    // GameObjects
    mainCircle: ForgeMainCircle
    buttonActionForge: ForgeButton
    buttonCancelForge: BasicButton
    buttonClose: CloseButton
    // Panel Forge
    hammerBar: HammerBar
    forgeBar: ForgeBar
    forgeBottomContainer: ForgeBottomContainer
    //
    // Panel Select Cards
    panelSelectCard: PanelSelectCard
    //
    debugContainer: GameObjects.Container
    debugForgeText: GameObjects.Text
    //
    canInput: boolean = true

    preload ()
    {
        this.load.image('hammer','assets/adventure/cardmaker/hammer.png')
        this.load.image('hammerBroke','assets/adventure/cardmaker/hammerBroke.png')
        this.load.image('forgeFeedbackHit','assets/adventure/cardmaker/forgeFeedbackHit.png')
        this.load.image('forgeFeedbackSuccess','assets/adventure/cardmaker/forgeFeedbackSuccess.png')
        this.load.image('forgeFeedbackBulb','assets/adventure/cardmaker/forgeFeedbackBulb.png')
        this.load.image('forgeAnvil','assets/adventure/cardmaker/forgeAnvil.png')
        //
        this.load.image('buttonAdd','assets/adventure/cardmaker/buttonAdd.png');
        this.load.image('buttonCardSelect','assets/adventure/cardmaker/buttonCardSelect.png');
        this.load.image('vocabAudio','assets/adventure/decks/vocabAudio.png');
        this.load.image('vocabCardBase','assets/adventure/decks/vocabCardBase.png');
        this.load.image('vocabCardBaseBack','assets/adventure/decks/vocabCardBack.png');
        this.load.image('vocabCardCrack','assets/adventure/decks/vocabCardCrack.png');
        this.load.image('vocabCardWhite','assets/adventure/decks/vocabCardWhite.png');
    }

    constructor ()
    {
        super('CardMaker');
    }
    
    create ()
    {
        // Reset Data
        this.manager = new CardMakerManager(this);

        const bg = this.add.rectangle(GameLib.screenWidth/2, GameLib.screenHeight/2, GameLib.screenWidth, GameLib.screenHeight, 0xFEF9F3);

        this.buttonClose = new CloseButton(this,100, 100).setScale(0.5);
        this.buttonClose.onPressedCallback = ()=>{
            this.clean();
            this.scene.start('MainMenu');
        }

        // Main Circle
        const startY = GameLib.screenHeight/3*1;
        this.mainCircle = new ForgeMainCircle(this,GameLib.screenWidth/2, startY);

        // Select Card
        this.panelSelectCard = new PanelSelectCard(this,this.manager,GameLib.screenWidth/2,GameLib.screenHeight/2);
        this.panelSelectCard.onCardSelected = ( deckKey:string, vocabKey:string)=>{
            this.manager.setSelectedVocab(deckKey,vocabKey);
            this.updateSelectedCard();
        }
        this.panelSelectCard.onPanelClose = ()=>{
            this.setForgeState('prepare');
        }
        
        // Render Action Button
        this.buttonActionForge = new ForgeButton(this,GameLib.screenWidth/2,GameLib.screenHeight*0.75);
        this.buttonActionForge.onPressedCallback = ()=>{
            if( this.currentForgeState == 'prepare' ){
                this.setForgeState('forge');
            }
        }
        
        this.buttonCancelForge = new BasicButton(this,GameLib.screenWidth - 200, 100,'Cancel','sm');
        this.buttonCancelForge.onPressedCallback = ()=>{
            if( this.currentForgeState == 'forge' ){
                this.setForgeState('prepare');
            }
        }

        // Render Forge Gameplay Objects
        this.hammerBar = new HammerBar(this,GameLib.midX,200);
        this.forgeBar = new ForgeBar(this,GameLib.midX,350);
        this.forgeBottomContainer = new ForgeBottomContainer(this,GameLib.midX,GameLib.quater3Y);
        
        // State [Prepare] Events
        this.events.on('open-panel',()=>{
            if( this.currentForgeState == 'prepare' ){
                this.setForgeState('select');
            }
        })
        
        // State [Forge] Events
        this.events.on('forge-answered',()=>{
            if( this.currentForgeState == 'forge' ){
                this.forgeBottomContainer.clearChoices();
            }
        })

        this.events.on('forge-feedback',()=>{
            if( this.currentForgeState == 'forge' ){
                // Render all corresponding UI
                this.updateDebugText();
                this.forgeBar.updateProgressBar();
                this.hammerBar.renderHammer();

                this.nextForge();
            }
        })

        this.events.on('result-closed', ()=>{
            this.setForgeState('prepare');
        })

        // Run init setup, render empty
        this.updateSelectedCard();
        this.renderDebug();
        
        this.setForgeState('prepare');

        // Prepare > 
        // Ready > 
        // SelectCard >
        // CardReady
        // Forge

        EventBus.emit('current-scene-ready', this);
    }
    
    updateSelectedCard(){
        let canForge:boolean = false;

        if( this.manager.selectedDeckKey && this.manager.selectedVocabKey ){
            const vocab:Vocab | undefined = DeckRepo.getVocab(this.manager.selectedDeckKey,this.manager.selectedVocabKey);
            if( vocab != undefined ){
                canForge = true;

                this.buttonActionForge.setDisabled(false);
                this.mainCircle.renderSelectedCard(vocab);
            }
        }

        if( !canForge ){
            this.buttonActionForge.setDisabled(true);
            this.mainCircle.clearSelectedCard();
        }
    }

    renderDebug(){
        this.debugContainer = this.add.container(GameLib.midX,GameLib.screenHeight-60);
        let rect: GameObjects.Rectangle = this.add.rectangle(0,0,GameLib.screenWidth-50,80,0xffffff);
        this.debugForgeText = this.add.text(0,0,'Forge Text',{fontSize:'40px',color:'red'}).setOrigin(0.5,0.5);
        
        this.debugContainer.add(rect);
        this.debugContainer.add(this.debugForgeText);
        this.debugContainer.setVisible(false);
    }

    setForgeState( forgeState:string ){
        if( !this.forgeStates.includes(forgeState) ) return;

        this.currentForgeState = forgeState;

        switch (forgeState) {
            case 'prepare':
                this.startPrepare();
                break;
            case 'select':
                this.startSelect();
                break;
            case 'forge':
                this.startForge();
                break;
            default:
                break;
        }
    }

    startPrepare(){
        this.buttonClose.setVisible(true);
        this.buttonActionForge.setVisible(true);
        this.buttonCancelForge.setVisible(false);

        this.manager.resetForgeValues();
        this.forgeBar.exit();
        this.hammerBar.exit();
        this.forgeBottomContainer.exit();
        this.mainCircle.exitForge();
       
        this.updateSelectedCard();

        this.debugContainer.setVisible(false);
        this.updateDebugText();
    }

    startSelect(){
        this.buttonClose.setVisible(false);
        this.buttonActionForge.setVisible(false);
        this.buttonCancelForge.setVisible(false);

        this.panelSelectCard.open();
    }

    startForge(){
        // Show Hide Element
        this.buttonClose.setVisible(false);
        this.buttonActionForge.setVisible(false);
        this.buttonCancelForge.setVisible(true);

        this.manager.resetForgeValues();
        this.forgeBar.enter();
        this.hammerBar.enter();
        this.forgeBottomContainer.enter();
        this.mainCircle.enterForge();

        this.debugContainer.setVisible(true);
        this.updateDebugText();
    }

    nextForge(){
        // Check For Win Lose
        if( this.manager.checkWinCondition() ){
            new forgeResultSuccess(this,GameLib.midX,GameLib.midY);

            // Add To Owned
            this.manager.addSelectedToOwned();
            this.manager.resetSelectedVocab();
            return;
        }
        
        if( this.manager.checkLoseCondition() ){
            new forgeResultFailed(this,GameLib.midX,GameLib.midY);
            return;
        }

        // Continue if still not win or lose
        this.forgeBottomContainer.generateNext();
        this.mainCircle.updateForgeNextRound()
    }

    updateDebugText(){
        if( this.debugForgeText ){
            let text:string = '';
            text += 'Target: ';
            text += this.manager.currentImage + '/' + this.manager.currentText + '/' + this.manager.currentAudio;
            this.debugForgeText.setText(text);
        }
    }

    clean(){
        this.events.removeListener('open-panel');
        this.events.removeListener('forge-answered');
        this.events.removeListener('forge-feedback');
        this.events.removeListener('result-closed');

        this.cameras.resetAll()
    }
}
