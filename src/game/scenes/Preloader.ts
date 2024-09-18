import RectButton from '@/lib/components/RectButton';
import { Scene } from 'phaser';
import AdventureCard from '../components/AdventureCard';
import CloseButton from '@/lib/components/CloseButton';
import HealthBar from '../components/HealthBar';
import PlayerAttackBar from '../components/PlayerAttackBar';
import ModalQuestion from '../modals/ModalQuestion';
import ProgressionBar from '../components/ProgressionBar';
import TravelTransition from '../components/TravelTransition';
import PlayerAvatar from '../components/Player/PlayerAvatar';
import { DeckRepo } from '@/lib/repos/DeckRepo';
import BasicButton from '@/lib/components/BasicButton';
import VocabCard from '../components/CardMaker/PanelSelectCard/VocabCard';

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
        // Load Lib Component
        RectButton.preload(this);
        BasicButton.preload(this);
        AdventureCard.preload(this);
        CloseButton.preload(this);
        PlayerAttackBar.preload(this);
        ModalQuestion.preload(this);
        ProgressionBar.preload(this);
        TravelTransition.preload(this);
        PlayerAvatar.preload(this);
        DeckRepo.preload(this);
        VocabCard.preload(this);
        
        // Load Game Component
        HealthBar.preload(this)

        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        const mainMenuFolder = '/adventure/mainMenu';
        this.load.image('mainMenuBg', mainMenuFolder+'/bg.png');

        this.load.image('next','/adventure/game/next.png');
        this.load.image('player','/adventure/game/player.png');
        this.load.image('panelWhite','/adventure/game/panelWhite.png');

        this.load.image('blue','/adventure/game/gem/blue.png');
        this.load.image('green','/adventure/game/gem/green.png');
        this.load.image('orange','/adventure/game/gem/orange.png');
        this.load.image('red','/adventure/game/gem/red.png');

        // Icons
        this.load.image('iconCross','/adventure/icons/cross.png');
        this.load.image('iconTick','/adventure/icons/tick.png');
        this.load.image('iconAudio','/adventure/icons/iconAudio.png');
        this.load.image('iconPause','/adventure/icons/iconPause.png');
        this.load.image('iconPlay','/adventure/icons/iconPlay.png');

        this.load.image('buttonCircleAction','/adventure/components/buttonCircle.png');

    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
        // this.scene.start('Game');
    }
}
