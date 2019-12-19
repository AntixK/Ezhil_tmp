from typing import Callable

class HexCell:
    pass


class HexGrid:

    __coord_map = {'N':1}

    def __init__(self,
                 side_length: int =  4,
                 cell_type: Callable = HexCell):
        self.side_length = side_length
        self.cell_type = cell_type
        self.num_cells = self._get_num_cells()
        """
        Initialize the grid to None. The max number of cells ina column is 2*side_length -1
        while, the number of columns is 2*side_length-1.
        """
        self.grid = [[None]*(2*self.side_length-1)]*(2*self.side_length-1)
        self._populate_grid()

    def _populate_grid(self):
        for j, col in enumerate(self.grid):
            for i, cell in enumerate(col):
                if i < self.cells_per_col[j]:
                    self.grid[j][i]= self.cell_type()


    def _get_num_cells(self):
        """
        To calculate total number of grids for a given side length,
        we use the formula
            side_length + (side_length + 1) + ... + 2*side_length -1 + ... (side_length + 1) + side_length
        """
        cells_per_col = list(range(self.side_length, 2*self.side_length))
        self.cells_per_col =  cells_per_col + cells_per_col[::-1][1:]
        return sum(self.cells_per_col)

    def __call__(self,
                 dir:str,
                 offset: int):
        """
        Here, I use the axial coordinate system for indexing the Hex Grid
        Reference: https://www.redblobgames.com/grids/hexagons/#conversions
        """
        pass



a = HexGrid(6)
print(a)












