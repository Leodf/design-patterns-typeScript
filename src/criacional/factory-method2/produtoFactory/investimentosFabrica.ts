
import { Investimentos } from "../produto/investimentos";
import { Produto } from "../produto/produto";
import { ProdutoFabrica } from "./produtoFabrica";


export class InvestimentoFabrica extends ProdutoFabrica {
    criarProduto(nome: string, valor: number, dataCriacao: string, precoMedio: number, qtdeCotas: number, tipoInvestimento: string): Produto {
        return new Investimentos(nome, valor, dataCriacao, precoMedio, qtdeCotas, tipoInvestimento)
    }
}