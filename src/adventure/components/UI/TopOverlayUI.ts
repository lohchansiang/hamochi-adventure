import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";

export default class TopOverlayUI{
    static preload( scene: Scene ){
    }

    private scene: Scene
    private container: GameObjects.Container
    //
    // titleContainer: GameObjects.Container
    // titleText: GameObjects.Text
    // titlePanel: GameObjects.NineSlice

    constructor(scene:Scene, x:number, y:number ){
        this.scene = scene
        this.container = this.scene.add.container(x,y).setDepth(1000);

        // Debug Container
        // let rect = this.scene.add.rectangle(0,0,GameLib.screenWidth-50,1000,0x000000,0.2).setOrigin(0.5,0.5);
        // this.container.add(rect);

        // Render Title
        // this.titleContainer = this.scene.add.container(0, -100);
        // this.container.add(this.titleContainer);

        // this.titlePanel = this.scene.add.nineslice( 0, 0, 'panelWhite', 0 ,400, 100, 50,50,50,50);
        // this.titleContainer.add(this.titlePanel);

        // this.titleText = this.scene.add.text(0,0, 'Text',GameLib.textDefaultStyle).setOrigin(0.5);
        // this.titleContainer.add(this.titleText);


        // Try to
    }
}