import { Produto } from "./produto"

export class Gastos {  
    constructor(
        private nome: string, 
        private valor: number, 
        private readonly dataCriacao: string){
            this.nome = nome
            this.valor = -valor
            this.dataCriacao = dataCriacao
        }
    
    alterarProduto(nome: string, valor: number) {
        this.nome = nome
        this.valor = -valor
        console.log(`O nome mudou para ${this.nome} e o valor para ${this.valor}`)
    }

    excluirProduto(): void {
        console.log(`Receita criada dia ${this.dataCriacao} apagada`)
    }
}