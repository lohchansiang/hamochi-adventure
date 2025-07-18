export class DialogData{
    key: string
    audioAssetPath: string
    lines: Array<DialogLine>
    endKey: string
}

export class DialogLine{
    sequenceKey: string
    message: string
    nextSequenceKey?: string | null // If none, run next
    delayCallbacks?: Array<{ delay: number; key: string }>// Array of timed callbacks> To call back on delay after play
}