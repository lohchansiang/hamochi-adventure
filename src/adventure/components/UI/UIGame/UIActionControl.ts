import SpriteButton from "@/lib/components/SpriteButton";
import { GameObjects, Scene } from "phaser";
import { IMapAction } from "../../../interfaces/IMapAction";
import { IMapEntity } from "@/adventure/interfaces/IMapEntity";
import { GameScene } from "@/adventure/scenes/GameScene";
import { GameState } from "../../Game/GameSceneManager";

export default class UIActionControl{
    static preload( scene: Scene ){
        //
    }

    private scene: GameScene
    private container: GameObjects.Container
    //
    private button: SpriteButton
    private text: GameObjects.Text
    //
    private upKey!: Phaser.Input.Keyboard.Key | undefined
    private mapEntity: IMapEntity | null 
    //
    private isRunningAction: boolean
    private runningActions: Array<IMapAction>
    private runningIndex: number

    constructor(scene:GameScene,x:number,y:number){
        this.scene = scene;

        this.container = this.scene.add.container(x,y);
        
        this.button = new SpriteButton(this.scene,0, 0, 'buttonCircleAction').setScale(0.5);
        this.container.add(this.button);

        this.text = this.scene.add.text(this.button.x,this.button.y + 150,'Action',{fontSize:40}).setOrigin(0.5);
        this.container.add(this.text);

        this.button.onPressedCallback = ()=>{
            if( this.isRunningAction ) return;
            this.runAction();
        }

        if( this.scene && this.scene.input && this.scene.input.keyboard){
            this.scene.input.keyboard.on('keyup-UP', () => {
                if( this.isRunningAction ) return;
                this.runAction();
            });
        }

        this.updateAction(null);
    }

    private runAction(){
        if( this.scene.manager.gameState != GameState.PLAY ) return;
        
        let actions: Array<IMapAction> = this.mapEntity?.getActions() ?? [];
        
        // Reset Running Action Sequence
        this.runningActions = [];
        this.runningIndex = -1;

        if( actions.length > 0 ){
            // set Running Action Sequence
            this.runningActions = actions;
            this.isRunningAction = true;
            
            this.runNext();
        }else{
            console.log('No Action Found.');
        }
    }

    private runNext(){
        let isRun: boolean = false;

        if( this.runningActions.length > 0 ){
            this.runningIndex += 1;
            
            if( this.runningIndex < this.runningActions.length ){
                this.runningActions[this.runningIndex].run( this.scene, ()=>{ this.runNext() } );

                isRun = true;
            }
        }

        if( !isRun ){
            // Reset Running Action Sequence
            this.runningActions = [];
            this.runningIndex = -1;
            this.isRunningAction = false;

            console.log('Action Sequence ended');
        }
    }

    getContainer():GameObjects.Container{
        return this.container;
    }

    show(){
        this.container.setVisible(true);
    }

    hide(){
        this.container.setVisible(false);
    }
 
    updateAction( entity: IMapEntity| null ){
        this.mapEntity = entity;
        
        let actions: Array<IMapAction> = this.mapEntity?.getActions() ?? [];
        if( actions.length > 0 ){
            let label:string = 'Interact';

            label = actions[0].label;
            label = label.toLowerCase().replace(/\b[a-z]/g, function(letter: string) {
                return letter.toUpperCase();
            });

            this.text.setText( label );
            this.show();
        }else{
            this.text.setText('No Action');
            this.hide();
        }
    }
}