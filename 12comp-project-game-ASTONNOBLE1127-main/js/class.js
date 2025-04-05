/**********************************************************/
//
//  Class.js
//
/**********************************************************/

class enemy {
    constructor(spriteImg,HP,DMG,Scale,w,h,anis,Type,offsetY,trigdist,atkdist) {
        this.name = new enemys.Sprite(50,50)
        this.name.spriteSheet = spriteImg
        this.name.hp = HP
        this.name.dmg = DMG
        this.name.w = w
        this.name.h = h
        this.name.addAnis(anis)
        golem.push(this.name)
        this.name.changeAni('idle')
        this.name.offset.y = offsetY
        this.name.scale = Scale
        this.name.type = Type
        this.name.debug = true
    }
    setPos(x,y) {
        this.name.x = x
        this.name.y = y
    }
    Run() {
        ERun(this.name)
    }
    Atk() {
        EAtk(this.name)
    }
    Hurt() {
        EHurt(this.name)
    }
}
async function ERun(enemy) {
    enemy.vel.x = (direction * 2)
    await enemy.changeAni('run')
    enemy.changeAni('idle')
}
async function EAtk(enemy) {
    Atking = true
    Ani = true
    await enemy.changeAni('attack')
    await enemy.changeAni('idle')
    if (enemy.overlapping(player) && enemy.health > 0) {
        health--
        health--
    }
    updateHealth()
    Ani = false
    await delay(1500)
    Atking = false
}
async function EHurt(enemy) {
    enemy.health-= playerDamage
    if (enemy.health > 0 && Ani == false) {
        await enemy.changeAni('hurt'); 
        enemy.changeAni('idle');
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

class climbs {
    constructor(tile, colider, animation) {
        this.name = new climb.Group()
        this.name.tile = tile;
        this.name.spriteSheet = tiles
        this.name.collider = colider
        this.name.addAni(animation)
        this.name.h = 14
    }
}
class tiled {
    constructor(tile, colider, animation) {
        this.name = new bricks.Group()
        this.name.tile = tile;
        this.name.spriteSheet = tiles
        this.name.collider = colider
        this.name.addAni(animation)
    }
}
class spikey {
    constructor(tile, colider, animation) {
        this.name = new spikes.Group()
        this.name.tile = tile;
        this.name.spriteSheet = tiles
        this.name.collider = colider
        this.name.addAni(animation)
        this.name.h = 14
    }
}

class words {
    constructor(tile, colider, animation) {
        this.name = new Group()
        this.name.tile = tile;
        this.name.spriteSheet = keyboard
        this.name.collider = colider
        this.name.addAni(animation)
        this.name.h = 12
        this.name.w = 144
    }
}

