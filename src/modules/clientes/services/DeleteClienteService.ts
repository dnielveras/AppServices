import AppError from '@shared/infra/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClientesRepository from '../infra/typeorm/repositories/ClientesRepository';

interface IRequest {
  id: string;
}

class DeleteClienteService {
  public async execute({ id }: IRequest): Promise<void> {
    const clientesRepository = getCustomRepository(ClientesRepository);

    const cliente = await clientesRepository.findById(id);

    if (!cliente) {
      throw new AppError('Cliente não encontrado');
    }

    await clientesRepository.remove(cliente);
  }
}

export default DeleteClienteService;