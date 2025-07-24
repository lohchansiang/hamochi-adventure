import GameLib from "@/lib/GameLib";
import { GameObjects, Scene } from "phaser"

export default class AppleGroup{
    static preload( scene: Scene ){
        scene.load.setPath('assets');

        scene.load.image('apple','/learn/apple.png');
    }

    private scene: Scene
    private total: number
    private container: GameObjects.Container
    private apples: Array<GameObjects.Sprite>
    private appleTexts: Array<GameObjects.Text>
    private originY: number
    
    constructor(scene:Scene, x:number,y:number, total:number ){
        this.scene = scene
        this.originY = y
        this.total = total
        this.appleTexts = []
        this.apples = []

        this.container = this.scene.add.container(x,y);
        
        this.renderApples(this.total);
    }
    
    renderApples( total: number ){
        this.total = total;

        this.appleTexts.forEach((text)=>{
            text.destroy();
        })
        this.apples.forEach((apple)=>{
            apple.destroy();
        })
        //
        this.apples = [];
        this.appleTexts = [];
        //
        for (let index = 0; index < this.total; index++) {
            let position: Phaser.Math.Vector2 = this.getPosition( index+1, this.total );
            let apple: GameObjects.Sprite = this.scene.add.sprite(position.x, position.y, 'apple');
            apple.setDisplaySize(120,120);
            this.apples.push(apple);
            let text: GameObjects.Text = this.scene.add.text(
                                                    position.x, 
                                                    position.y + 20, 
                                                    (index+1).toString(),
                                                    {
                                                        fontFamily: 'Arial Black', fontSize: 50, color: '##000',
                                                        // stroke: '#000000', strokeThickness: 8,
                                                        align: 'center'
                                                    }
                                                ).setOrigin(0.5);
            text.setVisible(false);
            this.appleTexts.push(text);
            
            this.container.add(apple);
            this.container.add(text);
        }
    }

    reset(){
        this.appleTexts.forEach((text)=>{
            text.setVisible(false);
        })
    }

