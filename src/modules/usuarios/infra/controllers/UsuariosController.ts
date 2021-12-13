import { Request, Response } from "express"
import CreateUsuarioService from "../typeorm/services/CreateUsuarioService"
import ListUsuariosService from "../typeorm/services/ListUsuarioService"

export default class UsuariosController {
    public async index(request: Request, response: Response): Promise<Response>{
        const listUsuario = new ListUsuariosService()

        console.log(request.usuario.id)

        const usuarios = await listUsuario.execute()

        return response.json(usuarios)
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const {nome, email, senha} = request.body

        const criarUsuario = new CreateUsuarioService()

        const usuario = await criarUsuario.execute({nome, email, senha})

        return response.json(usuario)

    }
}