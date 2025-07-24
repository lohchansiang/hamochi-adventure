import GameLib from '@/lib/GameLib';
import { EventBus } from '../EventBus';
import { GameObjects, Scene } from 'phaser';
import AvatarRenderer from '../components/Avatar/AvatarRenderer';
import DialogController from '../components/Dialog/DialogController';
import { Dialog_Y1_C1_001A_ZH } from '../repos/data/dialogs/Dialog_Y1_C1_001A_ZH';
import { Dialog_Y1_C1_001B_ZH } from '../repos/data/dialogs/Dialog_Y1_C1_001B_ZH';
import BasicButton from '@/lib/components/BasicButton';
import ManyLessQuestionRenderer from '../components/ManyLessQuestionRenderer';
import ProgressRenderer, { Progress } from '../components/ProgressRenderer';
import CloseButton from '@/lib/components/CloseButton';

/**
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

export class MainDemo extends Scene
{
    preload ()
    {
        this.load.setPath('assets');

        this.load.image('balloonMany','/learn/BalloonMany.png');
        this.load.image('balloonLess','/learn/BalloonLess.png');
        this.load.image('pointer','/learn/Pointer.png');

        // Load Question Display
        ManyLessQuestionRenderer.preload(this);

        // Load Audio for Dialog
        DialogController.preload(this);
        DialogController.preloadAudio(this,Dialog_Y1_C1_001A_ZH);
        DialogController.preloadAudio(this,Dialog_Y1_C1_001B_ZH);
    }

    camera: Phaser.Cameras.Scene2D.Camera;
    // Data
    progresses: Array<Progress>
    currentProgress: Array<string>
    progressRenderers:  Array<ProgressRenderer>
    //
    teacher: AvatarRenderer
    //
    dialogText: GameObjects.Text
    dialogController: DialogController
    // Menu
    menuContainer: GameObjects.Container
    menuClose: CloseButton
    // Step 1
    step1Container: GameObjects.Container
    step1TextMany: GameObjects.Text
    step1TextLess: GameObjects.Text
    step1BalloonMany: GameObjects.Sprite
    step1BalloonLess: GameObjects.Sprite
    pointer: GameObjects.Sprite
    balloonOriginY: number = 350
    //
    // Step 2
    step2ManyLessQuestion: ManyLessQuestionRenderer

    constructor ()
    {
        super('MainDemo');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xe6e6e6);

        this.progresses = [
            {
                key: Dialog_Y1_C1_001A_ZH.key,
                name: {
                    en: 'Learn',
                    zh: '学习',
                    ms: 'Belajar'
                },
                dialogData: Dialog_Y1_C1_001A_ZH,
            },
            {
                key: Dialog_Y1_C1_001B_ZH.key,
                name: {
                    en: 'Example',
                    zh: '例子',
                    ms: 'Contoh'
                },
                dialogData: Dialog_Y1_C1_001B_ZH,
                requirement: Dialog_Y1_C1_001A_ZH.key
            }
        ]
        this.currentProgress = [];

        this.renderMenu();
        this.renderTeacher();
        this.renderStep1();
        this.renderStep2();

        this.dialogController = new DialogController(this);
        this.dialogController.onOpenCallback = ()=>{
            //
        }

        this.dialogController.onCloseCallback = ()=>{
            // 
        }

        this.dialogController.onLineDelayCallback = (dialogKey,sequenceKey,delay,key)=>{
            if( dialogKey == Dialog_Y1_C1_001A_ZH.key ){
                this.runStep1Callback(delay,key);
            }else if( dialogKey == Dialog_Y1_C1_001B_ZH.key ){
                this.runStep2Callback(delay,key);
            }else{
                console.log('Unknow Dialog Key >' + dialogKey );
            }

            console.log('Line '+dialogKey+ ' > ' + key );
        };

        this.dialogController.onLineEndCallback = ( dialogKey:string, sequenceKey:string, lineEndKey?:string ) => {
            if( dialogKey == Dialog_Y1_C1_001B_ZH.key ){
                if( lineEndKey ){
                    this.runStep2Callback(0,lineEndKey);
                }

                console.log('onLineEndCallback > '+ lineEndKey);
            }
        };

        this.dialogController.onDialogEndCallBack = ( dialogKey : string )=>{
            this.addProgress(dialogKey);
            this.showMenu();
        };
        
        // Runtime start
        this.showMenu();

        EventBus.emit('current-scene-ready', this);
    }

    hasProgress( dialogKey: string ):boolean{
        let hasProgress: boolean = false;
        this.currentProgress.forEach((p)=>{
            if(p == dialogKey ){
                hasProgress = true;
            }
        })

        return hasProgress;
    }

    addProgress( dialogKey: string ){
        if( !this.hasProgress( dialogKey) ) this.currentProgress.push(dialogKey);
    }

    renderMenu(){
        this.menuContainer = this.add.container(GameLib.midX,GameLib.midY).setDepth(100);
        let backdrop = this.add.rectangle(0,0,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5);
        this.menuContainer.add(backdrop);
        
        let buttonCount:number = this.progresses.length;
        let gap:number = 200;
        let startY:number = -(gap * (buttonCount-1) * 0.5);
        let panelHeight:number = (gap * (buttonCount-1) ) + 600;
        
        let panel:GameObjects.Rectangle = this.add.rectangle(0,0,GameLib.screenWidth-200,panelHeight,0xD3D3D3,1);
        this.menuContainer.add(panel);

        // this.menuClose = new CloseButton(this,panel.getTopRight().x - 60, panel.getTopRight().y+60);
        // this.menuClose.buttonSprite.setDisplaySize(120,120)
        // this.menuContainer.add(this.menuClose);
        // this.menuClose.onPressedCallback= ()=>{
        //     this.hideMenu();
        // }

        let text:GameObjects.Text = this.add.text(0, -panelHeight/2 + 100,'教学进度',{
            color:'black',
            fontSize:80
        }).setOrigin(0.5);
        this.menuContainer.add(text);

        this.progressRenderers = [];
        this.progresses.forEach((progress,index) =>{
            let p: ProgressRenderer = new ProgressRenderer(this,0,startY+(gap*index),progress);
            this.menuContainer.add(p.container);
            p.button.onPressedCallback = ()=>{
                this.dialogController.triggerDialog(progress.dialogData);
                this.hideMenu();
            };

            this.progressRenderers.push(p);
        })

        this.hideMenu();
    }

    renderTeacher(){
         // Add Teacher in center
        this.teacher = new AvatarRenderer( this, GameLib.midX, GameLib.midY - 150 );
        this.teacher.renderAvatar('CharOwl');
        this.teacher.getContainer().setScale(0.8);
        this.add.existing(this.teacher.getContainer());
    }

    showMenu(){
        // Always show
        this.progressRenderers.forEach((p)=>{
            p.updateProgress(this.currentProgress);
        })

        this.menuContainer.setVisible(true);
    }

    hideMenu(){
        this.menuContainer.setVisible(false);
    }

    renderStep1(){
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
    }
    
    runStep1Callback(delay:number,key:string){
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
    }

    renderStep2(){
        this.step2ManyLessQuestion = new ManyLessQuestionRenderer(this,GameLib.midX,GameLib.midY);
    }

    runStep2Callback(delay:number,key:string){
        switch (key) {
            case 's1010-reset':
                this.step2ManyLessQuestion.reset();
                break;
            case 's1010-show-box':
                this.step2ManyLessQuestion.showBoxes( true );
                break;
            
            case 's1020-sync':
                this.step2ManyLessQuestion.showBoxes();
                break;
            
            case 's1020-open-box-input':
                this.step2ManyLessQuestion.onBoxOpenCallback = ()=>{
                    this.dialogController.nextLine(undefined, 1000);
                }
                this.step2ManyLessQuestion.setupBoxInput();
                break
            case 's1030-sync':
                this.step2ManyLessQuestion.openBoxes();
                break;
            case 's1060-show-left-1':
                this.step2ManyLessQuestion.leftAppleGroup.showHint(1);
                break;
            case 's1060-show-left-2':
                this.step2ManyLessQuestion.leftAppleGroup.showHint(2);
                break;
            case 's1060-show-left-3':
                this.step2ManyLessQuestion.leftAppleGroup.showHint(3);
                break;
            case 's1060-show-left-4':
                this.step2ManyLessQuestion.leftAppleGroup.showHint(4);
                break;
            case 's1060-show-left-5':
                this.step2ManyLessQuestion.leftAppleGroup.showHint(5);
                break;
            case 's1070-sync':
                this.step2ManyLessQuestion.leftAppleGroup.showHints();
                break;
            case 's1080-show-right-1':
                this.step2ManyLessQuestion.rightAppleGroup.showHint(1);
                break;
            case 's1080-show-right-2':
                this.step2ManyLessQuestion.rightAppleGroup.showHint(2);
                break;
            case 's1090-sync':
                this.step2ManyLessQuestion.rightAppleGroup.showHints();
                break;
            case 's1090-show-buttons':
                this.step2ManyLessQuestion.onCorrectCallback = () => {
                    this.dialogController.nextLine('S1120');
                }
                this.step2ManyLessQuestion.onWrongCallback = () => {
                    this.dialogController.nextLine('S1100');
                }
                this.step2ManyLessQuestion.showButtons();
                this.step2ManyLessQuestion.showQuestion();
                break;
            case 's1140-sync':
                this.step2ManyLessQuestion.hideQuestion();
                break;
            default:
                break;
        }
    }
}
