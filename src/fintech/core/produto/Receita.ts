import { Produto } from "./Produto";

export class Receita extends Produto{
    dataCriacao: string
    nomeReceita: string
    valorReceita: number

    constructor(dataCriacao: string, nomeReceita: string, valorReceita: number){
        super()
        this.dataCriacao = dataCriacao
        this.nomeReceita = nomeReceita
        this.valorReceita = valorReceita
    }

    alterarProduto(nomeReceita: string, valorReceita: number): void {
        this.nomeReceita = nomeReceita
        this.valorReceita = valorReceita
    }

    excluirProduto(): void {
        console.log('vc excluiu!!!')
    }
}