class Yavalath extends AbstractStrategyGame {
    constructor(){
        super();
        this._config_board();

        this.board = [];
    }


    _config_board() {
        this.cells_per_col = [];
        this.cum_sum = [];

        for (let i = BOARD_SIDE; i < 2 * BOARD_SIDE; ++i) {
            this.cells_per_col.push(i);
        }

        for (let i = 2 * BOARD_SIDE - 2; i >= BOARD_SIDE; --i) {
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

    _reset_canvas(){

        // Setup board
        let posx = (CANVAS_WIDTH * 725) / 1000;
        let posy = 0; 
        for (let i = 0; i < this.num_cells; ++i) {
            let coords = this._get_col_row_from_ind(i);
            posx = coords[1] * (BOARDSPOT_RADIUS + 7    ) + (CANVAS_WIDTH * 270) / 1000; // * (BOARD_SIDE % 4);
            posy = (CANVAS_HEIGHT * 140) / 900; 
            posx -=  ((this.cells_per_col[coords[0]] % BOARD_SIDE) * BOARDSPOT_RADIUS) / 2;
            posy += coords[0] * (BOARDSPOT_RADIUS);        
            this.board.push(new BoardSpot(posx, posy));
        }
        
    }

    _render(){

        for (let cell of this.board) {
                cell._render(); 
        }
    }
}