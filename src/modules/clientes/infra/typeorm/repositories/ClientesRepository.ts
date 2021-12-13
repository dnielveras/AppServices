import { EntityRepository, Repository } from "typeorm"
import Cliente from "../entities/Clientes"


@EntityRepository(Cliente)
class ClientesRepository extends Repository<Cliente> {
    public async findByName(nome: string): Promise<Cliente | undefined> {
        const cliente = await this.findOne({
            where:{
                nome
            }
        })
        return cliente
    }

    public async findById(id: string): Promise<Cliente | undefined> {
        const cliente = await this.findOne({
            where:{
                id
            }
        })
        return cliente
    }

    public async findByEmail(email: string): Promise<Cliente | undefined> {
        const cliente = await this.findOne({
            where:{
                email
            }
        })
        return cliente
    }

}

export default ClientesRepository