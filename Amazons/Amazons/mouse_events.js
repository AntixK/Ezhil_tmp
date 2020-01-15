function mouseMoved() {
    for (let piece of game.curr_player.pieces) {
        if(piece._hovered()){
            let valid_moves = game._get_possible_moves(piece.id)
            for (let move of valid_moves){
                game.board[move.x][move.y]._highlight();
            }

            return;
        }else{
            for(let k =0; k < game.board_size; ++k){
                for (j = 0; j < game.board_size; ++j){
                    if (game.board[k][j] != null){
                        game.board[k][j]._reset_colour();
                    }
                }
            }

        }
    }
}

function mousePressed() {

    if (!game.piece_moved){
        for (let piece of game.curr_player.pieces) {
            if (piece._clicked()){
                return;
            }
            
        }
    }
}


function mouseDragged() {
    for (let piece of game.curr_player.pieces) {
        piece._dragged();
    }
}


function mouseReleased() {    
    for (let piece of game.curr_player.pieces) {
        if (piece._clicked()){
            let valid_moves = game._get_possible_moves(piece.id);

            if (valid_moves.length > 0){
                for (let move of valid_moves) {
                    d = dist(mouseX, 
                        mouseY, 
                        game.board[move.x][move.y].posx, 
                        game.board[move.x][move.y].posy);

                    if (d < BOARDSPOT_SIZE / 2){
                        game.board[piece.id.x][piece.id.y].has_disk = false;
                        piece._set_pos(game.board[move.x][move.y].posx, 
                                    game.board[move.x][move.y].posy,
                                    {x: move.x, y: move.y});
                        
                        game.board[move.x][move.y].has_disk = true;
                        game.piece_moved = true;
                        

                    } else{
                        piece._reset_init_pos();
                    }            

                }
            } else {
                piece._reset_init_pos();
            }
            piece.is_clicked = false;
            
            return;
        }
    }

    // Remove board tiles only when a piece is moved previously
    if (game.piece_moved){
        for(let k =0; k < game.board_size; ++k){
            for (j = 0; j < game.board_size; ++j){
                if (game.board[k][j] != null){
                    d = dist(mouseX, 
                            mouseY, 
                            game.board[k][j].posx, 
                            game.board[k][j].posy);

                    if (d < BOARDSPOT_SIZE / 2){
                        game.board[k][j] = null;
                        game.arrow_placed = true;
                        return;
                    }
                }
            }
        }
    }

    
}