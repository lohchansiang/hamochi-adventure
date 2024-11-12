import { GameObjects, Scene, Tweens } from "phaser";

export default class FlexMap{
    // Sidescrolling Map
    
    static preload( scene: Scene ){
        
    }

    scene: Scene
    container: GameObjects.Container
    //
    skyOffsetY: number = -300
    farOffsetY: number // x
    backOffsetY: number = -300
    mainOffsetY: number = 50
    frontOffsetY: number // x
    //
    skyWidth: number = 2000
    farWidth: number = 2000 // x
    backWidth: number = 3240 
    mainWidth: number = 3240
    frontWidth: number = 3240 // x
    //
    layerSky: GameObjects.Container
    layerFar: GameObjects.Container
    layerBack: GameObjects.Container
    layerMain: GameObjects.Container
    layerFront: GameObjects.Container
    //
    minDistance: number = 0
    maxDistance: number = 6000
    startEndThreshold: number = 600
    //
    currentX: number = 3000

    constructor(scene:Scene, x:number, y:number ){
        this.scene = scene
        this.container = this.scene.add.container(x,y);
        
        // Add Layers
        this.layerSky = this.scene.add.container(0,this.skyOffsetY);
        this.layerFar = this.scene.add.container(0,this.farOffsetY);
        this.layerBack = this.scene.add.container(0,this.backOffsetY);
        this.layerMain = this.scene.add.container(0,this.mainOffsetY);
        this.layerFront = this.scene.add.container(0,this.frontOffsetY);

        this.container.add(this.layerSky);
        this.container.add(this.layerFar);
        this.container.add(this.layerBack);
        this.container.add(this.layerMain);
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
        let mainBefore = this.scene.add.sprite(-this.mainWidth,0,'mapLayerMain').setOrigin(0.5,1);
        let mainCenter = this.scene.add.sprite(0,0,'mapLayerMain').setOrigin(0.5,1);
        let mainAfter = this.scene.add.sprite(this.mainWidth,0,'mapLayerMain').setOrigin(0.5,1);
        this.layerMain.add(mainBefore);
        this.layerMain.add(mainCenter);
        this.layerMain.add(mainAfter);

        this.renderMap();
    }

    update( deltaX: number ){
        if( deltaX == 0 ) return;
        
        // Update currentX
        this.currentX += deltaX;
        this.currentX = Math.min(this.maxDistance,this.currentX);
        this.currentX = Math.max(this.minDistance,this.currentX);

        this.renderMap();
    } 
    
    renderMap(){
        // Check if reach end, only work in middle part
        if( this.isReachStart() ) return;
        if( this.isReachEnd() ) return;

        let newMapPositionX:number = -1 * this.currentX;
        // Calculate layerBack Remainder
        let layerSkyPosX = newMapPositionX * 0.5 % this.skyWidth;
        this.layerSky.setX(layerSkyPosX);

        let layerBackPosX = newMapPositionX * 1 % this.backWidth;
        this.layerBack.setX(layerBackPosX);
        
        let layerMainPosX = newMapPositionX * 1 % this.mainWidth;
        this.layerMain.setX(layerMainPosX);
    }

    isReachStart():boolean{
        return this.currentX < (this.minDistance + this.startEndThreshold);
    }

    isReachEnd():boolean{
        return this.currentX > (this.maxDistance - this.startEndThreshold);
    }

    isEndScene():boolean{
        if( this.isReachStart() || this.isReachEnd() ){
            // Move avatar based on distance instead
            if( this.currentX > this.minDistance && this.currentX < this.maxDistance ){
                return true;
            }
        }

        return false;
    }
}