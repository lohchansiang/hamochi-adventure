import { EventBus } from '../EventBus';
import { Game, GameObjects, Scene, Tweens } from 'phaser';
import GameLib from '@/lib/GameLib';
import ViewPosController from '../components/Map/ViewPosController';
import { InputMovement, PlayerAttribute } from '../components/Player/PlayerEnum';
import PlayerController from '../components/Player/PlayerController';
import MapMini from '../components/Map/MapMini';
import RuntimeManager from '../components/Singleton/RuntimeManager';
import { QuickDebug } from '../components/Singleton/QuickDebug';
import UIGameBottom from '../components/UI/UIGame/UIGameBottom';
import MapRenderer from '../components/Map/MapRenderer';
import ModalLoader from '../modals/ModalLoader';
import GameSceneManager, { GameFlow, GameState } from '../components/Game/GameSceneManager';
import { MapActionExit } from '../components/Map/MapActions/MapActionExit';
import { MoveDirection } from '../components/Map/MapEnum';
import { MapEndInterface } from '../components/Map/MapEnds/Interface/MapEndInterface';
import DialogController from '../components/Dialog/DialogController';
import AvatarRenderer from '../components/Avatar/AvatarRenderer';

export class GameScene extends Scene
{
    renderDebug: boolean = true
    //
    camera: Phaser.Cameras.Scene2D.Camera
    runtimeManager: RuntimeManager
    manager: GameSceneManager
    loader: ModalLoader
    //
    worldContainer: GameObjects.Container
    viewPosController: ViewPosController
    playerController: PlayerController
    dialogController: DialogController
    UIBottom: UIGameBottom
    //
    map: MapRenderer
    //
    playerAvatar: AvatarRenderer
    // UI
    // topUI: TopOverlayUI
    mapMini: MapMini
    //
    // Player Attribute
    playerAttribute: PlayerAttribute

    preload(){
        this.load.setPath('assets');
        //
        this.load.image('ref1', '/ref/ref1.png');
    }

    constructor ()
    {
        super('GameScene');
    }

    create ( data:any )
    {
        console.log('start scene > GameScene');
        // Add Ref 
        // let ref = this.add.sprite(GameLib.midX, GameLib.midY, 'ref1');
        // ref.alpha = 0.5

        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xffffff);

        this.runtimeManager = RuntimeManager.getInstance();
        this.runtimeManager.registerScene(this);

        this.manager = new GameSceneManager(this);

        this.dialogController = new DialogController(this);
        this.dialogController.onOpenCallback = ()=>{
            this.manager.setGameState( GameState.DIALOGUE );
        }

        this.dialogController.onCloseCallback = ()=>{
            this.manager.setGameState( GameState.PLAY );
        }


        // Debug Panel
        const quickDebug: QuickDebug = QuickDebug.getInstance();
        quickDebug.renderDebugButton(this)

        this.loader = new ModalLoader(this);

        this.UIBottom = new UIGameBottom(this);

        // Init
        this.playerAttribute = {
            moveSpeed: 14,
        }

        // Prepare World Container
        this.worldContainer = this.add.container(GameLib.midX,1080);

        // Render Map
        this.map = new MapRenderer(this,0,0);
        let mapKey = data.mapKey? data.mapKey: 'village';
        let spawnKey = data.spawnKey? data.spawnKey: null;
        this.map.renderMap( mapKey, spawnKey );

        this.worldContainer.add(this.map.getContainer());
        
        // Render Avatar
        this.playerAvatar = new AvatarRenderer( this, 0, 0);
        this.playerAvatar.renderAvatar('CharHamochi');
        this.map.setPlayerAvatar(this.playerAvatar);
        
        this.viewPosController = new ViewPosController(this,this.worldContainer);
        this.playerController = new PlayerController(this);
        this.playerController.linkAvatar(this.playerAvatar);

        this.mapMini = new MapMini(this,GameLib.midX, 100);
        this.mapMini.renderBuildings( this.map.getMapEntities(), this.map.getMapLength() );

        this.events.on('collision-changed',( data: any )=>{
            this.UIBottom.updateActionControl(data.collidedEntity);
        })

        this.events.on('exit-reached',( data: any )=>{
            this.runExit( data.mapEndObject );
        })
        
        this.events.on("shutdown", ()=>{
            console.log("Game Scene > shut down")
            this.clean();
        });

        EventBus.emit('current-scene-ready', this);
        
        this.runFlow(GameFlow.INIT);
    }

    update(){
        // Process
        if( this.manager.gameState == GameState.PLAY ){
            // Update when player give input
            let inputMovement: InputMovement = this.UIBottom.getActiveInputMovement();
            //
            this.map.update( inputMovement, this.playerAttribute.moveSpeed );
            this.viewPosController.update( inputMovement, this.map.getMapPosition());
            
            // Set Player Position Based on map current X
            this.playerController.update( this.map.getAvatarMoveData() );
            this.mapMini.update( this.map.getMapX(), this.map.getMapLength() );
            this.UIBottom.updateDebugText( this.map.getMovedX().toString() + " / " + this.map.getMovableLength().toString() );
        }
    }

    runFlow( flow: GameFlow ){
        switch (flow) {
            case GameFlow.INIT:
                // Delay call simulate loading
                this.time.delayedCall( 500, () => {
                    this.runFlow(GameFlow.LOAD_END);
                }, [], this);

                break;

            case GameFlow.LOAD_END:
                // Close Loading Modal
                this.map.moveTo(this.map.getSpawnX());
                this.viewPosController.forceMoveViewPosition( this.map.getMapPosition() );

                this.loader.close(()=>{
                    this.runFlow( GameFlow.ENTRY );
                });    

                break;
            case GameFlow.ENTRY:
                // Player Avatar Enter
                
                // Different Entry Type > Left, Right, Teleport
                let entryType: string = this.map.getEntryType();
                if( entryType == 'left' || entryType == 'right' ){
                    if( entryType == 'right' ) this.map.setMoveDirection(MoveDirection.BACKWARD); 
                    this.playerController.enterFromSide( this.map.getAvatarMoveData(), entryType, ()=>{
                        this.runFlow(GameFlow.READY);
                    } );
                }else{
                    this.runFlow(GameFlow.READY);
                }
                
                // Move avatar to out of screen position
                // Anim avatar back to center position
                console.log('Player avatar entry!!!');
                break
            case GameFlow.READY:
                this.loader.close();
                this.manager.setGameState( GameState.PLAY );
                this.UIBottom.showControl();

                // Test Trigger Dialog
                // this.dialogController.triggerDialog('dialogWelcome');
                break;
            default:
                break;
        }
    }

    runExit( mapEndObject:MapEndInterface ){
        if( mapEndObject.mapKey && mapEndObject.spawnKey ){
            if( this.manager.gameState == GameState.PLAY ){
                this.manager.setGameState( GameState.NONE );
                
                console.log(mapEndObject);

                let action: MapActionExit = new MapActionExit('Exit',
                                                {
                                                    mapKey: mapEndObject.mapKey,
                                                    spawnKey: mapEndObject.spawnKey
                                                }
                                            );
                action.run( this );
            }
        }
    }

    clean(){
        this.events.removeListener('collision-changed');
        this.events.removeListener('exit-reached');
        console.log('Game Scene > clean');
    }
}
