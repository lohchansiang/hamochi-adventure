import GameLib from "@/lib/GameLib";
import { GameObjects, Scene, Tweens } from "phaser";
import { MapPosition, MoveMode } from "./MapEnum";
import FixedMapObject from "./FixedMapObject";

export default class FixedMap{
    // Sidescrolling Map

    static preload( scene: Scene ){
        scene.load.image('mapLayerBack', 'assets/adventure/maps/garden/LayerBack.png');
        scene.load.image('mapLayerMain', 'assets/adventure/maps/garden/LayerMain.png');
        // scene.load.image('mapLayerMain', 'assets/adventure/maps/garden/DebugMain.png');
        scene.load.image('mapLayerSky', 'assets/adventure/maps/garden/LayerSky.png');
        
        scene.load.image('mapMainDemo001', 'assets/adventure/maps/demo/LayerMain001.png');
        scene.load.image('mapMainDemo002', 'assets/adventure/maps/demo/LayerMain002.png');
        scene.load.image('mapMainDemo003', 'assets/adventure/maps/demo/LayerMain003.png');
        //
        scene.load.image('mapMainShortDemo001', 'assets/adventure/maps/demo/LayerMainShort001.png');
        scene.load.image('mapMainShortDemo002', 'assets/adventure/maps/demo/LayerMainShort002.png');
        scene.load.image('mapMainShortDemo003', 'assets/adventure/maps/demo/LayerMainShort003.png');

        FixedMapObject.preload(scene);
    }

    scene: Scene
    container: GameObjects.Container
    //
    skyOffsetY: number = -300
    farOffsetY: number // x
    backOffsetY: number = -300
    mainOffsetY: number =  50
    frontOffsetY: number // x
    //
    skyWidth: number = 2000
    farWidth: number = 2000 // x
    backWidth: number = 3240 
    // mainWidth: number = 3240
    frontWidth: number = 3240 // x
    //
    layerSky: GameObjects.Container // LOOP
    layerFar: GameObjects.Container // LOOP
    layerBack: GameObjects.Container // Fixed
    layerMain: GameObjects.Container // Fixed
    layerObjectBack: GameObjects.Container
    layerPlayer: GameObjects.Container
    layerObjectFront: GameObjects.Container
    layerFront: GameObjects.Container // ?
    //
    moveMargin: number = 600
    viewMargin: number = 1200
    //
    mapLength: number = 0
    moveStartX: number = 0
    moveEndX: number = 10000
    viewStartX: number = 0
    viewEndX: number = 10000
    //
    currentX: number = 3000
    //
    currentMoveMode: MoveMode = MoveMode.NONE
    //
    wallStart: GameObjects.Rectangle
    wallEnd: GameObjects.Rectangle
    //
    backMapObject: FixedMapObject
    frontMapObject: FixedMapObject

