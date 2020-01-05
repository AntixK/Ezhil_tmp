class Disk extends Token {
    constructor(posx, posy, colour, ids){
        super();
        this.posx = posx;
        this.posy = posy;

        // Save the initial position of the marble to reset
        this.init_posx = posx;
        this.init_posy = posy;
        this.colour = colour;

        // board id for checking for valid moves
        this.id = ids;

        this.shade = [];
        for (let c of this.colour){
            this.shade.push(c - 45);
        }
        this.radius = DISK_RADIUS;

        // offset to track while being dragged
        this.xoffset = 0;
        this.yoffset = 0;

        this.is_clicked = false;
        this.is_hover = false;
        this.on_ring = false;

    }

    _set_pos(posx, posy, id) {
        this.posx = posx;
        this.posy = posy;

        this.init_posx = posx;
        this.init_posy = posy;

        this.id = id;
    }

    _reset_init_pos() {
        this.posx = this.init_posx;
        this.posy = this.init_posy;

    }

    _clicked() {
        let d = dist(mouseX, mouseY, this.posx, this.posy);

        if (d < this.radius / 2) {
            this.xoffset = mouseX - this.posx;
            this.xoffset = mouseY - this.posy;

            this.is_clicked = true;
            this.radius = DISK_RADIUS;

        } else {
            this.xoffset = 0;
            this.yoffset = 0;
            this.is_clicked = false;

        }
        return this.is_clicked;
    }

    _dragged() {
        if (this.is_clicked) {
            this.posx = mouseX - this.xoffset;
            this.posy = mouseY - this.yoffset;

        }

    }

    _hovered() {
        let d = dist(mouseX, mouseY, this.posx, this.posy);

        if (d < this.radius / 2) {
            this.radius = DISK_RADIUS + 4;
            this.is_hover = true;


        } else {
            this.radius = DISK_RADIUS;
            this.is_hover = false;
        }
        return this.is_hover;

    }

    _render(){
        noStroke();
        fill(this.colour);
        circle(this.posx,this.posy, this.radius);
        fill(this.shade);
        circle(this.posx,this.posy, this.radius - 10);
    }

}