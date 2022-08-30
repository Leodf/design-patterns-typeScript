import { Produto } from "../produto/produto";
import { Receita } from "../produto/receita";
import { ProdutoFabrica } from "./produtoFabrica";


export class ReceitaFabrica extends ProdutoFabrica {
    criarProduto(nome: string, valor: number, dataCriacao: string): Produto {
        return new Receita(nome, valor, dataCriacao)
    }
}