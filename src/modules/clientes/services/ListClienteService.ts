import { getCustomRepository } from "typeorm";
import Cliente from "../infra/typeorm/entities/Clientes";
import ClientesRepository from "../infra/typeorm/repositories/ClientesRepository";

class ListClienteService {
    public async execute():Promise<Cliente[]>{
        const clientesRepository  = getCustomRepository(ClientesRepository)
        //Criação da lista de usuarios
        const clientes = clientesRepository.find()
        return clientes
    }
}

export default ListClienteService