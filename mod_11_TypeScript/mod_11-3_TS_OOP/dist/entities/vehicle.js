import { ConditionType } from "../types/condition.type.js";
export class Vehicle {
    constructor(brandName, modelName, year, condition) {
        this._price = null;
        this.brandName = brandName;
        this.modelName = modelName;
        this.year = year;
        this.condition = condition ? condition : ConditionType.used;
    }
    get price() {
        return this._price;
    }
    ;
    set price(price) {
        if (price === null) {
            this._price = null;
        }
        else {
            if (price <= 0) {
                this._price = 0;
            }
            else {
                this._price = price;
            }
        }
    }
    ;
    setUsedCondition() {
        this.condition = ConditionType.used;
    }
    ;
    getConditionString() {
        return this.condition === ConditionType.new ? 'новый' : 'подержанный';
    }
    ;
}
