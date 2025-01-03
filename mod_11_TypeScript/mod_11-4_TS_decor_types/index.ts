// const a: any = 5;
// const b = <number>a;
//
// console.log(b.toExponential());
//
// const canvas = document.getElementById('canvas') as HTMLCanvasElement;
// if (canvas) {
//     canvas.offsetLeft;
// }
import {stringUtility} from "./string.utility.js";

function classDecorator(constructor: Function) {
    // console.log(constructor);
}

function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}



@classDecorator
class Test {
    public text: string;

    constructor(text: string) {
        this.text = text;
    }

    public setText(text: string): string;
    public setText(text: number): string;
    public setText(text: string[]): string;

    public setText(text: unknown): string {
        if (typeof text === 'string') {
            this.text = text;
        } else if (typeof text === 'number') {
            this.text = text.toString();
        } else if (Array.isArray(text)) {
            this.text = text.join(' ');
        } else {
            throw new Error('unknown type');
        }
        return `строка: ${this.text}`;
    };

    @methodDecorator
    getText(): string {
        return stringUtility.changeString(this.text);
    };
}

const test = new Test('test');
// console.log(test.setText(3));
// console.log(test.setText('my string'));
// console.log(test.setText(['my', 'test', 'string']));
console.log(test.getText());