// let my: number = 10;
// console.log(my);

class TS_Intro {
    private result: number = 0;

    public getResult() {
        return this.result;
    };

    public setResult(value: number) {
        this.result = value;
    };

    public sendResult() {
        try {
            // ajax
            throw new Error('Ошибка');
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            }
        }
    }
}