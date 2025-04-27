
let timY = 0
let timX = 0 
let timYT
let henry = [
    {map:[
    '888_',
    '   7',
    '    ',
    '`   ',
    '3```',
    '=222'
],
txm:4,
tym:1,
tea: false,
YT: 0,
yo:0
},{map:[
    '888_',
    '   7',
    '    ',
    '`   ',
    '3  `',
    '6  1',
    '6  4',
    '6  7',
    '6   ',
    '6   ',
    '6```',
    '=222'
],
txm:4,
tym:7,
tea: true,
YT: 1,
yo:0
},
{map:[
    '888_+888',
    '   79   ',
    '        ',
    '`     !`',
    '3  `` q1',
    '6  13 q4',
    '6  46 q4',
    '6  79 q4',
    '6     q4',
    '6     q4',
    '6`````z4',
    '=222222-'
],
txm:8,
tym:0,
tea: false,
YT: 0,
yo:0
},
{map:[
    '888888888888888',
    '               ',
    '               ',
    '```````````````',
    '222222222222222'
],
txm:15,
tym:0,
tea: false,
YT: 0,
yo:0
},
{map:[
    '+8888888888888_',
    '6` ? ` ? ` ? `7',
    '6` ? ` ? ` ? ` ',
    '6` ? ` ? ` ? ` ',
    '9` ? ` ? `byu` ',
    ' ` ? `byu`nhj`1',
    ' `byu`nhj` ~  4',
    ' `nhj` ~      4',
    '3! ~          4',
    '6q            4',
    '6z^^^^^^^^^^^^4',
    '=2222222222222-'

],
txm:15,
tym:-3,
tea:0,
YT:0,
yo:4
}]
/*
,
{map:[
    ''
],
txm:,
tym:,
tea:,
YT:
}
*/
function maker1() {
    let H = Math.ceil(Math.random() * henry.length) - 1
    tilesGroup = new Tiles(
        henry[H].map,
        (StandradRatio* timX),  (StandradRatio * (timY - henry[H].yo)), // offsets
        (StandradRatio),  (StandradRatio)
    );

    tilesGroup.scale = StandradRatio/16 
    timYT = timY + henry[H].YT
    timX+=henry[H].txm
    timY+=henry[H].tym
    if (henry[H].tea == true) {
        
        let T = Math.ceil(Math.random() * 10)
        if (T == 10) {
            treasure()
        } else {
            wall()
        }
    }
}








function treasure() {
tilesGroup = new Tiles(
    [
        '888_',
        '   4',
        '   4',
        '   4',
        '3  4',
        '=22-'
    ],
    (StandradRatio* timX),  (StandradRatio * timYT), // offsets
    (StandradRatio),  (StandradRatio)
);

tilesGroup.scale = StandradRatio/16 
}
function wall() {
tilesGroup = new Tiles(
    [
        '_',
        '4',
        '4',
        '4',
        '-'
    ],
    (StandradRatio* timX),  (StandradRatio * timYT), // offsets
    (StandradRatio),  (StandradRatio)
);

tilesGroup.scale = StandradRatio/16 
}