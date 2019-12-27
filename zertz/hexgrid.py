from itertools import accumulate


class HexGrid:

    def __init__(self,
                 side_length: int = 4,
                 cell_type: callable = None):
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
        for col_id in range(self.num_cells):
            self.grid.append(self.cell_type(col_id))

    def _get_num_cells(self):
        """
        To calculate total number of grids for a given side length,
        we use the formula
            side_length + (side_length + 1) + ... + 2*side_length -1 + ... (side_length + 1) + side_length
        """
        cells_per_col = list(range(self.side_length, 2*self.side_length))
        self.cells_per_col =  cells_per_col + cells_per_col[::-1][1:]
        self.cum_cells = list(accumulate(self.cells_per_col))
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

        if curr_row < self.cells_per_col[curr_col] -1:
            neighbours.append(i + 1)

        prev_col = curr_col - 1
        next_col = curr_col + 1

        if prev_col > -1 and curr_row < self.cells_per_col[prev_col] :
            neighbours.append(self._get_ind_from_col_row(prev_col, curr_row))

        if next_col < len(self.cells_per_col) and curr_row < self.cells_per_col[next_col]:
            neighbours.append(self._get_ind_from_col_row(next_col, curr_row))

        if curr_col == len(self.cells_per_col) // 2:
            if prev_col > -1 and curr_row - 1 < self.cells_per_col[prev_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(prev_col, curr_row - 1))

            if next_col < len(self.cells_per_col) and curr_row - 1 < self.cells_per_col[next_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(next_col, curr_row - 1))

        elif curr_col < len(self.cells_per_col) / 2:
            if prev_col > -1 and curr_row - 1 < self.cells_per_col[prev_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(prev_col, curr_row - 1))

            if next_col < len(self.cells_per_col) and curr_row + 1 < self.cells_per_col[next_col]:
                neighbours.append(self._get_ind_from_col_row(next_col, curr_row + 1))

        else:
            if prev_col > -1 and curr_row + 1 < self.cells_per_col[prev_col]:
                neighbours.append(self._get_ind_from_col_row(prev_col, curr_row + 1))
            if next_col < len(self.cells_per_col) and curr_row - 1 < self.cells_per_col[next_col] and curr_row > 0:
                neighbours.append(self._get_ind_from_col_row(next_col, curr_row - 1))

        return neighbours

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


def fun(i):
    return i

if __name__ == '__main__':
    h = HexGrid(cell_type=fun)
    print(h)
    # print(h._get_col_row_from_ind(16))
    print(h._get_neighbours(18))


