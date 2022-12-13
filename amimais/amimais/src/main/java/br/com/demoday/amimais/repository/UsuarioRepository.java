package br.com.demoday.amimais.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.demoday.amimais.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
	Optional<Usuario> findByNomeUsuario(String nome_usuario);
	Optional<Usuario> removeByNomeUsuario(Usuario usuario);
}
