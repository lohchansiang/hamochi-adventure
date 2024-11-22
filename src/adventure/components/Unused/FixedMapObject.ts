import GameLib from "@/lib/GameLib";
import { GameObjects, Scene, Tweens } from "phaser";
import { MapObjectRepo } from "@/lib/repos/MapObjectRepo";
import FixedMap from "./FixedMap";

export class MapObjectPlacement {
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

export default class FixedMapObject{
    // Sidescrolling Map

    static preload( scene: Scene ){
        //
        MapObjectRepo.preload(scene)
    }

    scene: Scene
    container: GameObjects.Container
    //
    map: FixedMap
    offsetY: number = -120
    //
    objectList: Array<MapObjectPlacement> 
    collided: Array<string>

    constructor(scene:Scene){
        this.scene = scene
        this.container = this.scene.add.container(0,0);
        
        // Layer Main
        this.objectList = [
            {
                mapObjectKey: 'baricade',
                x: 450,
                y: -100,
                collisionRange: 0,
            },
            {
                mapObjectKey: 'baricade',
                x: 450,
                y: 0,
                collisionRange: 0,
            },
            {
                mapObjectKey: 'signboardNext',
                x: 2000,
                y: -200,
                collisionRange: 0,
            },
            {
                mapObjectKey: 'gateBack',
                x: 3000,
                y: 0,
                collisionRange: 0,
            },
            {
                mapObjectKey: 'gateFront',
                x: 3000,
                y: 0,
                collisionRange: 0,
            },
            {
                mapObjectKey: 'buildingMushroom',
                x: 5000,
                y: -200,
                collisionRange: 300,
                showCollision: true,
                title: "MUSHROOM HOUSE"
            },
        ];
        
        // Render Map Objects
        this.objectList.forEach((object)=>{
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

        this.objectList.forEach((object)=>{
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