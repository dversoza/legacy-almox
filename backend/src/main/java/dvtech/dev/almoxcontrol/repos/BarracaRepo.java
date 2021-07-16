package dvtech.dev.almoxcontrol.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dvtech.dev.almoxcontrol.models.Barraca;

public interface BarracaRepo extends JpaRepository<Barraca, Integer> {
    void deleteBarracaByIdBarraca(Integer idBarraca);

    Optional<Barraca> findBarracaByIdBarraca(Integer idBarraca);

}
