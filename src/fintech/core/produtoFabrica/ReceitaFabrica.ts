import { Produto } from "../produto/Produto";
import { Receita } from "../produto/Receita";
import { ProdutoFabrica } from "./ProdutoFabrica";

export class ReceitaFabrica extends ProdutoFabrica{
    adicionarProduto(dataCriacao: string, nome: string, valor: number): Produto {
        const newReceita = new Receita(dataCriacao, nome, valor)
        return newReceita
    }
}