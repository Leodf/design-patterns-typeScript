import { Produto } from "../produto/Produto";
import { Despesa } from "../produto/Despesa";
import { ProdutoFabrica } from "./ProdutoFabrica";

export class DespesaFabrica extends ProdutoFabrica{
    adicionarProduto(dataCriacao: string, nome: string, valor: number): Produto {
        const newDespesa = new Despesa(dataCriacao, nome, valor)
        return newDespesa
    }
}