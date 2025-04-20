import { PortraitEmojiKey } from "./CharacterRepo"
import { DialogBearyHi } from "./data/dialogs/DialogBearyHi"
import { DialogKatyHi } from "./data/dialogs/DialogKatyHi"
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
    }
   
    constructor ()
    {

    }

    static getDialogData( key:string ):DialogData | undefined{
        return this.dialogs[key];
    }
}