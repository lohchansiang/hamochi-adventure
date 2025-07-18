import { DialogData, DialogRepo } from "@/adventure/repos/DialogRepo";
import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser"
import { GameDepth } from "../Config/GameDepth";
import { Vector } from "matter";
import { GameText } from "../Config/GameText";
import { CharacterRepo, CharacterData } from "@/adventure/repos/CharacterRepo";

export default class DialogController{
    static preload( scene: Scene ){
        scene.load.image("dialogNext", "assets/adventure/components/dialogNext.png");
    }

    private scene: Scene
    private container: GameObjects.Container
    private backdrop: GameObjects.Rectangle
    private bottomContainer: GameObjects.Container
    private spriteNextIcon: GameObjects.Sprite
    private text: GameObjects.Text
    private textName: GameObjects.Text
    //
    private bottomY: number = GameLib.midY
    //
    private dialog: DialogData
    private currentIndex: number
    private canNext:boolean
    // 
    onOpenCallback: Function
    onCloseCallback: Function
    private onDialogEndCallBack: Function | undefined
    
    constructor(scene:Scene ){
        this.scene = scene
        this.container = this.scene.add.container(GameLib.midX,GameLib.midY).setDepth(GameDepth.UI_DIALOG);

        // Add Backdrop?
        this.backdrop = this.scene.add.rectangle(0,0,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5)
        this.container.add(this.backdrop);

        this.bottomContainer = this.scene.add.container(0,this.bottomY);
        this.container.add(this.bottomContainer);

        // Add Bottom
        const margin:number = 25
        const boxWidth:number = GameLib.screenWidth-(margin*2);
        const boxHeight:number = 450;
        const padding:number = 50;

        let rect: GameObjects.Rectangle = this.scene.add.rectangle(0,-margin,boxWidth,boxHeight,0xEEEEEE).setOrigin(0.5,1);
        this.bottomContainer.add(rect);

        let topLeft: Vector = rect.getTopLeft();
        // Add Text Title
        this.textName = this.scene.add.text(
            topLeft.x+padding,
            topLeft.y+padding,
            '???',
            {
                fontSize: GameText.LG,
                color: 'black',
                fontStyle: `bold`,
                wordWrap: { width: boxWidth - (padding*2), useAdvancedWrap: true },
                maxLines:1
            }
        );
        this.bottomContainer.add(this.textName);

        // Add Text Content
        this.text = this.scene.add.text(
            topLeft.x+padding,
            topLeft.y+padding+80,
            '???',
            {
                fontSize: GameText.MD,
                color: 'black',
                wordWrap: { width: boxWidth - (padding*2), useAdvancedWrap: true },
                // fixedHeight: boxHeight-padding-100,
                maxLines:5
            }
        );
        this.bottomContainer.add(this.text);

        // Add Next Hint Text
        let bottomRight: Vector = rect.getBottomRight();
        
        this.spriteNextIcon = this.scene.add.sprite(bottomRight.x-15,bottomRight.y-30,'dialogNext').setOrigin(1);
        this.spriteNextIcon.setDisplaySize(80,60);
        this.bottomContainer.add(this.spriteNextIcon);
        
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

    triggerCustomDialog( dialog: DialogData, onDialogEndCallBack?: Function ){
        this.onDialogEndCallBack = onDialogEndCallBack;
        
        // Set Dialog and reset
        this.dialog = dialog;   
        this.currentIndex = -1;
        this.textName.setText('');
        this.text.setText('');
        
        this.disableNext();

        this.open();
    }

    triggerDialog( dialogKey: string, onDialogEndCallBack?: Function ){
        this.onDialogEndCallBack = onDialogEndCallBack;
        
        // Load DialogData from repo
        let dialog:DialogData | undefined = DialogRepo.getDialogData( dialogKey );

        if( dialog ){
            // Set Dialog and reset
            this.dialog = dialog;   
            this.currentIndex = -1;
            this.textName.setText('');
            this.text.setText('');
            
            this.disableNext();

            this.open();
        }else{
            console.log( 'Dialog Key not found > ' + dialogKey );
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
        this.bottomContainer.y += 500;

        // Show Backdrop
        this.container.setVisible(true);
        
        // Bottom Slide In
        this.scene.tweens.add({
            targets: this.bottomContainer,
            y: this.bottomY,
            duration: 300, 
            ease: 'Cubic',
            repeat: 0, 
            yoyo: false,
            onComplete: ()=>{
                this.nextLine();
            } 
        });

        if( this.onOpenCallback ) this.onOpenCallback();
    }

    private close(){
        this.scene.tweens.add({
            targets: this.bottomContainer,
            y: '+=500',
            duration: 300, 
            ease: 'Cubic',
            repeat: 0, 
            yoyo: false,
            onComplete: ()=>{
                this.container.setVisible(false);

                if( this.onCloseCallback ) this.onCloseCallback();

                this.runOnDialogEndCallBack();
            } 
        });
    }

    private runOnDialogEndCallBack(){
        if( this.onDialogEndCallBack != undefined ){
            this.onDialogEndCallBack();
            this.onDialogEndCallBack = undefined;
        }
    }

    nextLine(){
        this.disableNext();

        // render Line
        this.currentIndex += 1;

        if( this.dialog ){
            if( this.currentIndex < this.dialog.lines.length ){
                let charData: CharacterData | undefined = CharacterRepo.getCharacterData( this.dialog.lines[this.currentIndex].characterKey );
                
                this.textName.setText(charData != undefined? charData.name: this.dialog.lines[this.currentIndex].characterKey);
                this.text.setText(this.dialog.lines[this.currentIndex].message);

                this.scene.time.delayedCall(300,()=>{
                    this.enableNext();
                });
            }else{
                this.close();
            }
        }
    }
}