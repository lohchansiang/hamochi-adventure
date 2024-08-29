import { GameObjects, Scene } from "phaser";

export default class BasicButton extends Phaser.GameObjects.Container{
    
    static preload( scene: Phaser.Scene ){
        scene.load.image('basicButtonMd','assets/adventure/components/basicButtonMd.png');
    }

    buttonBox: GameObjects.Sprite
    buttonText: GameObjects.Text
    isInitClick: boolean = false
    //
    size: string = 'sm'
    colorDefault: number = 0xE1AF3D
    colorPressed: number = 0xB48C30
    colorHover: number = 0xE4B750
    colorDisabled: number = 0xC0C0C0
    //
    isDisabled: boolean = false
    //
    onPressedCallback: Function

    constructor(scene: Scene, x:number = 0, y:number = 0, text:string = "", size:string = "sm") {
        //check if config contains a scene
        if (!scene) {
            console.log('missing scene');
            return;
        }

        super(scene, x, y, []);
        
        this.size = size;

        this.buttonBox = scene.add.sprite(0, 0, 'basicButtonMd');
        this.buttonBox.setDisplaySize(BasicButton.getWidth(size),BasicButton.getHeight(size));
        this.buttonBox.setTint(this.colorDefault);

        this.buttonText = scene.make.text({
            x: 0,
            y: 0,
            text: text,
            origin: {x: 0.5, y: 0.5},
            style: {
                fontSize: BasicButton.getTextSize(size),
                fontFamily: 'Arial',
                color: 'white',
                align: 'center',  // 'left'|'center'|'right'|'justify'
            },
        });

        // Add Button Sprite to Container
        this.add(this.buttonBox);
        this.add(this.buttonText);
        
        scene.add.existing(this);
        this.buttonBox.setInteractive();
        this.buttonBox.on('pointerdown',this.onDown,this);
        this.buttonBox.on('pointerup',this.onUp,this);
        this.buttonBox.on('pointerover',this.onHover,this);
        this.buttonBox.on('pointerout',this.onOut,this);
    }

    onDown(){
        if( this.isDisabled ) return;

        this.buttonBox.setTint(this.colorPressed);
        this.isInitClick = true;
    }

    onUp(){
        if( this.isDisabled ) return;

        this.buttonBox.setTint(this.colorDefault);

        if( this.isInitClick && this.onPressedCallback ){
            this.onPressedCallback()
        }

        this.isInitClick = false
    }

    onOut(){
        if( this.isDisabled ) return;

        this.buttonBox.setTint(this.colorDefault);
        this.isInitClick = false
    }

    onHover(){
        if( this.isDisabled ) return;

        this.buttonBox.setTint(this.colorHover);
    }

    setDisabled( isDisabled:boolean ){
        this.isDisabled = isDisabled;
        
        if( this.isDisabled ){
            this.buttonBox.setTint(this.colorDisabled);
            this.buttonBox.setAlpha(0.6);
        }else{
            this.onOut();
            this.buttonBox.setAlpha(1);
        }
    }

    static getWidth( size:string = 'sm' ):number{
        if( size == 'lg' ){
            return 450;
        }else if(size == 'md'){
            return 360
        }else{
            return 240;
        }
    }

    static getHeight( size:string = 'sm' ):number{
        if( size == 'lg' ){
            return 150;
        }else if(size == 'md'){
            return 120
        }else{
            return 80;
        }
    }

    static getTextSize( size:string = 'sm' ):string{
        if( size == 'lg' ){
            return '64px';
        }else if(size == 'md'){
            return '44px';
        }else{
            return '32px';
        }
    }
  }