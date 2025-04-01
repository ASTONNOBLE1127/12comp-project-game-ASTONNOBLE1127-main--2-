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
    startButton = new Sprite((canvasHeight)/2,(canvasHeight)/3,(canvasHeight)/6,(canvasHeight)/15,'k')
    tutorialButton = new Sprite((canvasHeight)/2,(canvasHeight)/2.4,(canvasHeight)/6,(canvasHeight)/15,'k')
    settingsButton = new Sprite((canvasHeight)/2,(canvasHeight)/2,(canvasHeight)/6,(canvasHeight)/15,'k')
    
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
}

/***********************************************************/
//startSensors
//start screen's sensors
/***********************************************************/

function startSensors() {
    if (startButton.mouse.presses()) {
        allSprites.remove()
        levelScreen()
        noSmooth()
        gameState = "levels"
    } else if (tutorialButton.mouse.presses()) {
        allSprites.remove()
        tutorial()
        gameState = "game"
    } else if (settingsButton.mouse.presses()) {
        allSprites.remove()
        planes()
        gameState = "plane"
    }
}