/**********************************************************/
//
// level.js
//
// This file contains the code for the level select screen
//
//written by Aston Noble term 1 2025
//
/**********************************************************/

/**********************************************************/
// LevelScreen()
//
// This function creates the level select screen
/**********************************************************/
var golem2
function levelScreen() {
    background('blue')
    golem2 = new enemy(golemSheet, 5, 1, (canvasHeight/300), 40, 40, {
        idle: {row: 3 , frames: 8 , w:90, h:64},
        attack: {row: 0 , frames: 11 , w:90, h:64, frameDelay: 7},
        hurt: {row: 2 , frames: 4 , w:90, h:64, frameDelay: 14},
        death: {row: 1 , frames: 12 , w:90, h:64, frameDelay: 14},
        run: {row: 4 , frames: 10 , w:90, h:64}
    },'golem',24, 300,140)
    lvl1 = new Sprite(canvasHeight * (5/100),canvasHeight * (95/100), 16,'k')
    lvl1.spriteSheet = levelImg
    lvl1.addAni({w:13, h:13, col:0, row:0})
    lvl1.scale = canvasHeight/200

    
    lvl2 = new Sprite(canvasHeight * (10/100),canvasHeight * (85/100), 16,'k')
    lvl2.spriteSheet = levelImg
    lvl2.addAni({w:13, h:13, col:0, row:1})
    lvl2.scale = canvasHeight/200
    scoreDisplay = new Sprite(canvasHeight/16, canvasHeight/16, 15,14, 'k')
    scoreDisplay.image = starImg
    let scoreCompile = 0
    for (let i = 0; i < scoreTotal.length; i++) {
        scoreCompile += scoreTotal[i]
    }
    scoreDisplay.text =  scoreCompile
    scoreDisplay.scale = canvasHeight/256
}

/**********************************************************/
// levelSensors()
//button interaction for level select screen
/**********************************************************/

function levelSensors() {
    if(lvl1.mouse.presses()) {
        allSprites.remove()
        level1()
        gameState = 'game'
    } else if(lvl2.mouse.presses()) {
        allSprites.remove()
        level2()
        gameState = 'game'
    }
    if (kb.presses('e')) {
        golem2.setPos(100, 100)
    }
    if (kb.pressing('a')) {
        golem2.Run()
    }
}