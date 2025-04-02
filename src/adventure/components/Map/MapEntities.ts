import { GameObjects, Scene } from "phaser";
import { MapObject, MapObjectRepo } from "@/adventure/repos/MapObjectRepo";
import { QuickDebug } from "../Singleton/QuickDebug";
import MapEntity from "./MapEntity";
import MapEntityConfig from "./MapEntityConfigs/MapEntityConfig";

export default class MapEntities{
    /**
     * Act as layers of MapEntities (Building/ Decoration)
     * - 2 Layers
     *  - Front layer > just decoration
     *  - Back layer > can interact - such as building and teleports
     * - renter entities 
     */

    // Sidescrolling Map
    private scene: Scene
    private container: GameObjects.Container
    private quickDebug: QuickDebug
    //
    private entityList: Array<MapEntity> 
    private collidedIndex: number| null
    private collidedEntity: MapEntity | null

    constructor(scene:Scene){
        this.scene = scene
        this.container = this.scene.add.container(0,0);

        this.quickDebug = QuickDebug.getInstance();

        this.entityList = [];
        this.collidedIndex = null;
        this.collidedEntity = null;
    }
    
    renderEntity( config: MapEntityConfig ): MapEntity | null {
        let entity: MapEntity | null = null;
        let mapObject: MapObject | undefined = MapObjectRepo.getMapObject( config.mapObjectKey );
            
        if( mapObject == undefined ){
            this.quickDebug.pushLog( 'MapEntities > renderEntities() > [' + config.mapObjectKey + '] not found.');
            console.log("Map Object Not Found > " + config.mapObjectKey );
            return null;
        }

        if( mapObject ){
            entity = new MapEntity(this.scene,config,mapObject);

            this.container.add( entity.getContainer() );
        }

        return entity;
    }
    
    getContainer(): GameObjects.Container{
        return this.container;
    }

    getEntities():Array<MapEntity> {
        return this.entityList;
    }

    renderEntities( entityConfigs:Array<MapEntityConfig> ){
        let entities: Array<MapEntity> = [];

        // Render Map Objects
        entityConfigs.forEach((config)=>{
            let entity: MapEntity | null = this.renderEntity(config);

            if( entity != null ){
                entities.push(entity);
            }
        });

        this.entityList = entities;
    }

    checkCollision( currentX:number ){
        let collidedIndex: number|null = null;
        let collidedEntity: MapEntity | null = null;

        this.entityList.forEach((entity:MapEntity, index)=>{
            entity.hideGlow();
            
            if( entity.isCollided( currentX ) ){
                if( collidedIndex == null ){
                    collidedIndex = index;
                    collidedEntity = entity;

                    entity.showGlow();
                }
            }
        });

        if( this.collidedIndex != collidedIndex ){
            this.collidedIndex = collidedIndex;
            this.collidedEntity = collidedEntity;
            
            // Emit changed event
            this.scene.events.emit('collision-changed',{
                collidedEntity: this.collidedEntity
            });
        }
    }

    getSpawnX( spawnKey: string ):number|null{
        let spawnX: number|null = null;
        
        this.entityList.forEach(( entity )=>{
            let config: MapEntityConfig = entity.getConfig();
            if( config.spawnKey == spawnKey && spawnX == null ){
                spawnX = config.x;
            }
        })

        return spawnX;
    }
}