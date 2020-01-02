class Amazons extends AbstractStrategyGame {
    constructor(board_size){
        super();
        this.board = [];
        this.board_size = board_size;
    }

    _reset_canvas(){
        background(BGN_COLOUR);

        let temp = [];
        let k = 1;
        let posx = (CANVAS_WIDTH * 140) / 1000;
        let posy = (CANVAS_HEIGHT * 60) / 900; 
        for (let i = 0; i < this.board_size; ++i){
            temp = [];
            posy = (CANVAS_HEIGHT * 60) / 900; 
            k = 1 - k;
            for (let j =0; j< this.board_size; ++j){
                temp.push(new BoardSpot(posx, posy, k));

                posy += BOARDSPOT_SIZE+ 3;
                k = 1 - k;
            }
            this.board.push(temp);
            posx += BOARDSPOT_SIZE + 3;
        }

        
    }

    _render(){
        // Render the board
        for (let i =0; i < this.board_size; ++i){
            for (let j =0; j< this.board_size; ++j){
                this.board[i][j]._render();
            }
        }

    }
}