System.register(["./vehicle"], function (exports_1, context_1) {
    "use strict";
    var vehicle_1, Car;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vehicle_1_1) {
                vehicle_1 = vehicle_1_1;
            }
        ],
        execute: function () {
            Car = class Car extends vehicle_1.Vehicle {
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
            };
            exports_1("Car", Car);
        }
    };
});
//# sourceMappingURL=car.js.map