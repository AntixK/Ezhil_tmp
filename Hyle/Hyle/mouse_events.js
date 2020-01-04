function mousePressed() {
    for (let disk of game.disks) {
        if (disk._clicked()) {
            return;
        }
    }
}


function mouseDragged() {
    for (let disk of game.disks) {
        disk._dragged();
    }
}

function mouseMoved() {
    for (let disk of game.disks) {
        if (disk._hovered()) {
            return;
        }
    }    
}


function mouseReleased() {

    // Check if the dragged disk is on any ring
    for (let disk of game.disks) {

        if (disk._clicked()) {
            for (let i = 0; i < game.board_size; ++i) {
                for (let j = 0; j < game.board_size; ++j){

                    if (!game.board[i][j].has_disk){
                        let d = dist(mouseX,
                                     mouseY, 
                                     game.board[i][j].posx, 
                                     game.board[i][j].posy);

                        if (d < BOARDSPOT_RADIUS / 2) {

                            disk.on_ring = true;
                            game.board[i][j].has_disk = true;
                            disk._set_pos(game.board[i][j].posx, 
                                          game.board[i][j].posy);
                        } else {
                            disk._reset_init_pos();
                        }

                    } 
                    disk.is_clicked = false;
                }
            }
            return;
            
        }

    }
    
}