    constructor(scene:Scene, x:number, y:number ){
        this.scene = scene
        this.container = this.scene.add.container(x,y);
        
        // Add Layers
        this.layerSky = this.scene.add.container(0,this.skyOffsetY);
        this.layerFar = this.scene.add.container(0,this.farOffsetY);
        this.layerBack = this.scene.add.container(0,this.backOffsetY);
        this.layerMain = this.scene.add.container(0,this.mainOffsetY);
        this.layerObjectBack = this.scene.add.container(0,this.mainOffsetY);
        this.layerPlayer = this.scene.add.container(0,0);
        this.layerObjectFront = this.scene.add.container(0,this.mainOffsetY);
        this.layerFront = this.scene.add.container(0,this.frontOffsetY);

        this.container.add(this.layerSky);
        this.container.add(this.layerFar);
        this.container.add(this.layerBack);
        this.container.add(this.layerMain);
        this.container.add(this.layerObjectBack);
        this.container.add(this.layerPlayer);
        this.container.add(this.layerObjectFront);
        this.container.add(this.layerFront);

        // Layer Sky
        let skyBefore = this.scene.add.sprite(-this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);
        let skyCenter = this.scene.add.sprite(0,0,'mapLayerSky').setOrigin(0.5,1);
        let skyAfter = this.scene.add.sprite(this.skyWidth,0,'mapLayerSky').setOrigin(0.5,1);
        this.layerSky.add(skyBefore);
        this.layerSky.add(skyCenter);
        this.layerSky.add(skyAfter);

        // Layer Back
        let backBefore = this.scene.add.sprite(-this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);
        let backCenter = this.scene.add.sprite(0,0,'mapLayerBack').setOrigin(0.5,1);
        let backAfter = this.scene.add.sprite(this.backWidth,0,'mapLayerBack').setOrigin(0.5,1);
        this.layerBack.add(backBefore);
        this.layerBack.add(backCenter);
        this.layerBack.add(backAfter);

        // Layer Main
        let mainList: Array<string> = [
            'mapLayerMain',
            'mapLayerMain',
            'mapLayerMain',
        ];
        
        // Calculate Map Length Based on Main List Array and create map
        let totalLength: number = 0;
        mainList.forEach((mainMapKey)=>{
            let mainCenter = this.scene.add.sprite(totalLength,0,mainMapKey).setOrigin(0,1);
            this.layerMain.add(mainCenter);

            let texture = this.scene.textures.get(mainMapKey);
            if( texture ){
                totalLength += texture.getSourceImage().width;
            }
        });
        this.mapLength = totalLength;

        // Add Map Objects
        this.backMapObject = new FixedMapObject(this.scene);
        this.layerObjectBack.add(this.backMapObject.container);



        // Prepare Map Param
        this.moveStartX = this.moveMargin;
        this.moveEndX = this.mapLength - this.moveMargin;
        this.viewStartX = this.viewMargin;
        this.viewEndX = this.mapLength - this.viewMargin;

        // Render Overlay End Wall on LayerExtra
        this.wallStart = this.scene.add.rectangle(0,0,this.moveMargin-60,1500,0xff0000,0.5).setOrigin(0,1);
        this.wallEnd = this.scene.add.rectangle(this.mapLength,0,this.moveMargin-60,1500,0xff0000,0.5).setOrigin(1,1);
        this.layerObjectBack.add(this.wallStart);
        this.layerObjectBack.add(this.wallEnd);

        this._moveMap();
    }

    update( deltaX: number ){
        // Update currentX, handle basic movement
        if( deltaX != 0 ){
            this.currentX += deltaX;
            this.currentX = Math.min(this.moveEndX,this.currentX);
            this.currentX = Math.max(this.moveStartX,this.currentX);
        }
        
        // Calculate Move Mode
        this._calculateMoveMode( deltaX );

        if( this.currentMoveMode == MoveMode.MAP ){
            this._moveMap();
        }
    } 
    
    _moveMap(){
        let newMapPositionX:number = -1 * this.currentX;
        // Calculate layerBack Remainder
        // Loop Type
        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;
        this.layerSky.setX(layerSkyPosX);

        // Loop Type
        let layerBackPosX = newMapPositionX * 1 % this.backWidth;
        this.layerBack.setX(layerBackPosX);
        
        this.layerMain.setX(newMapPositionX);
        this.layerObjectBack.setX(newMapPositionX);
        this.layerObjectFront.setX(newMapPositionX);

        this.backMapObject.checkCollision(this.currentX);
    }

    _calculateMoveMode( deltaX: number ){
        // If Within Move Range && middle, use map,  
        if( this.currentX > this.moveStartX && this.currentX < this.moveEndX ){
            if( this.getMapPosition() == MapPosition.MIDDLE ){
                this.currentMoveMode = MoveMode.MAP;
            }else{
                this.currentMoveMode = MoveMode.AVATAR;
            }
        }else{
            if( deltaX != 0 ){
                this.currentMoveMode = MoveMode.BLOCKED;
            }else{
                this.currentMoveMode = MoveMode.NONE;
            }
        }
    }

    getMapPosition():MapPosition{
        // Return string > start, end, middle, effect on View Perspective
        if( this.currentX < this.viewStartX ){
            return MapPosition.START;
        }else if( this.currentX > this.viewEndX ){
            return MapPosition.END;
        }else{
            return MapPosition.MIDDLE;
        }
    }

    getModeMode():MoveMode{
        return this.currentMoveMode;
    }
    // canMove():boolean{
    //     return this.currentX > this.moveStartX && this.currentX < this.moveEndX;
    // }

    // Only For Debug ATM
    getMovedX(): number{
        return this.currentX;
        // return this.currentX - this.moveStartX;
    }

    // Only For Debug ATM
    getMovableLength(): number{
        return this.mapLength;
        // return this.mapLength - (2*this.moveMargin);
    }
}