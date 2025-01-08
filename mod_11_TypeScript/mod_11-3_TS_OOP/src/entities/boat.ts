import {Vehicle} from "./vehicle";
import {VehicleInterface} from "../interface/vehicle.interface";
import {ConditionType} from "../types/condition.type";

export class Boat extends Vehicle implements VehicleInterface {
    public static vehicleName = 'Boat';
    public length: number;

    constructor(brandName: string, modelName: string, year: number, length: number, condition?: ConditionType) {
        super(brandName, modelName, year, condition);
        this.length = length;
    }

    public toString(): string {
        return `Катер марки: ${this.brandName}, модель: ${this.modelName}, год выпуска: ${this.year}, 
        состояние: ${this.getConditionString()}, длина: ${this.length} ft,
        цена: ${this._price ? this._price : 'нифига'}`
    };

    public getTypes(): string[] {
        return ['океан', 'море', 'река'];
    };
}