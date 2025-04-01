/******************************************************/
// 
// gameUni.js
// 
// This file contains the universal functions and variables that are used in the game
//
//written by Aston Noble term 1 2025
//
/******************************************************/

console.log("%c gameUni.js", "color: blue; background-color: white;");

/******************************************************/
//preload() 
// loads the images
/******************************************************/

function preload() {
    playerSheet = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/questKid.webp');
    wolfSheet = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/enemy/MassacreSpriteSheet.png');
    tiles = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/DungeonTileSet.png')
    heart = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/icons/heart.png')
    keyboard = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/uninteractables/keybinds.png')
    endScreen = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/uninteractables/end2.png')
    menu = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/buttons/menu.png')
    restart = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/buttons/restart.png')
    letter = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/uninteractables/lettersheet2.png')
    starImg = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/icons/star3.png')
    startImage = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/buttons/start.png')
    tutorialImage = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/buttons/tutorial.png')
    ttasr = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/buttons/ttasr.png')
    golemSheet = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/enemy/golem.png')
    lock = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/icons/lock.png')
    levelImg = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/icons/levels.png')
    planeImg = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/plane/ships_packed.png')
    planeTiles = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/plane/tiles_packed.png')
    heartRelic = loadImage('/12comp-project-game-ASTONNOBLE1127-main/images/relics/heartRelic.png')
}


/******************************************************/
//variables & constants
/******************************************************/

//setup 
var gameState = 'start'
var canvasHeight //this cant be a constant as it would destroy everything
var level
var bgC = 'blue'
const DOORPOINT = [55,3,10.5,21,2.5,3]
const PLAYERPOINT = [3,12,3.5,26,9.5,27]
const RELICPOINT = [58,3.5,100,25,4,10.5]

//player
var jumping = false
var stabbing = false
var spiked = false
var cooldown = false
let hops = true
var xVel = 0
var health
let playerDamage = 1
let hearts = []

//enemies
var wolfAtking = false
var golemAtking = false
var enemyCount = 0
var wolf = []
var golem = []
var golemHit = []
var direction = 0
const WOLFSPAWN = ['045009','005040008040010009016009080001','']
const GOLEMSPAWN = ['','070035005009075001','']
var wolfCount
var golemCount
let golAni = false
let wolfAni = false

//scoring
var artifactFound
var win
var star = []
var scoreTotal = [0,0,0,0,0,0,0,0,0,0]
const TEXTARRAY = ['you lose', 'you win']

//tracking
var I
var l
var L
var textTrack
var heartCount = 0
var textScale



/******************************************************/
//uni()
//universal setup
//defines tiles and groups
//called by setup()
/******************************************************/

