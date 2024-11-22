import GameLib from "@/lib/GameLib";
import { GameObjects, Scene, Tweens } from "phaser";
import { MapObjectRepo } from "@/lib/repos/MapObjectRepo";

export class MapEntity {
    type: string // deco, building
    mapObjectKey: string
    x: number
    y: number
    collisionRange: number
    showCollision?: boolean = false
    title? : string
    //
    objectContainer? : GameObjects.Container
    titleContainer? : GameObjects.Container
    glowContainer?: GameObjects.Container
}

export default class MapEntities{
    // Sidescrolling Map
    scene: Scene
    container: GameObjects.Container
    //
    offsetY: number = -120
    //
    entityList: Array<MapEntity> 
    collided: Array<string>

    constructor(scene:Scene){
        this.scene = scene
        this.container = this.scene.add.container(0,0);

        this.entityList = [];
        this.collided = [];
    }
    
    renderEntities( entityList:Array<MapEntity> ){
        this.entityList = entityList;

        // Render Map Objects
        this.entityList.forEach((object)=>{
            // Prepare Glow Container
            let glowContainer = this.scene.add.container( object.x, object.y+this.offsetY );
            this.container.add(glowContainer);
            
            // Add Glow Image to Glow Container
            let glow = this.scene.add.sprite(0,0,object.mapObjectKey).setOrigin(0.5,1).setTintFill(0xFFFFFF);
            glowContainer.add(glow);

            // Prepare Object Container
            let objectContainer = this.scene.add.container( object.x, object.y+this.offsetY );
            this.container.add(objectContainer);

            // Add Object Image to Object Container
            let item = this.scene.add.sprite(0,0,object.mapObjectKey).setOrigin(0.5,1);
            objectContainer.add(item);
            
            object.objectContainer = objectContainer;
            object.glowContainer = glowContainer;

            // Resize Glow
            let glowSize:number = 20;
            glow.setDisplaySize( item.displayWidth + glowSize, item.displayHeight + glowSize );
            glow.y += glowSize/2;
            glowContainer.setVisible(false);

            if( object.title ){
                let titleContainer = this.scene.add.container( 0, item.y - 350 );
                objectContainer.add(titleContainer);

                let titlePanel = this.scene.add.nineslice( 0, 0, 'panelWhite', 0 ,400, 100, 50,50,50,50);
                titleContainer.add(titlePanel);

                let titleText = this.scene.add.text(0,0, object.title, {
                    fontSize: '32px',
                    fontFamily: 'Arial',
                    color: '#000000',
                    align: "center",
                    wordWrap: { width: 300, useAdvancedWrap: true }
                }).setOrigin(0.5);
                titleContainer.add(titleText);
                titleContainer.setVisible(false);
                
                object.titleContainer = titleContainer;
            }
            
            // Render Collision Debug
            if( object.showCollision && object.collisionRange > 0 ){
                let rect = this.scene.add.rectangle( object.x,this.offsetY, object.collisionRange, 200, 0x0000ff,0.3).setOrigin(0.5,1);
                this.container.add(rect);
            }
        });
    }


    checkCollision( position:number ){
        let collided: Array<string> = [];

        
        this.entityList.forEach((object)=>{
            if( object.collisionRange > 0 ){
                let collisionStartX = object.x - (object.collisionRange/2);
                let collisionEndX = object.x + (object.collisionRange/2);

                if( position > collisionStartX && position < collisionEndX ){
                    collided.push(object.mapObjectKey);
                    
                    if( object.glowContainer ){
                        object.glowContainer.setVisible(true);
                    }
                    if( object.titleContainer ){
                        object.titleContainer.setVisible(true);
                    }
                }else{
                    if( object.glowContainer ){
                        object.glowContainer.setVisible(false);
                    }
                    if( object.titleContainer ){
                        object.titleContainer.setVisible(false);
                    }
                }
            }
        });

        this.collided = collided
    }
}