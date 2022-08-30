import { Receita } from "./produto/receita";
import { ReceitaFabrica } from "./produtoFactory/receitaFabrica";

const data = new Date()


const receitaFabrica = new ReceitaFabrica()

const receita1 = receitaFabrica.criarProduto('Salario', 1200, data)
const receita2 = receitaFabrica.criarProduto('Aluguel', 400, data)

console.log(receita1)
console.log(receita2)