function uni() {
    //groups
    bricks = new Group()
    spikes = new Group()
    climb = new Group()

    //tiles
    hopBlock = new Group(); hopBlock.tile = '`'; hopBlock.h = 10;
    hopBlock.w = 10; hopBlock.collider = 'n'; 
    const BRICK1 = new tiled(1, 's',{w:16, h:16, col:1, row:1})
    const BRICK2 = new tiled(2, 's',{w:16, h:16, col:2, row:1});
    const BRICK3 = new tiled(3, 's',{w:16, h:16, col:3, row:1})
    const BRICK4 = new tiled(4, 's',{w:16, h:16, col:1, row:2});
    const BRICK5 = new tiled(5, 's',{w:16, h:16, col:2, row:2})
    const BRICK6 = new tiled(6, 's',{w:16, h:16, col:3, row:2});
    const BRICK7 = new tiled(7, 's',{w:16, h:16, col:1, row:3})
    const BRICK8 = new tiled(8, 's',{w:16, h:16, col:2, row:3});
    const BRICK9 = new tiled(9, 's',{w:16, h:16, col:3, row:3})
    const STAIR1 = new tiled('/', 's',{w:16, h:16, col:5, row:1})
    const STAIR2 = new tiled('|', 's',{w:16, h:16, col:6, row:1})
    const BRICK10 = new tiled('-', 's',{w:16, h:16, col:5, row:2})
    const BRICK11 = new tiled('=', 's',{w:16, h:16, col:6, row:2})
    const BRICK12 = new tiled('_', 's',{w:16, h:16, col:5, row:3})
    const BRICK13 = new tiled('+', 's',{w:16, h:16, col:6, row:3})
    const spike1 = new spikey('^', 'n',{w:16, h:16, col:1, row:14})
    const LADDER0 = new climbs('!', 'n',{w:16, h:16, col:5, row:8})
    const LADDER1 = new climbs('q', 'n',{w:16, h:16, col:5, row:9})
    const LADDER2 = new climbs('a', 'n',{w:16, h:16, col:5, row:10})
    const LADDER3 = new climbs('z', 'n',{w:16, h:16, col:5, row:11})
    const CAGE3 = new tiled('b', 'n',{w:16, h:16, col:7, row:12})
    const CAGE6 = new tiled('n', 'n',{w:16, h:16, col:7, row:13})
    const CAGE1 = new tiled('y', 'n',{w:16, h:16, col:8, row:12})
    const CAGE2 = new tiled('h', 'n',{w:16, h:16, col:8, row:13})
    const CAGE4 = new tiled('u', 'n',{w:16, h:16, col:9, row:12})
    const CAGE5 = new tiled('j', 'n',{w:16, h:16, col:9, row:13})
    const CHAIN = new tiled('?', 'n',{w:16, h:16, col:2, row:12})
    const INVS = new tiled('~', 's',{w:16, h:16, col:0, row:12})
    const RAIL1 = new climbs('*', 'n',{w:16, h:16, col:1, row:9})
    const RAIL2 = new climbs('(', 'n',{w:16, h:16, col:2, row:9})
    const RAIL3 = new climbs(')', 's',{w:16, h:16, col:3, row:9})
}


/******************************************************/
//gameuni()
//universal level setup
/******************************************************/

function gameuni() {
    //setting variables
    artifactFound = false
    win = false
    health = 10
    bgC = '#181425'
    wolfCount = WOLFSPAWN[level].length/6
    golemCount = GOLEMSPAWN[level].length/6
    enemyCount = golemCount + wolfCount


    //wolves
    wolfMaker()

    //golems
    golemMaker()

    //all sprites fixing
    spriteFixing()

    //hitbox for player
    hitboxMaker()

    //healthbar for player
    healthbarMaker()

    //player
    playerMaker()

    //door
    doorMaker()

    //endscreen
    endscreenMaker()

    //endscreen buttons
    endscreenButtonsMaker()

    //stars
    starMaker()
}

/******************************************************/
//
//functions
//
/******************************************************/



/******************************************************/
//enemy spawning
//
/******************************************************/

/******************************************************/
//golemMaker()
//spawns the golems
/******************************************************/

function golemMaker() {
    for (let i = 0; i < (golemCount); i++) {
        let track = GOLEMSPAWN[level].slice(i * 6, i * 6 + 3)
        track = Number(track)
        let track2 = GOLEMSPAWN[level].slice(i * 6 + 3, i * 6 + 6)
        track2 = Number(track2)
        console.log(track,track2)
        golem[i] = new Sprite(((canvasHeight/256) * 16 * track),(canvasHeight/256) * 16 * track2,90,64,'n')
        golemHit[i]= new Sprite(((canvasHeight/256) * 16 * track),(canvasHeight/256) * 16 * track2,64,64,'d')
        golem[i].spriteSheet = golemSheet
        golem[i].addAnis({
            idle: {row: 3 , frames: 8},
            attack: {row: 0 , frames: 11, frameDelay: 7},
            hurt: {row: 2 , frames: 4, frameDelay: 14},
            death: {row: 1 , frames: 12, frameDelay: 14},
            run: {row: 4 , frames: 10}
        })
        golem[i].changeAni('idle')
        golem[i].scale = ((canvasHeight/300))
        golemHit[i].scale = ((canvasHeight/300))
        golem[i].health = 5
    }
}

/******************************************************/
//wolfMaker()
//spawns the wolves
/******************************************************/

