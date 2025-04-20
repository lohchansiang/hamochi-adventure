import { GameObjects, Scene } from "phaser"
import MapEntityConfig from "./MapEntityConfig"
import { MapEntity } from "./MapEntity"
import { MapActionInterface } from "../MapActions/Interface/MapActionInterface"
import { AvatarInterface } from "../../Avatar/AvatarInterface"
import { CharacterData, CharacterRepo } from "@/adventure/repos/CharacterRepo"
import AvatarRenderer from "../../Avatar/AvatarRenderer"
import { DialogData, DialogRepo } from "@/adventure/repos/DialogRepo"
import { MapActionDialog } from "../MapActions/MapActionDialog"

export default class MapEntityNpc implements MapEntity{
    private scene: Scene
    private config: MapEntityConfig
    //
    private container: GameObjects.Container
    private charData: CharacterData
    private avatar: AvatarInterface 
    //
    private labelContainer: GameObjects.Container
    private labelPanel: GameObjects.NineSlice
    private labelText: GameObjects.Text
    //
    isReady: boolean = false
    isMiniMap: boolean = true

    constructor(scene:Scene, config: MapEntityConfig){
        this.scene = scene;
        this.config = config;

        let offsetY: number = -120;

        // Prepare Object Container
        this.container = this.scene.add.container( config.x, config.y + offsetY );
        
        let charData: CharacterData | undefined = CharacterRepo.getCharacterData( config.mapObjectKey );

        if( charData ){
            this.charData = charData;
            
            this.avatar = new AvatarRenderer( this.scene, 0,0);
            this.avatar.renderAvatar( charData.key );
            
            this.avatar.setDirection( config.isFlip? -1:1)

            this.container.add(this.avatar.getContainer());
            this.isReady = true;

            this.labelContainer = this.scene.add.container( 0, - 250 );
            this.container.add(this.labelContainer);

            this.labelPanel = this.scene.add.nineslice( 0, 0, 'panelWhite', 0 ,400, 100, 50,50,50,50);
            this.labelContainer.add(this.labelPanel);

            this.labelText = this.scene.add.text(0,0, charData.name, {
                fontSize: '32px',
                fontFamily: 'Arial',
                color: '#000000',
                align: "center",
                wordWrap: { width: 300, useAdvancedWrap: true }
            }).setOrigin(0.5);
            this.labelContainer.add(this.labelText);
            this.labelContainer.setVisible(false);
        }
        
        // Render Collision Debug
        if( config.showCollision && config.collisionRange > 0 ){
            let rect = this.scene.add.rectangle( 0, - offsetY, config.collisionRange, 200, 0x0000ff,0.3).setOrigin(0.5,1);
            this.container.add(rect);
            this.container.sendToBack(rect);
        }
    }
    

    getContainer():GameObjects.Container{
        return this.container;
    }
  
    getAction():MapActionInterface | null{
        let action: MapActionInterface | null = null;
        if( this.charData && this.charData.defaultDialogKey ){
            // Check Dialog key exist
            let dialogData : DialogData | undefined = DialogRepo.getDialogData( this.charData.defaultDialogKey );
            if( dialogData != undefined ){
                action = new MapActionDialog('Talk',{ dialogKey: this.charData.defaultDialogKey }); 
            }
        }

        return action;
    }

    isCollided( currentX:number ):boolean{
        let isCollided: boolean = false;

        if( this.config.collisionRange > 0 ){
            let collisionStartX = this.config.x - (this.config.collisionRange/2);
            let collisionEndX = this.config.x + (this.config.collisionRange/2);

            if( currentX > collisionStartX && currentX < collisionEndX ){
                isCollided = true;
            }
        }

        return isCollided;
    }

    setActive( isActive: boolean ){
        if( isActive ){
            if( this.labelContainer ){
                this.labelContainer.setVisible(true);
            }
        }else{
            if( this.labelContainer ){
                this.labelContainer.setVisible(false);
            }
        }
    }

    getConfig():MapEntityConfig{
        return this.config;
    }
}