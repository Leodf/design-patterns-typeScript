import { receitaFabrica } from "./produtoFactory/receitaFabrica";

const data = new Date()
console.log(data.toLocaleDateString(), typeof(data.toLocaleDateString()))


const receita1 = new receitaFabrica()
receita1.criarProduto('Salario', 1200, data)

console.log(receita1)