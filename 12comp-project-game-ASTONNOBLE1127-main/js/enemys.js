/**********************************************************/
//
//  enemys.js
//
/**********************************************************/


class Enemy {
    constructor(spriteImg,HP,DMG,Scale,w,h,anis,Type,offsetY,trigdist,atkdist,del,xInvert) {
        this.name = new enemys.Sprite(-80000,432)
        this.name.spriteSheet = spriteImg
        this.name.maxHealth = HP
        this.name.health = HP
        this.name.dmg = DMG
        this.name.w = w
        this.name.h = h
        this.name.addAnis(anis)
        this.name.del = del
        enemy.push(this.name)
        this.name.anis.offset.y = offsetY
        this.name.changeAni('idle')
        this.name.scale = Scale
        this.name.scal = Scale * xInvert
        this.name.scale.x = Scale * xInvert
        this.name.type = Type
        this.name.rotationLock = true
        this.name.collider = 'n'
    }
}

/******************************************************/
//enemys functions
/******************************************************/

/******************************************************/
//EDeath()
//makes the enemy die
//input(enemy)
//output(N/A)
/******************************************************/

async function EDeath(enemy) {
    await enemy.changeAni('hurt')
    await enemy.changeAni('death')
    enemy.x = 1000000
    enemy.collider = 'n'
    enemyCount--
    health++
    updateHealth()
}

/******************************************************/
//EAtk()
//makes the enemy attack
//input(enemy)
//output(N/A)
/******************************************************/

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

/******************************************************/
//EHurt()
//run on enemy hurt
//input(enemy)
//output(N/A)
/******************************************************/

async function EHurt(enemy) {
    enemy.health-= playerDamage
    if (enemy.health > 0 && Anim == false) {
        await enemy.changeAni('hurt'); 
        enemy.changeAni('idle');
    }
    if (enemy.health <= 0) {
        EDeath(enemy);
    }
}

/******************************************************/
//ERun()
//makes the enemy run
//input(enemy)
//output(N/A)
/******************************************************/

async function ERun(enemy, player) {
    if (player.x > enemy.x) {
        direction = 1; 
    } else if (player.x < enemy.x) { 
        direction = -1;    
    }
    enemy.scale.x = enemy.scal * direction
    enemy.vel.x = (direction * (canvasHeight/288))
    await enemy.changeAni('run')
    enemy.changeAni('idle')
}




function canAtk(player, enemy) {
    if (Atking == false && enemy.health > 0) {
        EAtk(enemy)
    }
    if (stabbing == false) {
        if (mouse.presses()) {
            EHurt(enemy)
            console.log('hit')
            PAtk(player)
        }
    }
}
