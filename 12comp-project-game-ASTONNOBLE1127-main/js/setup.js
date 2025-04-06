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
var golemsed = []

function setup() {
    canvasHeight = (16 * Math.floor(windowHeight / 16 - 1));
    cnv = new Canvas(canvasHeight, canvasHeight);
    world.gravity.y = 10;
    uni()
    startScreen()
    for (let i = 0; i < 10; i++) {
      golemsed[i] = new enemy(golemSheet, 5, 2, (canvasHeight/300), 40, 40, {
            idle: {row: 3 , frames: 8 , w:90, h:64},
            attack: {row: 0 , frames: 11 , w:90, h:64, frameDelay: 7},
            hurt: {row: 2 , frames: 4 , w:90, h:64, frameDelay: 14},
            death: {row: 1 , frames: 12 , w:90, h:64, frameDelay: 14},
            run: {row: 4 , frames: 10 , w:90, h:64}
        },'golem',-12, 300,140,1.5,1)
    }
    
    for (let i = 10; i < 20; i++) {
        golemsed[i] = new enemy(wolfSheet, 3, 1, (canvasHeight/530), 64, 32, {
            idle: {row: 0 , frames: 6, w:64, h:64},
            attack: {row: 1 , frames: 5, w:64, h:64},
            hurt: {row: 2 , frames: 4, w:64, h:64},
            death: {row: 3 , frames: 7, w:64, h:64, frameDelay: 14},
            run: {row: 1 , frames: 5, w:64, h:64, frameDelay: 9}
        },'golem',-16, 300,140,1,-1)
      }
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
