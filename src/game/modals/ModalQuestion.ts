import GameLib from "@/lib/GameLib";
import RectButton from "@/lib/components/RectButton";
import { GameObjects, Scene } from "phaser";
import ChoiceButton from "../components/ChoiceButton";
import { Game } from "../scenes/Game";

class Choice{
    name: string
    isAnswer: boolean    
}

const choiceList: Array<Choice> = [
    {
        name: 'Apple',
        isAnswer: true
    },
    {
        name: 'Orange',
        isAnswer: false
    },
    {
        name: 'Pear',
        isAnswer: false
    },
    {
        name: 'Lemon',
        isAnswer: false
    },
]

export default class ModalQuestion extends Phaser.Scene{
    
    static preload( scene: Phaser.Scene ){
        //
        scene.load.image('questionApple','assets/adventure/game/question/apple.png')
    }

    parent: Phaser.Scene
    sceneKey: string
    //
    backdrop: GameObjects.Rectangle
    //
    container: GameObjects.Container
    panel: GameObjects.Rectangle
    sprite: GameObjects.Sprite
    //
    callbackCorrect: Function | null
    callbackWrong: Function | null
    //
    choiceA: ChoiceButton
    choiceB: ChoiceButton
    choiceC: ChoiceButton
    choiceD: ChoiceButton
    //
    choiceWidth: number
    choiceHeight: number
    choiceX1: number
    choiceX2: number
    choiceY1: number
    choiceY2: number
    //
    status: string
    //
    statusText: GameObjects.Text
    okButton: RectButton

    constructor(parent: Scene, sceneKey: string) {
        super(sceneKey);
        
        this.parent = parent
        this.sceneKey = sceneKey
        //
        parent.scene.add(sceneKey,this,true)

        this.backdrop = this.add.rectangle(GameLib.screenWidth/2,GameLib.screenHeight/2,GameLib.screenWidth,GameLib.screenHeight,0x000000,0.5)

        this.container = this.add.container(GameLib.screenWidth/2,GameLib.screenHeight/2)

        this.panel = this.add.rectangle(0,0,GameLib.screenWidth-50, GameLib.screenHeight-50,0xe6e6e6)
        this.container.add(this.panel)

        this.sprite = this.add.sprite(0,-250,'questionApple');
        this.container.add(this.sprite);

        // Calculate Choice Button
        const padding:number = 25
        const panelWidth:number = GameLib.screenWidth - 50
        this.choiceWidth = (panelWidth /2) - (padding *2)
        this.choiceHeight = 100
        this.choiceX1 = - (this.choiceWidth/2 + padding) 
        this.choiceX2 = (this.choiceWidth/2 + padding) 
        this.choiceY1 = 400
        this.choiceY2 = this.choiceY1 + padding + this.choiceHeight

        
        this.okButton = new RectButton(this,this.choiceX2,this.choiceY2 + 200, 'OK' ).setScale(0.8);
        this.okButton.onPressed(()=>{
            if( this.status == 'correct' ){
                if( this.callbackCorrect ) this.callbackCorrect()
            }else{
                if( this.callbackWrong ) this.callbackWrong()
            }
            this.endQuestion()
        })
        this.okButton.setVisible(false);
        this.container.add(this.okButton);

        this.statusText = this.add.text(this.choiceX1, this.choiceY2 + 200, "Status", {fontSize:60, color: '#000000'}).setOrigin(0.5)
        this.statusText.setVisible(false);
        this.container.add(this.statusText);

        this.scene.setVisible(false);
        // this.renderChoices();
    }

    renderChoices(){
        if( this.choiceA ) this.choiceA.destroy()
        if( this.choiceB ) this.choiceB.destroy()
        if( this.choiceC ) this.choiceC.destroy()
        if( this.choiceD ) this.choiceD.destroy()

        let choices: Choice[] = GameLib.shuffle(choiceList)
        this.choiceA = this.renderChoiceButton(this.choiceX1,this.choiceY1,choices[0]); 
        this.choiceB = this.renderChoiceButton(this.choiceX2,this.choiceY1,choices[1]); 
        this.choiceC = this.renderChoiceButton(this.choiceX1,this.choiceY2,choices[2]); 
        this.choiceD = this.renderChoiceButton(this.choiceX2,this.choiceY2,choices[3]); 
    }

    renderChoiceButton( x:number, y:number, choice: Choice):ChoiceButton{
        let btn:ChoiceButton = new ChoiceButton(this,x,y,this.choiceWidth,this.choiceHeight,choice.name, choice.isAnswer)
        btn.onPressedCallback = ( button: ChoiceButton ) => {
            // Disable all answer
            button.isSelected = true;

            this.updateChoiceButtons( button.isAnswer )
        }
        this.container.add(btn);
        return btn;
    }

    updateChoiceButtons( isCorrect:boolean ){
        if( isCorrect ){
            this.status = "correct"
            this.statusText.setText("Correct")
            this.statusText.setColor("green")
            if( this.choiceA ) this.choiceA.showCorrectState()
            if( this.choiceB ) this.choiceB.showCorrectState()
            if( this.choiceC ) this.choiceC.showCorrectState()
            if( this.choiceD ) this.choiceD.showCorrectState()
        }else{
            this.status = "wrong"
            this.statusText.setText("Wrong")
            this.statusText.setColor("red")
            if( this.choiceA ) this.choiceA.showWrongState()
            if( this.choiceB ) this.choiceB.showWrongState()
            if( this.choiceC ) this.choiceC.showWrongState()
            if( this.choiceD ) this.choiceD.showWrongState()
        }

        this.okButton.setVisible(true)
        this.statusText.setVisible(true)
    }

    startQuestion(){
        // Clear all previous
        this.reset()
        this.renderChoices()
        this.scene.setVisible(true)
    }

    endQuestion(){
        //
        this.reset()
        this.scene.setVisible(false)
    }

    reset(){
        // Reset status 
        this.status = 'pending'
        
        // Hide Button and text
        this.okButton.setVisible(false)
        this.statusText.setText("-")
        this.statusText.setVisible(false)
    }
  }