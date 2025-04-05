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
        allSprites.remove(); 
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
        allSprites.remove(); 
        startScreen(); 
        gameState = 'start'
    }

    //attacks
    player.overlapping(enemys, canAtk)
    //if (mouse.presses() && stabbing == false && (health > 0 && win == false)) {stab();}

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

        //wolfs
        for (let i = 0; i < wolfCount; i++) {
            if (player.overlapping(wolf[i]) && wolf[i].health > 0 && wolfAtking == false) {
                if (player.x > wolf[i].x) {
                        wolf[i].scale.x = -(canvasHeight/520);
                } else if (player.x < wolf[i].x) {
                    wolf[i].scale.x = (canvasHeight/520);
                }
                l = i; wolfAtk();
            }
        }


        for (let i = 0; i < wolfCount; i++) {
            if (((dist(player.x, player.y, wolf[i].x, wolf[i].y)) > 100) && 
            (300 > (dist(player.x, player.y, wolf[i].x, wolf[i].y)))) {
                if (player.x > wolf[i].x) {
                    wolf[i].scale.x = -(canvasHeight/520);
                    direction = 1; 
                    wolf[i].vel.y = wolf[i].vel.y - 0.1;
                } else if (player.x < wolf[i].x) {
                    wolf[i].scale.x = (canvasHeight/520); 
                    direction = -1; 
                    wolf[i].vel.y = wolf[i].vel.y - 0.1;
                }
                L = i; wolfRun();
            } else if (wolfAtking == false) {
                wolf[i].changeAni('idle');
            }
        }

        //golems
        for (let i = 0; i < golemCount; i++) {
            golemHit[i].opacity = 0 
            golem[i].x = golemHit[i].x
            golem[i].y = golemHit[i].y// - ((canvasHeight/80))
            if (player.overlapping(golem[i]) && golem[i].health > 0 && golemAtking == false) {
                if (player.x > golem[i].x) {
                    golem[i].scale.x = (canvasHeight/300);
                } else if (player.x < golem[i].x) {
                    golem[i].scale.x = -(canvasHeight/300);
                }
                l = i; golemAtk();
            }
        }


        for (let i = 0; i < golemCount; i++) {
            if (((dist(player.x, player.y, golem[i].x, golem[i].y)) > 140) && 
            (300 > (dist(player.x, player.y, golem[i].x, golem[i].y)))) {
                if (player.x > golem[i].x) {
                    golem[i].scale.x = (canvasHeight/300);
                    direction = 1; 
                    golemHit[i].vel.y = golemHit[i].vel.y - 0.1;
                } else if (player.x < golem[i].x) {
                    golem[i].scale.x = -(canvasHeight/300); 
                    direction = -1; 
                    golemHit[i].vel.y = golemHit[i].vel.y - 0.1;
                }
                L = i; golemRun();
            } else if (golemAtking == false) {
                golem[i].changeAni('idle');
            }
        }
    }
}