function wolfMaker() {
    for (let i = 0; i < (wolfCount); i++) {
        let track = WOLFSPAWN[level].slice(i * 6, i * 6 + 3)
        track = Number(track)
        let track2 = WOLFSPAWN[level].slice(i * 6 + 3, i * 6 + 6)
        track2 = Number(track2)
        console.log(track,track2)
        wolf[i] = new Sprite(((canvasHeight/256) * 16 * track),(canvasHeight/256) * 16 * track2,64,64,'d')
        wolf[i].spriteSheet = wolfSheet
        wolf[i].addAnis({
            idle: {row: 0 , frames: 6},
            attack: {row: 1 , frames: 5},
            hurt: {row: 2 , frames: 4},
            death: {row: 3 , frames: 7, frameDelay: 14},
            run: {row: 1 , frames: 5, frameDelay: 9}
        })
        wolf[i].changeAni('idle')
        wolf[i].scale = ((canvasHeight/530))
        wolf[i].drag = 3
        wolf[i].friction = 0
        wolf[i].vel.y = 7
        wolf[i].health = 3
    }
}

/******************************************************/
//spriteFixing()
//makes the sprites ready for the next level
/******************************************************/

function spriteFixing() {
    tilesGroup.scale = (canvasHeight/256) 
    allSprites.rotationLock = true
    allSprites.pixelPerfect = true;
    allSprites.autoCull = false
    allSprites.opacity = 1
    hopBlock.opacity = 0
}

/******************************************************/
//hitboxMaker()
//makes the hitbox for the player
/******************************************************/

function hitboxMaker() {    
    hitbox = new Sprite((canvasHeight/16)* PLAYERPOINT[level*2],(canvasHeight/16)* PLAYERPOINT[level*2+1],28,50,'d')
    hitbox.scale = (canvasHeight/600)
    hitbox.friction = 0
    hitbox.opacity = 0
}

/******************************************************/
//healthbarMaker()
//makes the healthbar for the player
/******************************************************/

function healthbarMaker() {
    heartCount = health/2
    for (let i = 0; i < heartCount; i++) {
        hearts[i] = new Sprite(7,7,7,7,'n')
        hearts[i].image = (heart)
        hearts[i].scale = (canvasHeight/194)
    }
}

/******************************************************/
//playerMaker()
//makes the player
/******************************************************/

function playerMaker() {
    playerSheet.resize =(1240,3072)
    player = new Sprite(40,40,32,32,'n');
    player.spriteSheet = playerSheet;
    player.anis.offset.x = 2
    player.addAnis({
        jump: { row: 1, frames: 6, frameDelay: 10 },
        death: { row: 14, frames: 7, frameDelay: 10 },
        walk: { row: 0, frames: 8 },
        idle: { row: 1, frames: 1 },
        dead: {w:32, h:32, col:6, row:14 },
        stab: { row: 12, frames: 10 }, 
        slash: { row: 11, frames: 10 },
        swing: { row: 10, frames: 10 },
        climb: { row: 4, frames: 8, frameDelay: 10},
        clim: {w:32, h:32, col:1, row:4 },
    });
    player.scale = (canvasHeight/256);
    player.changeAni('idle')
}

/******************************************************/
//doorMaker()
//makes the door
/******************************************************/

function doorMaker() {
    door = new Sprite((canvasHeight/16)* DOORPOINT[level*2],(canvasHeight/16)* DOORPOINT[level*2+1],16,32,'n')
    door.spriteSheet = tiles
    door.addAnis({
        closed:{w:16, h:32, col:13, row:5},
        open:{w:16, h:32, col:12, row:5}
    })
    door.changeAni('closed')
    door.scale = ((canvasHeight/256))
}

/******************************************************/
//endscreenMaker()
//makes the endscreen
/******************************************************/

function endscreenMaker() {
    ends = new Sprite(0,0,78,96,'n')
    ends.image = (endScreen)
    ends.scale = (canvasHeight/128)
    ends.opacity = 0
}

/******************************************************/
//endscreenButtonsMaker()
//makes the buttons for the endscreen
/******************************************************/

function endscreenButtonsMaker() {
    menuButton = new Sprite(camera.x + (canvasHeight/5),10000000000,15,15,'k')
    menuButton.image = menu
    menuButton.scale = (canvasHeight/128)
    menuButton.opacity = 0 
    
    restartButton = new Sprite(camera.x - (canvasHeight/5),1000000000,15,15,'k')
    restartButton.image = restart
    restartButton.scale = (canvasHeight/128)
    restartButton.opacity = 0
}

