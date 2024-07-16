import GameLib from "@/lib/GameLib";
import { Game, GameObjects, Scene } from "phaser";
import PlayerAttackBar from "./PlayerAttackBar";

class Gem{
    gemColor: string
    gemSprite: GameObjects.Sprite
    isEmpty: boolean
}

export default class Match{

    scene: Phaser.Scene
    startX: number = 0
    startY: number = 0
    //
    fieldSize: number = 6
    fieldSizeX: number = 7
    fieldSizeY: number = 6
    gemSize: number = 128
    swapSpeed: number = 200
    fallSpeed: number = 100
    destroySpeed: number = 200
    gemColors: string[] = ['blue','green','orange','red']
    //
    canPick: boolean = true
    dragging: boolean = false
    //
    gameArray: any = []
    poolArray: any = []
    inputArray: any = []
    gemGroup: GameObjects.Group
    //
    selectedGem: Gem | null
    swappingGems: number
    removeMap: any
    //
    score: number = 0
    scoreText: GameObjects.Text
    //
    callbackScore: Function | null
    //
    isShow: boolean = true
    //
    targetX: number
    targetY: number

    constructor(scene: Scene, x: number, y: number){
        this.scene = scene
        this.startX = x - (this.fieldSizeX*this.gemSize /2) 
        this.startY = y - (this.fieldSizeY*this.gemSize /2) 

        // Display Score
        // this.scoreText = this.scene.add.text( GameLib.screenWidth/2, this.startY - 30, "Score: " + this.score, {fontSize:40,color:'black'} ).setOrigin(0.5)

        this.drawField();
        this.scene.input.on("pointerdown", this.gemSelect, this);
        this.scene.input.on("pointermove", this.startSwipe, this);
        this.scene.input.on("pointerup", this.stopSwipe, this);
    }

    drawField(){
        this.gameArray = [];
        this.poolArray = [];
        this.inputArray = [];
        this.gemGroup = this.scene.add.group();
        for(let i = 0; i < this.fieldSizeY; i ++){
            this.gameArray[i] = [];
            this.inputArray[i] = [];
            for(let j = 0; j < this.fieldSizeX; j ++){
                let color = this.randomColor()

                let x = this.startX + (this.gemSize * j + this.gemSize / 2)
                let y = this.startY + (this.gemSize * i + this.gemSize / 2)
                let gem = this.scene.add.sprite( x , y, color);

                this.gemGroup.add(gem);
                
                do{
                    let randomColor = this.randomColor();
                    gem.setTexture(randomColor);
                    this.gameArray[i][j] = {
                        gemColor: randomColor,
                        gemSprite: gem,
                        isEmpty: false
                    }
                } while(this.isMatch(i, j));
            }
        }
    }

    isMatch(row:number, col:number): boolean{
        return this.isHorizontalMatch(row, col) || this.isVerticalMatch(row, col);
    }

    isHorizontalMatch(row: number, col: number): boolean{
        return this.gemAt(row, col).gemColor == this.gemAt(row, col - 1).gemColor && this.gemAt(row, col).gemColor == this.gemAt(row, col - 2).gemColor;
    }

    isVerticalMatch(row: number, col: number): boolean{
            return this.gemAt(row, col).gemColor == this.gemAt(row - 1, col).gemColor && this.gemAt(row, col).gemColor == this.gemAt(row - 2, col).gemColor;
    }
    
    gemAt(row: number, col: number): any{
        if(row < 0 || row >= this.fieldSizeY || col < 0 || col >= this.fieldSizeX){
            return -1;
        }
        return this.gameArray[row][col];
    }

