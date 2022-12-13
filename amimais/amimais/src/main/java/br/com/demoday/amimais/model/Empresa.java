package br.com.demoday.amimais.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Empresas")
public class Empresa {

	//ID DA EMPRESA
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_empresa", nullable = false)
	private Integer id_empresa;
	//NOME DA EMPRESA
	@Column(name = "nome_empresa", nullable = false, length = 20)
	private String nomeEmpresa;
	//CEP EMPRESA
	@Column(name = "cep_empresa", length = 9, nullable = false)
	private String cep_empresa;
	//ESTADO DA EMPRESA
	@Column(name = "estado_empresa", length = 20, nullable = false)
	private String estado_empresa;
	//CIDADE DA EMPRESA
	@Column(name = "cidade_empresa", length = 20, nullable = false)
	private String cidade_empresa;
	//BAIRRO DA EMPRESA 
	@Column(name = "bairro_empresa", length = 20, nullable = false)
	private String bairro_empresa;
	//LOGRADOURO DA EMPRESA 
	@Column(name = "logradouro_empresa", length = 20, nullable = false)
	private String logradouro_empresa;
	//LOGRADOURO NUMERO DA EMPRESA
	@Column(name = "logradouro_empresa_numero", length = 4, nullable = false)
	private String logradouroNumeroEmpresa;
	//TELEFONE DA EMPRESA
	@Column(name = "telefone_empresa", length = 11, nullable = false)
	private String telefone_empresa;
	//CELULAR DA EMPRESA
	@Column(name = "celular_empresa", length = 20, nullable = false)
	private String celular_empresa;
	//CNPJ DA EMPRESA
	@Column(name = "cnpj_empresa", length = 18, nullable = false, unique = true)
	private String cnpjEmpresa;
	//DATA DE CADASTRO DA EMPRESA
	@Column(name = "data_cadastro_empresa", nullable = false)
	private LocalDate data_cadastro_empresa;
	//DATA DE ATUALIZAÇÃO DA EMPRESA
	@Column(name = "data_atualizacao_empresa")
	private LocalDate data_atualizacao_empresa;
	//DATA DE DELETAR DA EMPRESA
	@Column(name = "data_delete_empresa")
	private LocalDate data_delete_empresa;
	//STATUS DA EMPRESA
	@Column(name = "status_recebe_animal", nullable = false)
	private boolean status_recebe_animal;
	//DESCRIÇÃO DA EMPRESA
	@Column(name = "descricao_empresa", nullable = false, length = 300)
	private String descricao_empresa;
	
	//CONSTRUTOR
	public Empresa() {
		
	}
	
	//GETTERS AND SETTERS
	public Integer getId_empresa() {
		return id_empresa;
	}
	public void setId_empresa(Integer id_empresa) {
		this.id_empresa = id_empresa;
	}
	public String getNomeEmpresa() {
		return nomeEmpresa;
	}
	public void setNomeEmpresa(String nomeEmpresa) {
		this.nomeEmpresa = nomeEmpresa;
	}
	public String getCep_empresa() {
		return cep_empresa;
	}
	public void setCep_empresa(String cep_empresa) {
		this.cep_empresa = cep_empresa;
	}
	public String getEstado_empresa() {
		return estado_empresa;
	}
	public void setEstado_empresa(String estado_empresa) {
		this.estado_empresa = estado_empresa;
	}
	public String getCidade_empresa() {
		return cidade_empresa;
	}
	public void setCidade_empresa(String cidade_empresa) {
		this.cidade_empresa = cidade_empresa;
	}
	public String getBairro_empresa() {
		return bairro_empresa;
	}
	public void setBairro_empresa(String bairro_empresa) {
		this.bairro_empresa = bairro_empresa;
	}
	public String getLogradouro_empresa() {
		return logradouro_empresa;
	}
	public void setLogradouro_empresa(String logradouro_empresa) {
		this.logradouro_empresa = logradouro_empresa;
	}
	public String getLogradouroNumeroEmpresa() {
		return logradouroNumeroEmpresa;
	}
	public void setLogradouroNumeroEmpresa(String logradouroNumeroEmpresa) {
		this.logradouroNumeroEmpresa = logradouroNumeroEmpresa;
	}
	public String getTelefone_empresa() {
		return telefone_empresa;
	}
	public void setTelefone_empresa(String telefone_empresa) {
		this.telefone_empresa = telefone_empresa;
	}
	public String getCelular_empresa() {
		return celular_empresa;
	}
	public void setCelular_empresa(String celular_empresa) {
		this.celular_empresa = celular_empresa;
	}
	public String getCnpjEmpresa() {
		return cnpjEmpresa;
	}
	public void setCnpjEmpresa(String cnpj_empresa) {
		this.cnpjEmpresa = cnpj_empresa;
	}
	public LocalDate getData_cadastro_empresa() {
		return data_cadastro_empresa;
	}
	public void setData_cadastro_empresa(LocalDate data_cadastro_empresa) {
		this.data_cadastro_empresa = data_cadastro_empresa;
	}
	public LocalDate getData_atualizacao_empresa() {
		return data_atualizacao_empresa;
	}
	public void setData_atualizacao_empresa(LocalDate data_atualizacao_empresa) {
		this.data_atualizacao_empresa = data_atualizacao_empresa;
	}
	public LocalDate getData_delete_empresa() {
		return data_delete_empresa;
	}
	public void setData_delete_empresa(LocalDate data_delete_empresa) {
		this.data_delete_empresa = data_delete_empresa;
	}
	public boolean isStatus_recebe_animal() {
		return status_recebe_animal;
	}
	public void setStatus_recebe_animal(boolean status_recebe_animal) {
		this.status_recebe_animal = status_recebe_animal;
	}
	public String getDescricao_empresa() {
		return descricao_empresa;
	}
	public void setDescricao_empresa(String descricao_empresa) {
		this.descricao_empresa = descricao_empresa;
	}
}
