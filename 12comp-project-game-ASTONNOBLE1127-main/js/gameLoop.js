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

function gameRun(player) {
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
    if (player.overlapping(door) && win == false) {
        win = true;
        door.changeAni('open'); 
        xVel = 0; 
        won(); 
    }


    //health related
    if (health / 2 > heartCount) {
        while (health / 2 > heartCount) {
            hearts[heartCount] = new deletes.Sprite(7,7,7,7,'n')
            hearts[heartCount].image = (heart)
            hearts[heartCount].scale = (canvasHeight/194)
            heartCount = heartCount + 1
        }
    }
    healthbar()
    if (0.1 > health && health > -5) {health = health - 1000; death(player);}

    //damage
    if (player.overlapping(spikes)) {
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
    if (player.overlapping(hopBlock)) {hops = true;}
    if (kb.presses(' ') && player.colliding(
        bricks) && (health > 0 && win == false) && (
        jumping == false || hops == true)) {
        hops = false; 
        player.vel.y =-6; 
        jump(player);
    }
    if (kb.pressing('right') && (health > 0 && win == false)) {
        if (xVel < 21) {xVel = xVel + 3;} 
        walkEast(player);
    } else if (kb.pressing('left') && (health > 0 && win == false)) {
        if (xVel > -21) {xVel = xVel - 3;}
        walkWest(player);
    } else if (xVel > 0) {xVel = xVel - 1.5;
    } else if (xVel < 0) {xVel = xVel + 1.5;}

    //climbing
    if (health > 0.5 && win == false) {
        player.vel.x = xVel / 10
        if (player.overlapping(climb) && kb.pressing('up')) {
            player.vel.y = -2.5; 
            player.drag = 0; 
            climbing(player);
        } else if (player.overlapping(climb) && player.vel.y >= 0 && !(
        kb.pressing('right') || kb.pressing('left') || kb.pressing('down'))) {
            player.drag = 10000000
        } else {player.drag = 0}

        //enemys movement
        for (let i = 0; i < golemCount; i++) {
            if (((dist(player.x, player.y, enemy[i].x, enemy[i].y)) > 140) && 
            (300 > (dist(player.x, player.y, enemy[i].x, enemy[i].y)))) {
                ERun(enemy[i]);
            }
        }
        
        for (let i = 0; i < wolfCount; i++) {
            if (((dist(player.x, player.y, enemy[i + 10].x, enemy[i + 10].y)) > 140) && 
            (300 > (dist(player.x, player.y, enemy[i + 10].x, enemy[i + 10].y)))) {
                ERun(enemy[i + 10], player);
            }
        }
    }
}
