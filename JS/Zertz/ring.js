class Ring extends Board {
    constructor() {

        super();
        this.has_marble = false;
        this.is_removable = true;
        this.is_clicked = false;
        this.is_hover = false;

        this.radius = RING_RADIUS;
    }

    _initialize(posx,
        posy,
        colour = 245) {
        this.posx = posx;
        this.posy = posy;
        this.colour = colour;

    }

    _clicked() {
        let d = dist(mouseX, mouseY, this.posx, this.posy);

        if (d < this.radius / 2) {
            this.is_clicked = true;
        } else {
            this.is_clicked = false;
        }
        return this.is_clicked;
    }

    _hovered() {
        let d = dist(mouseX, mouseY, this.posx, this.posy);

        if (d < this.radius / 2) {
            this.is_hover = true;
            this.radius = RING_RADIUS + 2;


        } else {
            this.radius = RING_RADIUS;
            this.is_hover = false;
        }
        return this.is_hover;

    }

    _render() {
        noStroke();
        fill(this.colour);
        circle(this.posx, this.posy, this.radius);
        fill(BGN_COLOUR);
        circle(this.posx, this.posy, this.radius / 3.25);
    }
}