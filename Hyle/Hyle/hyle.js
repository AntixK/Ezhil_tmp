class Hyle extends AbstractStrategyGame{
    constructor(){
        super();
        this.disks =[];
        this.board = [];
        this.board_size = 7;
        this.colours = [...Object.keys(DISK_COLOURS)];
    }

    _reset_canvas(){
        background(BGN_COLOUR);

        // Draw Disks
        let posx = (CANVAS_WIDTH * 845) / 1000;
        let posy = (CANVAS_HEIGHT * 150) / 900; 
        
        for (let i = 0; i< this.colours.length; ++i){
            this.disks.push(new Disk(posx, posy, DISK_COLOURS[this.colours[i]]));
            posy += BOARDSPOT_RADIUS + 10;
        }

        //Draw Board
        let temp = [];
        posx = (CANVAS_WIDTH * 145) / 1000;
        posy = (CANVAS_HEIGHT * 150) / 900; 
        for (let i = 0; i < this.board_size; ++i){
            temp = [];
            posy = (CANVAS_HEIGHT * 150) / 900; 
            for (let j =0; j< this.board_size; ++j){
                temp.push(new BoardSpot(posx, posy));

                posy += BOARDSPOT_RADIUS+ 10;
            }
            this.board.push(temp);
            posx += BOARDSPOT_RADIUS + 10;
        }

    }
    _render(){
        // Render the board
        for (let i =0; i < this.board_size; ++i){
             for (let j =0; j< this.board_size; ++j){
                 this.board[i][j]._render();
             }
        }

        // Render the disks
        for (let i =0; i < this.disks.length; ++i){
            this.disks[i]._render();
        }


    }


}