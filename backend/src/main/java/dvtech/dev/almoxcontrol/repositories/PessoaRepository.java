package dvtech.dev.almoxcontrol.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dvtech.dev.almoxcontrol.models.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {
    void deletePessoaByIdPessoa(Integer idPessoa);

    Optional<Pessoa> findPessoaByIdPessoa(Integer idPessoa);
}
