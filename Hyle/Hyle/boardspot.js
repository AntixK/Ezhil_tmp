class BoardSpot extends Board {
    constructor(posx, posy){
        super();
        this.posx = posx;
        this.posy = posy;
        this.colour = BOARDSPOT_COLOUR;
        this.radius = BOARDSPOT_RADIUS;

        this.has_disk = false;
    }

    _render(){
        noStroke();
        fill(this.colour);
        circle(this.posx,this.posy, this.radius);
        fill(BGN_COLOUR);
        circle(this.posx,this.posy, 10);



    }
}