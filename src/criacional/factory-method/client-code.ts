import { CarFactory } from "./factories/car-factory";
import { randomCar } from "./main/random-vehicle";
import { randomNumbers } from "./utils/randomNumbers";

// const carFactory = new CarFactory()
// const customerNames = ['Ana', 'Joana', 'Helena', 'João']

// for (let i = 0; i < 10; i++) {
//     const vehicle = randomCar()
//     const name = customerNames[randomNumbers(customerNames.length)]
//     vehicle.pickUp(name)
//     vehicle.stop()
//     const newCar = carFactory.pickUp(name, `Novo Carro - ${randomNumbers(100)}`)
//     newCar.stop()
//     console.log('---')
// }

const car1 = new CarFactory()
car1.getVehicle('Fusca')

console.log(car1)