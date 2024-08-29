import GameLib from "@/lib/GameLib"
import { Deck } from "@/lib/repos/DeckRepo"
import { GameObjects, Scene, Types } from "phaser"

export default class TabButtonDeck{

    static preload( scene: Phaser.Scene ){
        
    }

    scene: Scene
    container: GameObjects.Container
    rect: GameObjects.Rectangle
    icon: GameObjects.Sprite
    text: GameObjects.Text
    //
    isDisabled: boolean = false
    onPressCallback: Function | null
    //
    deck: Deck
    status: string

    constructor( scene:Scene, x:number, y:number, size:number , deck:Deck ){
        this.scene = scene;
        this.deck = deck;

        this.container = scene.add.container(x,y);

        this.rect = this.scene.add.rectangle(
                                        0,
                                        0,
                                        size,
                                        size,
                                        0xfca600
                                    );

        this.icon = this.scene.add.sprite(
                                        0,
                                        -20,
                                        deck.textureKey
                                    );
        this.icon.setDisplaySize(size-40,size-40);
        
        this.text = this.scene.add.text(0,40,deck.name,{
            fontSize:30,
            fontFamily: 'Arial',
            color: 'black',
            align: 'center',
        }).setOrigin(0.5,0.5);
                                    
        this.rect.setInteractive();
        this.rect.on('pointerdown',()=>{
            if( !this.isDisabled && this.onPressCallback ){
                this.onPressCallback();
            }
        },this);

        this.container.add(this.rect);
        this.container.add(this.icon);
        this.container.add(this.text);

        this.setStatus('default');
    }

    setStatus( status: string){
        this.status = status;

        switch (status) {
            case 'default':
                this.rect.fillColor = GameLib.colorPanelButtonDark;
                this.icon.setTint(GameLib.colorPanelButtonTextDark);
                this.text.setColor( Phaser.Display.Color.IntegerToColor(GameLib.colorPanelButtonTextDark).rgba );
                this.container.setScale(1);
                break;
            case 'selected':
                this.rect.fillColor = GameLib.colorPanelButtonLight;
                this.icon.setTint(GameLib.colorPanelButtonTextLight);
                this.text.setColor( Phaser.Display.Color.IntegerToColor(GameLib.colorPanelButtonTextLight).rgba );
                this.container.setScale(1.1);
                break;
            case 'disabled':
                this.rect.fillColor = 0xCCCCCC;
                this.icon.setTint(0xEEEEEE);
                this.text.setColor('#EEEEEE');
                this.container.setScale(1);
                break;
            default:
                break;
        }
    }
    
}