import { MyDatabaseFunction } from "./db/my-database-function"
import { myDatabaseClassic as myDatabaseFromModuleA} from "./module_a"

const myDatabaseClassic = MyDatabaseFunction
myDatabaseClassic.add({ name: 'Roberto', age: 29 })
myDatabaseClassic.add({ name: 'Silvia', age: 45 })
myDatabaseClassic.add({ name: 'Luiza', age: 19 })
myDatabaseClassic.add({ name: 'Otavio', age: 36 })
myDatabaseClassic.show()

console.log(myDatabaseClassic === myDatabaseFromModuleA)