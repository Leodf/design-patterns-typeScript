import { Usuario } from "./core/Usuario"
import { Perfil } from './core/Perfil'
import { ReceitaFabrica } from "./core/produtoFabrica/ReceitaFabrica"
import { DespesaFabrica } from "./core/produtoFabrica/DespesaFabrica"

const Joao = new Perfil('João', 'joao@gmail.com.br', '123456', '17/08/2001', 'masculino')

const usuario1 = new Usuario(1, Joao)

usuario1.adicionarCarteira('vaiTourinho', '05/09/2022')
usuario1.adicionarCarteira('Itau', '10/09/2022')
usuario1.adicionarCarteira('Santander', '15/09/2022')

// console.log(usuario1)
usuario1.alterarNomeCarteira(0, 'vaiUrsinhoooo')
// console.log(usuario1)


const receitaFabrica = new ReceitaFabrica()
const receita1 = receitaFabrica.adicionarProduto('05/09/2022', 'Aluguel', 1200)
const receita2 = receitaFabrica.adicionarProduto('05/09/2022', 'Salario', 300)

const despesaFabrica = new DespesaFabrica()
const despesa1 = despesaFabrica.adicionarProduto('05/09/2022', 'Comida', 300)
const despesa2 = despesaFabrica.adicionarProduto('05/09/2022', 'Roupa', 400)
const despesa3 = despesaFabrica.adicionarProduto('06/09/2022', 'Balada', 1200)

usuario1.carteiras[0].adicionarProduto(receita1)
usuario1.carteiras[0].adicionarProduto(receita2)
usuario1.carteiras[0].adicionarProduto(despesa1)
usuario1.carteiras[0].adicionarProduto(despesa2)
usuario1.carteiras[0].adicionarProduto(despesa3)

usuario1.carteiras[0].listarProdutos()
