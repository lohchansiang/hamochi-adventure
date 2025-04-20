import { MapObjectTexture, MapObjectTextureRepo } from "@/adventure/repos/MapObjectTextureRepo"
import { GameObjects, Scene } from "phaser"
import MapEntityConfig, { MapEntityType } from "./MapEntityConfig"
import { MapEntity } from "./MapEntity"
import { MapActionInterface } from "../MapActions/Interface/MapActionInterface"

export default class MapEntityDeco implements MapEntity{
    private scene: Scene
    private config: MapEntityConfig
    //
    private container: GameObjects.Container
    private sprite: GameObjects.Sprite
    private glow: GameObjects.Sprite
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
        
        let mapObject: MapObjectTexture | undefined = MapObjectTextureRepo.getMapObject( config.mapObjectKey );
        
        if( mapObject ){
            // Prepare Sprite
            this.sprite = this.scene.add.sprite(0,0,mapObject.textureKey).setOrigin(0.5,1);
            this.sprite.setFlipX(config.isFlip);

            // Add Glow Image
            this.glow = this.scene.add.sprite(0,0,mapObject.textureKey).setOrigin(0.5,1).setTintFill(0xFFFFFF);
            this.glow.setFlipX(config.isFlip);
            
            // Resize Glow
            let glowSize:number = 20;
            this.glow.setDisplaySize( this.sprite.displayWidth + glowSize, this.sprite.displayHeight + glowSize );
            this.glow.y += glowSize/2;
            this.glow.setVisible(false);
            
            this.container.add(this.glow);
            this.container.add(this.sprite);

            // Run anim function
            if( mapObject.animationIdle ){
                this.sprite.anims.play( MapObjectTextureRepo.getIdleAnimKey( mapObject) );
                this.glow.anims.play( MapObjectTextureRepo.getIdleAnimKey( mapObject) );
            }

            this.isReady = true;
        }
        
        // Prepare title (work for building now)
        if( config.label ){
            this.labelContainer = this.scene.add.container( 0, this.sprite.y - 350 );
            this.container.add(this.labelContainer);

            this.labelPanel = this.scene.add.nineslice( 0, 0, 'panelWhite', 0 ,400, 100, 50,50,50,50);
            this.labelContainer.add(this.labelPanel);

            this.labelText = this.scene.add.text(0,0, config.label, {
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
        return this.config.action? this.config.action: null;
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
            if( this.glow ){
                this.glow.setVisible(true)
            }
            if( this.labelContainer ){
                this.labelContainer.setVisible(true);
            }
        }else{
            if( this.glow ){
                this.glow.setVisible(false)
            }
            if( this.labelContainer ){
                this.labelContainer.setVisible(false);
            }
        }
    }

    getConfig():MapEntityConfig{
        return this.config;
    }
}