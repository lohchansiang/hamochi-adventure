import { CharBeary } from "./data/characters/CharBeary"
import { CharHamochi } from "./data/characters/CharHamochi"
import { CharKaty } from "./data/characters/CharKaty"
import { CharOwl } from "./data/characters/CharOwl"
import { CharRuby } from "./data/characters/CharRuby"

export class CharacterData{
    key: string
	name: string
    avatar: CharacterAvatar
	portraits:  Array<CharacterProtrait>
    defaultDialogKey: string | null
}

export class CharacterProtrait{
    key: PortraitEmojiKey
	textureKey: string
	texturePath: string
}

export enum PortraitEmojiKey{
    DEFAULT, // Neutral
    HAPPY,
    SAD,
}

export class CharacterAvatar{
    bodyBase: string
    bodyStroke: string
    bodyColor: number
    eye: string
    eyeBlink: string
    hair: Array<string>
    mouth: string
    cheek: string
    shadow: string
    hairColor?: number
}

type CharacterList = Record<string, CharacterData>;
export class CharacterRepo
{
    static characters: CharacterList= {
        'CharOwl': CharOwl,
        'CharHamochi': CharHamochi,
        'CharKaty': CharKaty,
        'CharBeary': CharBeary,
        'CharRuby': CharRuby,
    }

    constructor ()
    {
        
    }

    static getCharacterData( key:string ):CharacterData | undefined{
        return this.characters[key];
    }

    static portraitKey(charKey:string, emojiKey: PortraitEmojiKey ){
        return charKey+'_'+emojiKey;
    }
}