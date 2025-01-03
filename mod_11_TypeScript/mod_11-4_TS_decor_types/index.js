var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// const a: any = 5;
// const b = <number>a;
//
// console.log(b.toExponential());
//
// const canvas = document.getElementById('canvas') as HTMLCanvasElement;
// if (canvas) {
//     canvas.offsetLeft;
// }
import { stringUtility } from "./string.utility.js";
function classDecorator(constructor) {
    // console.log(constructor);
}
function methodDecorator(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
let Test = class Test {
    constructor(text) {
        this.text = text;
    }
    setText(text) {
        if (typeof text === 'string') {
            this.text = text;
        }
        else if (typeof text === 'number') {
            this.text = text.toString();
        }
        else if (Array.isArray(text)) {
            this.text = text.join(' ');
        }
        else {
            throw new Error('unknown type');
        }
        return `строка: ${this.text}`;
    }
    ;
    getText() {
        return stringUtility.changeString(this.text);
    }
    ;
};
__decorate([
    methodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Test.prototype, "getText", null);
Test = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [String])
], Test);
const test = new Test('test');
// console.log(test.setText(3));
// console.log(test.setText('my string'));
// console.log(test.setText(['my', 'test', 'string']));
console.log(test.getText());