/******************************************************/
//starMaker()
//makes the stars
/******************************************************/

function starMaker() {
    for (let i = 0; i < 3; i++) {
        star[i] = new Sprite(1000000000000,1,15,14,'n');
        star[i].opacity = 0; 
        star[i].scale = canvasHeight/120; 
        star[i].image = starImg;
    }
}



/******************************************************/
//gameloop functions
//
/******************************************************/

/******************************************************/
//stab()
//makes the player stab
/******************************************************/

async function stab() {
    stabbing = true
    cooldown = true
    for (let i = 0; i < wolfCount; i++) {
        if (player.overlapping(wolf[i])) {
            I = i; wolfHurt(); break;
        }
    }
    for (let i = 0; i < golemCount; i++) {
        if (player.overlapping(golem[i])) {
            I = i; golemHurt(); break;
        }
    }
    if (level == 0) {
        if (player.overlapping(chest)) {
            chest.changeAni('opened'); 
            artifactFound = true
        }
    }
    await player.changeAni('stab')
    player.changeAni('idle')
    cooldown = false
    await delay(500)
    stabbing = false

}

/******************************************************/
//updateHealth()
//updates the healthbar
/******************************************************/

function updateHealth() {
    for (let i = heartCount-1; i > -1; i--) {
        hearts[i].opacity = health/2 - i
        if (hearts[i].opacity < 0) {hearts[i].opacity = 0}
    }
}

/******************************************************/
//movement
/******************************************************/

/******************************************************/
//walkWest()
//makes the player walk west
/******************************************************/

async function walkWest() {
    player.scale.x = -(canvasHeight/256);
    if (cooldown == false) {
        await player.changeAni('walk')
        player.changeAni('idle')
    }
}

/******************************************************/
//walkEast()
//makes the player walk east
/******************************************************/

async function walkEast() {
    player.scale.x = (canvasHeight/256);
    if (cooldown == false) {
        await player.changeAni('walk')
        player.changeAni('idle')
    }
}

/******************************************************/
//jump()
//makes the player jump
/******************************************************/

async function jump() {
    jumping = true
    await player.changeAni('jump')
    player.changeAni('idle')
    await delay(2600)
    jumping = false
}

/******************************************************/
//climbing()
//makes the player climb
/******************************************************/

async function climbing() {
    await player.changeAni('climb')
    player.changeAni('clim')
}

/******************************************************/
//endScreen
/******************************************************/

/******************************************************/
//death()
//runs on player death
/******************************************************/

async function death() {
    xVel = 0
    hitbox.vel.x = 0
    hitbox.vel.y = 0
    hitbox.collider = 'n'
    await player.changeAni('death')
    player.changeAni('dead')
    textTrack = TEXTARRAY[0]
    finish()
}

/******************************************************/
//won()
//runs on player win
/******************************************************/

 function won() {
    xVel = 0
    hitbox.vel.x = 0
    hitbox.vel.y = 0
    hitbox.collider = 'n'
    textTrack = TEXTARRAY[1]
    finish()
 }

/******************************************************/
//finish()
//runs on level finish
/******************************************************/

 async function finish() {
    await delay(2000)
    hitbox.vel.x = 0; 
    ends.x = camera.x
    ends.y = camera.y
    allSprites.opacity = 0.5
    hopBlock.opacity = 0
    ends.opacity = 1
    textScale = (canvasHeight/100)
    textMaker()
    menuButton.x = camera.x + (canvasHeight/5)
    menuButton.y = camera.y + (canvasHeight/4)
    restartButton.x = camera.x - (canvasHeight/5)
    restartButton.y = camera.y + (canvasHeight/4)
    menuButton.opacity = 1
    restartButton.opacity = 1
    let stars = 0
    if (win == true) {
        stars++
        star[0].opacity = 1
        star[0].x = camera.x
        star[0].y = camera.y - canvasHeight/3.5
            if (enemyCount == 0 || artifactFound == true) {
                stars++
                star[1].x = camera.x - canvasHeight/7.5
                star[1].y = camera.y - canvasHeight/4.5
                star[1].opacity = 1
            }
            if (enemyCount == 0 && artifactFound == true) {
                stars++
                star[2].x = camera.x + canvasHeight/7.5
                star[2].y = camera.y - canvasHeight/4.5
                star[2].opacity = 1
            }
    }
    if (stars > scoreTotal[level]) {
        scoreTotal[level] = stars
    }
}

