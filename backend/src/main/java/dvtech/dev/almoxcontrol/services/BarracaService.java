package dvtech.dev.almoxcontrol.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dvtech.dev.almoxcontrol.exceptions.BarracaNotFoundException;
import dvtech.dev.almoxcontrol.models.Barraca;
import dvtech.dev.almoxcontrol.repos.BarracaRepo;

@Service
public class BarracaService {
    private final BarracaRepo barracaRepo;

    @Autowired
    public BarracaService(BarracaRepo barracaRepo) {
        this.barracaRepo = barracaRepo;
    }

    public Barraca addBarraca(Barraca barraca) {
        return barracaRepo.save(barraca);
    }

    public List<Barraca> findAllBarracas() {
        return barracaRepo.findAll();
    }

    public Barraca updateBarraca(Barraca barraca) {
        return barracaRepo.save(barraca);
    }

    public void deleteBarraca(Integer idBarraca) {
        barracaRepo.deleteBarracaByIdBarraca(idBarraca);
    }

    public Barraca findBarracaById(Integer idBarraca) {
        return barracaRepo.findBarracaByIdBarraca(idBarraca)
                .orElseThrow(() -> new BarracaNotFoundException(
                        "Barraca não encontrada pelo id" + idBarraca));
    }
}
