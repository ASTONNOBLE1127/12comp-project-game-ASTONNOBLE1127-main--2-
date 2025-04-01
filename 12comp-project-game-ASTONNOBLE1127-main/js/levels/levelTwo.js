/*******************************************************/
//
//levelTwo.js
//
//written by Aston Noble term 1 2025
//
/*******************************************************/

/*******************************************************/
// level2()
// This function is the level 2 setup
/*******************************************************/

function level2() { 
    //variable setting
    level = 2

    //tile builder
    tilesGroup = new Tiles(
        [
            '+8888888888888888888888888888888888888888888_',
            '6',
            '6',
            '6```!```````````!```````          `',
            '=223q1223    /23q122222|      ``  2',
            '   6q       /- 6q4+88_ 6  ``  13  4 ``',
            '   6z      /-  6q46  789  13      4 13',
            '   =2222222-   6q46               4   q',
            '  +8888888888889q46               4   q',
            '  6             q46          !    4   q',
            '  6             q46    `   12q3   4   q',
            '  6`````````````q46    2 `  4q6   4   q',
            '  =222222223  122-6      2  4q6   4   q',
            '       +8889  78889       `!4q6   4   q',
            '       6                  2q4q6   4   q',
            '       6                   q4q6   4   q',
            '       6```````````        q4q6   4   q',
            '+88888_=22222222223        1-q6   4   q',
            '6     788888888_  6       `7_q6   4   q',
            '6              4  6       2 4q6   4   q',
            '6!```````````  4  6     ` 8 4q6   4   q',
            '6q12222222223  4  6     2   4q6   4   q',
            '6q4         6  7889     8`  4q6   4   q',
            '6q4         6            2`!4q6   4   q',
            '6q4    +888_6             2q4q6   4   q',
            '6q4    6 ? 46              q4q6   4   q',
            '6q4    6byu46              q4q6   4   q',
            '6q4    6nhj46              14q6   4   q',
            '6q4    6 ~ 46            ` 74q6   4   q',
            '6q788889   46           `2  4q6   4   q',
            '6q         46           2^^^4q6   4   q',
            '6q         46         `  122-q9       q',
            '6q         46         2  4   q',
            '6z`````````46``````````^^4   q````````13',
            '=2222222222-=2222222222222222222222222-=2222-'
        ],
        (16 * (canvasHeight/512)),  (16 * (canvasHeight/512)),
        (16 * (canvasHeight/256)),  (16 * (canvasHeight/256))
    );


    //universal setup
    gameuni()

    //level artifact 
    heartStone = new Sprite(canvasHeight/16 * RELICPOINT[level*2],canvasHeight/16 * RELICPOINT[level*2+1], 11, 12,'n');
    heartStone.image = heartRelic
    heartStone.scale = canvasHeight/256
}