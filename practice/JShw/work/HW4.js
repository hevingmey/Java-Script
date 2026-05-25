class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }

    print(text) {
        document.write(`
            <p style="
                font-size: ${this.fontSize}px;
                color: ${this.fontColor};
                font-family: ${this.fontFamily};
            ">
                ${text}
            </p>
        `);
    }
}

const printer = new PrintMachine(24, "blue", "Arial");

printer.print("Hello master");