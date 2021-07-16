package dvtech.dev.almoxcontrol.models;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class Barraca implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false, unique = true)
    private Integer idBarraca;
    private String nome;
    private String responsavel;
    private String contato;

    public Barraca() {
    }

    public Barraca(String nome, String responsavel, String contato) {
        this.nome = nome;
        this.responsavel = responsavel;
        this.contato = contato;
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

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    @Override
    public String toString() {
        return "Barraca{" + "idBarraca=" + idBarraca + ", nome='" + nome + "'"
                + ", responsavel='" + responsavel + "'" + ", contato='"
                + contato + "'";
    }
}
