import AppError from "@shared/infra/http/errors/AppError";
import { getCustomRepository } from "typeorm";
import Produto from "../infra/typeorm/entities/Produto";
import { ProdutoRepository } from "../infra/typeorm/repositories/ProdutoRepository";

interface IRequest {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
}

class UpdateProdutoService {
    public async execute({id, nome, preco, quantidade}: IRequest):Promise<Produto>{
        const produtosRepository  = getCustomRepository(ProdutoRepository)
        //Procurar o produto
        const produto = await produtosRepository.findOne(id)
        
        if (!produto){
            throw new AppError('Produto não encontrado')
        }

        const produtoExists = await produtosRepository.findByName(nome)
        //Se o produto criado tiver o mesmo nome
        if(produtoExists && nome !=  produto.nome){
            throw new AppError('Já existe um produto com esse mesmo nome')
        }

        produto.nome = nome
        produto.preco = preco
        produto.quantidade = quantidade

        await produtosRepository.save(produto)
        return produto
    }
}

export default UpdateProdutoService