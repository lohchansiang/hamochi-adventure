// Map Position > Calculated current map position, effecting ViewPosition and Player avatar position
export enum MapPosition{
    START,
    MIDDLE,
    END
}

// ViewPosition > Simulated Camera position, shift position of the world container based on player movement
export enum ViewPosition{
    Q1,
    Q2,
    Q3
}

export enum MoveMode{
    NONE,
    MAP,
    AVATAR,
    BLOCKED
}
