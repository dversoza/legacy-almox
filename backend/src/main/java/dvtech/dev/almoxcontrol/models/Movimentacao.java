package dvtech.dev.almoxcontrol.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.*;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Table
public class Movimentacao implements Serializable {
    @Id
    @SequenceGenerator(name = "movimentacao_seq", sequenceName = "movimentacao_seq", allocationSize = 1)
    @GeneratedValue(generator = "movimentacao_seq", strategy = GenerationType.SEQUENCE)
    @Column(nullable = false, updatable = false, unique = true)
    private Long id;

    @CreatedDate
    @Column(name = "data_criacao", nullable = false, updatable = false)
    private Date dataCriacao;

    @CreatedBy
    @Column(name = "usuario_criacao", nullable = false, updatable = false)
    private Usuario usuarioCriacao;

    @LastModifiedDate
    @Column(name = "data_modificacao", nullable = false, updatable = false)
    private LocalDateTime dataModificacao;

    @Column(name = "usuario_modificacao", nullable = false, updatable = false)
    private Usuario usuarioModificacao;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Barraca barraca;

    @ManyToOne
    private Produto produto;

    @ManyToOne
    private Pessoa pessoa;

    private Date dataFato;
    private Float quantidade;
    private Float valor;
    private String observacao;

    public Movimentacao() {
    }

    public Movimentacao(Long id, Date dataCriacao, Usuario usuarioCriacao,
            LocalDateTime dataModificacao, Usuario usuarioModificacao,
            Usuario usuario, Barraca barraca, Produto produto, Pessoa pessoa,
            Date dataFato, Float quantidade, Float valor, String observacao) {
        this.id = id;
        this.dataCriacao = dataCriacao;
        this.usuarioCriacao = usuarioCriacao;
        this.dataModificacao = dataModificacao;
        this.usuarioModificacao = usuarioModificacao;
        this.usuario = usuario;
        this.barraca = barraca;
        this.produto = produto;
        this.pessoa = pessoa;
        this.dataFato = dataFato;
        this.quantidade = quantidade;
        this.valor = valor;
        this.observacao = observacao;
    }

    public Movimentacao(Usuario usuarioCriacao, LocalDateTime dataModificacao,
            Usuario usuarioModificacao, Usuario usuario, Barraca barraca,
            Produto produto, Pessoa pessoa, Date dataFato, Float quantidade,
            Float valor, String observacao) {
        this.usuarioCriacao = usuarioCriacao;
        this.dataModificacao = dataModificacao;
        this.usuarioModificacao = usuarioModificacao;
        this.usuario = usuario;
        this.barraca = barraca;
        this.produto = produto;
        this.pessoa = pessoa;
        this.dataFato = dataFato;
        this.quantidade = quantidade;
        this.valor = valor;
        this.observacao = observacao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Usuario getUsuarioCriacao() {
        return usuarioCriacao;
    }

    public void setUsuarioCriacao(Usuario usuarioCriacao) {
        this.usuarioCriacao = usuarioCriacao;
    }

    public LocalDateTime getDataModificacao() {
        return dataModificacao;
    }

    public void setDataModificacao(LocalDateTime dataModificacao) {
        this.dataModificacao = dataModificacao;
    }

    public Usuario getUsuarioModificacao() {
        return usuarioModificacao;
    }

    public void setUsuarioModificacao(Usuario usuarioModificacao) {
        this.usuarioModificacao = usuarioModificacao;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Barraca getBarraca() {
        return barraca;
    }

    public void setBarraca(Barraca barraca) {
        this.barraca = barraca;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public Date getDataFato() {
        return dataFato;
    }

    public void setDataFato(Date dataFato) {
        this.dataFato = dataFato;
    }

    public Float getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Float quantidade) {
        this.quantidade = quantidade;
    }

    public Float getValor() {
        return valor;
    }

    public void setValor(Float valor) {
        this.valor = valor;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    @Override
    public String toString() {
        return "Movimentacao {barraca=" + barraca + ", dataCriacao="
                + dataCriacao + ", dataFato=" + dataFato + ", dataModificacao="
                + dataModificacao + ", id=" + id + ", observacao=" + observacao
                + ", pessoa=" + pessoa + ", produto=" + produto
                + ", quantidade=" + quantidade + ", usuario=" + usuario
                + ", usuarioCriacao=" + usuarioCriacao + ", usuarioModificacao="
                + usuarioModificacao + ", valor=" + valor + "}";
    }

}
