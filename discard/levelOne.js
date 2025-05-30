/*******************************************************/
//
// levelOne.js
//
//written by Aston Noble term 1 2025
//
/*******************************************************/

/*******************************************************/
// level1()
/*******************************************************/

function level1() { 
    //variable setting
    level = 1

    //tile builder
    tilesGroup = new Tiles(
        [
            '+888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888_',
            '6                                                                                                            4',
            '6                                                                                                            4',
            '6                                                                                                       1223a4',
            '6                                                                      ````````````````````````````````!4  6a4',
            '6                                                                     !12222222222222222222222222222223q4  6a4',
            '6                                                                     q78888888888888888888888888888889q4  6a4',
            '6                                                                     q                          ?     q4  6a4',
            '6                                                                     q                         `?`    q4  6a4',
            '6                                                                     q                         byu    q4  6a4',
            '6                                                              *((((()q                        `nhj` ``z4  6a4',
            '6                                                                     q                 !`````   ~   122-  6a4',
            '6                                                   *((((((()         q                 q12223!      7_    6a4',
            '6                                                                     z                 q45556q       4    6a4',
            '6                                    *(((((((((((()                                     q45556q       4    6a4',
            '6!```````````````````````````````````                                                   q45556q       4    6a4',
            '6q12222222222222222222222222222222223                                                   q45556z^^^^  ^4    6a4',
            '6q7888888888_+88888888888888888888889                                                   q4555=22223  1-    6a4',
            '6q          46                                                                          q4        6  4     6a4',
            '6q          46                                                                          q4        6  4     6a4',
            '6q          46                                                                          q4        6  4     6a4',
            '6z``````````46                                                                          q4        6  4     6a4',
            '=22222222222-6                                                                          q4        6  4     6a4',
            '+8888888888889                                                                          q4        6  4     6a4',
            '6  ?   ?   ?                                                                            q4        6  4     6a4',
            '6  ?```?```?                                                                            q4        6  4     6a4',
            '6 byu`byu`byu                                                                           q4        6  4     6a4',
            '6 nhj`nhj`nhj                                                            !``````````````z4        6  4     6a4',
            '6  ~   ~   ~                                                             q122222222222222-        6  4     6a4',
            '6                                                                        q4                       6  4     6a4',
            '6^^^^^^^^^^^^^                                                           q4                       6  4     6a4',
            '=2222222222223                           7888888888889                   q4                       6  4     6a4',
            '+8888888888889                             ?   ?   ?                     q4                       6  4     6a4',
            '6                                         `?```?```?                     q4                 +888889  4     6a4',
            '6                                        `byu`byu`byu                    q78888_            6        4     6a4',
            '6                                  ``!``  nhj`nhj`nhj  *((((()           q     4            6        4     6a4',
            '6                                  13a13   ~   ~   ~           ```       q     4            6  222222-     6a4',
            '6                              ``` 46q                         123```````z`````4            6  7888888888889a4',
            '6                          ``` 123 46a                         45=2222222222222-            6               a4',
            '6`````````````````|4```````123^^^^^46z^^^^^^^^^^^^^^^^^^^^^^^^^4                            6```````````````z4',
            '=22222222222222222222222222-5=22222-=22222222222222222222222222-                            =2222222222222222-',
        ],
        (16 * (canvasHeight/512)),  (16 * (canvasHeight/512)),
        (16 * (canvasHeight/256)),  (16 * (canvasHeight/256))
    );


    //universal setup
    gameuni()

    //level artifact 
    goldKey = new Sprite(canvasHeight/16 * RELICPOINT[level*2],canvasHeight/16 * RELICPOINT[level*2+1], 16, 16,'n');
    goldKey.spriteSheet = tiles
    goldKey.addAni({w:16, h:16, col:11, row:9})
    goldKey.scale = canvasHeight/256
    
}