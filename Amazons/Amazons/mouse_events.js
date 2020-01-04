function mouseMoved() {
    // console.log(mouseX, mouseY);
    for (let piece of game.curr_player.pieces) {
        if(piece._hovered()){
            return;
        }
    }
}

function mousePressed() {
    for (let piece of game.curr_player.pieces) {
        if (piece._clicked()){
            return;
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

            for(let k =0; k < game.board_size; ++k){
                for (j = 0; j < game.board_size; ++j){
                    if (game.board[k][j] != null){
                        d = dist(mouseX, 
                                mouseY, 
                                game.board[k][j].posx, 
                                game.board[k][j].posy);

                        if (d < BOARDSPOT_SIZE / 2){
                            piece._set_pos(game.board[k][j].posx, 
                                        game.board[k][j].posy);
                            game.piece_moved = true;
                        } else{
                            piece._reset_init_pos();
                        }
                    }
                }
            }
            piece.is_clicked = false;
            
            return;
        }
    }

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