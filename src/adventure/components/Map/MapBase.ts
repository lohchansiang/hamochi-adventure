import GameLib from "@/lib/GameLib";
import { GameObjects, Scene, Tweens } from "phaser";
import { MapPosition, MoveDirection, MoveState } from "./MapEnum";
import MapEntities, { MapEntity } from "./MapEntities";
import { MapObjectRepo } from "@/lib/repos/MapObjectRepo";
import { AvatarMoveData } from "../Player/PlayerController";
import { InputMovement, PlayerAttribute } from "../Player/PlayerEnum";

export default class MapBase{
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

        MapObjectRepo.preload(scene)
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
    // Calculate Map Length
    mapLength: number = 0
    moveStartX: number = 0
    moveEndX: number = 10000
    viewStartX: number = 0
    viewEndX: number = 10000
    //
    currentX: number = 1300
    currentMapPosition: MapPosition
    currentAvatarX: number
    currentMoveState: MoveState = MoveState.STOP
    currentMoveDirection: MoveDirection = MoveDirection.FORWARD
    //
    wallStart: GameObjects.Rectangle
    wallEnd: GameObjects.Rectangle
    //
    backMapEntities: MapEntities
    frontMapEntities: MapEntities
    
    constructor(scene:Scene, x:number, y:number ){
        this.scene = scene
        this.container = this.scene.add.container(x,y);
        
        // Prepare Layers
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
        this.container.add(this.layerPlayer); // Fixed Position
        this.container.add(this.layerObjectFront);
        this.container.add(this.layerFront);

        // Add Map Objects
        this.backMapEntities = new MapEntities(this.scene);
        this.layerObjectBack.add(this.backMapEntities.container);

        this.frontMapEntities = new MapEntities(this.scene);
        this.layerObjectFront.add(this.frontMapEntities.container);

        this._moveMap();
    }

    renderSky( textureKey:string ){
        // Layer Sky
        let texture = this.scene.textures.get(textureKey);
        if( texture ){
            this.skyWidth = texture.getSourceImage().width;
            //
            let skyBefore = this.scene.add.sprite(-this.skyWidth,0, textureKey ).setOrigin(0.5,1);
            let skyCenter = this.scene.add.sprite(0,0, textureKey).setOrigin(0.5,1);
            let skyAfter = this.scene.add.sprite(this.skyWidth,0,textureKey).setOrigin(0.5,1);
            this.layerSky.add(skyBefore);
            this.layerSky.add(skyCenter);
            this.layerSky.add(skyAfter);
        }
    }

    renderFar( textureKey:string ){
        // Layer Far
        let texture = this.scene.textures.get(textureKey);
        if( texture ){
            this.farWidth = texture.getSourceImage().width;
            //
            let farBefore = this.scene.add.sprite(-this.farWidth,0, textureKey ).setOrigin(0.5,1);
            let farCenter = this.scene.add.sprite(0,0, textureKey).setOrigin(0.5,1);
            let farAfter = this.scene.add.sprite(this.farWidth,0,textureKey).setOrigin(0.5,1);
            this.layerFar.add(farBefore);
            this.layerFar.add(farCenter);
            this.layerFar.add(farAfter);
        }
    }

    renderBack( textureKey:string ){
        let texture = this.scene.textures.get(textureKey);
        if( texture ){
            this.backWidth = texture.getSourceImage().width;
            //
            let backBefore = this.scene.add.sprite(-this.backWidth,0, textureKey ).setOrigin(0.5,1);
            let backCenter = this.scene.add.sprite(0,0, textureKey).setOrigin(0.5,1);
            let backAfter = this.scene.add.sprite(this.backWidth,0,textureKey).setOrigin(0.5,1);
            this.layerBack.add(backBefore);
            this.layerBack.add(backCenter);
            this.layerBack.add(backAfter);
        }
    }

    renderMain(  mapList: Array<string> ){
        // Calculate Map Length Based on Main List Array and create map
        let totalLength: number = 0;
        mapList.forEach((mapKey)=>{
            let mainCenter = this.scene.add.sprite(totalLength,0,mapKey).setOrigin(0,1);
            this.layerMain.add(mainCenter);

            let texture = this.scene.textures.get(mapKey);
            if( texture ){
                totalLength += texture.getSourceImage().width;
            }
        });
        this.mapLength = totalLength;

        // Prepare Map Param
        this.moveStartX = this.moveMargin;
        this.moveEndX = this.mapLength - this.moveMargin;
        this.viewStartX = this.viewMargin;
        this.viewEndX = this.mapLength - this.viewMargin;

        // Render Overlay End Wall on LayerExtra
        this.wallStart = this.scene.add.rectangle(0,0,this.moveMargin-60,1500,0xff0000,0.5).setOrigin(0,1);
        this.wallEnd = this.scene.add.rectangle(this.mapLength,0,this.moveMargin-60,1500,0xff0000,0.5).setOrigin(1,1);
        this.layerMain.add(this.wallStart);
        this.layerMain.add(this.wallEnd);
    }

