import { Categoria, Produto } from "./produto"

export class Receita implements Produto{  
    constructor(
        private nome: string, 
        private valor: number, 
        private readonly dataCriacao: string,
        private categoria: string){}
    

    setCategoria(categoria: string) {
        return this.categoria = categoria
    }

    alterarProduto(nome: string, valor: number) {
        this.nome = nome
        this.valor = valor
        console.log(`O nome mudou para ${this.nome} e o valor para ${this.valor}`)
    }

    excluirProduto(): void {
        console.log(`Receita criada dia ${this.dataCriacao} apagada`)
    }
}