class Zertz extends AbstractStrategyGame{
    constructor(side_length) {

        super();
        this.side_length = side_length;

        this._config_board();
        this.marbles = [];
        this.rings = [];
        this.removable_ring_ids = []; // required when listing all possible moves
        this.marble_on_board = [];

        // stacks for undo and redo
        this.undo = [];
        this.redo = [];
    }

    _config_board() {
        this.cells_per_col = [];
        this.cum_sum = [];

        for (let i = this.side_length; i < 2 * this.side_length; ++i) {
            this.cells_per_col.push(i);
        }

        for (let i = 2 * this.side_length - 2; i >= this.side_length; --i) {
            this.cells_per_col.push(i);
        }

        this.cum_sum.push(this.cells_per_col[0]);

        for (let i = 1; i < this.cells_per_col.length; ++i) {
            this.cum_sum[i] = this.cum_sum[i - 1] + this.cells_per_col[i];
        }
        this.num_cells = this.cells_per_col.reduce(function(a, b) {
            return a + b;
        }, 0);
    }

    _populate_rings() {
        for (let i = 0; i < this.num_cells; ++i) {
            this.rings.push(new Ring());
        }
        this.rings.push(null);
    }

    _get_col_row_from_ind(ind) {
        let col = 0,
            row = 0;

        for (col = 0; col < this.cum_sum.length; ++col) {
            if (ind < this.cum_sum[col]) {
                break;
            }
        }

        if (col == 0) {
            row = ind;
        } else {
            row = ind - this.cum_sum[col - 1];
        }

        return [col, row];
    }

    _get_ind_from_col_row(col, row) {
        if (col > 0) {
            return this.cum_sum[col - 1] + row;
        } else {
            return row;
        }
    }

    _get_neighbours(ind) {
        /* ........ MAIN LOGIC ..............*/
        /*
            Represent a Hexgrid as a 1D array and get the
            neighbours solely based on logic.
        */
        let neighbour_inds = [];
        let neighbours = {};

        let curr_coords = this._get_col_row_from_ind(ind);
        let cur_col = curr_coords[0],
            cur_row = curr_coords[1];

        // Top neighbour
        if (cur_row > 0) {
            neighbour_inds.push(ind - 1);
            neighbours.T = ind - 1;
        } else {
            neighbour_inds.push(this.num_cells);
            neighbours.T = this.num_cells;
        }

        // Bottom neighbour
        if (cur_row < this.cells_per_col[cur_col] - 1) {
            neighbour_inds.push(ind + 1);
            neighbours.B = ind + 1;
        } else {
            neighbour_inds.push(this.num_cells);
            neighbours.B = this.num_cells;
        }

        // Diagonal neighbours
        let prev_col = cur_col - 1;
        let next_col = cur_col + 1;

        if (prev_col > -1 && 
            cur_row < this.cells_per_col[prev_col]) {
            neighbour_inds.push(this._get_ind_from_col_row(prev_col, cur_row));

            if (cur_col <= this.cells_per_col.length / 2){
                neighbours.BL = this._get_ind_from_col_row(prev_col, cur_row);
            } else {
                neighbours.TL = this._get_ind_from_col_row(prev_col, cur_row);
            }
        } else {
            neighbour_inds.push(this.num_cells);
            if (cur_col <= this.cells_per_col.length / 2){
                neighbours.BL = this.num_cells;
            } else {
                neighbours.TL = this.num_cells;
            }
        }

        if (next_col < this.cells_per_col.length &&
            cur_row < this.cells_per_col[next_col]){
            neighbour_inds.push(this._get_ind_from_col_row(next_col, cur_row));

            if (cur_col < this.cells_per_col.length / 2){
                neighbours.TR = this._get_ind_from_col_row(prev_col, cur_row);
            } else {
                neighbours.BR = this._get_ind_from_col_row(prev_col, cur_row);
            }

        } else {
            neighbour_inds.push(this.num_cells);

            if (cur_col < this.cells_per_col.length / 2){
                neighbours.TR = this.num_cells;
            } else {
                neighbours.BR = this.num_cells;
            }
        }

        // Accounting for the center column
        if (cur_col == Math.floor(this.cells_per_col.length / 2)) {
            if (prev_col > -1 &&
                cur_row - 1 < this.cells_per_col[prev_col] &&
                cur_row > 0) {
                neighbour_inds.push(this._get_ind_from_col_row(prev_col, cur_row - 1));

                neighbours.TL = this._get_ind_from_col_row(prev_col, cur_row - 1);
            } else {
                neighbour_inds.push(this.num_cells);

                neighbours.TL = this.num_cells;
            }

            if (next_col < this.cells_per_col.length &&
                cur_row - 1 < this.cells_per_col[next_col] &&
                cur_row > 0) {
                neighbour_inds.push(this._get_ind_from_col_row(next_col, cur_row - 1));

                neighbours.TR = this._get_ind_from_col_row(next_col, cur_row - 1);
            } else {
                neighbour_inds.push(this.num_cells);

                neighbours.TR = this.num_cells;
            }
        }
        // Accounting for Left Columns
        else if (cur_col < this.cells_per_col.length / 2) {
            if (prev_col > -1 &&
                cur_row - 1 < this.cells_per_col[prev_col] &&
                cur_row > 0) {
                neighbour_inds.push(this._get_ind_from_col_row(prev_col, cur_row - 1));

                neighbours.TL = this._get_ind_from_col_row(prev_col, cur_row - 1);

            } else {
                neighbour_inds.push(this.num_cells);

                neighbours.TL = this.num_cells;
            }
            if (next_col < this.cells_per_col.length && 
                cur_row + 1 < this.cells_per_col[next_col]) {
                neighbour_inds.push(this._get_ind_from_col_row(next_col, cur_row + 1));

                neighbours.BR = this._get_ind_from_col_row(next_col, cur_row + 1);
            } else {
                neighbour_inds.push(this.num_cells);

                neighbours.BR = this.num_cells;
            }
        }
        // Accounting for the Right columns
        else {
            if (prev_col > -1 &&
                cur_row + 1 < this.cells_per_col[prev_col]) {
                neighbour_inds.push(this._get_ind_from_col_row(prev_col, cur_row + 1));

                neighbours.BL = this._get_ind_from_col_row(prev_col, cur_row + 1);
            } else {
                neighbour_inds.push(this.num_cells);

                neighbours.BL = this.num_cells;
            }

            if (next_col < this.cells_per_col.length &&
                cur_row - 1 < this.cells_per_col[next_col] &&
                cur_row > 0) {
                neighbour_inds.push(this._get_ind_from_col_row(next_col, cur_row - 1));
                
                neighbours.TR = this._get_ind_from_col_row(next_col, cur_row - 1)
            } else {
                neighbour_inds.push(this.num_cells);

                neighbours.TR = this.num_cells;
            }

        }

        return [neighbour_inds, neighbours];
    }

