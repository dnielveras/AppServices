import { EntityRepository, Repository } from "typeorm"
import Usuario from "../entities/Usuarios"

@EntityRepository(Usuario)
class UsuariosRepository extends Repository<Usuario> {
    public async findByName(name: string): Promise<Usuario | undefined> {
        const usuario = await this.findOne({
            where:{
                name
            }
        })
        return usuario
    }

    public async findById(id: string): Promise<Usuario | undefined> {
        const usuario = await this.findOne({
            where:{
                id
            }
        })
        return usuario
    }

    public async findByEmail(email: string): Promise<Usuario | undefined> {
        const usuario = await this.findOne({
            where:{
                email
            }
        })
        return usuario
    }

}

export default UsuariosRepository