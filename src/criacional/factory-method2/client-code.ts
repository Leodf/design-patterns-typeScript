import { Receita } from "./produto/receita";
import { ReceitaFabrica } from "./produtoFactory/receitaFabrica";

const data = new Date()
const dataFormatada = data.toLocaleDateString()

const receitaFabrica = new ReceitaFabrica()

export class Usuario {
    private nome: string
    private idade: number
    private receitas: ListaReceitas[] = []

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    adicionarProduto(receita: ListaReceitas) {
        this.receitas.push(receita)
    }

    mostrarProdutos(){
        this.receitas.forEach((valor, indice) => console.log(indice, valor))
    }
}

export class ListaReceitas {
}

const joao = new Usuario('Joao', 25)

const receita1 = receitaFabrica.criarProduto('Salario', 1200, '29/10/2023')
const receita2 = receitaFabrica.criarProduto('Aluguel', 400, dataFormatada)

console.log(receita1)
console.log(receita2)