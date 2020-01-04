class Player1 extends Player{
    constructor(){
        super();
        this.pieces = [];
    }

    _ask_move(){        
    }

    _render(){
        for (let piece of this.pieces){
            piece._render();
        }
    }
}