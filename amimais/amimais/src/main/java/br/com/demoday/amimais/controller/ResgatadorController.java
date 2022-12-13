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

import br.com.demoday.amimais.model.Resgatador;
import br.com.demoday.amimais.repository.ResgatadorRepository;

@RestController
@RequestMapping("/resgatadores")
public class ResgatadorController {

	@Autowired
	ResgatadorRepository resgatadorRepository;

	// LISTAGEM COMPLETA
	@GetMapping
	public List<Resgatador> listaResgatador() {
		return resgatadorRepository.findAll();
	}

	// GET DO RESGATADOR PELO ID
	@GetMapping("/{id_resgatador}")
	public Resgatador buscaPorId(@PathVariable Integer id_resgatador) {
		var resgatadorOptional = resgatadorRepository.findById(id_resgatador);
		if (resgatadorOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return resgatadorOptional.get();
	}

	// CRIANDO RESGATADOR
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Resgatador criaResgatador(@RequestBody Resgatador resgatador) {
		Resgatador novoResgatador = resgatadorRepository.save(resgatador);
		return novoResgatador;
	}

	// ATUALIZANDO O RESGATADOR
	@PutMapping("/{id_resgatador}")
	public Resgatador editaResgatadorPorId(@PathVariable Integer id_resgatador, @RequestBody Resgatador resgatador) {
		var resgatadorOptional = resgatadorRepository.findById(id_resgatador);
		if (resgatadorOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		resgatador.setId_resgatador(id_resgatador);
		return resgatadorRepository.save(resgatador);
	}

	// DELETANDO RESGATADOR
	@DeleteMapping("/{id_resgatador}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void excluirPorId(@PathVariable Integer id_resgatador) {
		var resgatadorOptional = resgatadorRepository.findById(id_resgatador);
		if (resgatadorOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		resgatadorRepository.delete(resgatadorOptional.get());
	}

}
