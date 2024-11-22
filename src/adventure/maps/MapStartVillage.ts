

// Should extend from Map Object

import { Scene } from "phaser";
import MapBase from "../components/Map/MapBase";
import { MapEntity } from "../components/Map/MapEntities";
// 
export default class MapStartVillage extends MapBase{ 
    
    backEntityList: Array<MapEntity> 
    frontEntityList: Array<MapEntity> 
    
    constructor(scene:Scene, x:number, y:number ){
        super(scene,x,y);

        this.renderSky('mapLayerSky');
        this.renderBack('mapLayerBack');

        // Layer Main
        let mapList: Array<string> = [
            'mapLayerMain',
            'mapLayerMain',
            'mapLayerMain',
        ];
        this.renderMain(mapList);

        this.backEntityList = [
            {
                type: 'deco',
                mapObjectKey: 'baricade',
                x: 450,
                y: -100,
                collisionRange: 0,
            },
            {
                type: 'deco',
                mapObjectKey: 'baricade',
                x: 450,
                y: 0,
                collisionRange: 0,
            },
            {
                type: 'deco',
                mapObjectKey: 'signboardNext',
                x: 2500,
                y: -200,
                collisionRange: 0,
            },
            {
                type: 'deco',
                mapObjectKey: 'gateBack',
                x: 5000,
                y: 0,
                collisionRange: 0,
            },
            {
                type: 'building',
                mapObjectKey: 'buildingMushroom',
                x: 7000,
                y: -200,
                collisionRange: 300,
                showCollision: true,
                title: "MUSHROOM HOUSE"
            },
        ];

        this.renderBackObject(this.backEntityList);

        this.frontEntityList = [
            {
                type: 'deco',
                mapObjectKey: 'gateFront',
                x: 5000,
                y: 0,
                collisionRange: 0,
            },
        ]
        this.renderFrontObject(this.frontEntityList);

        this.currentX = 1000;
    }
}