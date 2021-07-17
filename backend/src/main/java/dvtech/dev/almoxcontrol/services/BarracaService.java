package dvtech.dev.almoxcontrol.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dvtech.dev.almoxcontrol.exceptions.BarracaNotFoundException;
import dvtech.dev.almoxcontrol.models.Barraca;
import dvtech.dev.almoxcontrol.repositories.BarracaRepository;

@Service
public class BarracaService {
    private final BarracaRepository barracaRepository;

    @Autowired
    public BarracaService(BarracaRepository barracaRepo) {
        this.barracaRepository = barracaRepo;
    }

    public Barraca addBarraca(Barraca barraca) {
        return barracaRepository.save(barraca);
    }

    public List<Barraca> findAllBarracas() {
        return barracaRepository.findAll();
    }

    public Barraca updateBarraca(Barraca barraca) {
        return barracaRepository.save(barraca);
    }

    public void deleteBarraca(Integer idBarraca) {
        barracaRepository.deleteBarracaByIdBarraca(idBarraca);
    }

    public Barraca findBarracaById(Integer idBarraca) {
        return barracaRepository.findBarracaByIdBarraca(idBarraca)
                .orElseThrow(() -> new BarracaNotFoundException(
                        "Barraca não encontrada pelo id" + idBarraca));
    }
}
