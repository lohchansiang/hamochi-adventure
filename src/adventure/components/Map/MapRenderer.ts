import { GameObjects, Scene } from "phaser";
import { MapPosition, MoveDirection, MoveState } from "./MapEnum";
import MapEntities from "./MapEntities";
import { AvatarMoveData } from "../Player/PlayerController";
import { InputMovement } from "../Player/PlayerEnum";
import { MapLayoutRepo } from "@/adventure/repos/MapLayoutRepo";
import { MapData, MapRepo } from "@/adventure/repos/MapRepo";
import { QuickDebug } from "../Singleton/QuickDebug";
import PlayerAvatar from "../Player/PlayerAvatar";
import MapEntity from "./MapEntity";
import { MapEndKey, MapEndSide } from "./MapEnds/Interface/MapEndInterface";
import MapEntityConfig from "./MapEntityConfigs/MapEntityConfig";

export default class MapRenderer{
    private scene: Scene
    private container: GameObjects.Container
    private quickDebug: QuickDebug
    //
    private mapData: MapData
    //
    private skyOffsetY: number = -300
    private farOffsetY: number // x
    private backOffsetY: number = -300
    private mainOffsetY: number =  50
    private frontOffsetY: number // x
    //
    private skyWidth: number = 2000
    private farWidth: number = 2000 // x
    private backWidth: number = 3240 
    //
    private layerSky: GameObjects.Container // LOOP
    private layerFar: GameObjects.Container // LOOP
    private layerBack: GameObjects.Container // Fixed
    private layerMain: GameObjects.Container // Fixed
    private layerObjectBack: GameObjects.Container
    private layerPlayer: GameObjects.Container
    private layerObjectFront: GameObjects.Container
    private layerFront: GameObjects.Container // ?
    //
    private wallMargin: number = 600 // Wall block distance, If wall, should be 600, else 0?
    private viewMargin: number = 1200 // Distance where Camera stop moving when reach
    //
    // Calculate Map Length
    private mapLength: number = 0
    private moveStartX: number = 0
    private moveEndX: number = 10000
    private viewStartX: number = 0
    private viewEndX: number = 10000
    //
    private currentX: number = 1300
    private currentMapPosition: MapPosition
    private currentAvatarX: number
    private currentMoveState: MoveState = MoveState.STOP
    private currentMoveDirection: MoveDirection = MoveDirection.FORWARD
    //
    private wallStartDebug: GameObjects.Rectangle
    private wallEndDebug: GameObjects.Rectangle
    //
    private wallMapEntities: MapEntities
    private backMapEntities: MapEntities
    private frontMapEntities: MapEntities
    //
    private spawnX: number // 0
    private entryType: string // left, right, teleport
    
    constructor(scene:Scene, x:number, y:number ){
        this.scene = scene
        this.container = this.scene.add.container(x,y);

        this.quickDebug = QuickDebug.getInstance();

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
        this.wallMapEntities = new MapEntities(this.scene);
        this.layerObjectBack.add(this.wallMapEntities.getContainer());

        this.backMapEntities = new MapEntities(this.scene);
        this.layerObjectBack.add(this.backMapEntities.getContainer());

        this.frontMapEntities = new MapEntities(this.scene);
        this.layerObjectFront.add(this.frontMapEntities.getContainer());

        this._moveMap();
    }

    renderMap( mapKey:string, spawnKey?:string | null ){
        const mapData: MapData | undefined = MapRepo.getMapData( mapKey );
        if( mapData != undefined ){
            this.mapData = mapData;

            if( mapData.layerSkyKey != null ){
                this.renderSky(mapData.layerSkyKey);
            }
            if( mapData.layerBackKey != null ){
                this.renderBack(mapData.layerBackKey);
            }
            this.renderMain(mapData.layerMainKeys);
            this.renderWallObject();
            this.renderBackObject(mapData.backEntityList);
            this.renderFrontObject(mapData.frontEntityList);

            let entrySideDistance: number = 700;
            //
            let spawnX:number = mapData.defaultSpawn;
            let entryType:string = 'teleport';
            if( mapData.mapStart && mapData.mapStart.key == MapEndKey.EXIT ){
                spawnX = entrySideDistance;
                entryType = 'left';
            }

            if( spawnKey != undefined && spawnKey != null ){
                // If no spawnKey, use left
                
                if( spawnKey == 'left' ){
                    if( mapData.mapStart && mapData.mapStart.key == MapEndKey.EXIT ){
                        spawnX = entrySideDistance;
                        entryType = 'left';
                    }
                }else if( spawnKey == 'right' ){
                    if( mapData.mapEnd && mapData.mapEnd.key == MapEndKey.EXIT ){
                        spawnX = this.mapLength - entrySideDistance;
                        entryType = 'right';
                    }
                }else{
                    let newSpawnX: number | null = this.backMapEntities.getSpawnX( spawnKey );
                    if( newSpawnX != null ){
                        spawnX = newSpawnX;
                        entryType = 'teleport';
                    }
                }
            }
            
            this.spawnX = spawnX;
            this.entryType = entryType;
            //
            this.currentX = spawnX;
            this._moveMap();
        }
    }

