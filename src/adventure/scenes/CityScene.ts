import { EventBus } from '../EventBus';
import { Game, GameObjects, Scene, Tweens } from 'phaser';
import GameLib from '@/lib/GameLib';
import UIMoveSlider from '../components/Player/UIMoveSlider';
import PlayerAvatar from '../components/Player/PlayerAvatar';
import ViewPosController from '../components/Map/ViewPosController';
import { InputMovement, PlayerAttribute } from '../components/Player/PlayerEnum';
import PlayerController from '../components/Player/PlayerController';
import TopOverlayUI from '../components/UI/TopOverlayUI';
import UIMoveControl from '../components/Player/UIMoveControl';
import DebugButton from '@/lib/components/DebugButton';
import MapStartVillage from '../maps/MapStartVillage';
import MapMini from '../components/Map/MapMini';

export class CityScene extends Scene
{
    renderDebug: boolean = true
    //
    camera: Phaser.Cameras.Scene2D.Camera;
    worldContainer: GameObjects.Container
    moveSlider: UIMoveSlider
    moveControl: UIMoveControl
    viewPosController: ViewPosController
    playerController: PlayerController
    //
    map: MapStartVillage
    playerAvatar: PlayerAvatar
    //
    bottomPanelBorder: GameObjects.Rectangle
    bottomPanel: GameObjects.Rectangle
    // UI
    topUI: TopOverlayUI
    mapMini: MapMini
    //
    debugText: GameObjects.Text
    //
    // Player Attribute
    playerAttribute: PlayerAttribute
    //
    // Debug Button
    buttonSelectSlider: DebugButton
    buttonSelectArrow: DebugButton
    activeControl: string

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

        // Init
        this.playerAttribute = {
            moveSpeed: 14,
        }

        // Prepare World Container
        this.worldContainer = this.add.container(GameLib.midX,1080);

        // Render Map
        this.map = new MapStartVillage(this,0,0);
        this.worldContainer.add(this.map.container);

        // Render Avatar
        this.playerAvatar = new PlayerAvatar( this, 0, -150);
        this.playerAvatar.setScale(0.4);
        this.map.layerPlayer.add(this.playerAvatar);

        this.viewPosController = new ViewPosController(this,this.worldContainer);
        this.playerController = new PlayerController(this,this.playerAvatar);

        // Render Bottom Panel
        this.bottomPanel = this.add.rectangle(GameLib.midX,GameLib.screenHeight,GameLib.screenWidth,900,GameLib.colorPanelBg).setOrigin(0.5,1);
        this.bottomPanelBorder = this.add.rectangle(GameLib.midX,GameLib.screenHeight-900,GameLib.screenWidth,20,GameLib.colorPanelBgDark);

        this.debugText = this.add.text( GameLib.midX, GameLib.midY+200,'Debug Text',{fontSize:40}).setOrigin(0.5);

        // Create Player Controller and Link to Avatar
        this.moveSlider = new UIMoveSlider( this, GameLib.midX, GameLib.screenHeight - 300 );
        this.moveSlider.container.setVisible(false);

        this.moveControl = new UIMoveControl( this, GameLib.midX, GameLib.screenHeight - 300 ); 
        this.moveControl.container.setVisible(false);

        // Ccntrol Selector
        this.selectControlType('arrow');

        this.buttonSelectArrow = new DebugButton( this, 200, GameLib.quater3Y - 300, 'Use Arrow').setScale(0.5);
        this.buttonSelectArrow.onPressedCallback = ()=>{
            this.selectControlType('arrow');
        };
        this.buttonSelectSlider = new DebugButton( this, 200, GameLib.quater3Y - 200, 'Use Slider').setScale(0.5);
        this.buttonSelectSlider.onPressedCallback = ()=>{
            this.selectControlType('slider');
        };

        // Render UI
        this.topUI = new TopOverlayUI( this, GameLib.midX, GameLib.quaterY );

        this.mapMini = new MapMini(this,GameLib.midX, 100);
        this.mapMini.renderBuildings( this.map.backEntityList, this.map.mapLength );

        EventBus.emit('current-scene-ready', this);
    }

    selectControlType( controlKey:string ){
        if( controlKey != this.activeControl ){
            this.activeControl = controlKey;
            this.moveSlider.stop();
            if( controlKey == 'arrow' ){
                this.moveControl.container.setVisible(true);
                this.moveSlider.container.setVisible(false);
            }else if( controlKey == 'slider' ){
                this.moveControl.container.setVisible(false);
                this.moveSlider.container.setVisible(true);
            }
        }
    }

    _getActiveInputMovement():InputMovement{
        if( this.activeControl == 'slider' ){
            return this.moveSlider.inputMovement;
        }else if( this.activeControl == 'arrow' ){
            return this.moveControl.inputMovement;
        }

        return InputMovement.NONE;
    }

    update(){
        // Process
        let inputMovement: InputMovement = this._getActiveInputMovement();

        this.map.update( inputMovement, this.playerAttribute.moveSpeed );
        this.viewPosController.update( inputMovement, this.map.currentMapPosition );
        
        // Set Player Position Based on map current X
        this.playerController.update( this.map.getAvatarMoveData() );
        this.mapMini.update( this.map.currentX, this.map.mapLength );

        if( this.debugText ){
            this.debugText.setText(this.map.getMovedX().toString() + " / " + this.map.getMovableLength().toString());
        }
    }
}
