package br.com.demoday.amimais.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.demoday.amimais.model.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{
	List<Animal> findByEspecieAnimal(String especieAnimal);
}
