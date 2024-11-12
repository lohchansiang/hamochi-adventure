import { GameObjects, Scene } from 'phaser';
import CloseButton from '@/lib/components/CloseButton';
import GameLib from '@/lib/GameLib';
import SaveManager from '../components/SaveManager';
import DebugButton from '@/lib/components/DebugButton';

export class DemoSave extends Scene
{
    saveManager: SaveManager
    //
    title: GameObjects.Text
    buttonClose: CloseButton
    dataSaveText: GameObjects.Text
    //
    saveButton: DebugButton
    resetButton: DebugButton
    //
    constructor ()
    {
        super('DemoSave');
    }

    create ()
    {   
        const bg = this.add.rectangle(GameLib.screenWidth/2, GameLib.screenHeight/2, GameLib.screenWidth, GameLib.screenHeight, 0xFEF9F3);
        //
        this.title = this.add.text(
            50,
            80,
            'Save Data Debug Tool',
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

        // Render String
        this.dataSaveText = this.add.text(
                                        50,
                                        250,
                                        '',
                                        {
                                            fontSize:'34px',
                                            color:'red',
                                            wordWrap: { width: GameLib.screenWidth-100, useAdvancedWrap: true },
                                        });

        
        // 
        this.saveManager = new SaveManager( this );
        this.renderText();
        //
        this.resetButton = new DebugButton(this,GameLib.screenWidth*0.75, GameLib.screenHeight/2 + 600, 'Reset');
        this.resetButton.setScale(0.6);
        this.resetButton.onPressed(()=>{
            this.saveManager.resetSaveData();
            this.renderText();
        })
    }

    renderText(){
        if( this.dataSaveText ){
            this.dataSaveText.setText(JSON.stringify(this.saveManager.playerVocabs));
        }
    }
}
