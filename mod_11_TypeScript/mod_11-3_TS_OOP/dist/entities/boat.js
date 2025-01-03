import { Vehicle } from "./vehicle.js";
export class Boat extends Vehicle {
    constructor(brandName, modelName, year, length, condition) {
        super(brandName, modelName, year, condition);
        this.length = length;
    }
    toString() {
        return `Катер марки: ${this.brandName}, модель: ${this.modelName}, год выпуска: ${this.year}, 
        состояние: ${this.getConditionString()}, длина: ${this.length} ft,
        цена: ${this._price ? this._price : 'нифига'}`;
    }
    ;
    getTypes() {
        return ['океан', 'море', 'река'];
    }
    ;
}
Boat.vehicleName = 'Boat';
