import { Perfil } from './Perfil'
import { Carteira } from './Carteira'

export class Usuario {
    private idUsuario: number
    private perfil: Perfil
    carteiras: Carteira[] = []

    constructor(idUsuario: number, perfil: Perfil){
        this.idUsuario = idUsuario
        this.perfil = perfil
    }

    adicionarCarteira(nomeCarteira: string, dataCriacao: string): void {
        const newCarteira = new Carteira(nomeCarteira, dataCriacao)
        this.carteiras.push(newCarteira)
    }

    alterarNomeCarteira(index: number, nomeCarteira: string):void {
        const carteira = this.carteiras[index]
        carteira.nomeCarteira = nomeCarteira
    }

    excluirCarteira(index: number): void {
        this.carteiras.splice(index, 1)
    }

    listarCarteiras(): void {
        for (const carteira of this.carteiras) {
            console.log(carteira)
        }
    }
}