import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser"
import { GameDepth } from "../Config/GameDepth";
import { Vector } from "matter";
import { GameText } from "../Config/GameText";
import { DialogData } from "@/learn/repos/data/DialogData";

export default class DialogController{
    static preload( scene: Scene ){

        scene.load.setPath('assets');
        scene.load.image('speechBubble','/learn/SpeechBubble.png');
        scene.load.image("dialogNext", "/learn/dialogNext.png");
    }

    static preloadAudio( scene: Scene, dialog: DialogData ){
        scene.load.setPath('assets');

        if( dialog.audioAssetPath ){
            dialog.lines.forEach(line => {
                scene.load.audio(
                    DialogController.audioKey(dialog.key,line.sequenceKey),
                    dialog.audioAssetPath + '/'+ line.sequenceKey + '.mp3'
                );
            });
        }
    }

    static audioKey( dialogKey:string, sequenceKey: string): string{
        return 'Audio_'+dialogKey+'_'+sequenceKey;
    }

    private canSkip: boolean = false;
    private scene: Scene
    private container: GameObjects.Container
    private backdrop: GameObjects.Rectangle
    private boxContainer: GameObjects.Container
    private dialogBox: GameObjects.Sprite
    private spriteNextIcon: GameObjects.Sprite
    private text: GameObjects.Text
    //
    private bottomY: number = GameLib.midY
    //
    private dialog: DialogData
    private currentIndex: number
    private canNext:boolean
    // 
    onOpenCallback: Function
    onCloseCallback: Function
    onDelayCallback: (delay:number,key:string) => void
    onDialogEndCallBack?: (endKey:string) => void
    //
    private soundPlayer: Phaser.Sound.BaseSound
    private delayedCallbacks: Array<Phaser.Time.TimerEvent> = []
    
    constructor(scene:Scene ){
        this.scene = scene
        this.container = this.scene.add.container(GameLib.midX,GameLib.midY).setDepth(GameDepth.UI_DIALOG);

        // Add Backdrop?
        this.backdrop = this.scene.add.rectangle(0,0,GameLib.screenWidth,GameLib.screenHeight,0x000000,0)
        this.container.add(this.backdrop);

        this.boxContainer = this.scene.add.container( -GameLib.midX, -GameLib.midY );
        this.container.add(this.boxContainer);

        // Add Bubble
        this.dialogBox = scene.add.sprite(0,0,'speechBubble').setOrigin(0,0);
        this.boxContainer.add(this.dialogBox);

        // Add Text Content
        let padding:number = 80;
        this.text = this.scene.add.text(
            padding,
            padding,
            '???',
            {
                fontSize: GameText.MD,
                color: 'black',
                wordWrap: { width: GameLib.screenWidth - (padding*2), useAdvancedWrap: true },
                // fixedHeight: boxHeight-padding-100,
                maxLines:5,
            }
        );
        this.boxContainer.add(this.text);

        // let ref:GameObjects.Rectangle = this.scene.add.rectangle(0,0,100,100,0x00000);
        // this.boxContainer.add(ref);

        // Add Next Hint Text
        this.spriteNextIcon = this.scene.add.sprite(GameLib.screenWidth - 60, 360,'dialogNext').setOrigin(1);
        this.spriteNextIcon.setDisplaySize(80,60);
        this.boxContainer.add(this.spriteNextIcon);
        
        this.scene.tweens.add({
            targets: this.spriteNextIcon,
            y: '+=25',
            duration: 500, 
            ease: 'Cubic',
            repeat: -1, 
            yoyo: true,
        });

        // add click
        this.backdrop.setInteractive();
        this.backdrop.on('pointerup',()=>{
            if( this.canNext ){
                this.nextLine();
            }
        },this);

        this.container.setVisible(false);
    }

    // triggerCustomDialog( dialog: DialogData, onDialogEndCallBack?: Function ){
    //     this.onDialogEndCallBack = onDialogEndCallBack;
        
    //     // Set Dialog and reset
    //     this.dialog = dialog;   
    //     this.currentIndex = -1;
    //     this.text.setText('');
        
    //     this.disableNext();

    //     this.open();
    // }

    triggerDialog( dialogData: DialogData ){
        if( dialogData ){
            // Set Dialog and reset
            this.dialog = dialogData;   
            this.currentIndex = -1;
            this.text.setText('');
            
            this.disableNext();

            this.open();
        }else{
            console.log( 'Dialog Key not found' );
            this.runOnDialogEndCallBack();
        }
    }
    
    private disableNext(){
        this.canNext = false;
        this.spriteNextIcon.setVisible(false);
    }

    private enableNext(){
        this.canNext = true;
        this.spriteNextIcon.setVisible(true);
    }

    private open(){
        // Show Backdrop
        this.container.setVisible(true);
        
        this.nextLine();

        if( this.onOpenCallback ) this.onOpenCallback();
    }

    private close(){
        this.container.setVisible(false);
        if( this.onCloseCallback ) this.onCloseCallback();
        this.runOnDialogEndCallBack();

    }

    private runOnDialogEndCallBack(){
        if( this.onDialogEndCallBack != undefined ){
            this.onDialogEndCallBack(this.dialog.endKey);
            this.onDialogEndCallBack = undefined;
        }
    }

    nextLine(){
        this.disableNext();
        // Stop sound
        if( this.soundPlayer ){
            this.soundPlayer.stop();
        }
        // Stop call back?
        if( this.delayedCallbacks && this.delayedCallbacks.length > 0 ){
            this.delayedCallbacks.forEach((delay) => {
                delay.remove();
            })
        }

        // render Line
        this.currentIndex += 1;

        if( this.dialog ){
            if( this.currentIndex < this.dialog.lines.length ){
                this.text.setText(this.dialog.lines[this.currentIndex].message);
                
                let sequenceKey: string = this.dialog.lines[this.currentIndex].sequenceKey;

                // Check Sound
                let audioKey: string =  DialogController.audioKey( this.dialog.key, sequenceKey);
                if (this.scene.cache.audio.exists(audioKey)) {
                    this.soundPlayer = this.scene.sound.add( audioKey);
                    this.soundPlayer.play();

                    if( this.soundPlayer.isPlaying ){
                        this.soundPlayer.on('complete', () => {
                            console.log('Audio finished playing > ' +sequenceKey);
                            this.enableNext();
                        });
                    }
                    
                }

                if( this.onDelayCallback ){
                    this.dialog.lines[this.currentIndex].delayCallbacks?.forEach(( delayCallback )=>{
                        let delayCall: Phaser.Time.TimerEvent = this.scene.time.delayedCall(delayCallback.delay, this.onDelayCallback,[delayCallback.delay,delayCallback.key],this);
                        this.delayedCallbacks.push(delayCall);
                    });
                }

                if( this.canSkip ){
                    this.scene.time.delayedCall(300,()=>{
                        this.enableNext();
                    });
                }
                
            }else{
                this.close();
            }
        }
    }
}