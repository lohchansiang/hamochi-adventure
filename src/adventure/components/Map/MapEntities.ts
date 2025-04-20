import { GameObjects, Scene } from "phaser";
import { MapObjectTexture, MapObjectTextureRepo } from "@/adventure/repos/MapObjectTextureRepo";
import { QuickDebug } from "../Singleton/QuickDebug";
import MapEntityConfig, { MapEntityType } from "./MapEntityConfigs/MapEntityConfig";
import { MapEntity } from "./MapEntityConfigs/MapEntity";
import MapEntityDeco from "./MapEntityConfigs/MapEntityDeco";
import MapEntityInteract from "./MapEntityConfigs/MapEntityInteract";
import MapEntityNpc from "./MapEntityConfigs/MapEntityNpc";

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
        if( config.type == MapEntityType.BLOCK || config.type == MapEntityType.DECO ){
            entity = new MapEntityDeco(this.scene,config);
        }else if( config.type == MapEntityType.INTERACT ){
            entity = new MapEntityInteract(this.scene,config);
        }else if( config.type == MapEntityType.NPC ){
            entity = new MapEntityNpc(this.scene,config);
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

            if( entity != null && entity.isReady ){
                this.container.add( entity.getContainer() );
                entities.push(entity);
            }else{
                this.quickDebug.pushLog( 'MapEntities > renderEntities() > [' + config.mapObjectKey + '] not found.');
                console.log("Map Object Not Found > " + config.mapObjectKey );
            }
        });

        this.entityList = entities;
    }

    checkCollision( currentX:number ){
        let collidedIndex: number|null = null;
        let collidedEntity: MapEntity | null = null;

        this.entityList.forEach((entity:MapEntity, index)=>{
            entity.setActive(false);
            
            if( entity.isCollided( currentX ) ){
                if( collidedIndex == null ){
                    collidedIndex = index;
                    collidedEntity = entity;

                    entity.setActive(true);
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

    findSpawnX( spawnKey: string ):number|null{
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