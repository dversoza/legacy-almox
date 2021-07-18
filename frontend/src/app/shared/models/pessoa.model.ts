import { Barraca } from './barraca.model';

export class Pessoa {
  idPessoa?: number;
  nome?: string;
  pessoaFisica?: boolean;
  documento?: string;
  telefone?: string;
  barraca?: Barraca;
}
