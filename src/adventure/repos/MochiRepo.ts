
export class MochiData{
    key: string
    avatar: MochiAvatar
}

export class MochiAvatar{
    bodyBase: string
    bodyStroke: string
    eye: string
    eyeBlink: string
    hair: Array<string>
    mouth: string
    cheek: string
    shadow: string
}

type MochiList = Record<string, MochiData>;
export class MochiRepo
{
    static mochis: MochiList= {
        
    }

    constructor ()
    {
        
    }

    static getMochiData( key:string ):MochiData | undefined{
        return this.mochis[key];
    }
}