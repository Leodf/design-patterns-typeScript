import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/randomNumbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCar(): Vehicle {
    const carFactory = new CarFactory()
    const bicycleFactory = new BicycleFactory()

    const car1 = carFactory.getVehicle('Fusca')   
    const car2 = carFactory.getVehicle('Celta preto')
    const bike = bicycleFactory.getVehicle('Bicicleta')
    const cars = [car1, car2, bike]
    return cars[randomNumbers(cars.length)]
}

