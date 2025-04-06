/***********************************************************/
//
//start.js
//
//start screen
//
//written by Aston Noble term 1 2025
//
/***********************************************************/



/***********************************************************/
//startScreen
/***********************************************************/

function startScreen() {
    //start buttons
    startButton = new deletes.Sprite((canvasHeight)/2,(canvasHeight)/3,(canvasHeight)/6,(canvasHeight)/15,'k')
    tutorialButton = new deletes.Sprite((canvasHeight)/2,(canvasHeight)/2.4,(canvasHeight)/6,(canvasHeight)/15,'k')
    settingsButton = new deletes.Sprite((canvasHeight)/2,(canvasHeight)/2,(canvasHeight)/6,(canvasHeight)/15,'k')
    
    //start button images
    startButton.image = startImage
    tutorialButton.image = tutorialImage
    settingsButton.image = ttasr

    //start button scales
    ttasr.resize(canvasHeight/6,canvasHeight/15) 
    startImage.resize(canvasHeight/6,canvasHeight/15)
    tutorialImage.resize(canvasHeight/6,canvasHeight/15.7)

    //cleaning
    background(bgC)
    camera.x = canvasHeight/2
    camera.y = canvasHeight/2
    allSprites.pixelPerfect = true;
    noSmooth()
    player2 = new players(playerSheet,10,1,(canvasHeight/256),16,20,{
        jump: {w:32, h:32, row: 1, frames: 6, frameDelay: 10 },
        death: {w:32, h:32, row: 14, frames: 7, frameDelay: 10 },
        walk: {w:32, h:32, row: 0, frames: 8 },
        idle: { row: 1, frames: 1,w:32,h:32 },
        dead: {w:32, h:32, col:6, row:14 },
        stab: {w:32, h:32, row: 12, frames: 10 }, 
        slash: {w:32, h:32, row: 11, frames: 10 },
        swing: {w:32, h:32, row: 10, frames: 10 },
        climb: {w:32, h:32, row: 4, frames: 8, frameDelay: 10},
        clim: {w:32, h:32, col:1, row:4 }
    },2,-5,0.5)
}

/***********************************************************/
//startSensors
//start screen's sensors
/***********************************************************/

function startSensors() {
    if (startButton.mouse.presses()) {
        deletes.removeAll(); 
        levelScreen()
        noSmooth()
        gameState = "levels"
    } else if (tutorialButton.mouse.presses()) {
        deletes.removeAll(); 
        tutorial()
        gameState = "game"
    } else if (settingsButton.mouse.presses()) {
        deletes.removeAll(); 
        planes()
        gameState = "plane"
    }
}