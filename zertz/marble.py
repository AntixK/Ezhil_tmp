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
        self.init_x = x
        self.init_y = y
        self.x = x
        self.y = y

        self.colour =__COLOURS__[colour]
        self.on_ring = False
        self.marble_radius = radius
        self.is_clicked = False

    # def marble_params(self                 x:int,
    #              y:int,
    #              radius:int,
    #              colour:str):
    #     self.x = x
    #     self.y = y
    #     self.colour =__COLOURS__[colour]
    #     self.on_ring = False
    #     self.marble_radius = radius

    def _clicked(self):
        d = dist(mouseX, mouseY, self.x, self.y)

        if d < self.marble_radius /2:
            self.xoffset = mouseX - self.x
            self.yoffset = mouseY - self.y
            self.is_clicked = True

        else:
            self.xoffset = 0
            self.yoffset = 0
            self.is_clicked = False

    def _dragged(self):
        if self.is_clicked:
            self.x = mouseX - self.xoffset
            self.y = mouseY - self.yoffset

    def reset_init_pos(self):
        self.x = self.init_x
        self.y = self.init_y

    def set_pos(self, x, y):
        self.x = x
        self.y = y

        self.init_x = x
        self.init_y = y

    def render(self):
        noStroke()
        fill(self.colour)
        circle(self.x, self.y, self.marble_radius)
        fill(255)
        circle(self.x -6, self.y -6, 10)


