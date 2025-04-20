import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser";
import { MapEntity } from "./MapEntityConfigs/MapEntity";

export default class MapMini{

    static preload( scene: Scene ){
        scene.load.image("endFlagSmall", "assets/adventure/game/endFlagSmall.png");
    }

    private scene: Scene
    //
    private containter: GameObjects.Container
    private buildingContainer: GameObjects.Container
    //
    private width: number = GameLib.screenWidth-140
    private height: number = 10
    private startX: number
    private endX: number
    //
    private bar: GameObjects.Rectangle
    private sideStart: GameObjects.Rectangle
    private sideEnd: GameObjects.Rectangle
    private background: GameObjects.Rectangle
    private avatarIcon: GameObjects.Rectangle
    
    constructor( scene:Scene, x: number, y: number ){
        this.scene = scene
        
        this.startX = - (this.width/2)
        this.endX = this.width/2
        
        this.containter = this.scene.add.container(x,y);

        this.background = this.scene.add.rectangle(0,0,this.width,40,0xA9A9A9).setOrigin(0.5,1);
        this.bar = this.scene.add.rectangle(0,0,this.width,10,0x000000).setOrigin(0.5,1);
        this.sideStart = this.scene.add.rectangle(-this.width/2,0,10,50,0x000000).setOrigin(0.5,1);
        this.sideEnd = this.scene.add.rectangle(this.width/2,0,10,50,0x000000).setOrigin(0.5,1);
       
        this.containter.add(this.background);
        this.containter.add(this.bar);
        this.containter.add(this.sideStart);
        this.containter.add(this.sideEnd);
        //
        this.buildingContainer = this.scene.add.container(0,0);
        this.containter.add(this.buildingContainer);

        this.avatarIcon = this.scene.add.rectangle( this.startX, -20, 20, 20, 0x00ff00 );
        this.containter.add(this.avatarIcon);
    }

    // Render Map Dots
    renderBuildings( entityList:Array<MapEntity>, maxLength: number  ){
        entityList.forEach( (entity)=>{
            if( entity.isMiniMap ){
                let positionX:number = this.startX + (entity.getContainer().x / maxLength * this.width);

                let rect: GameObjects.Rectangle = this.scene.add.rectangle(positionX,-10,20,40,0xff0000).setOrigin(0.5,1);
                this.buildingContainer.add(rect);
            }
        });
    }

    update( currentX:number, maxLength:number ){
        this.avatarIcon.setX( this.startX + ( currentX/ maxLength * this.width ) );
    }
}