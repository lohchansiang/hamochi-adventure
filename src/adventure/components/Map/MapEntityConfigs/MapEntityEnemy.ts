import { GameObjects, Scene } from "phaser"
import { IMapEntity } from "../../../interfaces/IMapEntity"
import { IMapAction } from "../../../interfaces/IMapAction"
import { CharacterData, CharacterRepo } from "@/adventure/repos/CharacterRepo"
import { MapActionDialog } from "../MapActions/MapActionDialog"
import AvatarRenderer from "../../Avatar/AvatarRenderer"
import { MapActionCombat } from "../MapActions/MapActionCombat"
import { IMapEntityConfig } from "@/adventure/interfaces/IMapEntityConfig"

export default class MapEntityEnemy implements IMapEntity{
    private scene: Scene
    private config: IMapEntityConfig
    //
    private container: GameObjects.Container
    private charData: CharacterData
    private avatar: AvatarRenderer 
    //
    private labelContainer: GameObjects.Container
    private labelPanel: GameObjects.NineSlice
    private labelText: GameObjects.Text
    //
    isReady: boolean = false
    isMiniMap: boolean = true

    constructor(scene:Scene, config: IMapEntityConfig){
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
  
    getActions():Array<IMapAction>{
        let actions: Array<IMapAction> = [];

        actions[0] = new MapActionDialog('Talk',{ dialogKey: 'DialogFight' }); 
        actions[1] = new MapActionCombat('Fight', {opponentKey:'aaa'}); 

        return actions;
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

    getConfig():IMapEntityConfig{
        return this.config;
    }
}