/******************************************************/
//enemys
/******************************************************/

/******************************************************/
//wolfDeath()
//makes the wolf die
/******************************************************/

async function wolfDeath() {
    await wolf[I].changeAni('hurt')
    await wolf[I].changeAni('death')
    wolf[I].x = 1000000
    enemyCount--
    health++
    updateHealth() 
}

/******************************************************/
//wolfAtk()
//makes the wolf attack
/******************************************************/

async function wolfAtk() {
    wolfAtking = true
    wolfAni = true
    await wolf[l].changeAni('attack')
    await wolf[l].changeAni('idle')
    if (wolf[l].overlapping(player) && wolf[l].health > 0) {
        health--;
    }
    updateHealth()
    wolfAni = false
    await delay(1000)
    wolfAtking = false
}

/******************************************************/
//wolfHurt()
//run on wolf hurt
/******************************************************/

async function wolfHurt() {
    wolf[I].health-= playerDamage
    if (wolf[I].health > 0 && wolfAni == false) {
        await wolf[I].changeAni('hurt'); 
        wolf[I].changeAni('idle');
    }
    if (wolf[I].health <= 0 ) {
        wolfDeath();
    }
}

/******************************************************/
//wolfRun()
//makes the wolf run
/******************************************************/

async function wolfRun() {
    wolf[L].vel.x = (direction * 2)
    await wolf[L].changeAni('run')
    wolf[L].changeAni('idle')
}

/******************************************************/
//golemDeath()
//makes the golem die
/******************************************************/

async function golemDeath() {
    await golem[I].changeAni('hurt')
    await golem[I].changeAni('death')
    golemHit[I].x = 1000000
    enemyCount--
    health++
    updateHealth()
}

/******************************************************/
//golemAtk()
//makes the golem attack
/******************************************************/

async function golemAtk() {
    golemAtking = true
    golAni = true
    await golem[l].changeAni('attack')
    await golem[l].changeAni('idle')
    if (golem[l].overlapping(player) && golem[l].health > 0) {
        health--
        health--
    }
    updateHealth()
    golAni = false
    await delay(1500)
    golemAtking = false
}

/******************************************************/
//golemHurt()
//run on golem hurt
/******************************************************/

async function golemHurt() {
    golem[I].health-= playerDamage
    if (golem[I].health > 0 && golAni == false) {
        await golem[I].changeAni('hurt'); 
        golem[I].changeAni('idle');
    }
    if (golem[I].health <= 0 ) {
        golemDeath();
    }
}

/******************************************************/
//golemRun()
//makes the golem run
/******************************************************/

async function golemRun() {
    golemHit[L].vel.x = (direction * 2)
    await golem[L].changeAni('run')
    golem[L].changeAni('idle')
}

/******************************************************/
//healthbar()
//updates the healthbar position
/******************************************************/

function healthbar() {
    for (let i = 0; i < health/2; i++) {
        hearts[i].x = camera.x - (canvasHeight/2.5) + (i * 8 * (canvasHeight/194))
        hearts[i].y = camera.y - (canvasHeight/2.5)
    }
}

/******************************************************/
//textMaker()
//makes the text
//uses a placeholder from TEXTARRAY
/******************************************************/

function textMaker() {
	let back = 0
	let front = 1
	let pos = 0
	for (let i = 0; i < (textTrack.length); i++) {
		let track = textTrack.slice(back, front)
		track = track.charCodeAt(0) - 96
        track = Number(track)
		pos += 2
		back += 1
		front += 1
        tex = new Sprite(pos * (canvasHeight/32) - ((textTrack.length+1)/2 * 
            (canvasHeight/16)) +  camera.x,camera.y - (canvasHeight/256) * 16, 7, 7, 'n');
        tex.spriteSheet = letter
        tex.addAni({w:9, h:7, row:0, col:track })
        tex.scale = textScale
    }
}
