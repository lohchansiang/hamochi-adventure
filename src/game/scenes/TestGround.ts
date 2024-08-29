import { EventBus } from '../EventBus';
import { Scene, GameObjects } from 'phaser';
import GameLib from '@/lib/GameLib';
import PlayerAvatar from '../components/Player/PlayerAvatar';
import CloseButton from '@/lib/components/CloseButton';
import DebugButton from '@/lib/components/DebugButton';

export class TestGround extends Scene
{
    playerAvatar: PlayerAvatar
    //
    // Debug
    testButtonIdle: DebugButton
    testButtonWalk: DebugButton
    testButtonJump: DebugButton
    testButtonMidair: DebugButton
    testButtonFall: DebugButton
    testButtonPain: DebugButton
    testButtonFaint: DebugButton
    testButtonAttack: DebugButton
    //
    testButtonMaskSmile: DebugButton
    testButtonMaskLaugh: DebugButton
    testButtonMaskSmileEye: DebugButton
    testButtonMaskLaughEye: DebugButton
    testButtonMaskStar: DebugButton
    testButtonMaskAngry: DebugButton
    testButtonMaskMad: DebugButton
    testButtonMaskCry: DebugButton
    testButtonMaskNervous: DebugButton
    testButtonMaskShout: DebugButton
    testButtonMaskPain: DebugButton
    testButtonMaskDizzy: DebugButton
    //
    testButtonStop: DebugButton
    debugText: GameObjects.Text
    
    constructor ()
    {
        super('TestGround');
    }

    create ()
    {
        const bg = this.add.rectangle(GameLib.screenWidth/2, GameLib.screenHeight/2, GameLib.screenWidth, GameLib.screenHeight, 0xeeeeee);

        this.playerAvatar = new PlayerAvatar(this,GameLib.screenWidth/2, GameLib.screenHeight/2)

        const backButton = new CloseButton(this,GameLib.screenWidth - 100, 100).setScale(0.5);
        backButton.onPressedCallback = ()=>{
            this.scene.start('MainMenu');
        }

        // Debug
        this.renderDebugs();

        EventBus.emit('current-scene-ready', this);
    }

    renderDebugs(){
        this.debugText = this.make.text({
            x: GameLib.screenWidth/2,
            y: GameLib.screenHeight -220,
            text: 'Debug Text',
            origin: {x: 0.5, y: 0.5},
            style: {
                fontSize: '30px',
                fontFamily: 'Arial',
                color: '#00000',
                align: 'center',  // 'left'|'center'|'right'|'justify'
            },
        })

        const col1 = GameLib.screenWidth/2 - 400;
        const col2 = GameLib.screenWidth/2 - 150;
        const col3 = GameLib.screenWidth/2 + 150;
        const col4 = GameLib.screenWidth/2 + 400;

        const rowStart =  GameLib.screenHeight/2 + 100;
        const gap =  100;

        this.testButtonIdle = new DebugButton(this, col1, rowStart+(gap*0), 'Idle').setScale(0.5);
        this.testButtonIdle.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('idle');
        }

        this.testButtonWalk = new DebugButton(this, col1, rowStart+(gap*1), 'Walk').setScale(0.5);
        this.testButtonWalk.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('walk');
        }

        this.testButtonJump = new DebugButton(this, col1, rowStart+(gap*2), 'Jump').setScale(0.5);
        this.testButtonJump.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('jump');
        }

        this.testButtonMidair = new DebugButton(this, col1, rowStart+(gap*3), 'Midair').setScale(0.5);
        this.testButtonMidair.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('midair');
        }

        this.testButtonFall = new DebugButton(this, col1, rowStart+(gap*4), 'Fall').setScale(0.5);
        this.testButtonFall.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('fall');
        }

        this.testButtonPain = new DebugButton(this, col2, rowStart+(gap*0), 'Hurt').setScale(0.5);
        this.testButtonPain.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('hurt');
        }

        this.testButtonFaint = new DebugButton(this, col2, rowStart+(gap*1), 'Faint').setScale(0.5);
        this.testButtonFaint.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('faint');
        }

        this.testButtonAttack = new DebugButton(this, col2, rowStart+(gap*2), 'Attack').setScale(0.5);
        this.testButtonAttack.onPressedCallback = ()=>{
            this.playerAvatar.setAvatarState('attack');
        }

        // Mask
        this.testButtonMaskSmile = new DebugButton(this, col3, rowStart+(gap*0), 'Smile').setScale(0.5);
        this.testButtonMaskSmile.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('smile');
        }

        this.testButtonMaskLaugh = new DebugButton(this, col3, rowStart+(gap*1), 'Laugh').setScale(0.5);
        this.testButtonMaskLaugh.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('laugh');
        }

        this.testButtonMaskSmileEye = new DebugButton(this, col3, rowStart+(gap*2), 'Smile Eye').setScale(0.5);
        this.testButtonMaskSmileEye.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('smileEye');
        }

        this.testButtonMaskLaughEye = new DebugButton(this, col3, rowStart+(gap*3), 'Laugh Eye').setScale(0.5);
        this.testButtonMaskLaughEye.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('laughEye');
        }

        this.testButtonMaskStar = new DebugButton(this, col3, rowStart+(gap*4), 'Star').setScale(0.5);
        this.testButtonMaskStar.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('star');
        }

        this.testButtonMaskAngry = new DebugButton(this, col3, rowStart+(gap*5), 'Angry').setScale(0.5);
        this.testButtonMaskAngry.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('angry');
        }
        
        this.testButtonMaskMad = new DebugButton(this, col4, rowStart+(gap*0), 'Mad').setScale(0.5);
        this.testButtonMaskMad.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('mad');
        }

        this.testButtonMaskCry = new DebugButton(this, col4, rowStart+(gap*1), 'Cry').setScale(0.5);
        this.testButtonMaskCry.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('cry');
        }

        this.testButtonMaskNervous = new DebugButton(this, col4, rowStart+(gap*2), 'Nervous').setScale(0.5);
        this.testButtonMaskNervous.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('nervous');
        }

        this.testButtonMaskShout = new DebugButton(this, col4, rowStart+(gap*3), 'Shout').setScale(0.5);
        this.testButtonMaskShout.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('shout');
        }

        this.testButtonMaskPain = new DebugButton(this, col4, rowStart+(gap*4), 'Pain').setScale(0.5);
        this.testButtonMaskPain.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('pain');
        }

        this.testButtonMaskDizzy = new DebugButton(this, col4, rowStart+(gap*5), 'Dizzy').setScale(0.5);
        this.testButtonMaskDizzy.onPressedCallback = ()=>{
            this.playerAvatar.setEmojiMask('dizzy');
        }

        this.testButtonStop = new DebugButton(this, GameLib.screenWidth/2, GameLib.screenHeight -150,'Stop Anim').setScale(0.5);
        this.testButtonStop.onPressedCallback = ()=>{
            this.playerAvatar.stopCurrentState();
        }
    }

    update(time: number, delta: number): void {
        if( this.debugText ){
            this.debugText.setText( this.playerAvatar.currentAvatarState);
        }
    }
}
