import { Vehicle } from "./vehicle.js";
export class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.fuel = 'diesel';
    }
    toString() {
        return `Автомобиль марки: ${this.brandName}, модель: ${this.modelName}, год выпуска: ${this.year}, 
        топливо: ${this.fuel}, состояние: ${this.getConditionString()}, 
        цена: ${this._price ? this._price : 'нифига'}`;
    }
    ;
    getTypes() {
        return ['асфальт', 'щебень'];
    }
    ;
    static getVehicleName() {
        return 'Car';
    }
    ;
}
