import CloseButton from "@/lib/components/CloseButton"
import GameLib from "@/lib/GameLib"
import { Deck, DeckRepo } from "@/lib/repos/DeckRepo"
import { GameObjects, Scene, Types } from "phaser"
import TabButtonDeck from "./TabButtonDeck"
import VocabCard from "./VocabCard"
import CardMakerManager from "../CardMakerManager"
import SaveManager from "../../SaveManager"

export default class panelSelectedCard{

    static preload( scene: Phaser.Scene ){
        
    }

    scene: Scene
    manager: CardMakerManager
    backdrop: GameObjects.Rectangle
    container: GameObjects.Container
    panel: GameObjects.Rectangle
    innerPanel: GameObjects.Rectangle
    innerContainer: GameObjects.Container
    closeButton: CloseButton
    //
    selectedDeckKey: string
    // Panel
    panelWidth: number = GameLib.screenWidth-100
    panelHeight: number
    panelPadding: number = 50
    // Close Button
    closeButtonSize: number = 120 
    // Tab Decks
    deckButtonSectionDiffY: number
    deckButtonPerRow: number = 6
    deckButtonGap: number
    deckButtonRow: number
    //
    innerPanelHeight: number
    innerPanelWidth: number
    vocabSectionDiffY: number
    vocabSizeWidth: number = 180
    vocabSizeHeight: number = VocabCard.calculateHeight(180)
    vocabPerRow: number = 4
    vocabRow: number = 3
    vocabGapX: number
    vocabGapY: number
    //
    tabButtonSize: number = 120
    tabButtons: TabButtonDeck[] = []
    //
    vocabCards: VocabCard[] = []
    //
    onCardSelected: Function | null
    onPanelOpen: Function | null
    onPanelClose: Function | null

    constructor( scene:Scene, manager: CardMakerManager, x:number, y:number ){
        this.scene = scene
        this.manager = manager

        this.container = scene.add.container(GameLib.screenWidth/2,GameLib.screenHeight/2).setDepth(100);

        this.backdrop = scene.add.rectangle(0,0,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5);
        this.container.add(this.backdrop);

        // Initial Selected Deck Key
        const decks:Deck[] = DeckRepo.getDecks();

        this.deckButtonGap = (this.panelWidth- this.panelPadding*2) / this.deckButtonPerRow;
        this.deckButtonRow = Phaser.Math.FloorTo(decks.length/this.deckButtonPerRow) + 1;
        // Calculate Total Panel Height Based on Content
        // Padding Top
        let totalHeight:number = 0;
        totalHeight += this.panelPadding; // Top Padding
        totalHeight += this.closeButtonSize; // Close Button
        totalHeight += this.panelPadding/2; // Padding Sm
        //
        this.deckButtonSectionDiffY = totalHeight;
        //
        totalHeight += this.deckButtonRow*this.deckButtonGap; // Deck Tab Buttons
        totalHeight += this.panelPadding/2; // Padding Sm
        //
        this.vocabSectionDiffY = totalHeight;
        //
        let innerPanelHeight: number = 0;
        innerPanelHeight += this.panelPadding; // Inner Top Padding
        innerPanelHeight += (this.vocabSizeHeight+this.panelPadding)*this.vocabRow;
        this.innerPanelHeight = innerPanelHeight;

        totalHeight += innerPanelHeight;
        totalHeight += this.panelPadding; // Bottom Padding
        
        this.panelHeight = totalHeight;
        
        // Render Panel
        this.panel = scene.add.rectangle(0,0,this.panelWidth,this.panelHeight,GameLib.colorPanelBg);
        this.container.add(this.panel);

        const topRightPos:Phaser.Types.Math.Vector2Like = this.panel.getTopRight();
        
        // Render Close Button
        const closeButtonX: number = topRightPos.x - this.panelPadding - (this.closeButtonSize/2);
        const closeButtonY: number = topRightPos.y + this.panelPadding + (this.closeButtonSize/2);
        this.closeButton = new CloseButton(scene,closeButtonX,closeButtonY);
        this.closeButton.buttonSprite.displayHeight = this.closeButtonSize;
        this.closeButton.buttonSprite.displayWidth = this.closeButtonSize;
        this.closeButton.onPressed(()=>{
            this.close();
        });
        this.container.add(this.closeButton);
        
        // Render Inner Panel
        const relativeInnerPanelY: number = topRightPos.y + this.vocabSectionDiffY + (this.innerPanelHeight/2);
        this.innerPanelWidth = this.panelWidth - (this.panelPadding*2);

        this.innerPanel = scene.add.rectangle(0,relativeInnerPanelY,this.innerPanelWidth,this.innerPanelHeight,GameLib.colorPanelBgDark);
        this.container.add(this.innerPanel);

        this.innerContainer = scene.add.container(0,relativeInnerPanelY);
        this.container.add(this.innerContainer);

        // Calculate vocab dimension
        this.vocabGapX = (this.innerPanelWidth - (this.panelPadding)) / (this.vocabPerRow);
        this.vocabGapY = this.vocabSizeHeight+this.panelPadding;

        this.renderDeckTabs(decks);
        this.selectDeckTab( decks[0].key );

        this.container.setVisible(false);
    }

