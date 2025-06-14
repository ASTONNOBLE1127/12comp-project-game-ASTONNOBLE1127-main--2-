//import { logon } from './main.js'

function home() {
    pfp = new Sprite(windowWidth/16*15, windowHeight/16, 30,'k')
    DD_enter = new Sprite(windowWidth/8, windowHeight/8, 300,300,'k')
    DD_enter.image = titleImg

}

function homeRun() {
    background('#4a412a')
   if (pfp.mouse.presses()) {
    logon()
   }
   if (DD_enter.mouse.presses()) {
    DD_enter.remove()
    
   startScreen()
   cnv.resize(canvasHeight, canvasHeight)
   gameState = "start"
   }
    
}