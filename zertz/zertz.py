from pyp5js import *
from .marble import Marble
from .settings import *


class Zertz:


    def __init__(self):
        self.MARBLE_RADIUS = CANVAS_HEIGHT * 45 / 900
        self.RING_RADIUS = CANVAS_HEIGHT * 65 / 900
        self.marbles = []

        self.undo = list()
        self.redo = list()

    def reset_canvas(self):
        background(BGN_COLOUR)
        self.undo.clear()
        self.redo.clear()

        # Setup the marbles
        posx = CANVAS_WIDTH * 725 / 1000
        num_marbles = [10, 8, 6]
        c = ["C", "P", "Y"]
        for i, colour in enumerate(c):
            posx += self.MARBLE_RADIUS + 10
            posy = (CANVAS_HEIGHT * 180 / 900) + i * self.MARBLE_RADIUS
            for j in range(num_marbles[i]):
                marble = Marble(posx, posy, self.MARBLE_RADIUS, colour)
                self.marbles.append(marble)
                posy += self.MARBLE_RADIUS + 10

    def render(self):
        for marble in self.marbles:
            marble.render()

        # for ring in self.rings:
        #     ring.render()

z = Zertz()

def setup():
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    background(BGN_COLOUR)
    z.reset_canvas()


def draw():
    # fill("blue")
    background(BGN_COLOUR)
    radius = sin(frameCount / 60) * 50 + 50
    ellipse(100, 100, radius, radius)
    z.render()

    # Marble(500,500, z.MARBLE_RADIUS, 'C').render()
    # console.log(frameRate())
