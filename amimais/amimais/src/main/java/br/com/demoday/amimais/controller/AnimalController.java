package br.com.demoday.amimais.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.demoday.amimais.model.Animal;
import br.com.demoday.amimais.repository.AnimalRepository;

@RestController
@RequestMapping("/Animal")
public class AnimalController {

	@Autowired
	AnimalRepository animalRepository;

	// LISTAGEM COMPLETA
	@GetMapping
	public List<Animal> listaAnimais() {
		return animalRepository.findAll();
	}

	// GET DO USUARIO PELO ID
	@GetMapping("/{id_animal}")
	public Animal buscaPorId(@PathVariable Integer id_animal) {
		var animalOptional = animalRepository.findById(id_animal);
		if (animalOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return animalOptional.get();
	}
	
	
	//GET DO USUARIO PELO NOME
	@GetMapping("/especie/{especieAnimal}")
	public List<Animal> buscaPorEspecie(@PathVariable String especieAnimal) {
		List<Animal> animalOptional = animalRepository.findByEspecieAnimal(especieAnimal);
		if (animalOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return animalOptional;
	}

	// CRIANDO USUARIO
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Animal criaAnimal(@RequestBody Animal animal) {
		Animal novoAnimal = animalRepository.save(animal);
		return novoAnimal;
	}

	// ATUALIZANDO O USUARIO
	@PutMapping("/{id_animal}")
	public Animal editaAnimalPorId(@PathVariable Integer id_animal, @RequestBody Animal animal) {
		var animalOptional = animalRepository.findById(id_animal);
		if (animalOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		animal.setId_animal(id_animal);
		return animalRepository.save(animal);
	}


	// DELETANDO USUARIO
	@DeleteMapping("/{id_animal}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void excluirPorId(@PathVariable Integer id_animal) {
		var animalOptional = animalRepository.findById(id_animal);
		if (animalOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		animalRepository.delete(animalOptional.get());
	}
}