    // Handle 1 to 10 only 
    private getPosition( current:number, total:number ):Phaser.Math.Vector2{
        let position: Phaser.Math.Vector2 = new Phaser.Math.Vector2(0, 0);

        let verticalGap: number = 130;

        switch (total) {
            case 1:
                //
                break;
            case 2:
                if( current == 1 ) position = new Phaser.Math.Vector2(-80, 0);
                if( current == 2 ) position = new Phaser.Math.Vector2(80, 0);
                break;
            case 3:
                if( current == 1 ) position = new Phaser.Math.Vector2( 0, -verticalGap);
                if( current == 2 ) position = new Phaser.Math.Vector2( -80, 0);
                if( current == 3 ) position = new Phaser.Math.Vector2( 80, 0);
                break;
            case 4:
                if( current == 1 ) position = new Phaser.Math.Vector2( -80, -verticalGap);
                if( current == 2 ) position = new Phaser.Math.Vector2( 80, -verticalGap);
                if( current == 3 ) position = new Phaser.Math.Vector2( -80, 0);
                if( current == 4 ) position = new Phaser.Math.Vector2 (80, 0);
                break;
            case 5:
                if( current == 1 ) position = new Phaser.Math.Vector2( -80, -verticalGap);
                if( current == 2 ) position = new Phaser.Math.Vector2( 80, -verticalGap);
                if( current == 3 ) position = new Phaser.Math.Vector2( -140, 0);
                if( current == 4 ) position = new Phaser.Math.Vector2( 0, 0);
                if( current == 5 ) position = new Phaser.Math.Vector2( 140, 0);
                break;
            case 6:
                if( current == 1 ) position = new Phaser.Math.Vector2( -140, -verticalGap);
                if( current == 2 ) position = new Phaser.Math.Vector2( 0, -verticalGap);
                if( current == 3 ) position = new Phaser.Math.Vector2( 140, -verticalGap);
                if( current == 4 ) position = new Phaser.Math.Vector2( -140, 0);
                if( current == 5 ) position = new Phaser.Math.Vector2( 0, 0);
                if( current == 6 ) position = new Phaser.Math.Vector2( 140, 0);
                break;
            case 7:
                if( current == 1 ) position = new Phaser.Math.Vector2( -80, -verticalGap*2);
                if( current == 2 ) position = new Phaser.Math.Vector2( 80, -verticalGap*2);
                if( current == 3 ) position = new Phaser.Math.Vector2( -80, -verticalGap);
                if( current == 4 ) position = new Phaser.Math.Vector2( 80, -verticalGap);
                if( current == 5 ) position = new Phaser.Math.Vector2( -140, 0);
                if( current == 6 ) position = new Phaser.Math.Vector2( 0, 0);
                if( current == 7 ) position = new Phaser.Math.Vector2( 140, 0);
                break;
            case 8:
                if( current == 1 ) position = new Phaser.Math.Vector2( -80, -verticalGap*2);
                if( current == 2 ) position = new Phaser.Math.Vector2( 80, -verticalGap*2);
                if( current == 3 ) position = new Phaser.Math.Vector2( -140, -verticalGap);
                if( current == 4 ) position = new Phaser.Math.Vector2( 0, -verticalGap);
                if( current == 5 ) position = new Phaser.Math.Vector2( 140, -verticalGap);
                if( current == 6 ) position = new Phaser.Math.Vector2( -140, 0);
                if( current == 7 ) position = new Phaser.Math.Vector2( 0, 0);
                if( current == 8 ) position = new Phaser.Math.Vector2( 140, 0);
                break;
            case 9:
                if( current == 1 ) position = new Phaser.Math.Vector2( -140, -verticalGap*2);
                if( current == 2 ) position = new Phaser.Math.Vector2( 0, -verticalGap*2);
                if( current == 3 ) position = new Phaser.Math.Vector2( 140, -verticalGap*2);
                if( current == 4 ) position = new Phaser.Math.Vector2( -140, -verticalGap);
                if( current == 5 ) position = new Phaser.Math.Vector2( 0, -verticalGap);
                if( current == 6 ) position = new Phaser.Math.Vector2( 140, -verticalGap);
                if( current == 7 ) position = new Phaser.Math.Vector2( -140, 0);
                if( current == 8 ) position = new Phaser.Math.Vector2( 0, 0);
                if( current == 9 ) position = new Phaser.Math.Vector2( 140, 0);
                break;
            case 10:
                if( current == 1 ) position = new Phaser.Math.Vector2( 0, -verticalGap*3);
                if( current == 2 ) position = new Phaser.Math.Vector2( -140, -verticalGap*2);
                if( current == 3 ) position = new Phaser.Math.Vector2( 0, -verticalGap*2);
                if( current == 4 ) position = new Phaser.Math.Vector2( 140, -verticalGap*2);
                if( current == 5 ) position = new Phaser.Math.Vector2( -140, -verticalGap);
                if( current == 6 ) position = new Phaser.Math.Vector2( 0, -verticalGap);
                if( current == 7 ) position = new Phaser.Math.Vector2( 140, -verticalGap);
                if( current == 8 ) position = new Phaser.Math.Vector2( -140, 0);
                if( current == 9 ) position = new Phaser.Math.Vector2( 0, 0);
                if( current == 10 ) position = new Phaser.Math.Vector2( 140, 0);
                break;
            default:
                break;
        }

        return position;
    }

    getContainer():GameObjects.Container{
      return this.container;  
    }

    showHint(count:number){
        if( count <= this.total ){
            this.appleTexts[count-1].setVisible(true);
        }
    }

    showHints(){
        this.appleTexts.forEach((text)=>{
            text.setVisible(true);
        })
    }

    hide(){
        this.container.setVisible(false);
    }

    show(){
        this.container.setVisible(true);
    }

    showByAnim( offset: number ){
        this.container.setScale(0);
        this.container.y += offset;
        this.container.setVisible(true);

        this.scene.tweens.add({
            targets: this.container,
            y: this.originY,
            scale: 1,
            duration: 500, 
            ease: 'Cubic',
        })
    }
}