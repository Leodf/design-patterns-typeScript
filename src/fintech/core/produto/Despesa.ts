import { Produto } from "./Produto"

export class Despesa extends Produto{
    dataCriacao: string
    nomeDespesa: string
    valorDespesa: number

    constructor(dataCriacao: string, nomeDespesa: string, valorDespesa: number){
        super()
        this.dataCriacao = dataCriacao
        this.nomeDespesa = nomeDespesa
        this.valorDespesa = -valorDespesa
    }

    alterarProduto(nomeDespesa: string, valorDespesa: number): void {
        this.nomeDespesa = nomeDespesa
        this.valorDespesa = -valorDespesa
    }

    excluirProduto(): void {
        console.log('vc excluiu!!!')
    }
}