    gemSelect(pointer: Phaser.Input.Pointer){
        if(this.canPick){
            this.dragging = true;
            let row = Math.floor( (pointer.y - this.startY) / this.gemSize);
            let col = Math.floor( (pointer.x - this.startX) / this.gemSize);
            let pickedGem = this.gemAt(row, col)
            if(pickedGem != -1){
                if(this.selectedGem == null){
                    pickedGem.gemSprite.setScale(1.2);
                    pickedGem.gemSprite.setDepth(1);
                    this.selectedGem = pickedGem;
                }
                else{
                    if(this.areTheSame(pickedGem, this.selectedGem)){
                        this.selectedGem.gemSprite.setScale(1);
                        this.selectedGem = null;
                    }
                    else{
                        if(this.areNext(pickedGem, this.selectedGem)){
                            this.selectedGem.gemSprite.setScale(1);
                            this.swapGems(this.selectedGem, pickedGem, true);
                        }
                        else{
                            this.selectedGem.gemSprite.setScale(1);
                            pickedGem.gemSprite.setScale(1.2);
                            this.selectedGem = pickedGem;
                        }
                    }
                }
            }
        }
    }

    startSwipe(pointer: Phaser.Input.Pointer){
        if(this.dragging && this.selectedGem != null){
            let deltaX = pointer.downX - pointer.x;
            let deltaY = pointer.downY - pointer.y;
            let deltaRow = 0;
            let deltaCol = 0;
            if(deltaX > this.gemSize / 2 && Math.abs(deltaY) < this.gemSize / 4){
                deltaCol = -1;
            }
            if(deltaX < -this.gemSize / 2 && Math.abs(deltaY) < this.gemSize / 4){
                deltaCol = 1;
            }
            if(deltaY > this.gemSize / 2 && Math.abs(deltaX) < this.gemSize / 4){
                deltaRow = -1;
            }
            if(deltaY < -this.gemSize / 2 && Math.abs(deltaX) < this.gemSize / 4){
                deltaRow = 1;
            }
            if(deltaRow + deltaCol != 0){
                let pickedGem = this.gemAt(this.getGemRow(this.selectedGem) + deltaRow, this.getGemCol(this.selectedGem) + deltaCol);
                if(pickedGem != -1){
                    this.selectedGem.gemSprite.setScale(1);
                    this.swapGems(this.selectedGem, pickedGem, true);
                    this.dragging = false;
                }
            }
        }
    }

    stopSwipe(){
        this.dragging = false;
    }

    areTheSame(gem1: Gem, gem2: Gem){
        return this.getGemRow(gem1) == this.getGemRow(gem2) && this.getGemCol(gem1) == this.getGemCol(gem2);
    }

    getGemRow(gem: Gem){
        return Math.floor( (gem.gemSprite.y - this.startY) / this.gemSize);
    }

    getGemCol(gem: Gem){
        return Math.floor( (gem.gemSprite.x - this.startX) / this.gemSize);
    }

    areNext(gem1: Gem, gem2: Gem){
        return Math.abs(this.getGemRow(gem1) - this.getGemRow(gem2)) + Math.abs(this.getGemCol(gem1) - this.getGemCol(gem2)) == 1;
    }

    swapGems(gem1: Gem, gem2: Gem, swapBack: boolean){
        this.swappingGems = 2;
        this.canPick = false;
        let fromColor = gem1.gemColor;
        let fromSprite = gem1.gemSprite;
        let toColor = gem2.gemColor;
        let toSprite = gem2.gemSprite;
        let gem1Row = this.getGemRow(gem1);
        let gem1Col = this.getGemCol(gem1);
        let gem2Row = this.getGemRow(gem2);
        let gem2Col = this.getGemCol(gem2);
        this.gameArray[gem1Row][gem1Col].gemColor = toColor;
        this.gameArray[gem1Row][gem1Col].gemSprite = toSprite;
        this.gameArray[gem2Row][gem2Col].gemColor = fromColor;
        this.gameArray[gem2Row][gem2Col].gemSprite = fromSprite;
        this.tweenGem(gem1, gem2, swapBack);
        this.tweenGem(gem2, gem1, swapBack);
    }

