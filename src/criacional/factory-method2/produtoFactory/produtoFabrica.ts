import { Produto } from "../produto/produto";

export abstract class ProdutoFabrica {
    abstract criarProduto(nome: string, valor: number, dataCriacao: Date): Produto
}