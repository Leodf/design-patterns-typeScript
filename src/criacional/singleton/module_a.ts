import { MyDatabaseFunction } from "./db/my-database-function"

const myDatabaseClassic = MyDatabaseFunction
myDatabaseClassic.add({ name: 'Luiz', age: 30 })
myDatabaseClassic.add({ name: 'Maria', age: 50 })
myDatabaseClassic.add({ name: 'Eduardo', age: 25 })
myDatabaseClassic.add({ name: 'João', age: 45 })

export { myDatabaseClassic }