import { Produto } from './produto/Produto'

export class Carteira {
    private _nomeCarteira: string
    private dataCriacao: string
    produtos: Produto[] = []

    constructor(nomeCarteira: string, dataCriacao: string) {
        this._nomeCarteira = nomeCarteira
        this.dataCriacao = dataCriacao
    }

    get nomeCarteira(){
        return this._nomeCarteira
    }

    set nomeCarteira(nomeCarteira: string){
        this._nomeCarteira = nomeCarteira
    }

    adicionarProduto(produto: Produto) {
        this.produtos.push(produto)
    }

    listarProdutos(){
        for (const produto of this.produtos) {
            console.log(produto)
        }
    }
}


// export class Despesa extends Produto{}
// export class Investimento extends Produto{}
// export class ObjFinanceiro extends Produto{}
