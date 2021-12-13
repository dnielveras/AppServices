import AppError from "@shared/infra/http/errors/AppError"
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth"
import { getCustomRepository } from "typeorm"
import Usuario from "../entities/Usuarios";
import UsuariosRepository from "../repositories/UsuariosRepository"

interface IRequest{
    email: string
    senha: string
}

interface IResponse {
    usuario: Usuario
    token: string
}

class CreateSessionsService {
    public async execute({ email, senha}:IRequest):Promise<IResponse>{
        const usuariosRepository = getCustomRepository(UsuariosRepository)
        //verificar se e-mail já existe
        const usuario = await usuariosRepository.findByEmail(email)

        if (!usuario){
            throw new AppError('Email ou senha incorreto', 401)
        }

        const passwordConfirmed = await compare(senha, usuario.senha)

        if (!passwordConfirmed){
            throw new AppError('Email ou senha incorreto', 401)
        }

        const token = sign({},authConfig.jwt.secret,{
            subject:usuario.id,
            expiresIn: authConfig.jwt.expiresIn
        })

        return {
            usuario,
            token
        }
    }

}
export default CreateSessionsService