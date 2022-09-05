import { Receita } from "./produto/receita";
import { GastosFabrica } from "./produtoFactory/gastosFabrica";
import { InvestimentoFabrica } from "./produtoFactory/investimentosFabrica";
import { ReceitaFabrica } from "./produtoFactory/receitaFabrica";

const data = new Date()
const dataFormatada = data.toLocaleDateString()

const receitaFabrica = new ReceitaFabrica()
const gastoFabrica = new GastosFabrica()
const investimentoFabrica = new InvestimentoFabrica()

const receita1 = receitaFabrica.criarProduto('Salario', 1200, '29/10/2023')
const receita2 = receitaFabrica.criarProduto('Aluguel', 400, dataFormatada)
const gasto1 = gastoFabrica.criarProduto('Balada', 500, dataFormatada)
const investimento1 = investimentoFabrica.criarProduto('PETROBRAS', 1800, dataFormatada, 15.25, 45, 'Ação')

receita1.setCategoria('Salario Mensal')
receita1.alterarProduto()
console.log(receita1)
console.log(receita2)
console.log(gasto1)
console.log(investimento1)

