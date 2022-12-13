package br.com.demoday.amimais.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity	
@Table(name = "Resgatador")
public class Resgatador {
	//ID DO RESGATADOR
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_resgatador", nullable = false)
	private Integer id_resgatador;
	//CHAVE ESTRANGEIRA - HERDANDO O ID DO USUARIO
	@JoinColumn(name = "id_usuario", nullable = false)
	private Integer id_usuario;
	//DATA DE INICIO DOS RESGATES
	@Column(name = "data_comeco_resgate", nullable = false)
	private LocalDate data_comeco_resgate;
	//DESCRICAO RESGATADOR
	@Column(name = "descricao_resgatador", nullable = false, length = 150)
	private String descricao_resgatador;
	//STATUS RESGATADOR
	@Column(name = "status_resgatador", nullable = false)
	private boolean status_resgatador;
	
	//CONSTRUTOR
	public Resgatador() {
		
	}
	
	//GETTERS AND SETTERS
	public Integer getId_resgatador() {
		return id_resgatador;
	}

	public void setId_resgatador(Integer id_resgatador) {
		this.id_resgatador = id_resgatador;
	}

	public Integer getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Integer id_usuario) {
		this.id_usuario = id_usuario;
	}

	public LocalDate getData_comeco_resgate() {
		return data_comeco_resgate;
	}

	public void setData_comeco_resgate(LocalDate data_comeco_resgate) {
		this.data_comeco_resgate = data_comeco_resgate;
	}

	public String getDescricao_resgatador() {
		return descricao_resgatador;
	}

	public void setDescricao_resgatador(String descricao_resgatador) {
		this.descricao_resgatador = descricao_resgatador;
	}

	public boolean isStatus_resgatador() {
		return status_resgatador;
	}

	public void setStatus_resgatador(boolean status_resgatador) {
		this.status_resgatador = status_resgatador;
	}
	

	
	
	
}
