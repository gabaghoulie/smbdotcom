class Letter {
    constructor(ltr, webgl0 = false) {
        this.character = ltr;
        this.rgb_color = 0;
        this.changeColor();
        if (webgl0) {
            this.webgl = true;
            this.txt = createGraphics(width, height, WEBGL);
        }
        return;
    }
    
    changeColor() {
        this.rgb_color = generateRandomColor();
        return;
    }
    
    drawSelf(x, y, font = false) {
        if (this.webgl) {
            this.txt.fill(this.rgb_color);
            if (font) {
                this.txt.textFont(font);
            }
            this.txt.text(this.character, x, y);
            texture(this.txt);
            plane(width, height);
        }
        else {
            fill(this.rgb_color);
            text(this.character, x, y);
        }
        return;
    }

    getCharacter() {
        return this.character;
    }
}