    private renderSky( mapLayoutKey:string ){
        // Layer Sky
        if( mapLayoutKey == null ) return;
        //
        let textureKey:string | null = MapLayoutRepo.getTextureKey( mapLayoutKey );
        if( textureKey == null ){
            this.quickDebug.pushLog( 'MapBase > renderSky() > [' + mapLayoutKey + '] not found.');
            return;
        }
        //
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

    // private renderFar( mapLayoutKey:string ){
    //     // Layer Far
    //     let textureKey:string | null = MapLayoutRepo.getTextureKey( mapLayoutKey );
    //     if( textureKey == null ) return;
    //     //
    //     let texture = this.scene.textures.get(textureKey);
    //     if( texture ){
    //         this.farWidth = texture.getSourceImage().width;
    //         //
    //         let farBefore = this.scene.add.sprite(-this.farWidth,0, textureKey ).setOrigin(0.5,1);
    //         let farCenter = this.scene.add.sprite(0,0, textureKey).setOrigin(0.5,1);
    //         let farAfter = this.scene.add.sprite(this.farWidth,0,textureKey).setOrigin(0.5,1);
    //         this.layerFar.add(farBefore);
    //         this.layerFar.add(farCenter);
    //         this.layerFar.add(farAfter);
    //     }
    // }

    private renderBack( mapLayoutKey:string ){
        if( mapLayoutKey == null ) return;
        //
        let textureKey:string | null = MapLayoutRepo.getTextureKey( mapLayoutKey );
        if( textureKey == null ){
            this.quickDebug.pushLog( 'MapBase > renderBack() > [' + mapLayoutKey + '] not found.');
            return;
        }
        //
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

    private renderMain(  mapList: Array<string> ){
        // Calculate Map Length Based on Main List Array and create map
        let totalLength: number = 0;
        mapList.forEach((mapLayoutKey)=>{
            let textureKey:string | null = MapLayoutRepo.getTextureKey( mapLayoutKey );
            
            if( textureKey == null ){
                this.quickDebug.pushLog( 'MapBase > renderMain() > [' + mapLayoutKey + '] not found.');
                return;
            }

            if( textureKey ){
                let mainCenter = this.scene.add.sprite(totalLength,0,textureKey).setOrigin(0,1);
                this.layerMain.add(mainCenter);
                //
                let texture = this.scene.textures.get(textureKey);
                if( texture ){
                    totalLength += texture.getSourceImage().width;
                }
            }
        });
        this.mapLength = totalLength;
    }

    // calculate Map and View end
    private renderWallObject(){
        // Wall Entity Configs
        let wallEntityConfigs: Array<MapEntityConfig> = [];

        // Prepare Map Param
        this.moveStartX = 200;
        if( this.mapData.mapStart.key == MapEndKey.WALL ){
            this.moveStartX = this.wallMargin;
            // Render Map Debug Aread
            this.wallStartDebug = this.scene.add.rectangle(0,0,this.wallMargin-60,1500,0xff0000,0.2).setOrigin(0,1);
            this.layerMain.add(this.wallStartDebug);
        }
        wallEntityConfigs = wallEntityConfigs.concat( this.mapData.mapStart.wallConfigs( this.moveStartX, MapEndSide.LEFT ) );

        this.moveEndX = this.mapLength - 200;
        if( this.mapData.mapEnd.key == MapEndKey.WALL  ){
            this.moveEndX = this.mapLength - this.wallMargin;
            // Render Map Debug Aread
            this.wallEndDebug = this.scene.add.rectangle(this.mapLength,0,this.wallMargin-60,1500,0xff0000,0.2).setOrigin(1,1);
            this.layerMain.add(this.wallEndDebug);
        }
        wallEntityConfigs = wallEntityConfigs.concat( this.mapData.mapEnd.wallConfigs( this.moveEndX, MapEndSide.RIGHT ) );
        
        this.viewStartX = this.viewMargin;
        this.viewEndX = this.mapLength - this.viewMargin;

        this.wallMapEntities.renderEntities( wallEntityConfigs );
    }

    private renderBackObject( entityConfigs: Array<MapEntityConfig> ){
        this.backMapEntities.renderEntities(entityConfigs);
    }

    private renderFrontObject( entityConfigs: Array<MapEntityConfig> ){
        this.frontMapEntities.renderEntities(entityConfigs);
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
        // Front object only as deco, not interactable (TBD)
        // this.frontMapEntities.checkCollision(this.currentX);
        this.checkExit();
    } 

    private checkExit(){
        let exitRange: number = 50;
        if( this.currentX <= this.moveStartX + exitRange ){
            if( this.mapData.mapStart.key == MapEndKey.EXIT ){
                this.scene.events.emit('exit-reached',{ mapEndObject: this.mapData.mapStart });
            }
        }

        if( this.currentX >= this.moveEndX - exitRange ){
            if( this.mapData.mapEnd.key == MapEndKey.EXIT ){
                this.scene.events.emit('exit-reached',{ mapEndObject: this.mapData.mapEnd });
            }
        }
    }

    private _calculateDeltaX( inputMovement: InputMovement, moveSpeed:number ):number {
        if( inputMovement == InputMovement.RIGHT ){
            return moveSpeed;
        }else if( inputMovement == InputMovement.LEFT ){
            return -1*moveSpeed;
        }else{
            return 0;
        }
    }
    
    private _updateMapPosition(){
        // Return string > start, end, middle, effect on View Perspective
        if( this.currentX < this.viewStartX ){
           this.currentMapPosition = MapPosition.START;
        }else if( this.currentX > this.viewEndX ){
            this.currentMapPosition = MapPosition.END;
        }else{
            this.currentMapPosition = MapPosition.MIDDLE;
        }
    }

    private _moveMap(){
        // Calculate Map & Avatar Position
        let newMapPositionX:number = -1 * this.currentX;
        if( this.currentMapPosition == MapPosition.START ){
            // When Avatar reach Start, Map will stop moving, only avatar will move
            newMapPositionX = -1 * this.viewStartX;
            this.currentAvatarX = this.currentX - this.viewStartX;
        }else if( this.currentMapPosition == MapPosition.END ){
            // When Avatar reach End, Map will stop moving, only avatar will move
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

    private _updateMoveDirection( deltaX: number ){
        if( deltaX > 0 ){
            this.currentMoveDirection = MoveDirection.FORWARD;
        }else if( deltaX < 0 ){
            this.currentMoveDirection = MoveDirection.BACKWARD;
        }
    }
    
    private _updateMoveState( deltaX: number ){
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

    setMoveDirection(dir:MoveDirection){
        this.currentMoveDirection = dir;
    }

    getContainer():GameObjects.Container{
        return this.container;
    }

    setPlayerAvatar( avatar: PlayerAvatar ):void{
        this.layerPlayer.add(avatar.getContainer());
    }

    getAvatarMoveData(): AvatarMoveData{
        return {
            direction: this.currentMoveDirection,
            state: this.currentMoveState,            
            x: this.currentAvatarX
        };
    }

    getMapEntities(): Array<MapEntity>{
        return this.backMapEntities.getEntities();
    }

    getMapLength(): number {
        return this.mapLength;
    }

    getMapPosition():MapPosition{
        return this.currentMapPosition;
    }

    getMapX(): number{
        return this.currentX;
    }

    // Only For Debug ATM
    getMovedX(): number{
        return this.currentX;
    }

    // Only For Debug ATM
    getMovableLength(): number{
        return this.mapLength;
    }

    moveTo( x:number ){
        x = Math.min(this.moveEndX,x);
        x = Math.max( this.moveStartX,x);

        this.currentX = x;

        this._updateMapPosition();
        this._moveMap();
    }

    getSpawnX():number{
        return this.spawnX;
    }

    getEntryType():string{
        return this.entryType;
    }
}