    tweenGem(gem1: Gem, gem2: Gem, swapBack: boolean){
        let row = this.getGemRow(gem1);
        let col = this.getGemCol(gem1);
        this.scene.tweens.add({
            targets: this.gameArray[row][col].gemSprite,
            x: this.startX + (col * this.gemSize + this.gemSize / 2),
            y: this.startY + (row * this.gemSize + this.gemSize / 2),
            duration: this.swapSpeed,
            callbackScope: this,
            onComplete: function(){
                this.swappingGems --;
                if(this.swappingGems == 0){
                    if(!this.matchInBoard() && swapBack){
                        this.swapGems(gem1, gem2, false);
                    }
                    else{
                        if(this.matchInBoard()){
                            this.handleMatches();
                        }
                        else{
                            this.canPick = true;
                            this.selectedGem = null;
                        }
                    }
                }
            }
        });
    }

    matchInBoard(){
        for(let i = 0; i < this.fieldSizeY; i ++){
            for(let j = 0; j < this.fieldSizeX; j ++){
                if(this.isMatch(i, j)){
                    return true;
                }
            }
        }
        return false;
    }

    handleMatches(){
        this.removeMap = [];
        for(let i = 0; i < this.fieldSizeY; i ++){
            this.removeMap[i] = [];
            for(let j = 0; j < this.fieldSizeX; j ++){
                this.removeMap[i].push(0);
            }
        }
        this.markMatches('horizontal');
        this.markMatches('vertical');
        this.destroyGems();
    }

    markMatches(direction: string){
        let iMax = direction == 'horizontal'? this.fieldSizeY:this.fieldSizeX
        let jMax = direction == 'horizontal'? this.fieldSizeX:this.fieldSizeY
        for(let i = 0; i < iMax; i ++){
            let colorStreak = 1;
            let currentColor = -1;
            let startStreak = 0;
            let colorToWatch = 0;
            for(let j = 0; j < jMax; j ++){
                if(direction == 'horizontal'){
                    colorToWatch = this.gemAt(i, j).gemColor;
                }
                else{
                    colorToWatch = this.gemAt(j, i).gemColor;
                }
                if(colorToWatch == currentColor){
                    colorStreak ++;
                }
                if(colorToWatch != currentColor || j == jMax - 1){
                    if(colorStreak >= 3){
                        if(direction == 'horizontal'){
                            // console.log("HORIZONTAL :: Length = " + colorStreak + " :: Start = (" + i + "," + startStreak + ") :: Color = " + currentColor);
                        }
                        else{
                            // console.log("VERTICAL :: Length = " + colorStreak + " :: Start = (" + startStreak + "," + i + ") :: Color = " + currentColor);
                        }
                        for(let k = 0; k < colorStreak; k ++){
                            if(direction == 'horizontal'){
                                this.removeMap[i][startStreak + k] ++;
                            }
                            else{
                                this.removeMap[startStreak + k][i] ++;
                            }
                        }
                    }
                    startStreak = j;
                    colorStreak = 1;
                    currentColor = colorToWatch;
                }
            }
        }
    }

    destroyGems(){
        let destroyed = 0;
        for(let i = 0; i < this.fieldSizeY; i ++){
            for(let j = 0; j < this.fieldSizeX; j ++){
                if(this.removeMap[i][j] > 0){
                    destroyed ++;
                    this.scene.tweens.add({
                        targets: this.gameArray[i][j].gemSprite,
                        alpha: 0.5,
                        duration: this.destroySpeed,
                        callbackScope: this,
                        onComplete: function(){
                            destroyed --;
                            this.gameArray[i][j].gemSprite.visible = false;
                            this.poolArray.push(this.gameArray[i][j].gemSprite);
                            this.addScore(1, this.gameArray[i][j].gemSprite.x, this.gameArray[i][j].gemSprite.y )

                            if(destroyed == 0){
                                this.makeGemsFall();
                                this.replenishField();
                            }
                        }
                    });
                    this.gameArray[i][j].isEmpty = true;
                }
            }
        }
    }

