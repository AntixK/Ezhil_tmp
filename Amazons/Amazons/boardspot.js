class BoardSpot extends Board {
    constructor(posx, posy, colour){
        super();
        this.posx = posx;
        this.posy = posy;
        this.init_colour = BOARDSPOT_COLOURS[colour]
        this.colour = BOARDSPOT_COLOURS[colour];
        this.size = BOARDSPOT_SIZE;

        this.has_disk = false;
    }

    _set_colour(colour){
        this.colour = colour;
    }

    _highlight(){
        this.colour = [];
        for (let c of this.init_colour){
            this.colour.push(c + 45);
        }
    }

    _reset_colour(){
        this.colour = this.init_colour;
    }


    _render(){
        noStroke();
        fill(this.colour);
        rect(this.posx,this.posy, this.size, this.size);
        // fill(BGN_COLOUR);
        // circle(this.posx, this.posy, 20);

    }
}