import AppError from "@shared/infra/http/errors/AppError"
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import Cliente from "../infra/typeorm/entities/Clientes";
import ClientesRepository from "../infra/typeorm/repositories/ClientesRepository";

interface IRequest{
    nome: string
    email: string
}

class CreateClienteService {
    public async execute({nome, email}:IRequest):Promise<Cliente>{
        const clientesRepository = getCustomRepository(ClientesRepository)
        //verificar se e-mail já existe
        const emailExists = await clientesRepository.findByEmail(email)

        if (emailExists){
            throw new AppError('Esse e-mail já está em uso')
        }

        const cliente = clientesRepository.create({
            nome,
            email
        })
        await clientesRepository.save(cliente)
        return cliente
    }

}
export default CreateClienteService