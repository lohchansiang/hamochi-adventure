import { Game, GameObjects, Scene } from 'phaser';
import CloseButton from '@/lib/components/CloseButton';
import GameLib from '@/lib/GameLib';
import SaveManager from '../components/SaveManager';
import { Deck, DeckRepo } from '@/lib/repos/DeckRepo';
import TabButtonDeck from '../components/CardMaker/PanelSelectCard/TabButtonDeck';
import VocabCard from '../components/CardMaker/PanelSelectCard/VocabCard';
import DebugButton from '@/lib/components/DebugButton';

export class DemoGetCard extends Scene
{
    saveManager: SaveManager
    //
    title: GameObjects.Text
    buttonClose: CloseButton
    //
    container: GameObjects.Container
    // Shared Dimension
    itemPadding: number = 50
    // Tabs Dimension
    tabPerRow: number = 6
    tabStartX: number = 0
    tabStartY: number = 200
    tabSize: number = 120
    // Vocab Cards Dimension
    vocabStartX: number
    vocabStartY: number
    vocabSizeWidth: number = 180
    vocabSizeHeight: number = VocabCard.calculateHeight(180)
    vocabPerRow: number = 4
    vocabRow: number = 3
    vocabGapX: number
    vocabGapY: number
    //
    tabButtons: TabButtonDeck[] = []
    vocabCards: VocabCard[] = []
    selectedDeckKey: string
    selectedVocabKey: string
    //
    buttonObtain: DebugButton

    constructor ()
    {
        super('DemoGetCard');
    }

    create ()
    {   
        this.tabButtons = [];
        this.vocabCards = [];
        this.selectedDeckKey = '';
        this.selectedVocabKey = '';

        const bg = this.add.rectangle(GameLib.screenWidth/2, GameLib.screenHeight/2, GameLib.screenWidth, GameLib.screenHeight, 0xFEF9F3);
        //
        this.title = this.add.text(
            50,
            80,
            'Card Blueprints',
            {
                color:'black',
                fontSize: 50,
                fontFamily:'Arial',
                fontStyle:'bold',
                align:'left'
            });

        this.buttonClose = new CloseButton(this,GameLib.screenWidth - 100, 100).setScale(0.5);
        this.buttonClose.onPressedCallback = ()=>{
            this.scene.start('MainMenu');
        }

        this.saveManager = new SaveManager( this );
        this.saveManager.onVocabSaveUpdated = ()=>{
            this.renderVocabs();
            this.updateObtainButton();
        }

        const decks:Deck[] = DeckRepo.getDecks();
        
        // Calculate vocab dimension
        this.vocabGapX = (GameLib.screenWidth- (this.itemPadding)) / (this.vocabPerRow);
        this.vocabGapY = this.vocabSizeHeight+this.itemPadding*2;

        this.vocabStartX = 0;
        this.vocabStartY = this.tabStartY + this.itemPadding + ( (this.tabSize + this.itemPadding)*( Phaser.Math.CeilTo(decks.length/this.tabPerRow)));

        const containerCenterY: number = this.vocabStartY + ( (this.vocabSizeHeight+this.itemPadding)* this.vocabRow );
        this.container = this.add.container(GameLib.screenWidth/2,containerCenterY);
        
        this.buttonObtain = new DebugButton(this,GameLib.midX,GameLib.screenHeight - 200, 'Obtain' ).setScale(0.6);
        this.buttonObtain.setVisible(false);
        this.buttonObtain.onPressedCallback = ()=>{
            this.saveManager.addOwnedVocab(this.selectedVocabKey);
        }

        this.renderDeckTabs(decks);
        this.selectDeckTab(decks[0].key);
    }

    renderDeckTabs( decks:Deck[] ){
        // Once Only
        const gapX: number = (GameLib.screenWidth - (2*this.itemPadding)) / this.tabPerRow;
        const gapY: number = this.tabSize + this.itemPadding;
        const rowY: number = this.tabStartY + gapY/2;
        const startX: number = this.tabStartX + this.itemPadding + gapX/2;
        
        decks.forEach(( deck, index)=>{
            let row = Phaser.Math.FloorTo(index/this.tabPerRow); // Row 0 , 1
            let remainder = index%this.tabPerRow;

            let posX: number = startX+(gapX*remainder);
            let posY: number = rowY + (gapY*row);
            
            let tabButton:TabButtonDeck = new TabButtonDeck(this,posX,posY,this.tabSize,deck);
            tabButton.onPressCallback = ()=>{
                if( this.selectedDeckKey != deck.key ){
                    this.selectDeckTab(deck.key);
                    this.updateObtainButton();
                }
            }

            this.tabButtons.push(tabButton);
        })
    }   

    selectDeckTab( deckKey:string ){
        this.selectedDeckKey = deckKey;

        this.updateDeckTabs(); // Rerender Deck Tabs State
        this.renderVocabs(); // Render new deck vocabs
    }

    updateDeckTabs(){
        this.tabButtons.forEach((tab)=>{
            if( tab.deck && tab.deck.key == this.selectedDeckKey ){
                tab.setStatus('selected');
            }else{
                tab.setStatus('default');
            }
        })
    }

    renderVocabs(){
        // Clear
        let children = this.container.getAll();
        children.forEach( (child)=>{
            child.destroy();
        })
        // Render Deck
        const deck:Deck | undefined = DeckRepo.getDeck(this.selectedDeckKey);
        
        if( deck != undefined ){
            // Calculate with consider to add into inner container
            const startX: number = -(this.vocabGapX*(this.vocabPerRow-1)/2);
            const startY: number = -(GameLib.screenHeight/2 - this.itemPadding - (this.vocabSizeHeight/2) );
            deck.vocabs.forEach((vocab,index) => {
                let row = Phaser.Math.FloorTo(index/this.vocabPerRow); // Row 0 , 1
                let remainder = index%this.vocabPerRow;
                
                let posX: number = startX + (this.vocabGapX*remainder);
                let posY: number = startY + (this.vocabGapY*row);

                let vocabCard:VocabCard = new VocabCard(
                    this,
                    posX,
                    posY,
                    this.vocabSizeWidth,
                    this.vocabSizeHeight,
                    vocab,
                    {withForgeCondition:false, selectedEffect:true}
                );
                vocabCard.setInteractive();
                vocabCard.onPressCallback = ()=>{
                    this.selectedVocabKey = vocab.key;
                    this.updateVocabSelected();
                    this.updateObtainButton();
                }

                let isOwned:boolean = this.saveManager.checkIsOwnedVocab( vocab.key );
                if( isOwned ){
                    vocabCard.setIcon( 'tick', GameLib.colorSuccess );
                    vocabCard.setStatusText('OWNED','green');
                }else{
                    vocabCard.setIcon( 'cross', GameLib.colorFailed );
                    vocabCard.setStatusText('--','#ff0000');
                }

                this.vocabCards.push(vocabCard);
                this.container.add(vocabCard.container);
            });
        }
    }

    updateVocabSelected(){
        this.vocabCards.forEach((card)=>{
            if( card.vocab && card.vocab.key == this.selectedVocabKey ){
                card.setSelected(true);
            }else{
                card.setSelected(false);
            }
        })
    }

    updateObtainButton(){
        if( this.buttonObtain) this.buttonObtain.setVisible(false);
        
        if( this.selectedVocabKey ){
            if( !this.saveManager.checkIsOwnedVocab( this.selectedVocabKey ) ){
                if( this.buttonObtain)  this.buttonObtain.setVisible(true);
            }
        }
    }
}
