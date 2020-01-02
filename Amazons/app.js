"use strict"

let game = new Amazons(10);

function setup() {
    // pixelDensity(2);
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(BGN_COLOUR);
    game._reset_canvas();

}

function draw() {
    background(BGN_COLOUR);
    game._render();
}