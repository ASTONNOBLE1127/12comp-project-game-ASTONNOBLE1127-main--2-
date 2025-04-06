/**********************************************************/
//
//  enemys.js
//
/**********************************************************/

class players {
    constructor(spriteImg,HP,DMG,Scale,w,h,anis,offsetX,offsetY,del) {
        this.name = new player.Sprite(-1000000,100)
        this.name.spriteSheet = spriteImg
        this.name.health = HP
        this.name.dmg = DMG
        this.name.w = w
        this.name.h = h
        this.name.addAnis(anis)
        this.name.changeAni('idle')
        this.name.anis.offset.y = offsetY
        this.name.anis.offset.x = offsetX
        this.name.del = del
        this.name.scale = Scale
        this.name.collider = 'n'
        this.name.friction = 0
    }
} 

/******************************************************/
//PAtk()
//makes the Player attack
//input(player)
//output(N/A)
/******************************************************/

async function PAtk(player) {
    stabbing = true
    cooldown = true
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
