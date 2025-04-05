/*******************************************************/
//
// tutorial.js
//
//written by Aston Noble term 1 2025
//
/*******************************************************/

/*******************************************************/
// tutorial()
// This function is used to set up the tutorial level
/*******************************************************/

function tutorial() { 
    //variable setting
    level = 0

    //demo sprites
    left = new Sprite((canvasHeight/256) * 16 * 6,(canvasHeight/256) * 16 * 7,144,12,'n'); left.spriteSheet = keyboard; left.addAni({w:144, h:12, col:0, row:1}); left.scale = (canvasHeight/256)
    right = new Sprite((canvasHeight/256) * 16 * 6,(canvasHeight/256) * 16 * 6,144,12,'n'); right.spriteSheet = keyboard; right.addAni({w:144, h:12, col:0, row:2}); right.scale = (canvasHeight/256)
    atk = new Sprite((canvasHeight/256) * 16 * 36,(canvasHeight/256) * 16 * 7,144,12,'n'); atk.spriteSheet = keyboard; atk.addAni({w:144, h:12, col:0, row:6}); atk.scale = (canvasHeight/256)
    climbed = new Sprite((canvasHeight/256) * 16 * 55,(canvasHeight/256) * 16 * 8,144,12,'n'); climbed.spriteSheet = keyboard; climbed.addAni({w:144, h:12, col:0, row:0}); climbed.scale = (canvasHeight/256)
    jumps = new Sprite((canvasHeight/256) * 16 * 16,(canvasHeight/256) * 16 * 6,144,12,'n'); jumps.spriteSheet = keyboard; jumps.addAni({w:144, h:12, col:0, row:5}); jumps.scale = (canvasHeight/256)
    fall = new Sprite((canvasHeight/256) * 16 * 55,(canvasHeight/256) * 16 * 7,144,12,'n'); fall.spriteSheet = keyboard; fall.addAni({w:144, h:12, col:0, row:3}); fall.scale = (canvasHeight/256)

    //tile builder
    tilesGroup = new Tiles(
        [
            '6                                                             4',
            '6                                                             4',
            '6                                                             4',
            '6                                                           ! 4',
            '6                                                    1222223q 4',
            '6                                                    7888889a 4',
            '6                                                           q 4',
            '6                                                           q 4',
            '6                                                           q 4',
            '6                                                          `z`4',
            '6                                                     ``   122-',
            '6            ``                  ``                   13   4555',
            '6````````````13``````   `````````13```````````````````46^^^4555',
            '=222222222222-=222223^^^122222222-=2222222222222222222-=222-555',
            '55555555555555555555=222-55555555555555555555555555555555555555',
            '555555555555555555555555555555555555555555555555555555555555555'
        ],
        (16 * (canvasHeight/512)),  (16 * (canvasHeight/512)),
        (16 * (canvasHeight/256)),  (16 * (canvasHeight/256))
    );

    //level artifact
    chest = new Sprite(canvasHeight/16 * RELICPOINT[level*2],canvasHeight/16 * RELICPOINT[level*2+1],16,16,'n')
    chest.spriteSheet = tiles
    chest.addAnis({
        closed:{w:16, h:16, col:12, row:9},
        opened:{w:16, h:16, col:13, row:9}
    })
    chest.changeAni('closed')
    chest.scale = canvasHeight/256

    //universal setup
    gameuni()
    
    golem2 = new enemy(golemSheet, 5, 1, (canvasHeight/300), 40, 40, {
        idle: {row: 3 , frames: 8 , w:90, h:64},
        attack: {row: 0 , frames: 11 , w:90, h:64, frameDelay: 7},
        hurt: {row: 2 , frames: 4 , w:90, h:64, frameDelay: 14},
        death: {row: 1 , frames: 12 , w:90, h:64, frameDelay: 14},
        run: {row: 4 , frames: 10 , w:90, h:64}
    },'golem',24, 300,140)
}