import RectButton from '@/lib/components/RectButton';
import { Scene } from 'phaser';
import CloseButton from '@/lib/components/CloseButton';
import BasicButton from '@/lib/components/BasicButton';
import UIMoveControl from '../components/UI/UIGame/UIMoveControl';
import { MapLayoutRepo } from '../repos/MapLayoutRepo';
import { MapObjectTextureRepo } from '../repos/MapObjectTextureRepo';
import UIMoveSlider from '../components/UI/UIGame/UIMoveSlider';
import DialogController from '../components/Dialog/DialogController';
import { MochiTextureRepo } from '../repos/MochiTextureRepo';
import { MochiMaskTextureRepo } from '../repos/MochiMaskTextureRepo';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        // this.add.image(512, 384, 'background');


        //  A simple progress bar. This is the outline of the bar.
        // this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        // const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        // this.load.on('progress', (progress: number) => {

        //     //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
        //     bar.width = 4 + (460 * progress);

        // });
    }

    preload ()
    {
        // Load For Adventures
        MapLayoutRepo.preload(this)
        MapObjectTextureRepo.preload(this)
        //
        MochiTextureRepo.preload(this)
        MochiMaskTextureRepo.preload(this)
        
        UIMoveSlider.preload(this);
        UIMoveControl.preload(this);
        DialogController.preload(this);
        
        // Load Lib Component
        RectButton.preload(this);
        BasicButton.preload(this);
        CloseButton.preload(this);
        //
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        const mainMenuFolder = '/adventure/mainMenu';
        this.load.image('mainMenuBg', mainMenuFolder+'/bg.png');

        this.load.image('next','/adventure/game/next.png');
        this.load.image('player','/adventure/game/player.png');
        this.load.image('panelWhite','/adventure/game/panelWhite.png');

        // Icons
        this.load.image('iconCross','/adventure/icons/cross.png');
        this.load.image('iconTick','/adventure/icons/tick.png');
        this.load.image('iconAudio','/adventure/icons/iconAudio.png');
        this.load.image('iconPause','/adventure/icons/iconPause.png');
        this.load.image('iconPlay','/adventure/icons/iconPlay.png');

        this.load.image('buttonCircleAction','/adventure/components/buttonCircle.png');
        //
        this.load.image('buttonAdd','/adventure/cardmaker/buttonAdd.png');
        this.load.image('buttonCardSelect','/adventure/cardmaker/buttonCardSelect.png');
        //
        this.load.image('vocabAudio','/adventure/decks/vocabAudio.png');
        this.load.image('vocabCardBase','/adventure/decks/vocabCardBase.png');
        this.load.image('vocabCardBaseBack','/adventure/decks/vocabCardBack.png');
        this.load.image('vocabCardCrack','/adventure/decks/vocabCardCrack.png');
        this.load.image('vocabCardWhite','/adventure/decks/vocabCardWhite.png');

        // Audio
        this.load.audio('forgeSuccess','/adventure/audio/forgeSuccess.mp3');
        this.load.audio('forgeFailed','/adventure/audio/forgeFailed.mp3');
        this.load.audio('lightClick','/adventure/audio/lightClick.mp3');
        this.load.audio('basicClose','/adventure/audio/basicClose.mp3');
        this.load.audio('forgeSelect','/adventure/audio/forgeSelect.mp3');
        this.load.audio('forgeStart','/adventure/audio/forgeStart.mp3');
    }

    create ()
    {
        // Prepare  Anims
        MapObjectTextureRepo.prepareAnims(this);

        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        // this.scene.start('MainMenu');
        this.scene.start('GameScene');
    }
}
