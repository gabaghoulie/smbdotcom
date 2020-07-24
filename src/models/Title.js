class Title {
    constructor(l, sp, x, y, prob, webgl0 = false, font0 = false) {
        this.letters = [];
        let temp_ltr = '';
        for (let i = 0; i < l.length; i++) {
            temp_ltr = new Letter(l.charAt(i), webgl0);
            this.letters.push(temp_ltr);
        }
        this.char_spacing = sp;
        this.x0 = x;
        this.y0 = y;
        this.change_P = prob;
        this.font = font0;
        return;
    }
        
    drawSelf() {
        let x = this.x0;
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].drawSelf(x, this.y0, this.font);
            x += this.char_spacing;
            if (random(1) <= this.change_P) {
                this.letters[i].changeColor();
            }
        }
        noFill();
        return;
    }

    changeColor() {
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].changeColor();
        }
        return;
    }

    setXY(x, y) {
        this.x0 = x;
        this.y0 = y
    }
}