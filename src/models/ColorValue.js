class ColorValue {
    constructor(c) {
        this.r = red(c);
        this.g = green(c);
        this.b = blue(c);
        return;
    }

    getR() {
        return this.r;
    }
    getG() {
        return this.g;
    }
    getB() {
        return this.b;
    }

    setR(new_r) {
        this.r = new_r;
        return;
    }
    setG(new_g) {
        this.g = new_g;
        return;
    }
    setB(new_b) {
        this.b = new_b;
        return;
    }

    getAllVals() {
        return [this.r, this.g, this.b];
    }
}