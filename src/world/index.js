export class World {
    constructor({ width, height, tiles }) {
        this.width = width;
        this.height = height;
        this.tiles = tiles;
    }

    *iterTiles() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                yield { x, y, tile: this.tiles[y][x] }
            }
        }
    }
}
