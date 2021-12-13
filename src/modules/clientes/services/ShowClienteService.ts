import AppError from '@shared/infra/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Cliente from '../infra/typeorm/entities/Clientes';
import ClientesRepository from '../infra/typeorm/repositories/ClientesRepository';

interface IRequest {
  id: string;
}

class ShowClienteService {
  public async execute({ id }: IRequest): Promise<Cliente> {
    const clientesRepository = getCustomRepository(ClientesRepository);

    const cliente = await clientesRepository.findById(id);

    if (!cliente) {
      throw new AppError('Customer not found.');
    }

    return cliente;
  }

}

export default ShowClienteService;