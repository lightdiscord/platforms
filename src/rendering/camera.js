import { wall, backgrounds } from "../assets/index.js";

function randomIn(list) {
        return list[Math.floor(Math.random() * list.length)]
}

export class Camera {
    constructor({ position }) {
        this.position = position;
    }

    async render({ world }, { canvas, context }) {
        const wallImage = await wall;
        const backgroundImages = await backgrounds;

        const tileSize = Math.min(canvas.clientWidth / world.width, canvas.clientHeight / world.height);

        for (const { x, y, tile } of world.iterTiles()) {
            if (tile == 1) {
                context.drawImage(wallImage, x * tileSize, y * tileSize, tileSize, tileSize);
            } else {
                const image = randomIn(backgroundImages);
                context.drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
}

