class AbstractStrategyGame{

    constructor(players){
        this.players = players;
        this.curr_player_id = 0;
        this.curr_player = this.players[this.curr_player_id];

        this.piece_moved = false;
        this.arrow_placed = false;
    }

    _is_move_complete(){
        return this.piece_moved && this.arrow_placed;
    }

    get curr_opponent_id(){
        return 1 - this.curr_player_id;
    }

    get curr_opponent(){
        return this.players[this.curr_opponent_id];
    }

    _switch_player(){
        if (this._is_move_complete()){
            this.piece_moved = false;
            this.arrow_placed = false;
            this.curr_player = this.curr_opponent;
            this.curr_player_id = this.curr_opponent_id;
        }
    }

    _play_move(move){
        result = this._make_move(move);
        this._switch_player();
        return result
    }

    play(){

        game._render();

        // if (this._is_over()){
        //     break;
        // }
        this._switch_player();

    }

    // Abstract 
    _get_move(){
        return this.curr_player.ask_move();
    }

    _make_move(move){
        console.error("Not Implemented");
    }

    _get_possible_moves(){
        console.error("Not Implemented");
    }

    _is_over(){
        console.error("Not Implemented");
    }

    _reset_canvas(){
        console.error("Not Implemented");
    }
    
    _render(){
        console.error("Not Implemented");
    }

    
    
}