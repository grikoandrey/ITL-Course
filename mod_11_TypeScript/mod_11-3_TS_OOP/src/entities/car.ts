import {Vehicle} from "./vehicle.js";
import {VehicleInterface} from "../interface/vehicle.interface";
import {AutoInterface} from "../interface/auto.interface";

export class Car extends Vehicle implements VehicleInterface, AutoInterface {
    public fuel = 'diesel';

    public toString(): string {
        return `Автомобиль марки: ${this.brandName}, модель: ${this.modelName}, год выпуска: ${this.year}, 
        топливо: ${this.fuel}, состояние: ${this.getConditionString()}, 
        цена: ${this._price ? this._price : 'нифига'}`
    };

    public getTypes(): string[] {
        return ['асфальт', 'щебень'];
    };

    static getVehicleName() {
        return 'Car'
    };
}