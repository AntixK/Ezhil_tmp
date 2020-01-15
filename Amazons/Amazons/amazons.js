class Amazons extends AbstractStrategyGame {
    constructor(board_size){
        super([new Player1(), new Player1()]);
        this.board = [];
        this.board_size = board_size;

        this.piece_moved = false;
        this.arrow_placed = false;
        
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
            let id = {x:~~ (k / this.board_size),
                      y:k % this.board_size
                      };
            this.players[0].pieces.push(new Disk(x, 
                                                 y, 
                                                 PLAYER_COLOURS[0], 
                                                 id));
            this.board[~~ (k / this.board_size)][k % this.board_size].has_disk = true;

        }

        // Player 1
        for (let i=0; i < 4; ++i){
            let k = 9 + (i * 30) - 3 * delta(i % 3);
            let x = this.board[~~ (k / this.board_size)][k % this.board_size].posx;
            let y = this.board[~~ (k / this.board_size)][k % this.board_size].posy;
            let id = {x:~~ (k / this.board_size),
                      y:k % this.board_size
                     };
            this.players[1].pieces.push(new Disk(x, 
                                                 y, 
                                                 PLAYER_COLOURS[1], 
                                                 id));
            this.board[~~ (k / this.board_size)][k % this.board_size].has_disk = true;
                                        

        }
        
    }

    _get_possible_moves(id){
        let moves = []

        // moves that go left
        for (let i =id.x - 1; i >= 0; --i){

            if (this.board[i][id.y] === null || 
                this.board[i][id.y] === undefined ||
                this.board[i][id.y].has_disk){
                break;
            } else{
             moves.push({x: i, y:id.y})
            }
        }

        // moves that go right
        for (let i =id.x + 1; i < this.board_size; ++i){

            if (this.board[i][id.y] === null || 
                this.board[i][id.y] === undefined ||
                this.board[i][id.y].has_disk){
                break;
            } else{
             moves.push({x: i, y:id.y})
            }
        }        

        // moves that go up
        for (let i =id.y - 1; i >= 0; --i){

            if (this.board[id.x][i] === null ||
                 this.board[id.x][i] === undefined ||
                 this.board[id.x][i].has_disk){
                break;
            } else{
             moves.push({x: id.x, y:i})
            }
        }

        // moves that go down
        for (let i =id.y + 1; i < this.board_size; ++i){

            if (this.board[id.x][i] === null || 
                this.board[id.x][i] === undefined ||
                this.board[id.x][i].has_disk){
                break;
            } else{

             moves.push({x: id.x, y:i})
            }
        }

        // moves that go down-right
        for (let i =id.x + 1, j =id.y + 1; i < this.board_size && j < this.board_size; ++i, ++j){
            if (this.board[i][j] === null || 
                this.board[i][j] === undefined ||
                this.board[i][j].has_disk){
                break;
            } else{

            moves.push({x: i, y:j})
            }
        }

        // moves that go top-right
        for (let i =id.x + 1, j =id.y - 1; i < this.board_size && j >= 0; ++i, --j){
            if (this.board[i][j] === null || 
                this.board[i][j] === undefined ||
                this.board[i][j].has_disk){
                break;
            } else{

            moves.push({x: i, y:j})
            }
        }
    
        // moves that go top-left
        for (let i =id.x - 1, j =id.y - 1; i >= 0 && j >= 0; --i, --j){
            if (this.board[i][j] === null || 
                this.board[i][j] === undefined ||
                this.board[i][j].has_disk){
                break;
            } else{

            moves.push({x: i, y:j})
            }
        }

        // moves that go down-left
        for (let i =id.x - 1, j =id.y + 1; i >=0 && j < this.board_size; --i, ++j){
            if (this.board[i][j] === null || 
                this.board[i][j] === undefined ||
                this.board[i][j].has_disk){
                break;
            } else{

            moves.push({x: i, y:j})
            }
        }

        return moves;

    }

    _is_move_complete(){
        return this.piece_moved && this.arrow_placed;
    }

    _reset_move_flags(){
        this.piece_moved = false;
        this.arrow_placed = false;
    }

    // _check_winner(){
    //     for (let player of this.players){
    //         for (let piece of player.pieces){
    //             let moves = this._get_possible_moves(piece.id);
    //             if (moves == []){
    //                 isover = isover && true;
    //             } else {
    //                 isover = false;
    //             }
    //         }
    //     }

    // }

    _is_over(){
        let isover = true;
        for (let piece of this.players[0].pieces){
            let moves = this._get_possible_moves(piece.id);
            if (moves == []){
                isover = isover && true;
            } else {
                isover = false;
            }
        }

        for (let piece of this.players[1].pieces){
            let moves = this._get_possible_moves(piece.id);
            if (moves == []){
                isover = isover && true;
            } else {
                isover = false;
            }
        }

        return isover;
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

    }
}
