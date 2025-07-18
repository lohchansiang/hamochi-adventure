import GameLib from '@/lib/GameLib';
import { EventBus } from '../EventBus';
import { GameObjects, Scene } from 'phaser';
import AvatarRenderer from '../components/Avatar/AvatarRenderer';
import DialogController from '../components/Dialog/DialogController';
import { Dialog_Y1_C1_001_ZH } from '../repos/data/dialogs/Dialog_Y1_C1_001_ZH';
import BasicButton from '@/lib/components/BasicButton';

export class MainDemo extends Scene
{
    preload ()
    {
        this.load.setPath('assets');

        this.load.image('woodBox','/learn/WoodBox.png');
        this.load.image('balloonMany','/learn/BalloonMany.png');
        this.load.image('balloonLess','/learn/BalloonLess.png');
        this.load.image('pointer','/learn/Pointer.png');

        // Audio
        DialogController.preload(this);
        DialogController.preloadAudio(this,Dialog_Y1_C1_001_ZH);
    }

    camera: Phaser.Cameras.Scene2D.Camera;
    //
    text: GameObjects.Text
    //
    teacher: AvatarRenderer
    //
    leftBox: GameObjects.Sprite
    rightBox: GameObjects.Sprite
    //
    dialogText: GameObjects.Text
    dialogController: DialogController
    //
    startButton: BasicButton
    startButton2: BasicButton
    // 
    step: number = 0
    // Step 1
    step1Container: GameObjects.Container
    step1TextMany: GameObjects.Text
    step1TextLess: GameObjects.Text
    step1BalloonMany: GameObjects.Sprite
    step1BalloonLess: GameObjects.Sprite
    pointer: GameObjects.Sprite
    balloonOriginY: number = 350
    //
    // Example
    constructor ()
    {
        super('MainDemo');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xe6e6e6);

        // this.text = this.add.text(GameLib.screenWidth/2, GameLib.screenHeight/2, 'Demo Screen', {
        //     fontFamily: 'Arial Black', fontSize: 60, color: '##000',
        //     // stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5).setDepth(100);

        
        // Add Teacher in center
        this.teacher = new AvatarRenderer( this, GameLib.midX, GameLib.midY - 150 );
        this.teacher.renderAvatar('CharOwl');
        this.teacher.getContainer().setScale(0.8);

