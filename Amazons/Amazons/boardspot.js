class BoardSpot extends Board {
    constructor(posx, posy, colour){
        super();
        this.posx = posx;
        this.posy = posy;
        this.colour = BOARDSPOT_COLOURS[colour];
        this.size = BOARDSPOT_SIZE;

        this.has_disk = false;
    }

    _set_colour(colour){
        this.colour = BOARDSPOT_COLOURS[colour];
    }

    _render(){
        noStroke();
        fill(this.colour);
        square(this.posx,this.posy, this.size);
        // fill(BGN_COLOUR);
        // circle(this.posx, this.posy, 20);

    }
}