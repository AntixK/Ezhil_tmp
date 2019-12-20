# from typing import Callable

class HexGrid:

    __coord_map = {'N':1}

    def __init__(self,
                 side_length: int = 4,
                 cell_type = 1):
        self.side_length = side_length
        self.cell_type = cell_type
        self.num_cells = self._get_num_cells()
        """
        Initialize the grid to None. The max number of cells ina column is 2*side_length -1
        while, the number of columns is 2*side_length-1.
        """
        self.grid = []
        self._populate_grid()

    def _populate_grid(self):
        for col_id in range(2*self.side_length-1):
            col =[]
            for row_id in range(2*self.side_length-1):
                if row_id < self.cells_per_col[col_id]:
                    col.append(self.cell_type)
                else:
                    col.append(None)
            self.grid.append(col)


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

    def __repr__(self):
        return f"{self.grid}"










