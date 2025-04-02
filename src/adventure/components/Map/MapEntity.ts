import { MapObject, MapObjectRepo } from "@/adventure/repos/MapObjectRepo"
import { GameObjects, Scene } from "phaser"
import { MapActionInterface } from "./MapActions/Interface/MapActionInterface"
import MapEntityConfig, { MapEntityType } from "./MapEntityConfigs/MapEntityConfig"

export default class MapEntity {
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
    private isShowMiniMap: boolean

    constructor(scene:Scene, config: MapEntityConfig, mapObject: MapObject){
        this.scene = scene;
        this.config = config;
        
        this.isShowMiniMap = false;
        if( this.config.type == MapEntityType.INTERACT ){
            this.isShowMiniMap = true;
        }

        let offsetY: number = -120;

        // Prepare Object Container
        this.container = this.scene.add.container( config.x, config.y + offsetY );
        
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
            this.sprite.anims.play( MapObjectRepo.getIdleAnimKey( mapObject) );
            this.glow.anims.play( MapObjectRepo.getIdleAnimKey( mapObject) );
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
        }

        // let text = this.scene.add.text(0,-200,config.x.toString(),{fontSize:'40px'}).setOrigin(0.5);
        // this.container.add(text);
    }

    getContainer(){
        return this.container;
    }
  
    getAction():MapActionInterface | null{
        return this.config.action? this.config.action: null;
    }

    // runAction(){
    //     if( this.config && this.config.action ){
    //         this.config.action.run( this.scene );
    //     }else{
    //         console.log('No Action');
    //     }
    // }

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

    showGlow(){
        if( this.glow ){
            this.glow.setVisible(true)
        }
        if( this.labelContainer ){
            this.labelContainer.setVisible(true);
        }
    }

    hideGlow(){
        if( this.glow ){
            this.glow.setVisible(false)
        }
        if( this.labelContainer ){
            this.labelContainer.setVisible(false);
        }
    }

    isMiniMap():boolean{
        return this.isShowMiniMap;
    }

    getConfig():MapEntityConfig{
        return this.config;
    }
}