package dvtech.dev.almoxcontrol.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dvtech.dev.almoxcontrol.models.Barraca;

@Repository
public interface BarracaRepository extends JpaRepository<Barraca, Integer> {
    void deleteBarracaByIdBarraca(Integer idBarraca);

    Optional<Barraca> findBarracaByIdBarraca(Integer idBarraca);

}
