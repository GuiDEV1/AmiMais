package br.com.demoday.amimais.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//REFERENCIANDO QUE ESSA CLASSE ESTA RELACIONADA A UM BANCO DE DADOS
@Entity
//REFERENCIANDO O NOME DA TABELA AO QUAL ESSA CLASSE PERTENCE
@Table(name = "Usuario")
//COMECANDO A CLASSE
public class Usuario {
	// ID DO USUARIO
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario", nullable = false)
	private Integer id_usuario;
	// NOME DO USUARIO
	@Column(name = "nome_usuario", length = 50, nullable = false)
	private String nomeUsuario;
	// USERNAME DO USUARIO
	@Column(name = "user_name", length = 50, nullable = false)
	private String user_name;
	// SENHA DO USUARIO
	@Column(name = "senha_usuario", length = 16, nullable = false)
	private String senha_usuario;
	// CPF DO USUARIO
	@Column(name = "cpf_usuario", length = 11, nullable = false, unique = true)
	private String cpf_usuario;
	// DATA DE NASC DO USUARIO
	@Column(name = "data_nasc_usuario", nullable = false)
	private LocalDate data_nasc_usuario;
	// TELEFONE DO USUARIO
	@Column(name = "telefone_usuario", length = 11, nullable = false, unique = true)
	private String telefone_usuario;
	// CELULAR DO USUARIO
	@Column(name = "celular_usuario", length = 11, nullable = false, unique = true)
	private String celular_usuario;
	// EMAIL DO USUARIO
	@Column(name = "email_usuario", length = 50, nullable = false, unique = true)
	private String email_usuario;
	// PROTETOR USUARIO
	@Column(name = "protetor_usuario", nullable = false)
	private boolean protetor_usuario;
	// DATA DE CADASTRO DO USUARIO
	@Column(name = "data_cadastro_usuario", nullable = false)
	private LocalDate data_cadastro_usuario;
	// DATA DE ATUALIZAÇÃO DO USUARIO
	@Column(name = "data_atualizacao_usuario")
	private LocalDate data_atualizacao_usuario;
	// DATA DE DELETE DO USUARIO
	@Column(name = "data_delete_usuario")
	private LocalDate data_delete_usuario;
	//STATUS DO USUARIO
	@Column(name = "status_usuario", nullable = false)
	private boolean status_usuario;
	
	//ENDEREÇO
	//CEP DO USUARIO
	@Column(name = "cep_usuario", length = 8, nullable = false)
	private String cep_usuario;
	//ESTADO DO USUARIO
	@Column(name = "estado_usuario", length = 50, nullable = false)
	private String estado_usuario;
	//CIDADE DO USUARIO
	@Column(name = "cidade_usuario", length = 50, nullable = false)
	private String cidade_usuario;
	//BAIRRO DO USUARIO
	@Column(name = "bairro_usuario", length = 50, nullable = false)
	private String bairro_usuario;
	//LOGRADOURO USUARIO
	@Column(name = "logradouro_usuario", length = 50, nullable = false)
	private String logradouro_usuario;
	//NUMERO DO LOGRADOURO DO USUARIO
	@Column(name = "logradouro_numero_usuario", length = 50, nullable = false)
	private String logradouro_numero_usuario;
	// USUARIO POSSUI PET?
	@Column(name = "possui_pet", nullable = false)
	private boolean possui_pet;
	//GENERO USUARIO
	@Column(name = "genero_usuario", nullable = false)
	private Integer genero_usuario;
	
	//CONSTRUTOR
	public Usuario() {
		
	}
	
	//GETTERS AND SETTERS DOS ATRIBUTOS
	public Integer getId_usuario() {
		return id_usuario;
	}
	public void setId_usuario(Integer id_usuario) {
		this.id_usuario = id_usuario;
	}
	public String getNomeUsuario() {
		return nomeUsuario;
	}
	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String usuar_name) {
		this.user_name = usuar_name;
	}
	public String getSenha_usuario() {
		return senha_usuario;
	}
	public void setSenha_usuario(String senha_usuario) {
		this.senha_usuario = senha_usuario;
	}
	public String getCpf_usuario() {
		return cpf_usuario;
	}
	public void setCpf_usuario(String cpf_usuario) {
		this.cpf_usuario = cpf_usuario;
	}
	public LocalDate getData_nasc_usuario() {
		return data_nasc_usuario;
	}
	public void setData_nasc_usuario(LocalDate data_nasc_usuario) {
		this.data_nasc_usuario = data_nasc_usuario;
	}
	public String getTelefone_usuario() {
		return telefone_usuario;
	}
	public void setTelefone_usuario(String telefone_usuario) {
		this.telefone_usuario = telefone_usuario;
	}
	public String getCelular_usuario() {
		return celular_usuario;
	}
	public void setCelular_usuario(String celular_usuario) {
		this.celular_usuario = celular_usuario;
	}
	public String getEmail_usuario() {
		return email_usuario;
	}
	public void setEmail_usuario(String email_usuario) {
		this.email_usuario = email_usuario;
	}
	public boolean isProtetor_usuario() {
		return protetor_usuario;
	}
	public void setProtetor_usuario(boolean protetor_usuario) {
		this.protetor_usuario = protetor_usuario;
	}
	public LocalDate getData_cadastro_usuario() {
		return data_cadastro_usuario;
	}
	public void setData_cadastro_usuario(LocalDate data_cadastro_usuario) {
		this.data_cadastro_usuario = data_cadastro_usuario;
	}
	public LocalDate getData_atualizacao_usuario() {
		return data_atualizacao_usuario;
	}
	public void setData_atualizacao_usuario(LocalDate data_atualizacao_usuario) {
		this.data_atualizacao_usuario = data_atualizacao_usuario;
	}
	public LocalDate getData_delete_usuario() {
		return data_delete_usuario;
	}
	public void setData_delete_usuario(LocalDate data_delete_usuario) {
		this.data_delete_usuario = data_delete_usuario;
	}
	public boolean isStatus_usuario() {
		return status_usuario;
	}
	public void setStatus_usuario(boolean status_usuario) {
		this.status_usuario = status_usuario;
	}
	public String getCep_usuario() {
		return cep_usuario;
	}
	public void setCep_usuario(String cep_usuario) {
		this.cep_usuario = cep_usuario;
	}
	public String getEstado_usuario() {
		return estado_usuario;
	}
	public void setEstado_usuario(String estado_usuario) {
		this.estado_usuario = estado_usuario;
	}
	public String getCidade_usuario() {
		return cidade_usuario;
	}
	public void setCidade_usuario(String cidade_usuario) {
		this.cidade_usuario = cidade_usuario;
	}
	public String getBairro_usuario() {
		return bairro_usuario;
	}
	public void setBairro_usuario(String bairro_usuario) {
		this.bairro_usuario = bairro_usuario;
	}
	public String getLogradouro_usuario() {
		return logradouro_usuario;
	}
	public void setLogradouro_usuario(String logradouro_usuario) {
		this.logradouro_usuario = logradouro_usuario;
	}
	public String getLogradouro_numero_usuario() {
		return logradouro_numero_usuario;
	}
	public void setLogradouro_numero_usuario(String logradouro_numero_usuario) {
		this.logradouro_numero_usuario = logradouro_numero_usuario;
	}
	public boolean isPossui_pet() {
		return possui_pet;
	}
	public void setPossui_pet(boolean possui_pet) {
		this.possui_pet = possui_pet;
	}
	public Integer getGenero_usuario() {
		return genero_usuario;
	}
	public void setGenero_usuario(Integer genero_usuario) {
		this.genero_usuario = genero_usuario;
	}

	
	
	
}
