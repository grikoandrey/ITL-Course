System.register(["../types/condition.type"], function (exports_1, context_1) {
    "use strict";
    var condition_type_1, Vehicle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (condition_type_1_1) {
                condition_type_1 = condition_type_1_1;
            }
        ],
        execute: function () {
            Vehicle = class Vehicle {
                constructor(brandName, modelName, year, condition) {
                    this._price = null;
                    this.brandName = brandName;
                    this.modelName = modelName;
                    this.year = year;
                    this.condition = condition ? condition : condition_type_1.ConditionType.used;
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
                    this.condition = condition_type_1.ConditionType.used;
                }
                ;
                getConditionString() {
                    return this.condition === condition_type_1.ConditionType.new ? 'новый' : 'подержанный';
                }
                ;
            };
            exports_1("Vehicle", Vehicle);
        }
    };
});
//# sourceMappingURL=vehicle.js.map