

// MoveState > Output from moveSlider or player input UI
export enum MoveState{
    LEFT,
    RIGHT,
    IDLE
}

// Avatar State > Avatar animation ['none','idle','walk','jump','midair','fall','hurt','faint','attack']
export enum AvatarState{
    NONE,
    IDLE,
    WALK,
    JUMP,
    MIDAIR,
    FALL,
    HURT,
    FAINT,
    ATTACK,
    PUSH
}

// Avatar Mask > Overwrite face expression ['none','smile','laugh','smileEye','laughEye','star','angry','mad','cry','nervous','shout','pain','dizzy']
export enum AvatarMask{
    NONE,
    SMILE,
    LAUGH,
    SMILEEYE,
    LAUGHEYE,
    STAR,
    ANGRY,
    MAD,
    CRY,
    NERVOUS,
    SHOUT,
    PAIN,
    DIZZY
}