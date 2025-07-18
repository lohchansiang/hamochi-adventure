import { PortraitEmojiKey } from "./CharacterRepo"
import { DialogBearyHi } from "./data/dialogs/DialogBearyHi"
import { DialogFight } from "./data/dialogs/DialogFight"
import { DialogKatyHi } from "./data/dialogs/DialogKatyHi"
import { DialogRubyHi } from "./data/dialogs/DialogRubyHi"
import { DialogWelcome } from "./data/dialogs/DialogWelcome"

export class DialogData{
    key: string
    lines: Array<DialogLine>
}

export class DialogLine{
    sequenceKey: string
    characterKey: string
    message: string
    emojiKey?: PortraitEmojiKey
    nextSequenceKey?: string // If none, run next
}

type DialogList = Record<string, DialogData>;
export class DialogRepo
{
    static dialogs: DialogList= {
        'DialogWelcome': DialogWelcome,
        'DialogKatyHi': DialogKatyHi,
        'DialogBearyHi': DialogBearyHi,
        'DialogRubyHi': DialogRubyHi,
        'DialogFight': DialogFight,
    }
   
    constructor ()
    {

    }

    static getDialogData( key:string ):DialogData | undefined{
        return this.dialogs[key];
    }
}