        this.step1Container = this.add.container(GameLib.midX,GameLib.midY);
        this.step1TextMany = this.add.text(-GameLib.quaterX, 0, '多', {
            fontFamily: 'Arial Black', fontSize: 120, color: '##000',
            // stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.step1TextLess = this.add.text(GameLib.quaterX, 0, '少', {
            fontFamily: 'Arial Black', fontSize: 120, color: '##000',
            // stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.pointer = this.add.sprite( 0,0,'pointer').setScale(0.25);

        this.step1BalloonMany = this.add.sprite(-GameLib.quaterX, this.balloonOriginY,'balloonMany');
        this.step1BalloonLess = this.add.sprite(GameLib.quaterX, this.balloonOriginY,'balloonLess');

        this.step1Container.add(this.step1TextMany);
        this.step1Container.add(this.step1TextLess);
        this.step1Container.add(this.step1BalloonMany);
        this.step1Container.add(this.step1BalloonLess);
        this.step1Container.add(this.pointer);

        this.step1TextMany.setVisible(false);
        this.step1TextLess.setVisible(false);
        this.step1BalloonMany.setVisible(false);
        this.step1BalloonLess.setVisible(false);
        this.step1Container.setVisible(false);
        this.pointer.setVisible(false);
        
        // this.leftBox = this.add.sprite( GameLib.quaterX, GameLib.midY + 250, 'woodBox' );
        // this.rightBox = this.add.sprite( GameLib.quater3X, GameLib.midY + 250, 'woodBox' );

        this.dialogController = new DialogController(this);
        this.dialogController.onOpenCallback = ()=>{
            //
        }

        this.dialogController.onCloseCallback = ()=>{
            // 
        }

        this.dialogController.onDelayCallback = (delay,key)=>{
            switch (key) {
                case 's0020-show-text-many':
                    this.step1Container.setVisible(true);
                    //
                    this.step1TextMany.setVisible(true);
                    this.step1TextLess.setVisible(false);
                    this.step1BalloonMany.setVisible(false);
                    this.step1BalloonLess.setVisible(false);
                    this.step1Container.setVisible(false);
                    this.pointer.setVisible(false);
                    break;
                case 's0020-show-text-less':
                    this.step1TextLess.setVisible(true);
                    break;
                case 's0030-sync':
                    this.step1Container.setVisible(true);
                    this.step1TextMany.setVisible(true);
                    this.step1TextLess.setVisible(true);
                    this.step1BalloonMany.setVisible(false);
                    this.step1BalloonLess.setVisible(false);
                    break;
                case 's0030-focus-many':
                    // Focus on textMany, so blur textLess
                    this.step1TextMany.setScale(1.5);
                    this.step1TextLess.alpha = 0.3;
                    break;
                case 's0030-show-ballon-many':
                    // Show BalloonMany
                    this.step1BalloonMany.setVisible(true);

                    // Move in
                    this.step1BalloonMany.y = 1000;
                    this.tweens.add({
                        targets: this.step1BalloonMany,
                        y: this.balloonOriginY,
                        duration: 500, 
                        ease: 'Cubic',
                    });

                    break;
                case 's0030-focus-less':
                    // Blur TextMany and BalloonMany
                    this.step1TextMany.alpha = 0.3;
                    this.step1BalloonMany.alpha = 0.3;
                    // Focus on Textless
                    this.step1TextLess.setScale(1.5);
                    this.step1TextLess.alpha = 1;
                    break;
                case 's0030-show-ballon-less':
                    this.step1BalloonLess.setVisible(true);

                    this.step1BalloonLess.y = 1000;
                    this.tweens.add({
                        targets: this.step1BalloonLess,
                        y: this.balloonOriginY,
                        duration: 500, 
                        ease: 'Cubic',
                    });
                    break;
                case 's0040-sync':
                    this.step1Container.setVisible(true);
                    this.step1TextMany.setVisible(true);
                    this.step1TextLess.setVisible(true);
                    this.step1BalloonMany.setVisible(true);
                    this.step1BalloonLess.setVisible(true);

                    this.step1TextMany.alpha = 1;
                    this.step1TextLess.alpha = 1;
                    this.step1BalloonMany.alpha = 1;
                    this.step1BalloonLess.alpha = 1;
                    this.step1BalloonMany.y = this.balloonOriginY;
                    this.step1BalloonLess.y = this.balloonOriginY;
                    //
                    this.step1TextMany.setScale(1);
                    this.step1TextLess.setScale(1);
                    break;
                case 's0050-sync':
                    this.step1Container.setVisible(true);
                    this.step1TextMany.setVisible(true);
                    this.step1TextLess.setVisible(true);
                    this.step1BalloonMany.setVisible(true);
                    this.step1BalloonLess.setVisible(true);
                    break;
                case 's0050-point-many':
                    this.pointer.setVisible(true);
                    this.pointer.setPosition(this.step1BalloonMany.x+100, this.step1BalloonMany.y+250);

                    // Pulsing ballon and wording
                    this.tweens.add({
                        targets: [this.step1BalloonMany],
                        scale: 1.1,
                        duration: 500, 
                        ease: 'Cubic',
                        repeat: -1,
                        yoyo: true
                    });
                    break;
                case 's0060-point-less':
                    this.pointer.setPosition(this.step1BalloonLess.x+100, this.step1BalloonLess.y+250);
                    
                    this.tweens.killTweensOf(this.step1BalloonMany);

                    this.step1BalloonMany.scale = 1;

                    // Pulsing ballon and wording
                    this.tweens.add({
                        targets: [this.step1BalloonLess],
                        scale: 1.1,
                        duration: 500, 
                        ease: 'Cubic',
                        repeat: -1,
                        yoyo: true
                    });
                    break;
                case 's0070-sync':
                    this.pointer.setVisible(false);
                    
                    this.tweens.killTweensOf(this.step1BalloonLess);

                    this.step1BalloonLess.scale = 1;
                    break;
                case 's0080-sync':
                    this.step1Container.setVisible(false);
                    break;
                default:
                    break;
            }
           
            console.log('Delay: '+delay +' - SequenceKey:'+ key);
        }

        this.dialogController.onDialogEndCallBack = ( endKey : string )=>{
            if( endKey == 'step1-ended'){
                this.step = 1;
            }

            this.showMenu();
        }
        // 
        this.startButton = new BasicButton(this,GameLib.midX,GameLib.quater3Y - 200,'开始教学', 'lg');
        this.startButton.onPressedCallback = ()=>{
            this.hideMenu();
            this.dialogController.triggerDialog(Dialog_Y1_C1_001_ZH);
        };

        this.startButton2 = new BasicButton(this,GameLib.midX,GameLib.quater3Y,'例子', 'lg');
        this.startButton2.onPressedCallback = ()=>{
            this.hideMenu();
            
            // this.dialogController.triggerDialog(dialogData);
        };

        this.hideMenu();
        this.showMenu();
        /**
         * Dialog Controller
         * - Function: start dialog
         * - Function: next line
         * - Function: pause 
         * - Function: continue
         * - Function: callback On Delay (timer to run function)
         * -- to trigger effect upon delay 
         * - Function: callback On finish line
         * 
         * 
         * Flow
         * - Enter 
         * Section 1: Intro and teach
         * - Start Dialog: Intro
         * - Work with 
         * - Dialog: Explain
         * Section 2: Exercise
         * - 
         * -
         * 
         */

        this.add.existing(this.teacher.getContainer());

        EventBus.emit('current-scene-ready', this);
    }

    showMenu(){
        // Always show
        this.startButton.setDisabled(false);
        this.startButton.setVisible(true);

        //
        this.startButton2.setVisible(true);

        this.startButton2.setDisabled(true);
        if( this.step > 0 ){
            this.startButton2.setDisabled(false);
        }
    }

    hideMenu(){
        this.startButton.setDisabled(true);
        this.startButton.setVisible(false);

        this.startButton2.setDisabled(true);
        this.startButton2.setVisible(false);

    }
}