    renderDeckTabs( decks:Deck[] ){
        // Once Only
        const topLeftPos:Phaser.Types.Math.Vector2Like = this.panel.getTopLeft();
        //
        const rowY: number = topLeftPos.y + this.deckButtonSectionDiffY + (this.deckButtonGap/2);
        const startX: number = topLeftPos.x + this.panelPadding + (this.deckButtonGap/2)
        
        decks.forEach(( deck, index)=>{
            let row = Phaser.Math.FloorTo(index/this.deckButtonPerRow); // Row 0 , 1
            let remainder = index%this.deckButtonPerRow;

            let posX: number = startX+(this.deckButtonGap*remainder);
            let posY: number = rowY + (this.deckButtonGap*row);
            
            let tabButton:TabButtonDeck = new TabButtonDeck(this.scene,posX,posY,this.tabButtonSize,deck);
            tabButton.onPressCallback = ()=>{
                this.selectDeckTab(deck.key);

                this.scene.sound.play('lightClick');
            }

            this.container.add(tabButton.container);
            this.tabButtons.push(tabButton);
        })
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

    selectDeckTab( deckKey:string ){
        if( this.selectedDeckKey != deckKey ){
            this.selectedDeckKey = deckKey;

            this.updateDeckTabs(); // Rerender Deck Tabs State
            this.renderVocabs(); // Render new deck vocabs
        }
    }

    renderVocabs(){
        // Clear
        let children = this.innerContainer.getAll();
        children.forEach( (child)=>{
            child.destroy();
        })
        // Render Deck
        const deck:Deck | undefined = DeckRepo.getDeck(this.selectedDeckKey);
        
        if( deck != undefined ){
            // Calculate with consider to add into inner container
            const startX: number = -(this.vocabGapX*(this.vocabPerRow-1)/2);
            const startY: number = -(this.innerPanelHeight/2 - this.panelPadding - (this.vocabSizeHeight/2) );
            deck.vocabs.forEach((vocab,index) => {
                let row = Phaser.Math.FloorTo(index/this.vocabPerRow); // Row 0 , 1
                let remainder = index%this.vocabPerRow;
                
                let posX: number = startX + (this.vocabGapX*remainder);
                let posY: number = startY + (this.vocabGapY*row);

                let vocabCard:VocabCard = new VocabCard(
                    this.scene,
                    posX,
                    posY,
                    this.vocabSizeWidth,
                    this.vocabSizeHeight,
                    vocab,
                    {withForgeCondition:true,selectedEffect:false}
                );
                vocabCard.setInteractive();
                vocabCard.onPressCallback = ()=>{
                    if( this.onCardSelected ){
                        this.onCardSelected( this.selectedDeckKey, vocab.key )
                    }

                    this.scene.sound.play('forgeSelect');
                    this.close();
                }

                // Set vocab card status
                if( this.manager.saveManager.checkIsForgedVocab(vocab.key) ){
                    vocabCard.setStatus('forged');
                }else if( this.manager.saveManager.checkIsOwnedVocab(vocab.key) ){
                    vocabCard.setStatus('owned');
                }else{
                    vocabCard.setStatus('none');
                }

                this.vocabCards.push(vocabCard);
                this.innerContainer.add(vocabCard.container);
            });

            // // Set initial selected card
            // if( !this.selectedVocabKey && !this.selectedVocabIndex){
            //     if( deck.vocabs[0] != undefined ){
            //         this.selectVocabCard(deck.vocabs[0].key,0);
            //     }
            // }else{
            //     // Remain same selected position when change tab but update selected card
            //     if( deck.vocabs[this.selectedVocabIndex] != undefined ){
            //         this.selectVocabCard(deck.vocabs[this.selectedVocabIndex].key,this.selectedVocabIndex);
            //     }else{
            //         this.selectedVocabKey = '';
            //         this.bottomButtonConfirm.setDisabled( true );
            //     }
            // }
        }
    }

    open(){
        this.container.setVisible(true);
        this.renderVocabs();
        if( this.onPanelOpen ) this.onPanelOpen();
    }

    close(){
        this.container.setVisible(false);
        if( this.onPanelClose ) this.onPanelClose();
    }
}