    _set_removable_rings() {
        this.removable_ring_ids = [];
        for (let i = 0; i < this.rings.length; ++i) {
            if (this.rings[i] != null){
                let neighbours = this._get_neighbours(i);
                neighbours = neighbours[1];

                if ((this.rings[neighbours.B] === null && this.rings[neighbours.BL] === null) ||
                    (this.rings[neighbours.B] === null && this.rings[neighbours.BR] === null) ||
                    (this.rings[neighbours.T] === null && this.rings[neighbours.TL] === null) ||
                    (this.rings[neighbours.T] === null && this.rings[neighbours.TR] === null) ||
                    (this.rings[neighbours.BL] === null && this.rings[neighbours.TL] === null) ||
                    (this.rings[neighbours.BR] === null && this.rings[neighbours.TR] === null)) {
                        if (!this.rings[i].has_marble) {
                        this.rings[i].is_removable = true;
                        this.removable_ring_ids.push(i);
                        } else{
                            this.rings[i].is_removable = false;
                        }
                    }
                    else {
                        this.rings[i].is_removable = false;
                    }

            }
        }
    }

    _get_possible_moves(){

    }

    _check_if_captured(){

    }


    _reset_canvas() {
        clear();
        background(BGN_COLOUR);
        this.rings = [];
        this.marbles = [];
        this.undo = [];
        this.redo = [];
        this._populate_rings();

        // Setup Marbles
        let posx = (CANVAS_WIDTH * 725) / 1000;
        let posy = 0;        
        let colours = [...Object.keys(MARBLE_COLOURS)];
        for (let c = 0; c < colours.length; ++c) {
            posx += MARBLE_RADIUS + 10;
            posy = (CANVAS_HEIGHT * 150) / 900 + c * MARBLE_RADIUS;
            for (let j = 0; j < NUM_MARBLES[c]; ++j) {
                this.marbles.push(new Marble(posx, posy, colours[c]));
                posy += MARBLE_RADIUS + 10;
            }
        }

        // Setup Rings
        let offset = this.side_length % 4;
        for (let i = 0; i < this.num_cells; ++i) {
            let coords = this._get_col_row_from_ind(i);
            posx = coords[0] * (RING_RADIUS - 1) + (CANVAS_WIDTH * 230) / 1000; // * (this.side_length % 4);
            posy =
                (CANVAS_HEIGHT * 340) / 900 -
                ((this.cells_per_col[coords[0]] % this.side_length) * RING_RADIUS) / 2;
            posy += coords[1] * (RING_RADIUS + 1);

            // position the hexgrid based on the sidelength
            posx -= offset * 50;
            posy -= offset * 10; 

            this.rings[i]._initialize(posx, posy);
        }

        
    }

    _render() {
        this._set_removable_rings();
        for (let ring of this.rings) {
            if (ring != null) {
                if (ring.is_removable){
                    ring.colour = [229, 219, 199];
                } else {
                    ring.colour = 245;
                }
                ring._render();
            }
        }

        for (let marble of this.marbles) {
            marble._render();
        }
    }
}