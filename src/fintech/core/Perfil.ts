export class Perfil {
    private nome: string
    private email: string
    private senha: string
    private dataNasc: string
    private genero: string

    constructor(nome: string, email: string, senha: string, dataNasc: string, genero: string){
        this.nome = nome
        this.email = email
        this.senha = senha
        this.dataNasc = dataNasc
        this.genero = genero
    }
}