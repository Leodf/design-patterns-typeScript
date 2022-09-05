
import { Receita } from "./Receita"
import { Despesa } from "./Despesa"

export abstract class Produto {
    receitas: Receita[] = []
    despesas: Despesa[] = []
}