    makeGemsFall(){
        for(let i = this.fieldSizeY - 2; i >= 0; i --){
            for(let j = 0; j < this.fieldSizeX; j ++){
                if(!this.gameArray[i][j].isEmpty){
                    let fallTiles = this.holesBelow(i, j);
                    if(fallTiles > 0){
                        this.scene.tweens.add({
                            targets: this.gameArray[i][j].gemSprite,
                            y: this.gameArray[i][j].gemSprite.y + fallTiles * this.gemSize,
                            duration: this.fallSpeed * fallTiles
                        });
                        this.gameArray[i + fallTiles][j] = {
                            gemSprite: this.gameArray[i][j].gemSprite,
                            gemColor: this.gameArray[i][j].gemColor,
                            isEmpty: false
                        }
                        this.gameArray[i][j].isEmpty = true;
                    }
                }
            }
        }
    }

    holesBelow(row: number, col: number){
        let result = 0;
        for(let i = row + 1; i < this.fieldSizeY; i ++){
            if(this.gameArray[i][col].isEmpty){
                result ++;
            }
        }
        return result;
    }

    replenishField(){
        let replenished = 0;
        for(let j = 0; j < this.fieldSizeX; j ++){
            let emptySpots = this.holesInCol(j);
            if(emptySpots > 0){
                for(let i = 0; i < emptySpots; i ++){
                    replenished ++;
                    let randomColor = this.randomColor()
                    this.gameArray[i][j].gemColor = randomColor;
                    this.gameArray[i][j].gemSprite = this.poolArray.pop()
                    this.gameArray[i][j].gemSprite.setTexture(randomColor);
                    this.gameArray[i][j].gemSprite.visible = this.isShow?true:false;
                    this.gameArray[i][j].gemSprite.x = this.startX + (this.gemSize * j + this.gemSize / 2);
                    this.gameArray[i][j].gemSprite.y = this.startY + (this.gemSize / 2 - (emptySpots - i) * this.gemSize);
                    this.gameArray[i][j].gemSprite.alpha = 0;
                    this.gameArray[i][j].isEmpty = false;
                    this.scene.tweens.add({
                        targets: this.gameArray[i][j].gemSprite,
                        y: this.startY + (this.gemSize * i + this.gemSize / 2),
                        alpha: 1,
                        duration: this.fallSpeed * emptySpots,
                        callbackScope: this,
                        onComplete: function(){
                            replenished --;
                            if(replenished == 0){
                                if(this.matchInBoard()){
                                    this.scene.time.addEvent({
                                        delay: 250,
                                        callback: this.handleMatches()
                                    });
                                }
                                else{
                                    this.canPick = true;
                                    this.selectedGem = null;
                                }
                            }
                        }
                    });
                }
            }
        }
    }

    holesInCol(col: number){
        var result = 0;
        for(let i = 0; i < this.fieldSizeY; i ++){
            if(this.gameArray[i][col].isEmpty){
                result ++;
            }
        }
        return result;
    }

    randomColor():string{
        return this.gemColors[Phaser.Math.Between(0, this.gemColors.length - 1)];
    }

    addScore(value:number, x: number, y: number){
        this.score += value

        if( this.scoreText)
            this.scoreText.setText("Score: " + this.score )

        if( this.isShow ){
            this.moveScoreToTarget(x,y,()=>{
                if( this.callbackScore ) 
                    this.callbackScore(value)
            })
        }
    }

    show(){
        this.gemGroup.setVisible(true)
        this.isShow = true
    }

    hide(){
        this.gemGroup.setVisible(false)
        this.isShow = false
    }

    setTarget(x:number,y:number){
        this.targetX = x
        this.targetY = y
    }

    moveScoreToTarget( fromX:number,fromY:number, callback: Function ){
        let score = this.scene.add.circle(fromX,fromY,20,0x00ff00).setDepth(100);
        this.scene.tweens.add({
            targets: score,
            x: this.targetX,
            y: this.targetY,
            duration: 300,
            callbackScope: this,
            onComplete: function(){
                score.destroy()
                if(callback) callback()
            }
        })
    }   
}