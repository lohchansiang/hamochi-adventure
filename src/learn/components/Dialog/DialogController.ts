import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser"
import { GameDepth } from "../Config/GameDepth";
import { GameText } from "../Config/GameText";
import { DialogData, DialogLine } from "@/learn/repos/data/DialogData";

/* Dialog Controller
* - Function: start dialog
* - Function: next line
* - Function: pause 
* - Function: continue
* - Function: callback On Delay (timer to run function)
* -- to trigger effect upon delay 
* - Function: callback On finish line
*/
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

    private canSkip: boolean = true;
    private scene: Scene
    private container: GameObjects.Container
    private backdrop: GameObjects.Rectangle
    private boxContainer: GameObjects.Container
    private dialogBox: GameObjects.Sprite
    private spriteNextIcon: GameObjects.Sprite
    private text: GameObjects.Text
    //
    private dialog: DialogData
    private currentIndex: number
    private canNext:boolean
    // 
    onOpenCallback: Function
    onCloseCallback: Function
    onLineDelayCallback: (dialogKey:string,sequenceKey:string,delay:number,key:string) => void
    onLineEndCallback: (dialogKey:string,sequenceKey:string,key?:string) => void
    onDialogEndCallBack?: (dialogKey:string) => void
    //
    private soundPlayer: Phaser.Sound.BaseSound
    private lineDelayedCallbacks: Array<Phaser.Time.TimerEvent> = []
    
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
                this.endLine();
            }
        },this);

        this.container.setVisible(false);
    }

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
        this.backdrop.setVisible(false);
    }

    private enableNext(){
        this.canNext = true;
        this.spriteNextIcon.setVisible(true);
        this.backdrop.setVisible(true);
    }

    private open(){
        // Show Backdrop
        this.container.setVisible(true);
        
        this.nextLine();

        if( this.onOpenCallback ) this.onOpenCallback();
    }

    private close(){
        console.log('Close Dialog');
        this.container.setVisible(false);
        if( this.onCloseCallback ) this.onCloseCallback();
        this.runOnDialogEndCallBack();

    }

    private runOnDialogEndCallBack(){
        if( this.onDialogEndCallBack != undefined ){
            this.onDialogEndCallBack(this.dialog.key);
        }
    }

    private runOnLineEndCallback( line: DialogLine ){
        // Call set onLineEndCallback
        if( this.onLineEndCallback != undefined ){
            this.onLineEndCallback( this.dialog.key, line.sequenceKey, line.lineEndKey );
        }
    }

    private endLine(){
        this.disableNext();

        // Stop sound
        if( this.soundPlayer.isPlaying ){
            this.soundPlayer.stop();
        }
        // Stop call back?
        if( this.lineDelayedCallbacks && this.lineDelayedCallbacks.length > 0 ){
            this.lineDelayedCallbacks.forEach((delay) => {
                delay.remove();
            })
        }

        let line:DialogLine = this.dialog.lines[this.currentIndex];
        this.runOnLineEndCallback( line );

        let isPaused: boolean = line.isPaused?? false;
        if( !isPaused ){
            this.nextLine();
        }
    }

    private findLineIndex( sequenceKey: string ){
        let index:number = -1;
        this.dialog.lines.forEach( (d,i) => {
            if( d.sequenceKey == sequenceKey ){
                index = i;
            }
        });

        return index;
    }

    nextLine( nextSequenceKey?:string, delay?: number ){
        this.disableNext();

        if( delay ){
            this.scene.time.delayedCall( delay, this.nextLine, [nextSequenceKey], this);
            return;
        }
        
        let isOverwrite:boolean = false;
        if( !nextSequenceKey ){
            if(  this.currentIndex > -1 && this.dialog.lines[this.currentIndex].nextSequenceKey != undefined ){
                nextSequenceKey = this.dialog.lines[this.currentIndex].nextSequenceKey;
            }
        }

        if( nextSequenceKey ){
            let lineIndex = this.findLineIndex(nextSequenceKey);
            if( lineIndex > -1 ){
                this.currentIndex = lineIndex;
                isOverwrite = true;
            }
        }

        // render Line
        if( !isOverwrite ){
            this.currentIndex += 1;
        }

        if( this.dialog ){
            if( this.currentIndex < this.dialog.lines.length ){
                const line: DialogLine = this.dialog.lines[this.currentIndex];

                this.text.setText( line.message );
                
                // Setup delayed callback
                if( this.onLineDelayCallback ){
                    line.delayCallbacks?.forEach(( delayCallback )=>{
                        let delayCall: Phaser.Time.TimerEvent = this.scene.time.delayedCall(
                                                                    delayCallback.delay, 
                                                                    this.onLineDelayCallback,
                                                                    [
                                                                        this.dialog.key,
                                                                        line.sequenceKey,
                                                                        delayCallback.delay,
                                                                        delayCallback.key
                                                                    ],
                                                                    this);
                        this.lineDelayedCallbacks.push(delayCall);
                    });
                }

                // Check Sound
                // If have audio then play, if audio is played, line end when
                let audioKey: string =  DialogController.audioKey( this.dialog.key, line.sequenceKey);
                let hasAudio: boolean = false;
                if (this.scene.cache.audio.exists(audioKey)) {
                    this.soundPlayer = this.scene.sound.add( audioKey);
                    this.soundPlayer.play();

                    if( this.soundPlayer.isPlaying ){
                        hasAudio = true;
                        this.soundPlayer.on('complete', () => {
                            this.enableNext();
                        });
                    }
                }

                // If no audio played, or can skip option is enabled
                // Able to next line with delayed time
                if( this.canSkip || !hasAudio ){
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