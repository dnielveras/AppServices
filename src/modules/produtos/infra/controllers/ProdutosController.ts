import { Request, Response } from "express"
import CreateProdutoService from "../../services/CreateProdutoService"
import DeleteProdutoService from "../../services/DeleteProdutoService"
import ListProdutoService from "../../services/ListProdutoService"
import ShowProdutoService from "../../services/ShowProdutoService"
import UpdateProdutoService from "../../services/UpdateProdutoService"

export default class ProdutosController{
    public async index(request: Request, response: Response): Promise<Response>{
        const listProdutos = new ListProdutoService()

        const produtos = await listProdutos.execute()

        return response.json(produtos)
    }

    public async show(request: Request, response: Response): Promise<Response>{
        const { id } = request.params

        const showProduto = new ShowProdutoService()

        const produto = await showProduto.execute({id})

        return response.json(produto)
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const {nome, preco, quantidade} = request.body

        const createProduto = new CreateProdutoService()
        
        const produto = await createProduto.execute({
            nome,
            preco,
            quantidade
        })

        return response.json(produto)
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const {nome, preco, quantidade} = request.body
        
        const {id} = request.params

        const updateProduto = new UpdateProdutoService()

        const produto = await updateProduto.execute({
            id,
            nome,
            preco,
            quantidade
        })

        return response.json(produto)
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params

        const deleteProduto = new DeleteProdutoService()

        await deleteProduto.execute({id})

        return response.json([])
    }
}