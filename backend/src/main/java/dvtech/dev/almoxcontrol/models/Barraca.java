package dvtech.dev.almoxcontrol.models;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
public class Barraca implements Serializable {
    @Id
    @SequenceGenerator(name = "barraca_seq", sequenceName = "barraca_seq", allocationSize = 1)
    @GeneratedValue(generator = "barraca_seq", strategy = GenerationType.SEQUENCE)
    @Column(nullable = false, updatable = false, unique = true)
    private Integer idBarraca;
    private String nome;
    private String contato;

    @ManyToOne
    @JoinColumn(name = "responsavel")
    @JsonIgnoreProperties("barraca")
    private Pessoa responsavel;

    public Barraca() {
    }

    public Barraca(String nome, String contato, Pessoa responsavel) {
        this.nome = nome;
        this.contato = contato;
        this.responsavel = responsavel;
    }

    public Integer getIdBarraca() {
        return idBarraca;
    }

    public void setIdBarraca(Integer idBarraca) {
        this.idBarraca = idBarraca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public Pessoa getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Pessoa responsavel) {
        this.responsavel = responsavel;
    }

    @Override
    public String toString() {
        return "Barraca [contato=" + contato + ", idBarraca=" + idBarraca
                + ", nome=" + nome + ", responsavel=" + responsavel + "]";
    }
}
