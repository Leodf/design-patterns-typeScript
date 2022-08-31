import { Gastos } from "../produto/gastos";
import { Produto } from "../produto/produto";
import { ProdutoFabrica } from "./produtoFabrica";


export class GastosFabrica extends ProdutoFabrica {
    criarProduto(nome: string, valor: number, dataCriacao: string): Produto {
        return new Gastos(nome, valor, dataCriacao)
    }
}