    renderBackObject( entityList: Array<MapEntity> ){
        this.backMapEntities.renderEntities(entityList);
    }

    renderFrontObject( entityList: Array<MapEntity> ){
        this.frontMapEntities.renderEntities(entityList);
    }

    update( inputMovement: InputMovement, moveSpeed:number ){
        let deltaX:number = this._calculateDeltaX(inputMovement,moveSpeed);

        // Update currentX, handle basic movement
        if( deltaX != 0 ){
            this.currentX += deltaX;
            this.currentX = Math.min(this.moveEndX,this.currentX);
            this.currentX = Math.max(this.moveStartX,this.currentX);
        }
        
        // Calculate Move State
        this._updateMapPosition();
        this._updateMoveDirection( deltaX );
        this._updateMoveState( deltaX );
        //
        this._moveMap();

        this.backMapEntities.checkCollision(this.currentX);
        this.frontMapEntities.checkCollision(this.currentX);
    } 

    _calculateDeltaX( inputMovement: InputMovement, moveSpeed:number ):number {
        if( inputMovement == InputMovement.RIGHT ){
            return moveSpeed;
        }else if( inputMovement == InputMovement.LEFT ){
            return -1*moveSpeed;
        }else{
            return 0;
        }
    }
    
    _updateMapPosition(){
        // Return string > start, end, middle, effect on View Perspective
        if( this.currentX < this.viewStartX ){
           this.currentMapPosition = MapPosition.START;
        }else if( this.currentX > this.viewEndX ){
            this.currentMapPosition = MapPosition.END;
        }else{
            this.currentMapPosition = MapPosition.MIDDLE;
        }
    }

    _moveMap(){
        // Calculate Map & Avatar Position
        let newMapPositionX:number = -1 * this.currentX;
        if( this.currentMapPosition == MapPosition.START ){
            newMapPositionX = -1 * this.viewStartX;
            this.currentAvatarX = this.currentX - this.viewStartX;
        }else if( this.currentMapPosition == MapPosition.END ){
            newMapPositionX = -1 * this.viewEndX;
            this.currentAvatarX = this.currentX - this.viewEndX;
        }else{
            this.currentAvatarX = 0;
        }

        // Calculate layerBack Remainder
        // Layer Sky > Loop Type
        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;
        this.layerSky.setX(layerSkyPosX);

        // Layer Far >  Loop Type
        let layerFarPosX = newMapPositionX * 0.6 % this.farWidth;
        this.layerFar.setX(layerFarPosX);
        
        // Layer Back > Loop Type
        let layerBackPosX = newMapPositionX * 1 % this.backWidth;
        this.layerBack.setX(layerBackPosX);
        
        // Layer Main > Fixed Type
        this.layerMain.setX(newMapPositionX);

        // Layer Objects
        this.layerObjectBack.setX(newMapPositionX);
        this.layerObjectFront.setX(newMapPositionX);

        // Layer Front
        this.layerFront.setX(newMapPositionX);
    }

    _updateMoveDirection( deltaX: number ){
        if( deltaX > 0 ){
            this.currentMoveDirection = MoveDirection.FORWARD;
        }else if( deltaX < 0 ){
            this.currentMoveDirection = MoveDirection.BACKWARD;
        }
    }
    
    _updateMoveState( deltaX: number ){
        // If Within Move Range && middle, use map
        if( deltaX != 0 ){
            if( this.currentX > this.moveStartX && this.currentX < this.moveEndX ){
                this.currentMoveState = MoveState.MOVING
            }else{
                this.currentMoveState = MoveState.BLOCKED
            }
        }else{
            this.currentMoveState = MoveState.STOP
        }
    }

    getAvatarMoveData(): AvatarMoveData{
        return {
            direction: this.currentMoveDirection,
            state: this.currentMoveState,            
            x: this.currentAvatarX
        };
    }

    // Only For Debug ATM
    getMovedX(): number{
        return this.currentX;
    }

    // Only For Debug ATM
    getMovableLength(): number{
        return this.mapLength;
    }
}