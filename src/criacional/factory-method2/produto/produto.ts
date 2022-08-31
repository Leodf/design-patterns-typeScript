export interface Produto {
    setCategoria(categoria: string): void
    alterarProduto( ...atributos: any): void
    excluirProduto(): void
}

export class Categoria {
    getNomeClasse(tipo: string) {
        switch(tipo) {
            case 'Receita':
                return 'Salario'
        }
    }
}