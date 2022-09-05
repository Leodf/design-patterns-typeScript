import { Produto } from "../produto/Produto";

export abstract class ProdutoFabrica {
    abstract adicionarProduto(...atributos: any): Produto 


}