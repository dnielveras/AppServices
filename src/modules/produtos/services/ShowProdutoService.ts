import AppError from "@shared/infra/http/errors/AppError"
import { getCustomRepository } from "typeorm"
import Produto from "../infra/typeorm/entities/Produto"
import { ProdutoRepository } from "../infra/typeorm/repositories/ProdutoRepository"

interface IRequest {
    id: string
}

class ShowProdutoService {
    public async execute({id}: IRequest):Promise<Produto>{
        const produtosRepository  = getCustomRepository(ProdutoRepository)
        //Procurar o produto
        const produto = await produtosRepository.findOne(id)
        
        if (!produto){
            throw new AppError('Produto não encontrado')
        }
        return produto
    }
}

export default ShowProdutoService