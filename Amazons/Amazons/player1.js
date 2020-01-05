class Player1 extends Player{
    constructor(){
        super();
        this.pieces = [];
    }

    _render(){
        for (let piece of this.pieces){
            piece._render();
        }
    }
}