import { getCustomRepository } from "typeorm"
import Produto from "../infra/typeorm/entities/Produto"
import { ProdutoRepository as ProdutoRepository } from "../infra/typeorm/repositories/ProdutoRepository"

class ListProdutoService {
    public async execute():Promise<Produto[]>{
        const produtosRepository  = getCustomRepository(ProdutoRepository)
        //Criação da lista de produtos
        const produtos = produtosRepository.find()
        return produtos
    }
}

export default ListProdutoService