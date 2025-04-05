/*******************************************************/
//
// gameLoop.js
//
//written by Aston Noble term 1 2025
//
/*******************************************************/

/*******************************************************/
//gameRun()
//runs the game
/*******************************************************/

function gameRun() {
    //artifacts
    if (level == 1) {
        if (player.overlapping(goldKey)) { 
            artifactFound = true; 
            goldKey.remove(); 
        }
    } else if (level == 2) {
        if (player.overlapping(heartStone)) { 
            artifactFound = true; 
            heartStone.remove();
        }
    }
    
    //canvas
    clear()
    noSmooth()
    background(bgC) 
    camera.x = player.x
    camera.y = player.y - (canvasHeight/6)
    if (hitbox.overlapping(door) && win == false) {
        win = true;
        door.changeAni('open'); 
        player.remove(); 
        xVel = 0; 
        won(); 
    }


    //health related
    if (health / 2 > heartCount) {
        while (health / 2 > heartCount) {
            hearts[heartCount] = new Sprite(7,7,7,7,'n')
            hearts[heartCount].image = (heart)
            hearts[heartCount].scale = (canvasHeight/194)
            heartCount = heartCount + 1
        }
    }
    healthbar()
    if (0.1 > health && health > -5) {health = health - 1000; death();}

    //damage
    if (player.overlaps(spikes)) {
        if (spiked == false) {health--; spiked = true; updateHealth();}
    } else {spiked = false;}

    //game over
    if (restartButton.mouse.presses() && (health < 0 || win == true)) {
        deletes.removeAll(); 
        if (level == 0) {
            tutorial()
        } else if (level == 1) {
            level1()
        } else if (level == 2) {
            level2()
        }
        gameState = 'start'; 
        gameState = 'game'
    }

    if (menuButton.mouse.presses() && (health < 0 || win == true)) {
        deletes.removeAll(); 
        startScreen(); 
        gameState = 'start'
    }

    //attacks
    player.overlapping(enemys, canAtk)

    //movement
    player.x = hitbox.x
    player.y = hitbox.y - (canvasHeight/50)
    if (hitbox.overlapping(hopBlock)) {hops = true;}
    if (kb.presses(' ') && hitbox.colliding(
        bricks) && (health > 0 && win == false) && (
        jumping == false || hops == true)) {
        hops = false; 
        hitbox.vel.y =-6; 
        jump();
    }
    if (kb.pressing('right') && (health > 0 && win == false)) {
        if (xVel < 21) {xVel = xVel + 3;} 
        walkEast();
    } else if (kb.pressing('left') && (health > 0 && win == false)) {
        if (xVel > -21) {xVel = xVel - 3;}
        walkWest();
    } else if (xVel > 0) {xVel = xVel - 1.5;
    } else if (xVel < 0) {xVel = xVel + 1.5;}

    //climbing
    if (health > 0.5 && win == false) {
        hitbox.vel.x = xVel / 10
        if (hitbox.overlapping(climb) && kb.pressing('up')) {
            hitbox.vel.y = -2.5; 
            hitbox.drag = 0; 
            climbing();
        } else if (hitbox.overlapping(climb) && hitbox.vel.y >= 0 && !(
        kb.pressing('right') || kb.pressing('left') || kb.pressing('down'))) {
            hitbox.drag = 10000000
        } else {hitbox.drag = 0}

        //enemys
        for (let i = 0; i < i; i++) {
            if (((dist(player.x, player.y, golem[i].x, golem[i].y)) > 140) && 
            (300 > (dist(player.x, player.y, golem[i].x, golem[i].y)))) {
                ERun(golem[i]);
            } else if (golemAtking == false) {
                golem[i].changeAni('idle');
            }
        }
    }
}
