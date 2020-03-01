async function load(path) {
    const response = await fetch(path);
    const blob = await response.blob();
    return createImageBitmap(blob);
}

export const wall = load("../../sprites/walls/wall-0001.png");

export const background0001 = load("../../sprites/backgrounds/background-0001.png");
export const background0002 = load("../../sprites/backgrounds/background-0002.png");
export const background0003 = load("../../sprites/backgrounds/background-0003.png");

export const backgrounds = Promise.all([
    background0001,
    background0002,
    background0003,
    background0003
]);
