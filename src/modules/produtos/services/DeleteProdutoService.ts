import AppError from "@shared/infra/http/errors/AppError"
import { getCustomRepository } from "typeorm"
import { ProdutoRepository } from "../infra/typeorm/repositories/ProdutoRepository"

interface IRequest {
    id: string
}

class DeleteProdutoService {
    public async execute({id}: IRequest):Promise<void>{
        const produtosRepository  = getCustomRepository(ProdutoRepository)
        //Procurar o produto
        const produto = await produtosRepository.findOne(id)
        
        if (!produto){
            throw new AppError('Produto não encontrado')
        }

        await produtosRepository.remove(produto)
    }
}

export default DeleteProdutoService