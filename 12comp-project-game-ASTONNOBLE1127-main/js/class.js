/**********************************************************/
//
//  Class.js
//
/**********************************************************/

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
        this.name = new words.Group()
        this.name.tile = tile;
        this.name.spriteSheet = keyboard
        this.name.collider = colider
        this.name.addAni(animation)
        this.name.h = 12
        this.name.w = 144
    }
}

