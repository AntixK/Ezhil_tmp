class Marble extends Token {
    constructor(posx,
        posy,
        colour) {
        super();
        // Save the initial position of the marble to reset
        this.init_posx = posx;
        this.init_posy = posy;

        this.posx = posx;
        this.posy = posy;

        this.radius = MARBLE_RADIUS

        if (!colour in MARBLE_COLOURS) {
            console.error("Undefined colour given to marble.");
        }
        this.colour = MARBLE_COLOURS[colour];
        this.on_ring = false;
        this.ring_id = null;
        this.is_clicked = false;
        this.is_hover = false;

        // offset to track while being dragged
        this.xoffset = 0;
        this.yoffset = 0;

    }

    _set_pos(posx, posy) {
        this.posx = posx;
        this.posy = posy;

        this.init_posx = posx;
        this.init_posy = posy;
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
            this.radius = MARBLE_RADIUS + 4;
            this.is_hover = true;


        } else {
            this.radius = MARBLE_RADIUS;
            this.is_hover = false;
        }
        return this.is_hover;

    }

    _render() {
        noStroke();
        fill(this.colour);
        circle(this.posx, this.posy, this.radius);
        fill(255);
        circle(this.posx - 6, this.posy - 6, 10);

    }

};