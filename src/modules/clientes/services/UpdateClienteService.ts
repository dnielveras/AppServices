import AppError from '@shared/infra/http/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Cliente from '../infra/typeorm/entities/Clientes';
import ClientesRepository from '../infra/typeorm/repositories/ClientesRepository';

interface IRequest {
  id: string;
  nome: string;
  email: string;
}

class UpdateClienteService {
  public async execute({ id, nome, email }: IRequest): Promise<Cliente> {
    const clientesRepository = getCustomRepository(ClientesRepository);

    const cliente = await clientesRepository.findById(id);

    if (!cliente) {
      throw new AppError('Cliente não encontrado');
    }

    const clienteExists = await clientesRepository.findByEmail(email);

    if (clienteExists && email !== cliente.email) {
      throw new AppError('Já existe um cliente com esse e-mail');
    }

    cliente.nome = nome;
    cliente.email = email;

    await clientesRepository.save(cliente);

    return cliente;
  }
}

export default UpdateClienteService;