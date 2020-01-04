class Amazons extends AbstractStrategyGame {
    constructor(board_size){
        super([new Player1(), new Player1()]);
        this.board = [];
        this.board_size = board_size;
        this.awaiting_move = false;
        
    }

    _reset_canvas(){
        background(BGN_COLOUR);

        // Draw the checkerboard
        let temp = [];
        let k = 1;
        let posx = (CANVAS_WIDTH * 160) / 1000;
        let posy = (CANVAS_HEIGHT * 90) / 900; 
        for (let i = 0; i < this.board_size; ++i){
            temp = [];
            posy = (CANVAS_HEIGHT * 90) / 900; 
            k = 1 - k;
            for (let j =0; j< this.board_size; ++j){
                temp.push(new BoardSpot(posx, posy, k));

                posy += BOARDSPOT_SIZE + 3;
                k = 1 - k;
            }
            this.board.push(temp);
            posx += BOARDSPOT_SIZE + 3;
        }

        // Initialise the players
        function delta(x){
            if (x != 0){
                return 0;
            } else {
                return 1;
            }

        }
        // Player 0
        for (let i=0; i < 4; ++i){
            let k = i * 30 + 3 * delta(i % 3);
            // console.log( ~~ (k / this.board_size), k % this.board_size);
            let x = this.board[~~ (k / this.board_size)][k % this.board_size].posx;
            let y = this.board[~~ (k / this.board_size)][k % this.board_size].posy;

            this.players[0].pieces.push(new Disk(x, y, PLAYER_COLOURS[0]));
        }

        // Player 1
        for (let i=0; i < 4; ++i){
            let k = 9 + (i * 30) - 3 * delta(i % 3);
            console.log(k, ~~ (k / this.board_size), k % this.board_size);
            let x = this.board[~~ (k / this.board_size)][k % this.board_size].posx;
            let y = this.board[~~ (k / this.board_size)][k % this.board_size].posy;

            this.players[1].pieces.push(new Disk(x, y, PLAYER_COLOURS[1]));
        }
        
    }

    _render(){
        // Render the board
        for (let i =0; i < this.board_size; ++i){
            for (let j =0; j< this.board_size; ++j){
                if (this.board[i][j] != null){
                    this.board[i][j]._render();
                }
            }
        }
        this.players[0]._render();
        this.players[1]._render();

        // this.players[0]._ask_move();


    }
}
