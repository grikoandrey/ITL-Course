System.register(["./vehicle"], function (exports_1, context_1) {
    "use strict";
    var vehicle_1, Boat;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vehicle_1_1) {
                vehicle_1 = vehicle_1_1;
            }
        ],
        execute: function () {
            Boat = class Boat extends vehicle_1.Vehicle {
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
            };
            exports_1("Boat", Boat);
            Boat.vehicleName = 'Boat';
        }
    };
});
//# sourceMappingURL=boat.js.map