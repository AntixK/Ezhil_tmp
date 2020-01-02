function mousePressed() {
    for (let marble of game.marbles) {
        if (marble._clicked()) {
            return;
        }
    }

    for (let ring of game.rings) {
        if (ring != null) {
            if (ring._clicked()) {
                return;
            }
        }
    }
}


function mouseDragged() {
    for (let marble of game.marbles) {
        marble._dragged();
    }
}

function mouseMoved() {
    for (let marble of game.marbles) {
        if (marble._hovered()) {
            return;
        }
    }

    for (let i = 0; i < game.rings.length; ++i) {
        if (game.rings[i] != null) {
            if (game.rings[i]._hovered()) {
                let ns = game._get_neighbours(i);
                ns = ns[0];
                // console.log(ns);
                // Optional Neighbour Highlight
                for (let j = 0; j < game.rings.length; ++j){
                    if (ns.includes(j)){
                        if (game.rings[j] != null){
                            game.rings[j].colour = 180;
                        }
                    }
                    else {
                        if (game.rings[j] != null){
                            game.rings[j].colour = 245;
                        }
                    }
                }
                return;

            }
        }
    }
}



function mouseReleased() {

    // Check if the gradded marble is on any ring
    for (let marble of game.marbles) {

        if (marble._clicked()) {
            for (let i = 0; i < game.rings.length; ++i) {
                if (game.rings[i] != null) {
                    let d = dist(mouseX,
                                 mouseY, 
                                 game.rings[i].posx, 
                                 game.rings[i].posy);

                    if (d < RING_RADIUS / 2 && !game.rings[i].has_marble) {
                        marble._set_pos(game.rings[i].posx, game.rings[i].posy);
                        
                        if (marble.on_ring){
                            let ring_id = marble.ring_id;

                            game.rings[ring_id].has_marble = false;
                            
                            marble.on_ring = false;
                        }
                        marble.on_ring = true;
                        marble.ring_id = i;
                        game.rings[i].has_marble = true;

                        game._check_if_captured();
                    } else {
                        marble._reset_init_pos();
                    }
                    marble.is_clicked = false;
                }
            }
            
        }

    }
    // Check if any of the rings were clicked

    for (let i = 0; i < game.rings.length; ++i) {
        if (game.rings[i] != null) {
            if (game.rings[i].is_clicked && game.rings[i].is_removable) {
                game.rings[i] = null;
                return;
            }

        }
    }
}