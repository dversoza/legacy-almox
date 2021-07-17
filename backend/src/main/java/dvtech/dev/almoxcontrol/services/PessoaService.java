package dvtech.dev.almoxcontrol.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dvtech.dev.almoxcontrol.exceptions.PessoaNotFoundException;
import dvtech.dev.almoxcontrol.models.Pessoa;
import dvtech.dev.almoxcontrol.repositories.PessoaRepository;

@Service
public class PessoaService {
    private final PessoaRepository pessoaRepository;

    @Autowired
    public PessoaService(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    public Pessoa addPessoa(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    public void deletePessoa(Integer idPessoa) {
        pessoaRepository.deletePessoaByIdPessoa(idPessoa);
    }

    public List<Pessoa> findAllPessoas() {
        return pessoaRepository.findAll();
    }

    public Pessoa findPessoaById(Integer idPessoa) {
        return pessoaRepository.findPessoaByIdPessoa(idPessoa)
                .orElseThrow(() -> new PessoaNotFoundException(
                        "Pessoa não encontrada pelo id " + idPessoa));
    }

    public Pessoa updatePessoa(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

}
