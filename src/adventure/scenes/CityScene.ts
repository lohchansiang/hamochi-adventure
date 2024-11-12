import { EventBus } from '../EventBus';
import { Game, GameObjects, Scene, Tweens } from 'phaser';
import GameLib from '@/lib/GameLib';
import UIMoveSlider from '../components/Player/UIMoveSlider';
import PlayerAvatar from '../components/Player/PlayerAvatar';
import ViewPosController from '../components/Map/ViewPosController';
import FixedMap from '../components/Map/FixedMap';
import { MapPosition } from '../components/Map/MapEnum';
import { AvatarState, MoveState } from '../components/Player/PlayerEnum';
import PlayerController from '../components/Player/PlayerController';

export class CityScene extends Scene
{
    renderDebug: boolean = true
    //
    camera: Phaser.Cameras.Scene2D.Camera;
    worldContainer: GameObjects.Container
    moveSlider: UIMoveSlider
    viewPosController: ViewPosController
    playerController: PlayerController
    //
    fixedMap: FixedMap
    playerAvatar: PlayerAvatar
    //
    bottomPanelBorder: GameObjects.Rectangle
    bottomPanel: GameObjects.Rectangle
    //
    debugText: GameObjects.Text
    //
    speed: number = 10

    preload(){
        this.load.setPath('assets');
        //
        this.load.image('ref1', '/ref/ref1.png');
    }

    constructor ()
    {
        super('CityScene');
    }

    create ( data:any )
    {
        // Add Ref 
        // let ref = this.add.sprite(GameLib.midX, GameLib.midY, 'ref1');
        // ref.alpha = 0.5

        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xffffff);

        // Prepare World Container
        this.worldContainer = this.add.container(GameLib.midX,1080);

        // Render Map
        this.fixedMap = new FixedMap(this,0,0);
        this.worldContainer.add(this.fixedMap.container);

        // Render Avatar
        this.playerAvatar = new PlayerAvatar( this, 0, -150);
        this.playerAvatar.setScale(0.4);
        this.worldContainer.add(this.playerAvatar)

        this.viewPosController = new ViewPosController(this,this.worldContainer);
        this.playerController = new PlayerController(this,this.playerAvatar);

        // Render Bottom Panel
        this.bottomPanel = this.add.rectangle(GameLib.midX,GameLib.screenHeight,GameLib.screenWidth,900,GameLib.colorPanelBg).setOrigin(0.5,1);
        this.bottomPanelBorder = this.add.rectangle(GameLib.midX,GameLib.screenHeight-900,GameLib.screenWidth,20,GameLib.colorPanelBgDark);

        this.debugText = this.add.text( GameLib.midX, GameLib.midY+200,'Debug Text',{fontSize:40}).setOrigin(0.5);

        // Create Player Controller and Link to Avatar
        this.moveSlider = new UIMoveSlider( this, GameLib.midX, GameLib.screenHeight - 300 );

        EventBus.emit('current-scene-ready', this);
    }

    calculateDeltaX():number {
        if( this.moveSlider.moveState == MoveState.RIGHT ){
            return this.speed;
        }else if( this.moveSlider.moveState == MoveState.LEFT ){
            return -this.speed;
        }else{
            return 0;
        }
    }

    update(){
        let deltaX:number = this.calculateDeltaX();
        // Process
        this.viewPosController.update( this.moveSlider.moveState, this.fixedMap.getMapPosition() );
        this.fixedMap.update( deltaX );
        this.playerController.update( this.fixedMap.getModeMode(), deltaX );

        if( this.debugText ){
            this.debugText.setText(this.fixedMap.getMovedX().toString() + " / " + this.fixedMap.getMovableLength().toString());
        }
    }
}
