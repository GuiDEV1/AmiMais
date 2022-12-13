package br.com.demoday.amimais.controller;

import java.util.List;
import java.util.Optional;

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

import br.com.demoday.amimais.model.Usuario;
import br.com.demoday.amimais.repository.UsuarioRepository;

@RestController
@RequestMapping("/cadastrarUsuario")
public class UsuarioController {

	// INJEÇÃO AUTOMATICA
	@Autowired
	private UsuarioRepository usuarioRepository;

	// LISTAGEM COMPLETA
	@GetMapping
	public List<Usuario> listaUsuarios() {
		return usuarioRepository.findAll();
	}

	// GET DO USUARIO PELO ID
	@GetMapping("/{id_usuario}")
	public Usuario buscaPorId(@PathVariable Integer id_usuario) {
		var usuarioOptional = usuarioRepository.findById(id_usuario);
		if (usuarioOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return usuarioOptional.get();
	}
	
	//GET DO USUARIO PELO NOME
	@GetMapping("/nome/{nomeUsuario}")
	public Optional<Usuario> buscaPorNome(@PathVariable String nomeUsuario) {
		Optional<Usuario> usuarioOptional = usuarioRepository.findByNomeUsuario(nomeUsuario);
		if (usuarioOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		return usuarioOptional;
	}

	// CRIANDO USUARIO
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Usuario criaUsuario(@RequestBody Usuario usuario) {
		Usuario novoUsuario = usuarioRepository.save(usuario);
		return novoUsuario;
	}

	// ATUALIZANDO O USUARIO
	@PutMapping("/{id_usuario}")
	public Usuario editaUsuarioPorId(@PathVariable Integer id_usuario, @RequestBody Usuario usuario) {
		var usuarioOptional = usuarioRepository.findById(id_usuario);
		if (usuarioOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		usuario.setId_usuario(id_usuario);
		return usuarioRepository.save(usuario);
	}


	// DELETANDO USUARIO
	@DeleteMapping("/{id_usuario}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void excluirPorId(@PathVariable Integer id_usuario) {
		var usuarioOptional = usuarioRepository.findById(id_usuario);
		if (usuarioOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		usuarioRepository.delete(usuarioOptional.get());
	}
}
