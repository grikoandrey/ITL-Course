"use strict";
// let my: number = 10;
// console.log(my);
class TS_Intro {
    constructor() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
    ;
    setResult(value) {
        this.result = value;
    }
    ;
    sendResult() {
        try {
            // ajax
            throw new Error('Ошибка');
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            }
        }
    }
}
