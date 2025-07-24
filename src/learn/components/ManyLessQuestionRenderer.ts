import { GameObjects, Scene } from "phaser";
import Box from "./Box";
import AppleGroup from "./AppleGroup";
import GameLib from "@/lib/GameLib";
import BasicButton from "@/lib/components/BasicButton";
import { QChoice, Question } from "./QuestionGenerator";

export default class ManyLessQuestionRenderer{
    static preload( scene: Scene ){
        AppleGroup.preload(scene);
        Box.preload(scene);
        
        scene.load.setPath('assets');
        scene.load.image('iconTick','/learn/iconTick.png');
        scene.load.image('iconCross','/learn/iconCross.png');
    }

    private scene: Scene
    private x:number
    private y:number
    private question: Question
    //
    private container: GameObjects.Container
    private leftBox: Box
    private rightBox: Box
    leftAppleGroup: AppleGroup
    rightAppleGroup: AppleGroup
    private appleOriginY: number = 100
    private boxOriginY: number = 300
    private questionOriginY: number = 500
    private buttonOriginY: number = 650
    private leftButton: BasicButton
    private rightButton: BasicButton
    private questionText: GameObjects.Text
    private feedback: GameObjects.Sprite
    private feedbackAnswer: GameObjects.Text

    private canAnswer: boolean
    //
    onBoxOpenCallback: () => void
    onCorrectCallback: () => void
    onWrongCallback: () => void
    
    constructor(scene:Scene, x:number, y:number){
        this.scene = scene
        this.x = x
        this.y = y
        
        this.container = this.scene.add.container(x,y);

        this.leftBox = new Box(this.scene, -GameLib.quaterX, this.boxOriginY);
        this.leftBox.setTag('A');
        this.container.add(this.leftBox.getContainer());

        this.rightBox = new Box(this.scene, GameLib.quaterX, this.boxOriginY);
        this.rightBox.setTag('B');
        this.container.add(this.rightBox.getContainer());

        this.leftAppleGroup = new AppleGroup(this.scene, -GameLib.quaterX, this.appleOriginY, 0);
        this.container.add(this.leftAppleGroup.getContainer());

        this.rightAppleGroup = new AppleGroup(this.scene, GameLib.quaterX, this.appleOriginY, 0 );
        this.container.add(this.rightAppleGroup.getContainer());

        this.leftButton = new BasicButton(this.scene, -GameLib.quaterX, this.buttonOriginY, 'A', 'md' );
        this.container.add(this.leftButton);

        this.rightButton = new BasicButton(this.scene, GameLib.quaterX, this.buttonOriginY, 'B', 'md' );
        this.container.add(this.rightButton);

        this.leftButton.onPressedCallback = ()=>{
            this.checkAnswer( 'left' );
        } 
        
        this.rightButton.onPressedCallback = ()=>{
            this.checkAnswer( 'right' );
        }

        this.questionText = this.scene.add.text(0,this.questionOriginY,'Question',{
            color: 'black',
            fontSize: 40
        }).setOrigin(0.5);
        this.container.add(this.questionText);

        this.feedback = this.scene.add.sprite(0,0,'iconCross').setDisplaySize(80,80);
        this.container.add(this.feedback);

        this.feedbackAnswer = this.scene.add.text(0,0,'答案',{
            color: 'red',
            fontSize: 35
        }).setOrigin(0.5);
        this.container.add(this.feedbackAnswer);

        this.setQuestion( this.defaultQuestion() );
    }

    reset(){
        this.canAnswer = false;
        this.leftButton.setDisabled( true );
        this.rightButton.setDisabled( true );
        //
        this.container.setVisible(false);
        this.leftBox.hide();
        this.rightBox.hide();
        this.leftBox.reset();
        this.rightBox.reset();
        //
        this.leftAppleGroup.hide();
        this.rightAppleGroup.hide();
        this.leftAppleGroup.reset();
        this.rightAppleGroup.reset();
        //
        this.leftButton.setVisible(false);
        this.rightButton.setVisible(false);
        this.questionText.setVisible(false);
        this.feedback.setVisible(false);
        this.feedbackAnswer.setVisible(false);


    }

    setQuestion(question: Question){
        this.reset();
        this.question = question;

        let leftChoice: QChoice = this.question.choices[0];
        let rightChoice: QChoice = this.question.choices[1];
        
        this.leftAppleGroup.renderApples(leftChoice.value);
        this.rightAppleGroup.renderApples(rightChoice.value);

        this.leftButton.buttonText.setText(leftChoice.text.zh);
        this.rightButton.buttonText.setText(rightChoice.text.zh);

        this.questionText.setText( this.question.question.zh );
    }

