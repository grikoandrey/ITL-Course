import {ConditionType} from "./types/condition.type";
import {Car} from "./entities/car";
import {Boat} from "./entities/boat";



const auto1 = new Car('Mercedes', 'C220', 2022, ConditionType.new);
auto1.price = -1;
auto1.setUsedCondition();
console.log(auto1.toString());

const auto2 = new Car('BMW', '520', 2023, ConditionType.new);
auto2.price = 40000;
Car.getVehicleName();
console.log(auto2.toString());

const boat1 = new Boat('Yamaha', '1500', 2020, 28);
boat1.setUsedCondition();
boat1.price = 80000;
Boat.vehicleName;
console.log(boat1.toString());