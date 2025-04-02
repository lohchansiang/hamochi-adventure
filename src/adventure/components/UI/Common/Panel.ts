// Base Class of Panel UI
import CloseButton from "@/lib/components/CloseButton"
import GameLib from "@/lib/GameLib"
import { GameObjects, Scene, Types } from "phaser"

export default class Panel{

    static preload( scene: Phaser.Scene ){
        
    }

    protected scene: Scene
    protected container: GameObjects.Container
    private backdrop: GameObjects.Rectangle
    private panel: GameObjects.Rectangle
    private innerPanel: GameObjects.Rectangle
    private innerContainer: GameObjects.Container
    private closeButton: CloseButton
    // Panel
    private panelWidth: number = GameLib.screenWidth-100
    private panelHeight: number = GameLib.screenHeight-100
    private panelPadding: number = 50
    // Close Button
    private closeButtonSize: number = 120 
    //
    protected onPanelOpen: Function | null
    protected onPanelClose: Function | null

    constructor( scene:Scene ){
        this.scene = scene

        this.container = scene.add.container(GameLib.screenWidth/2,GameLib.screenHeight/2).setDepth(100);

        this.backdrop = scene.add.rectangle(0,0,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5);
        this.container.add(this.backdrop);
       
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
        

        this.container.setVisible(false);
    }

    open(){
        this.container.setVisible(true);
        if( this.onPanelOpen ) this.onPanelOpen();
    }

    close(){
        this.container.setVisible(false);
        if( this.onPanelClose ) this.onPanelClose();
    }
}