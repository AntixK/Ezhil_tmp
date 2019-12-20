from pyp5js import *
from .settings import *

class Ring:
    def __init__(self,
                 x:int,
                 y:int,
                 radius:int,
                 colour:int = 245):
        self.x = x
        self.y = y
        self.colour = colour
        self.has_marble = False
        self.is_removable = True
        self.is_clicked = False
        self.ring_radius = radius

    def _clicked(self):
        d = dist(mouseX, mouseY, self.x, self.y)

        if d < self.ring_radius / 2:
             self.is_clicked = True
        else:
            self.is_clicked = False

    def render(self):
        fill(self.colour)
        circle(self.x, self.y,self.ring_radius)
        fill(BGN_COLOUR)
        circle(self.x, self.y, self.ring_radius / 3.25)

