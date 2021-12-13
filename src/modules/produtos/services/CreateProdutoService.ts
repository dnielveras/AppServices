import AppError from "@shared/infra/http/errors/AppError"
import { getCustomRepository } from "typeorm"
import Produto from "../infra/typeorm/entities/Produto"
import { ProdutoRepository } from "../infra/typeorm/repositories/ProdutoRepository"

interface IRequest{
    nome: string
    preco: number
    quantidade: number
}

class CreateProdutoService {
    public async execute({nome, preco, quantidade}:IRequest):Promise<Produto>{
        const produtosRepository  = getCustomRepository(ProdutoRepository)
        //Garantir que os produtos não terão o mesmo nome
        const produtoExists = await produtosRepository.findByName(nome)
        //Se o produto criado tiver o mesmo nome
        if(produtoExists){
            throw new AppError('Já existe um produto com esse mesmo nome')
        }
        //Criação do produto
        const produto = produtosRepository.create({
            nome,
            preco,
            quantidade
        })
        //Salvando o produto no repositorio
        await produtosRepository.save(produto)
        return produto
    }

}
export default CreateProdutoService