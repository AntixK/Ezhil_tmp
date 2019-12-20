from pyp5js import *
from .marble import Marble
from .ring import Ring
from .hexgrid import HexGrid
from .settings import *


class Zertz:
    def __init__(self):
        self.MARBLE_RADIUS = CANVAS_HEIGHT * 45 / 900
        self.RING_RADIUS = CANVAS_HEIGHT * 65 / 900
        self.marbles = []
        self.rings = []

        self.undo = list()
        self.redo = list()

    def reset_canvas(self):
        background(BGN_COLOUR)
        self.undo.clear()
        self.redo.clear()
        self.marbles = []
        self.rings = []

        # Setup the Marbles
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

        # Setup the Rings
        self.cells_per_col = [4, 5, 6, 7, 6, 5, 4]
        posx = CANVAS_WIDTH * 230 / 1000
        for i in range(len(ALPH)):
            posx += self.RING_RADIUS - 1
            posy = (CANVAS_HEIGHT * 340 / 900) - (self.cells_per_col[i] % 4) * self.RING_RADIUS / 2
            for j in range(self.cells_per_col[i]):
                ring = Ring(x = posx,
                            y = posy,
                            radius = self.RING_RADIUS)
                posy += self.RING_RADIUS + 1
                self.rings.append(ring)



    def render(self):
        for ring in self.rings:
            ring.render()

        for marble in self.marbles:
            marble.render()



z = Zertz()

def setup():
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    background(BGN_COLOUR)
    z.reset_canvas()


def draw():
    fill("blue")
    background(BGN_COLOUR)
    radius = sin(frameCount / 60) * 50 + 50
    ellipse(10, 10, radius, radius)
    z.render()

    # console.log(frameRate())

def mousePressed():
    # Check if any of the marbles were clicked
    for marble in z.marbles:
        marble._clicked()

    # Check if any of the rings were clicked
    for ring in z.rings:
        ring._clicked()

def mouseDragged():
    # Check if any of the marbles were dragged
    for marble in z.marbles:
        marble._dragged()

def mouseReleased():
    # Check if the dragged  marble is on any ring
    for marble in z.marbles:
        if marble.is_clicked:
            for ring in z.rings:
                d = dist(mouseX, mouseY, ring.x, ring.y)

                if d < ring.ring_radius/2:
                    marble.set_pos(ring.x, ring.y)
                    marble.on_ring = True
                    ring.has_marble = True
                    ring.is_removable = False
                else:
                    marble.reset_init_pos()

    # Check if any of the rings were clicked
    for i, ring in enumerate(z.rings):
        if ring.is_clicked and ring.is_removable:
            console.log(i)
            z.rings.pop(i)

