from pyp5js import *

__COLOURS__ = {
    "C": [18, 151, 147],
    "P": [255, 65, 134],
    "Y": [255, 204, 102]
}

class Marble:
    def __init__(self,
                 x:int,
                 y:int,
                 radius:int,
                 colour:str):
        self.x = x
        self.y = y
        self.colour =__COLOURS__[colour]
        self.on_ring = False
        self.marble_radius = radius

    def render(self):
        noStroke()
        fill(self.colour)
        circle(self.x, self.y, self.marble_radius)
        fill(255)
        circle(self.x -6, self.y -6, 10)



