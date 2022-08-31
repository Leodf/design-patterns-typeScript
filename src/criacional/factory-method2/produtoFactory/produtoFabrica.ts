import { Investimentos } from "../produto/investimentos";
import { Receita } from "../produto/receita";
import { Gastos } from "../produto/gastos";
import { ObjFinanceiro } from "../produto/objFinanceiro"
import { Produto } from "../produto/produto";

export abstract class ProdutoFabrica {
    abstract criarProduto(...atributos: any): Produto
}