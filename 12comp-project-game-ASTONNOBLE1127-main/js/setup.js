/******************************************************/
// 
// setup.js
// 
//runs setup() and draw() functions
//
//written by Aston Noble term 1 2025
//
/******************************************************/


/***********************************************************/
//setup()
/***********************************************************/

function setup() {
    canvasHeight = (16 * Math.floor(windowHeight / 16 - 1));
    cnv = new Canvas(canvasHeight, canvasHeight);
    //world.gravity.y = 10;
    uni()
    startScreen()
}

/***********************************************************/
//draw()
//runs nessaceray gamestates when needed
// only one gamesate is run at a time
// gamestates are 'start', 'levels', 'game', 'plane'
/***********************************************************/

function draw() {
    if (gameState == 'start') {
        startSensors()
    } else if (gameState == 'levels') {
        levelSensors()
    } else if (gameState == 'game') {
        gameRun()
    } else if (gameState == 'plane') {
        planeRun()
    } else if (gameState == 'tonk') {
        tonkRun()
    }
}
