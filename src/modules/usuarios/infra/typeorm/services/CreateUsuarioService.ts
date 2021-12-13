import AppError from "@shared/infra/http/errors/AppError"
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import Usuario from "../entities/Usuarios";
import UsuariosRepository from "../repositories/UsuariosRepository"

interface IRequest{
    nome: string
    email: string
    senha: string
}

class CreateUsuarioService {
    public async execute({nome, email, senha}:IRequest):Promise<Usuario>{
        const usuariosRepository = getCustomRepository(UsuariosRepository)
        //verificar se e-mail já existe
        const emailExists = await usuariosRepository.findByEmail(email)

        if (emailExists){
            throw new AppError('Esse e-mail já está em uso')
        }

        const hashedPassword = await hash(senha, 8)

        const usuario = usuariosRepository.create({
            nome,
            email,
            senha: hashedPassword
        })

        await usuariosRepository.save(usuario)
        return usuario
    }

}
export default CreateUsuarioService