import { Perlin } from 'models/perlin'
import SKULL_ICON from '../../images/mapSkull.png'
import TREASURE_ICON from '../../images/mapTreasure.png'
import SWORD_ICON from '../../images/mapSword.png'
import STAR_ICON from '../../images/mapStar.png'

export class CombatMap {
    public tileset = new Array(100).fill(0)
    private perlin: any // { noise: (x: number, y: number, z: number) => number };
    private x = 0;
    private y = 0;
  
    private noise = () => {
      this.x += 0.1;
      this.y += 0.01;
      return this.perlin.noise(this.x, this.y, 0);
    }

    constructor() {
        let starCount = 0
        let skullCount = 0
        let treasureCount = 0
        this.perlin = new Perlin(1)

        // for(var i = 2000; i < 3000; i++) {

            this.x = 0
            this.y = 0
            this.perlin = new Perlin(2642)

            this.tileset = this.tileset.map(out => {
                let noise = Math.abs(this.noise() - 0.5)
                let tile = new Tile()
    
                if(noise <= 0.05 ) {
                    tile.symbol = SWORD_ICON
                } else if (noise < 0.1) {
    
                } else if (noise < 0.25) {
                    tile.symbol = SKULL_ICON
                    skullCount++
                } else if (noise < 0.4) {
                    tile.symbol = TREASURE_ICON
                    treasureCount++
                } else if (noise < 0.5) {
                    tile.symbol = STAR_ICON
                    // console.log(i)
                    starCount++
                }
    
                return tile;
            })

        console.log("starCount: " + starCount)
        console.log("treasureCount: " + treasureCount)
        console.log("skullCount: " + skullCount)

    }
}

export class Tile {
    public symbol: any = '';

}

export const PEACEFUL_HILLS = new CombatMap()