    showBoxes( withAnim: boolean = false ){
        this.container.setVisible(true);
        
        if( withAnim ){
            this.leftBox.getContainer().y += 1000;
            this.rightBox.getContainer().y += 1000;
            this.leftBox.show();
            this.rightBox.show();

            this.scene.tweens.add({
                targets: [this.leftBox.getContainer(),this.rightBox.getContainer()],
                y: this.boxOriginY,
                duration: 500, 
                ease: 'Cubic',
            });
        }else{
            this.leftBox.show();
            this.rightBox.show();
            this.leftBox.getContainer().y = this.boxOriginY;
            this.rightBox.getContainer().y = this.boxOriginY;
        }
    }

    setupBoxInput(){
        this.leftBox.onOpenCallback = ()=>{
            // Generate Apple 5
            this.leftAppleGroup.showByAnim(150);

            if( this.leftBox.isOpen && this.rightBox.isOpen ){
                if( this.onBoxOpenCallback ){
                    this.onBoxOpenCallback();
                }
            }
        };
        this.rightBox.onOpenCallback = ()=>{
            // Generate Apple 2
            this.rightAppleGroup.showByAnim(150);

            if( this.leftBox.isOpen && this.rightBox.isOpen ){
                if( this.onBoxOpenCallback ){
                    this.onBoxOpenCallback();
                }
            }
        };

        this.leftBox.enableInput();
        this.rightBox.enableInput();
    }

    openBoxes( withAnim: boolean = false ){
        if( !this.leftBox.isOpen ){
            this.leftBox.open();
        }

        if( !this.rightBox.isOpen ){
            this.rightBox.open();
        }

        if( withAnim ){
            this.leftAppleGroup.showByAnim(150);
            this.rightAppleGroup.showByAnim(150);
        }else{
            this.leftAppleGroup.show();
            this.rightAppleGroup.show();
        }
    }

    showHints(){
        this.leftAppleGroup.showHints();
        this.rightAppleGroup.showHints();
    }
    
    showQuestion(){
        this.questionText.setVisible(true);
    }

    showButtons(){
        this.leftButton.setDisabled( false );
        this.rightButton.setDisabled( false );
        //
        this.leftButton.setVisible(true);
        this.rightButton.setVisible(true);

        this.canAnswer = true;
    }

    checkAnswer( place: 'left' | 'right' ){
        if( !this.canAnswer ) return;
        if( !this.question ) return;

        let leftChoice: QChoice = this.question.choices[0];
        let rightChoice: QChoice = this.question.choices[1];

        if( !leftChoice ) return;
        if( !rightChoice ) return;

        let isCorrect: boolean = false;
        if( place == 'left' ){
            if( leftChoice.isAnswer ){
                isCorrect = true;
            }
        }else if( place == 'right' ){
            if( rightChoice.isAnswer ){
                isCorrect = true;
            }
        }

        if( isCorrect ){
            if( this.onCorrectCallback ) this.onCorrectCallback();

            this.feedback.setTexture('iconTick');
            this.feedback.setTint(0x22bb33);
        }else{
            if( this.onWrongCallback ) this.onWrongCallback();

            this.feedback.setTexture('iconCross');
            this.feedback.setTint(0xFF0000);

            if( place == 'left' ){
                this.feedbackAnswer.x = this.rightButton.x + 120;
                this.feedbackAnswer.y = this.rightButton.y + 40;
            }else if( place == 'right' ){
                this.feedbackAnswer.x = this.leftButton.x + 120;
                this.feedbackAnswer.y = this.leftButton.y + 40;
            }

            this.feedbackAnswer.setVisible(true);
        }

        if( place == 'left' ){
            this.feedback.x = this.leftButton.x + 150;
            this.feedback.y = this.leftButton.y;
        }else if( place == 'right' ){
            this.feedback.x = this.rightButton.x + 150;
            this.feedback.y = this.rightButton.y;
        }

        this.feedback.setVisible(true);

        this.leftButton.setDisabled( true );
        this.rightButton.setDisabled( true );
    }

    hideQuestion(){
        this.container.setVisible(false);
    }
    
    defaultQuestion():Question{
        return {
            key: 'example',
            question: {
                en: 'Which box has more apples?',
                zh: '哪个盒子的苹果比较多？',
                ms: 'Kotak mana ada lebih epal?',
            },
            choices: [
                {
                    value: 5,
                    text: {
                        en: 'Box A',
                        zh: '盒子 A',
                        ms: 'Kotak A',
                    },
                    isAnswer: true
                },
                {
                    value: 2,
                    text: {
                        en: 'Box B',
                        zh: '盒子 B',
                        ms: 'Kotak B',
                    },
                    isAnswer: false
                }
            ]
        }
    }
}