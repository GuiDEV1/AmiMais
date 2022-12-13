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

import br.com.demoday.amimais.model.Empresa;
import br.com.demoday.amimais.repository.EmpresaRepository;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {
	
	@Autowired
	EmpresaRepository empresaRepository;
	
	
	@GetMapping
	public List<Empresa> listaEmpresas() {
		return empresaRepository.findAll();
	}
	
	// GET DO USUARIO PELO ID
		@GetMapping("/{id_empresa}")
		public Empresa buscaPorId(@PathVariable Integer id_empresa) {
			var empresaOptional = empresaRepository.findById(id_empresa);
			if (empresaOptional.isEmpty()) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND);
			}
			return empresaOptional.get();
		}
		
		
		//GET DO USUARIO PELO NOME
		@GetMapping("/nome/{nomeEmpresa}")
		public List<Empresa> buscaPorNome(@PathVariable String nomeEmpresa) {
			List<Empresa> empresaOptional = empresaRepository.findByNomeEmpresa(nomeEmpresa);
			if (empresaOptional.isEmpty()) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND);
			}
			return empresaOptional;
		}
		
//		//GET DO USUARIO PELO NOME
//		@GetMapping("/cnpj/{cnpjEmpresa}")
//		public List<Empresa> buscaPorCnpj(@PathVariable String cnpjEmpresa) {
//			List<Empresa> empresaOptional = empresaRepository.findByCnpjEmpresa(cnpjEmpresa);
//			if (empresaOptional.isEmpty()) {
//				throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//			}
//			return empresaOptional;
//		}

		// CRIANDO USUARIO
		@PostMapping
		@ResponseStatus(code = HttpStatus.CREATED)
		public Empresa cadastraEmpresa(@RequestBody Empresa empresa) {
			Empresa novaEmpresa = empresaRepository.save(empresa);
			return novaEmpresa;
		}

		// ATUALIZANDO O USUARIO
		@PutMapping("/{id_empresa}") 
		public Empresa editaEmpresaPorId(@PathVariable Integer id_empresa, @RequestBody Empresa empresa) {
			var empresaOptional = empresaRepository.findById(id_empresa);
			if (empresaOptional.isEmpty()) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND);
			}
			empresa.setId_empresa(id_empresa);
			return empresaRepository.save(empresa);
		}


		// DELETANDO USUARIO
		@DeleteMapping("/{id_empresa}")
		@ResponseStatus(code = HttpStatus.NO_CONTENT)
		public void excluirPorId(@PathVariable Integer id_empresa) {
			var empresaOptional = empresaRepository.findById(id_empresa);
			if (empresaOptional.isEmpty()) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND);
			}
			empresaRepository.delete(empresaOptional.get());
		}
	
}
