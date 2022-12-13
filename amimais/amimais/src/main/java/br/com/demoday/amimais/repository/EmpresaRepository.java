package br.com.demoday.amimais.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.demoday.amimais.model.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Integer>{

	List<Empresa> findByNomeEmpresa(String nomeEmpresa);

	List<Empresa> findByCnpjEmpresa(String cnpj_empresa);

}
