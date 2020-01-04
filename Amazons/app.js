"use strict"

let game = new Amazons(BOARD_SIDE);

function setup() {
    // pixelDensity(2);
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(BGN_COLOUR);
    rectMode(CENTER);
    game._reset_canvas();    

}

function draw() {
    background(BGN_COLOUR);
    game.play();
}