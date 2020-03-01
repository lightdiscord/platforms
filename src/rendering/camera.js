function colorByValue(value) {
    if (value == 0) return "#ffffff";
    if (value == 1) return "#000000";
    if (value == 2) return "#ff0000";
    if (value == 3) return "#00ff00";
}

export class Camera {
    constructor({ position }) {
        this.position = position;
    }

    render({ world }, { canvas, context }) {
        const tileSize = Math.min(canvas.clientWidth / world.width, canvas.clientHeight / world.height);

        for (const { x, y, tile } of world.iterTiles()) {
            context.fillStyle = colorByValue(tile);
            context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}

