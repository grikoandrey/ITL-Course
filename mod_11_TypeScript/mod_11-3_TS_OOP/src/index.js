System.register(["./types/condition.type", "./entities/car", "./entities/boat"], function (exports_1, context_1) {
    "use strict";
    var condition_type_1, car_1, boat_1, auto1, auto2, boat1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (condition_type_1_1) {
                condition_type_1 = condition_type_1_1;
            },
            function (car_1_1) {
                car_1 = car_1_1;
            },
            function (boat_1_1) {
                boat_1 = boat_1_1;
            }
        ],
        execute: function () {
            auto1 = new car_1.Car('Mercedes', 'C220', 2022, condition_type_1.ConditionType.new);
            auto1.price = -1;
            auto1.setUsedCondition();
            console.log(auto1.toString());
            auto2 = new car_1.Car('BMW', '520', 2023, condition_type_1.ConditionType.new);
            auto2.price = 40000;
            car_1.Car.getVehicleName();
            console.log(auto2.toString());
            boat1 = new boat_1.Boat('Yamaha', '1500', 2020, 28);
            boat1.setUsedCondition();
            boat1.price = 80000;
            boat_1.Boat.vehicleName;
            console.log(boat1.toString());
        }
    };
});
//# sourceMappingURL=index.js.map