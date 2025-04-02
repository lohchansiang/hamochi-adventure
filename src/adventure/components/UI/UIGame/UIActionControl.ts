import SpriteButton from "@/lib/components/SpriteButton";
import { GameObjects, Scene } from "phaser";
import MapEntity from "../../Map/MapEntity";
import { MapActionInterface } from "../../Map/MapActions/Interface/MapActionInterface";

export default class UIActionControl{
    static preload( scene: Scene ){
        //
    }

    private scene: Scene
    private container: GameObjects.Container
    //
    private button: SpriteButton
    private text: GameObjects.Text
    //
    private upKey!: Phaser.Input.Keyboard.Key | undefined
    private mapEntity: MapEntity | null 

    constructor(scene:Scene,x:number,y:number){
        this.scene = scene;

        this.container = this.scene.add.container(x,y);
        
        this.button = new SpriteButton(this.scene,0, 0, 'buttonCircleAction').setScale(0.5);
        this.container.add(this.button);

        this.text = this.scene.add.text(this.button.x,this.button.y + 150,'Action',{fontSize:40}).setOrigin(0.5);
        this.container.add(this.text);

        this.button.onPressedCallback = ()=>{
            this.runAction();
        }

        if( this.scene && this.scene.input && this.scene.input.keyboard){
            this.scene.input.keyboard.on('keyup-UP', () => {
                this.runAction();
            });
        }

        this.updateAction(null);
    }

    private runAction(){
        let action: MapActionInterface | null = this.mapEntity?.getAction() ?? null;
        
        if( action ){
            action.run( this.scene);
        }else{
            console.log('No Action Found.');
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
 
    updateAction( entity: MapEntity| null ){
        this.mapEntity = entity;
        
        let action: MapActionInterface | null = this.mapEntity?.getAction() ?? null;
        if( action != null ){
            let label:string = 'Interact';

            label = action.label;
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