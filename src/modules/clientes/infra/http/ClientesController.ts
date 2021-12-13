import { Request, Response } from "express"
import CreateClienteService from "../../services/CreateClienteService"
import DeleteClienteService from "../../services/DeleteClienteService"
import ListClienteService from "../../services/ListClienteService"
import ShowClienteService from "../../services/ShowClienteService"
import UpdateClienteService from "../../services/UpdateClienteService"

export default class ClientesController{
    public async index(request: Request, response: Response): Promise<Response>{
        const listClientes = new ListClienteService()

        const clientes = await listClientes.execute()

        return response.json(clientes)
    }

    public async show(request: Request, response: Response): Promise<Response>{
        const { id } = request.params

        const showCliente = new ShowClienteService()

        const cliente = await showCliente.execute({id})

        return response.json(cliente)
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const {nome, email} = request.body

        const createCliente = new CreateClienteService()
        
        const cliente = await createCliente.execute({
            nome,
            email
        })

        return response.json(cliente)
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const {nome, email} = request.body
        const {id} = request.params
        
        const updateCliente = new UpdateClienteService()

        const cliente = await updateCliente.execute({
            id,
            nome,
            email
        })

        return response.json(cliente)
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params

        const deleteCliente = new DeleteClienteService()

        await deleteCliente.execute({id})

        return response.json([])
    }
}