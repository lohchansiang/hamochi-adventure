import { MapObjectTexture, MapObjectTextureRepo } from "@/adventure/repos/MapObjectTextureRepo"
import { GameObjects, Scene } from "phaser"
import { IMapAction } from "../../../interfaces/IMapAction"
import { IMapEntity } from "../../../interfaces/IMapEntity"
import { IMapEntityConfig } from "@/adventure/interfaces/IMapEntityConfig"

export default class MapEntityDeco implements IMapEntity{
    private scene: Scene
    private config: IMapEntityConfig
    //
    private container: GameObjects.Container
    private sprite: GameObjects.Sprite

    isReady: boolean = false
    isMiniMap: boolean = false

    constructor(scene:Scene, config: IMapEntityConfig){
        this.scene = scene;
        this.config = config;

        let offsetY: number = -120;
        
        // Prepare Object Container
        this.container = this.scene.add.container( config.x, config.y + offsetY );

        let mapObject: MapObjectTexture | undefined = MapObjectTextureRepo.getMapObject( config.mapObjectKey );
        
        if( mapObject ){
            // Prepare Sprite
            this.sprite = this.scene.add.sprite(0,0,mapObject.textureKey).setOrigin(0.5,1);
            this.sprite.setFlipX(config.isFlip);

            this.container.add(this.sprite);

            // Run anim function
            if( mapObject.animationIdle ){
                this.sprite.anims.play( MapObjectTextureRepo.getIdleAnimKey( mapObject) );
            }

            this.isReady = true;
        }
    }
    

    getContainer():GameObjects.Container{
        return this.container;
    }
  
    getActions(): Array<IMapAction>{
        return [];
    }

    isCollided( currentX:number ):boolean{
        return false;
    }

    setActive( isActive: boolean ){
       return;
    }


    getConfig():IMapEntityConfig{
        return this.config;
    }
}