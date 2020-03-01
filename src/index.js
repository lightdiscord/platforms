import { Vec2 } from "./properties/vec2.js";
import { Camera } from "./rendering/camera.js";
import { World } from "./world/index.js";
import { Game } from "./game.js";

const world = fetch("./worlds/debug.json")
    .then(response => response.json())
    .then(world => new World(world));

async function main() {
    const canvas = document.querySelector("canvas#view");
    const context = canvas.getContext("2d");

    const camera = new Camera({ position: new Vec2(2, 2) });
    const game = new Game({ world: await world });

    camera.render(game, { canvas, context });
}

main();
