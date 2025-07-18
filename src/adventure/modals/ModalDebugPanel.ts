import { Scene } from "phaser";
import Panel from "../components/UI/Common/Panel"
import GameLib from "@/lib/GameLib";
import { QuickDebug } from "../components/Singleton/QuickDebug";
import { ScrollView, IScrollViewConfig } from "../components/UI/Common/ScrollView";

export default class  ModalDebugPanel extends Panel{

    static preload( scene: Phaser.Scene ){
        
    }
    
    quickDebug: QuickDebug
    // 
    paddingTop: number = 250
    paddingSide: number = 100
    paddingBottom: number = 100
    //
    config: IScrollViewConfig
    scrollView: ScrollView;

    constructor( scene:Scene ){
        super(scene);

        this.quickDebug = QuickDebug.getInstance();
        
        // Setup config (Based on Container)
        let oriX:number = - (GameLib.screenWidth/2 - this.paddingSide);
        let oriY:number = - (GameLib.screenHeight/2 - this.paddingTop);
        let contentWidth = GameLib.screenWidth - (this.paddingSide*2);
        let contentHeight =  GameLib.screenHeight - this.paddingTop - this.paddingBottom;

        this.config = {
            x: oriX,
            y: oriY,
            maskX: this.paddingSide,
            maskY: this.paddingTop,
            width: contentWidth,
            height: contentHeight,
            padding: 5,
            backgroundColor: 0x333333,
            borderColor: 0x333333,
            borderWidth: 2
        };
        this.scrollView = new ScrollView(this.scene, this.config);
        this.container.add( this.scrollView.getBackground() );
        this.container.add( this.scrollView.getContainer() );

        // Update when every time open panel
        this.onPanelOpen = ()=>{
            this.renderLogs()
        }

        this.onPanelClose = ()=>{
            this.closeLogs()
        }

        // this.open();
    }

    private renderLogs(){
        const logs: string[] = this.quickDebug.logs;
        const items: Phaser.GameObjects.Text[] = [];
        logs.forEach((text: string) => {
            const textObj = this.scene.add.text(0, 0, text, {
                fontSize: "35px",
                color: "#ffffff",
                padding: { x: 10, y: 5 },
                wordWrap: { width: this.config.width - 20 }
            });
            items.push(textObj);
        });
        this.scrollView.addContent(items);
        this.scrollView.enableScroll();
    }

    private closeLogs(){
        this.scrollView.clearContent();
        this.scrollView.disableScroll();
    }
}