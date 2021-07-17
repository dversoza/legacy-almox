package dvtech.dev.almoxcontrol.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
public class Pessoa implements Serializable {
    @Id
    @SequenceGenerator(name = "pessoa_seq", sequenceName = "pessoa_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pessoa_seq")
    @Column(nullable = false, updatable = false, unique = true)
    private Integer idPessoa;
    private String nome;
    private Boolean pessoaFisica;
    private String documento;
    private String telefone;

    @ManyToOne
    @JoinColumn(name = "barraca")
    @JsonIgnoreProperties("responsavel")
    private Barraca barraca;

    public Pessoa() {
    }

    public Pessoa(Integer idPessoa, String nome, Boolean pessoaFisica,
            String documento, String telefone, Barraca barraca) {
        this.idPessoa = idPessoa;
        this.nome = nome;
        this.pessoaFisica = pessoaFisica;
        this.documento = documento;
        this.telefone = telefone;
        this.barraca = barraca;
    }

    public Pessoa(String nome, Boolean pessoaFisica, String documento,
            String telefone, Barraca barraca) {
        this.nome = nome;
        this.pessoaFisica = pessoaFisica;
        this.documento = documento;
        this.telefone = telefone;
        this.barraca = barraca;
    }

    public Integer getIdPessoa() {
        return this.idPessoa;
    }

    public void setIdPessoa(Integer idPessoa) {
        this.idPessoa = idPessoa;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Boolean getPessoaFisica() {
        return this.pessoaFisica;
    }

    public void setPessoaFisica(Boolean pessoaFisica) {
        this.pessoaFisica = pessoaFisica;
    }

    public String getDocumento() {
        return this.documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getTelefone() {
        return this.telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Barraca getBarraca() {
        return this.barraca;
    }

    public void setBarraca(Barraca barraca) {
        this.barraca = barraca;
    }

    @Override
    public String toString() {
        return "Pessoa [barraca=" + barraca + ", documento=" + documento
                + ", idPessoa=" + idPessoa + ", nome=" + nome
                + ", pessoaFisica=" + pessoaFisica + ", telefone=" + telefone
                + "]";
    }

}
