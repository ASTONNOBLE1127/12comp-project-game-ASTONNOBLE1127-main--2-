/**********************************************************/
//
//  enemys.js
//
/**********************************************************/


class enemy {
    constructor(spriteImg,HP,DMG,Scale,w,h,anis,Type,offsetY,trigdist,atkdist,del) {
        this.name = new enemys.Sprite(800,432)
        this.name.spriteSheet = spriteImg
        this.name.maxHealth = HP
        this.name.health = HP
        this.name.dmg = DMG
        this.name.w = w
        this.name.h = h
        this.name.addAnis(anis)
        this.name.del = del
        golem.push(this.name)
        this.name.changeAni('idle')
        this.name.offset.y = offsetY
        this.name.scale = Scale
        this.name.type = Type
    }
}
async function ERun(enemy) {
    if (player.x > enemy.x) {
        direction = 1; 
    } else if (player.x < enemy.x) { 
        direction = -1;    
    }
    enemy.scale.x = (canvasHeight/300) * direction
    enemy.vel.x = (direction * 2)
    await enemy.changeAni('run')
    enemy.changeAni('idle')
}
async function EAtk(enemy) {
    Atking = true
    Anim = true
    await enemy.changeAni('attack')
    enemy.changeAni('idle')
    if (enemy.overlapping(player) && enemy.health > 0) {
        health-= enemy.dmg
    }
    updateHealth()
    Anim = false
    await delay(enemy.del * 100)
    Atking = false
}
async function EHurt(enemy) {
    console.log(enemy.health)
    enemy.health-= playerDamage
    if (enemy.health > 0 && Anim == false) {
        await enemy.changeAni('hurt'); 
        enemy.changeAni('idle');
        console.log('hit')
    }
    if (enemy.health <= 0 ) {
        EDeath(enemy);
    }
}
async function EDeath(enemy) {
    await enemy.changeAni('hurt')
    await enemy.changeAni('death')
    enemy.x = 1000000
    enemyCount--
    health++
    updateHealth()
}


function canAtk(player, enemy) {
    if (stabbing == false) {
        if (mouse.presses()) {
            EHurt(enemy)
            console.log('hit')
            PAtk()
        }
    }
    if (Atking == false) {
        EAtk(enemy)
    }
}
async function PAtk() {
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
class players {
    constructor(spriteImg,HP,DMG,Scale,w,h,anis,offsetX,offsetY) {
        this.name = new Sprite(100,100)
        this.name.spriteSheet = spriteImg
        this.name.health = HP
        this.name.dmg = DMG
        this.name.w = w
        this.name.h = h
        this.name.addAnis(anis)
        this.name.changeAni('idle')
        this.name.offset.y = offsetY
        this.name.offset.x = offsetX
        this.name.scale = Scale
        this.name.debug = true
    }
} 