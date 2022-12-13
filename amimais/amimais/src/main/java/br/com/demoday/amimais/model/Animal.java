package br.com.demoday.amimais.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Animal")
public class Animal {

	// ID DO ANIMAL
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_animal", nullable = false)
	private Integer id_animal;
	// ESPECIE DO ANIMAL
	@Column(name = "especie_animal", length = 50, nullable = false, unique = false)
	private String especieAnimal;
	// NOME DO ANIMAL
	@Column(name = "nome_animal", length = 50, nullable = false)
	private String nome_animal;
	// DATA DE NASCIMENTO APROXIMADA DO ANIMAL
	@Column(name = "data_nascimento_aprox_animal", nullable = false)
	private LocalDate dataNascAproxAnimal;
	// DATA DE CADASTRO DO ANIMAL
	@Column(name = "animal_data_cadastro")
	private LocalDate dataCadastroAnimal;
	// DATA DE CADASTRO DO ANIMAL
	@Column(name = "animal_data_atualizacao")
	private LocalDate dataAtualizacaoAnimal;
	@Column(name = "animal_data_delete")
	private LocalDate dataDeleteAnimal;
	
	//CONSTRUTOR
	public Animal() {
		
	}
	
	//GETTER AND SETTERS
	public Integer getId_animal() {
		return id_animal;
	}
	public void setId_animal(Integer id_animal) {
		this.id_animal = id_animal;
	}
	public String getEspecieAnimal() {
		return especieAnimal;
	}
	public void setEspecieAnimal(String especieAnimal) {
		this.especieAnimal = especieAnimal;
	}
	public String getNome_animal() {
		return nome_animal;
	}
	public void setNome_animal(String nome_animal) {
		this.nome_animal = nome_animal;
	}
	public LocalDate getDataNascAproxAnimal() {
		return dataNascAproxAnimal;
	}
	public void setDataNascAproxAnimal(LocalDate dataNascAproxAnimal) {
		this.dataNascAproxAnimal = dataNascAproxAnimal;
	}
	public LocalDate getDataCadastroAnimal() {
		return dataCadastroAnimal;
	}
	public void setDataCadastroAnimal(LocalDate dataCadastroAnimal) {
		this.dataCadastroAnimal = dataCadastroAnimal;
	}
	public LocalDate getDataAtualizacaoAnimal() {
		return dataAtualizacaoAnimal;
	}
	public void setDataAtualizacaoAnimal(LocalDate dataAtualizacaoAnimal) {
		this.dataAtualizacaoAnimal = dataAtualizacaoAnimal;
	}
	public LocalDate getDataDeleteAnimal() {
		return dataDeleteAnimal;
	}
	public void setDataDeleteAnimal(LocalDate dataDeleteAnimal) {
		this.dataDeleteAnimal = dataDeleteAnimal;
	}
}
