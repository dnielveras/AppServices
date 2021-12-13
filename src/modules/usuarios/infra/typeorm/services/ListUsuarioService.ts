import { getCustomRepository } from "typeorm";
import Usuario from "../entities/Usuarios";
import UsuariosRepository from "../repositories/UsuariosRepository";

class ListUsuarioService {
    public async execute():Promise<Usuario[]>{
        const usuariosRepository  = getCustomRepository(UsuariosRepository)
        //Criação da lista de usuarios
        const usuarios = usuariosRepository.find()
        
        return usuarios
    }
}

export default ListUsuarioService