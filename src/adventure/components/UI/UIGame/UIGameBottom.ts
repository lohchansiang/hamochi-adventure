import { GameObjects, Scene } from "phaser";
import UIMoveControl from "./UIMoveControl";
import UIActionControl from "./UIActionControl";
import DebugButton from "@/lib/components/DebugButton";
import GameLib from "@/lib/GameLib";
import { InputMovement } from "../../Player/PlayerEnum";
import MapEntity from "../../Map/MapEntityConfigs/MapEntityDeco";
import UIMoveSlider from "./UIMoveSlider";
import { GameDepth } from "../../Config/GameDepth";
import { GameScene } from "@/adventure/scenes/GameScene";

export default class UIGameBottom{
    static preload( scene: Scene ){
        //
    }

    private scene: GameScene
    private container: GameObjects.Container
    private bottomPanelBorder: GameObjects.Rectangle
    private bottomPanel: GameObjects.Rectangle

    private controlContainer: GameObjects.Container
    private moveSlider: UIMoveSlider
    private moveControl: UIMoveControl
    private actionControl: UIActionControl
    //
    // Debug Button
    private buttonSelectSlider: DebugButton
    private buttonSelectArrow: DebugButton
    private activeControl: string
    //
    private debugText: GameObjects.Text

    constructor(scene:GameScene){
        this.scene = scene;

        let panelHeight: number = 900;
        this.container = this.scene.add.container( GameLib.midX, GameLib.screenHeight - panelHeight/2 ).setDepth(GameDepth.UI_MAIN);

        // Render Bottom Panel
        this.bottomPanel = this.scene.add.rectangle( 0, 0, GameLib.screenWidth, panelHeight, GameLib.colorPanelBg ).setOrigin(0.5);
        this.container.add( this.bottomPanel );

        this.bottomPanelBorder = this.scene.add.rectangle( 0, -panelHeight/2, GameLib.screenWidth, 20, GameLib.colorPanelBgDark );
        this.container.add( this.bottomPanelBorder );
       
        this.controlContainer = this.scene.add.container(0,0);
        this.container.add(this.controlContainer);

        // Create Player Controller and Link to Avatar
        this.moveSlider = new UIMoveSlider( this.scene, 0, 200 );
        this.controlContainer.add( this.moveSlider.getContainer() );
        this.moveSlider.hide();

        this.moveControl = new UIMoveControl( this.scene, 0, 200 ); 
        this.controlContainer.add(this.moveControl.getContainer());
        this.moveControl.hide();

        this.actionControl = new UIActionControl( this.scene, 350, -150 );
        this.controlContainer.add(this.actionControl.getContainer());

        // Ccntrol Selector
        this.selectControlType('arrow');
        
        this.buttonSelectArrow = new DebugButton( this.scene, -350, -350, 'Use Arrow').setScale(0.5);
        this.buttonSelectArrow.onPressedCallback = ()=>{
            this.selectControlType('arrow');
        };
        this.controlContainer.add(this.buttonSelectArrow);

        this.buttonSelectSlider = new DebugButton( this.scene, -350, -250, 'Use Slider').setScale(0.5);
        this.buttonSelectSlider.onPressedCallback = ()=>{
            this.selectControlType('slider');
        };
        this.controlContainer.add(this.buttonSelectSlider);

        this.debugText = this.scene.add.text( 0, -200,'Debug Text',{fontSize:40}).setOrigin(0.5);
        this.controlContainer.add(this.debugText);

        this.hideControl();
    }

    selectControlType( controlKey:string ){
        if( controlKey != this.activeControl ){
            this.activeControl = controlKey;
            this.moveSlider.stop();
            if( controlKey == 'arrow' ){
                this.moveControl.show();
                this.moveSlider.hide();
            }else if( controlKey == 'slider' ){
                this.moveControl.hide();
                this.moveSlider.show();
            }
        }
    }

    getActiveInputMovement():InputMovement{
        if( this.activeControl == 'slider' ){
            return this.moveSlider.getInputMovement();
        }else if( this.activeControl == 'arrow' ){
            return this.moveControl.getInputMovement();
        }

        return InputMovement.NONE;
    }
    
    updateActionControl( entity: MapEntity| null ){
        this.actionControl.updateAction(entity);
    }

    updateDebugText( text:string ){
        this.debugText.setText(text);
    }

    showControl(){
        this.controlContainer.setVisible(true);
    }

    hideControl(){
        this.controlContainer.setVisible(false);
    }
}