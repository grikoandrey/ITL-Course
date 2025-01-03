import {ConditionType} from "../types/condition.type.js";
import {VehicleInterface} from "../interface/vehicle.interface.js";

export abstract class Vehicle {
    readonly brandName: string;
    readonly modelName: string;
    readonly year: number;
    private condition: ConditionType;
    protected _price: number | null = null;

    abstract toString(): string;
    abstract getTypes(): string[];

    constructor(brandName: string, modelName: string, year: number, condition?: ConditionType) {
        this.brandName = brandName;
        this.modelName = modelName;
        this.year = year;
        this.condition = condition ? condition : ConditionType.used;
    }

    get price() {
        return this._price;
    };

    set price(price: number | null) {
        if (price === null) {
            this._price = null;
        } else {
            if (price <=0) {
                this._price = 0;
            } else {
                this._price = price;
            }
        }
    };

    public setUsedCondition(): void {
        this.condition = ConditionType.used;
    };

    protected getConditionString() {
        return this.condition === ConditionType.new ? 'новый' : 'подержанный';
    };
}