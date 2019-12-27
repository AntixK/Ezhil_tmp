from pyp5js import *
from .marble import Marble
from .ring import Ring
from .settings import *

class Zertz:
    def __init__(self,
                 side_length: int,
                 cell_type: callable):
        self.side_length = side_length
        self.cell_type = cell_type

        self.MARBLE_RADIUS = CANVAS_HEIGHT * 45 / 900
        self.RING_RADIUS = CANVAS_HEIGHT * 65 / 900
        self.marbles = []
        self.rings = []

        self.undo = list()
        self.redo = list()

    def _populate_rings(self):
        for col_id in range(self.num_cells):
            self.rings.append(self.cell_type())
        self.rings.append(None)


    def _get_num_cells(self):
        """
        To calculate total number of grids for a given side length,
        we use the formula
            side_length + (side_length + 1) + ... + 2*side_length -1 + ... (side_length + 1) + side_length
        """
        cells_per_col = list(range(self.side_length, 2*self.side_length))
        self.cells_per_col =  cells_per_col + cells_per_col[::-1][1:]

        # self.cum_cells = []
        # total = 0
        # for i in self.cells_per_col:
        #     self.cum_cells.append(total + i)
        return sum(self.cells_per_col)

    def _get_col_row_from_ind(self, index:int):
        for col, num_cells in enumerate(self.cum_cells):
            if index < num_cells:
                break
        if col == 0:
            row = index
        else:
            row = index - self.cum_cells[col - 1]
        return col, row

    def _get_ind_from_col_row(self, col:int, row:int):
        if col > 0:
            return self.cum_cells[col - 1] + row
        else:
            return row

    def _get_neighbours(self, i:int):
        neighbours = []

        curr_col, curr_row = self._get_col_row_from_ind(i)

        if curr_row > 0:
            neighbours.append(i - 1)
        else:
            neighbours.append(self.num_cells + 1)

        if curr_row < self.cells_per_col[curr_col] - 1:
            neighbours.append(i + 1)
        else:
            neighbours.append(self.num_cells + 1)

        prev_col = curr_col - 1
        next_col = curr_col + 1

        if prev_col > -1 and curr_row < self.cells_per_col[prev_col]:
            neighbours.append(self._get_ind_from_col_row(prev_col, curr_row))
        else:
            neighbours.append(self.num_cells + 1)

        if next_col < len(self.cells_per_col) and curr_row < self.cells_per_col[next_col]:
            neighbours.append(self._get_ind_from_col_row(next_col, curr_row))
        else:
            neighbours.append(self.num_cells + 1)

        if curr_col == len(self.cells_per_col) // 2:
            if prev_col > -1 and curr_row - 1 < self.cells_per_col[prev_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(prev_col, curr_row - 1))
            else:
                neighbours.append(self.num_cells + 1)

            if next_col < len(self.cells_per_col) and curr_row - 1 < self.cells_per_col[next_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(next_col, curr_row - 1))
            else:
                neighbours.append(self.num_cells + 1)

        elif curr_col < len(self.cells_per_col) / 2:
            if prev_col > -1 and curr_row - 1 < self.cells_per_col[prev_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(prev_col, curr_row - 1))
            else:
                neighbours.append(self.num_cells + 1)

            if next_col < len(self.cells_per_col) and curr_row + 1 < self.cells_per_col[next_col]:
                neighbours.append(self._get_ind_from_col_row(next_col, curr_row + 1))
            else:
                neighbours.append(self.num_cells + 1)

        else:
            if prev_col > -1 and curr_row + 1 < self.cells_per_col[prev_col]:
                neighbours.append(self._get_ind_from_col_row(prev_col, curr_row + 1))
            else:
                neighbours.append(self.num_cells + 1)

            if next_col < len(self.cells_per_col) and curr_row - 1 < self.cells_per_col[next_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(next_col, curr_row - 1))
            else:
                neighbours.append(self.num_cells + 1)

        return neighbours

    def reset_canvas(self):
        background(BGN_COLOUR)
        self.undo.clear()
        self.redo.clear()
        self.marbles.clear()
        self.rings.clear()
        self.num_cells = 37 #self._get_num_cells()
        self._populate_rings()

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
        self.cells_per_col = [4,5,6,7,6,5,4]
        self.cum_cells = [4,9,15,22,28,33, 37]

        for i in range(self.num_cells):
            col, row = self._get_col_row_from_ind(i)
            posx = col*(self.RING_RADIUS - 1) + CANVAS_WIDTH * 230 / 1000
            posy = (CANVAS_HEIGHT * 340 / 900) - (self.cells_per_col[col] % self.side_length) * self.RING_RADIUS / 2
            posy += row*(self.RING_RADIUS + 1)
            self.rings[i]._ring_params(x = posx,
                                       y = posy,
                                       colour=245,
                                       radius = self.RING_RADIUS)
        # self.set_removable_rings()

    def set_removable_rings(self):
        for i, ring in enumerate(self.rings):
            if ring is not None:
                neighbour_inds = self._get_neighbours(i)
                neighbour_inds.sort()
                if (self.rings[neighbour_inds[0]] is None and self.rings[neighbour_inds[1]] is None) or \
                   (self.rings[neighbour_inds[1]] is None and self.rings[neighbour_inds[2]] is None) or \
                   (self.rings[neighbour_inds[3]] is None and self.rings[neighbour_inds[5]] is None) or \
                   (self.rings[neighbour_inds[4]] is None and self.rings[neighbour_inds[5]] is None) or \
                   (self.rings[neighbour_inds[2]] is None and self.rings[neighbour_inds[2]] is None) or \
                   (self.rings[neighbour_inds[0]] is None and self.rings[neighbour_inds[1]] is None):
                    ring.is_removable = True
                else:
                    ring.is_removable = False

    def render(self):
        self.set_removable_rings()
        for ring in self.rings:
            if ring is not None:
                if ring.is_removable:
                    ring._change_colour(150)
                else:
                    ring._change_colour(245)
                ring.render()

        for marble in self.marbles:
            marble.render()


z = Zertz(4, Ring)

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
        if ring is not None:
            ring._clicked()

def mouseMoved():
    for i, ring in enumerate(z.rings):
        if ring is not None:
            ring._hover()
            if ring.is_hover:
                neighbour_inds = z._get_neighbours(i)
                console.log(z.rings[neighbour_inds[5]])
                for i, ring in enumerate(z.rings):
                    if i in neighbour_inds:
                        if ring is not None:
                            ring._change_colour(180)
                    else:
                        if ring is not None:
                            ring._change_colour(245)


def mouseDragged():
    # Check if any of the marbles were dragged
    for marble in z.marbles:
        marble._dragged()

def mouseReleased():
    # Check if the dragged  marble is on any ring
    for marble in z.marbles:
        if marble.is_clicked:
            for ring in z.rings:
                if ring is not None:
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
        if ring is not None:
            if ring.is_clicked and ring.is_removable:
                # console.log(i)
                z.rings[i] = None
