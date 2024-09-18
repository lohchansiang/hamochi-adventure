export class Vocab{
    key: string
    name: string
    imagePath: string | null
    textureKey: string 
    audio: string | null
    wrongAnswers: string[]
}

export class Deck{
    key: string
    name: string
    imagePath: string | null
    textureKey: string
    vocabs: Vocab[]
}

export class DeckRepo
{
    static decks: Deck[] = [
        {
            key: 'fruits',
            name: 'Fruits',
            imagePath: 'deckFruits.png',
            textureKey: 'd_fruits',
            vocabs: [
                {
                    key: 'apple',
                    name: 'apple',
                    imagePath: 'fruits/apple.png',
                    textureKey: 'v_fruits_apple',
                    audio: 'fruits/audios/apple.mp3',
                    wrongAnswers: []
                },
                {
                    key: 'orange',
                    name: 'orange',
                    imagePath: 'fruits/orange.png',
                    textureKey: 'v_fruits_orange',
                    audio: 'fruits/audios/orange.mp3',
                    wrongAnswers: []
                },
                {
                    key: 'banana',
                    name: 'banana',
                    imagePath: 'fruits/banana.png',
                    textureKey: 'v_fruits_banana',
                    audio: 'fruits/audios/banana.mp3',
                    wrongAnswers: []
                },
                {
                    key: 'strawberry',
                    name: 'strawberry',
                    imagePath: 'fruits/strawberry.png',
                    textureKey: 'v_fruits_strawberry',
                    audio: 'fruits/audios/strawberry.mp3',
                    wrongAnswers: []
                },
                {
                    key: 'watermelon',
                    name: 'watermelon',
                    imagePath: 'fruits/watermelon.png',
                    textureKey: 'v_fruits_watermelon',
                    audio: 'fruits/audios/watermelon.mp3',
                    wrongAnswers: []
                },
                {
                    key: 'pear',
                    name: 'pear',
                    imagePath: 'fruits/pear.png',
                    textureKey: 'v_fruits_pear',
                    audio: 'fruits/audios/pear.mp3',
                    wrongAnswers: []
                },
                {
                    key: 'kiwi',
                    name: 'kiwi',
                    imagePath: 'fruits/kiwi.png',
                    textureKey: 'v_fruits_kiwi',
                    audio: 'fruits/audios/kiwi.mp3',
                    wrongAnswers: []
                },
                {
                    key: 'durian',
                    name: 'durian',
                    imagePath: 'fruits/durian.png',
                    textureKey: 'v_fruits_durian',
                    audio: 'fruits/audios/durian.mp3',
                    wrongAnswers: []
                },
            ]
        },
        {
            key: 'animals',
            name: 'Animals',
            imagePath: 'deckAnimals.png',
            textureKey: 'd_animals',
            vocabs: []
        },
    ]

    static preload( scene: Phaser.Scene ){
        // 
        this.decks.forEach(( deck )=>{
            scene.load.image(deck.textureKey,'/assets/adventure/decks/' + deck.imagePath);

            deck.vocabs.forEach( ( vocab )=>{
                scene.load.image(vocab.textureKey,'/assets/adventure/decks/' + vocab.imagePath);
                scene.load.audio(vocab.textureKey,'/assets/adventure/decks/' + vocab.audio);
            });
        });
    }

    constructor ()
    {
        
    }

    static getDecks():Deck[]{
        return this.decks;
    }

    static getDeck( key:string ):Deck | undefined{
        return this.decks.find((deck)=> {return deck.key == key})
    }

    static getVocab( deckKey:string, vocabKey:string ):Vocab | undefined{
        const deck:Deck | undefined = this.getDeck( deckKey );
        if( deck != undefined ){
            return deck.vocabs.find((vocab)=> {return vocab.key == vocabKey})
        }

        return undefined;
    }
}