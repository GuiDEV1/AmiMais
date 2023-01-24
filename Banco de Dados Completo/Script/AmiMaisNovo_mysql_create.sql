-- drop database amimais
-- create database amimais
-- use amimais

ALTER DATABASE `amimais` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `Usuario` (
	`id_usuario` int NOT NULL AUTO_INCREMENT,
	`nome_usuario` varchar(50) NOT NULL,
	`user_name` varchar(50) NOT NULL UNIQUE,
	`senha_usuario` varchar(16) NOT NULL,
	`cpf_usuario` varchar(11) NOT NULL UNIQUE,
	`data_nasc_usuario` DATE NOT NULL,
	`telefone_usuario` varchar(11) NOT NULL UNIQUE,
	`celular_usuario` varchar(11) NOT NULL UNIQUE,
	`email_usuario` varchar(50) NOT NULL UNIQUE,
	`protetor_usuario` varchar(1) NOT NULL,
	`data_cadastro_usuario` DATE NOT NULL,
	`data_atualizacao_usuario` DATE NOT NULL,
	`data_delete_usuario` DATE NOT NULL DEFAULT '2222-01-01',
	`status_usuario` varchar(1) NOT NULL,
	`cep_usuario` varchar(9) NOT NULL,
	`estado_usuario` varchar(50) NOT NULL,
	`cidade_usuario` varchar(50) NOT NULL,
	`bairro_usuario` varchar(50) NOT NULL,
	`logradouro_usuario` varchar(50) NOT NULL,
	`logradouro_numero_usuario` varchar(50) NOT NULL,
	`possui_pet` varchar(1) NOT NULL,
	`genero_usuario` int NOT NULL,
	PRIMARY KEY (`id_usuario`)
);

CREATE TABLE `Animal` (
	`id_animal` int NOT NULL AUTO_INCREMENT,
	`especie_animal` varchar(20),
    `sexo_animal` varchar(1),
	`nome_animal` varchar(50),
	`data_nascimento_aprox_animal` DATE,
	`animal_data_cadastro` DATE NOT NULL,
	`animal_data_atualizacao` DATE NOT NULL,
	`animal_data_delete` DATE NOT NULL DEFAULT '2222-01-01',
	PRIMARY KEY (`id_animal`)
);

CREATE TABLE `Empresas` (
	`id_empresa` int NOT NULL AUTO_INCREMENT,
	`nome_empresa` varchar(50) NOT NULL,
	`cep_empresa` varchar(9) NOT NULL,
	`estado_empresa` varchar(50) NOT NULL,
	`cidade_empresa` varchar(50) NOT NULL,
	`bairro_empresa` varchar(50) NOT NULL,
	`logradouro_empresa` varchar(50) NOT NULL,
	`logradouro_empresa_numero` varchar(4) NOT NULL,
	`telefone_empresa` varchar(11) NOT NULL DEFAULT 'Sem Inf',
	`celular_empresa` varchar(20) NOT NULL,
	`cnpj_empresa` varchar(18) NOT NULL UNIQUE,
	`data_cadastro_empresa` DATE NOT NULL,
	`data_atualizacao_empresa` DATE NOT NULL,
	`data_delete_empresa` DATE NOT NULL DEFAULT '2222-01-01',
	`status_recebe_animal` varchar(1) NOT NULL,
    `recebe_doacao` varchar(1) NOT NULL,
	`descricao_empresa` varchar(300) NOT NULL,
	PRIMARY KEY (`id_empresa`)
);

CREATE TABLE `Resgatador` (
	`id_resgatador` int NOT NULL AUTO_INCREMENT,
	`id_usuario` int NOT NULL,
	`data_comeco_resgate` DATE NOT NULL,
	`instituicao_preferida` varchar(50) DEFAULT 'Não informado',
	`descricao_resgatador` varchar(300) NOT NULL,
	`status_resgatador` varchar(1) NOT NULL,
	PRIMARY KEY (`id_resgatador`)
);

CREATE TABLE `doacao_resgate` (
	`id_doacao` int NOT NULL AUTO_INCREMENT,
	`id_usuario_doador` int NOT NULL,
	`id_recebedor` int NOT NULL,
	`data_doacao` DATE NOT NULL,
	`hora_doacao` TIME NOT NULL,
	`tipo_doacao` varchar(50) NOT NULL,
	PRIMARY KEY (`id_doacao`)
);

CREATE TABLE `animais_desaparecidos` (
	`id_animal_des` int NOT NULL AUTO_INCREMENT,
	`id_animal` int NOT NULL,
	`id_usuario` int NOT NULL,
	`nome_animal_des` varchar(50) NOT NULL DEFAULT 'Indefinido',
	`cep_animal_des` varchar(9) NOT NULL,
	`estado_animal_des` varchar(50) NOT NULL,
	`cidade_animal_des` varchar(50) NOT NULL,
	`bairro_animal_des` varchar(50) NOT NULL,
	`logradouro_animal_des` varchar(50) NOT NULL,
	`descricao_animal_des` TEXT(300) NOT NULL,
	`data_desaparecido` DATE NOT NULL,
	`data_reaparecido` DATE NOT NULL DEFAULT '2222-01-01',
	`status_animal_des` varchar(1) NOT NULL,
	PRIMARY KEY (`id_animal_des`)
);

CREATE TABLE `animal_empresa` (
	`id_animal_empresa` int NOT NULL AUTO_INCREMENT,
	`id_animal` int NOT NULL,
	`id_empresa` int NOT NULL,
	`data_retorno` DATE NOT NULL DEFAULT '2222-01-01',
	`status_adocao` varchar(1) NOT NULL,
	PRIMARY KEY (`id_animal_empresa`)
);

CREATE TABLE `doacao_empresa` (
	`id_doacao_emp` int NOT NULL AUTO_INCREMENT,
	`id_usuario_doador` int NOT NULL,
	`id_recebedor_emp` int NOT NULL,
	`data_doacao` DATE NOT NULL,
	`hora_doacao` TIME NOT NULL,
	`tipo_doacao` varchar(50) NOT NULL,
	PRIMARY KEY (`id_doacao_emp`)
);

CREATE TABLE `animal_resgatador` (
	`id_animal_resgatador` int NOT NULL AUTO_INCREMENT,
	`id_animal` int NOT NULL,
	`id_resgatador` int NOT NULL,
	`cep_resgate` varchar(9) NOT NULL,
	`estado_resgate_animal` varchar(50) NOT NULL,
	`cidade_resgate_animal` varchar(50) NOT NULL,
	`bairro_resgate_animal` varchar(50) NOT NULL,
	`logradouro_resgate_animal` varchar(50) NOT NULL,
	`animal_castrado` varchar(1) NOT NULL,
	`animal_doente` varchar(1) NOT NULL,
	`data_encamin_adoc` DATE NOT NULL DEFAULT '2222-01-01',
	PRIMARY KEY (`id_animal_resgatador`)
);

ALTER TABLE `Resgatador` ADD CONSTRAINT `Resgatador_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`);
ALTER TABLE `doacao_resgate` ADD CONSTRAINT `doacao_resgate_fk0` FOREIGN KEY (`id_recebedor`) REFERENCES `Resgatador`(`id_resgatador`);
ALTER TABLE `doacao_resgate` ADD CONSTRAINT `doacao_resgate_fk1` FOREIGN KEY (`id_usuario_doador`) REFERENCES `Usuario`(`id_usuario`);
ALTER TABLE `animais_desaparecidos` ADD CONSTRAINT `animais_desaparecidos_fk0` FOREIGN KEY (`id_animal`) REFERENCES `Animal`(`id_animal`);
ALTER TABLE `animais_desaparecidos` ADD CONSTRAINT `animais_desaparecidos_fk1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`);
ALTER TABLE `animal_empresa` ADD CONSTRAINT `animal_empresa_fk0` FOREIGN KEY (`id_animal`) REFERENCES `animal_resgatador`(`id_animal_resgatador`);
ALTER TABLE `animal_empresa` ADD CONSTRAINT `animal_empresa_fk1` FOREIGN KEY (`id_empresa`) REFERENCES `Empresas`(`id_empresa`);
ALTER TABLE `doacao_empresa` ADD CONSTRAINT `doacao_empresa_fk0` FOREIGN KEY (`id_usuario_doador`) REFERENCES `Usuario`(`id_usuario`);
ALTER TABLE `doacao_empresa` ADD CONSTRAINT `doacao_empresa_fk1` FOREIGN KEY (`id_recebedor_emp`) REFERENCES `Empresas`(`id_empresa`);
ALTER TABLE `animal_resgatador` ADD CONSTRAINT `animal_resgatador_fk0` FOREIGN KEY (`id_animal`) REFERENCES `Animal`(`id_animal`);
ALTER TABLE `animal_resgatador` ADD CONSTRAINT `animal_resgatador_fk1` FOREIGN KEY (`id_resgatador`) REFERENCES `Resgatador`(`id_resgatador`);

-- select * from usuario;
insert into usuario values(1, 'Miguel Silva', 'migui', 'migui1258', 22518965122, '2003-05-30', '11966562377', '1162541235', 'mi@gmail', 1, '2022-11-26', '2022-11-26', '2222-01-01', 1, '2568102', 'São Paulo', 'São Paulo', 'Mooca', 'Rua Frederico Ilheu', '156', 0, 1);
insert into usuario values(2, 'Marta Valejo', 'marta352', 'margatos', 12589632147, '2004-05-30', '11977578388', '1162781235', 'nina@gmail', 1, '2022-11-26', '2022-11-26', '2222-01-01', 1, '2568102', 'São Paulo', 'São Paulo', 'Mooca', 'Av. José de Dirseu', '156', 0, 1);
insert into usuario values(3, 'Nina Santos', 'nininha', 'nina123', 45678912345, '2002-05-20', '11963214785', '1169512542', 'nhun@gmail', 0, '2022-11-26', '2022-11-26', '2222-01-01', 1, '2568103', 'São Paulo', 'São Paulo', 'Mooca', 'Rua José de Figueiredo', '157', 0, 1);
insert into usuario values(4, 'Cristina Moura', 'migui321', 'vish1234', '22518955122', '2003-05-20', '1162541235', '11966562377', 'user120@gmail', 0, '2022-11-26', '2022-11-26',	'2222-01-01', 1, '01207-000', 'São Paulo', 'São Paulo', 'Sé', 'Rua Barão de Vitória', 156, 0, 1);

-- select * from animal;
insert into animal values (1, 'cachorro', 'M', 'caramelo', '2222-01-01', '2022-11-27', '2022-11-27', '2222-01-01');
insert into animal values (2, 'cachorro', 'M', 'pedro', '2222-01-01', '2022-11-27', '2022-11-27', '2222-01-01');
insert into animal values (3, 'gato', 'M', 'roof', '2222-01-01', '2022-11-27', '2022-11-27', '2222-01-01');
insert into animal values (4, 'gato', 'M', 'anakin', '2222-01-01', '2022-11-27', '2022-11-27', '2222-01-01');

-- select * from empresas;
insert into empresas values (1, 'Ampara Animal', '04213-002 ', 'São Paulo', 'São Paulo', 'Ipiranga', 'R. Lino Coutinho', '130', '3539-3600', '925612548', '22.971.335/0001-90', '2022-11-27', '2022-11-27', '2222-01-01', 1, 'S', 'Somos a maior organização de proteção animal do país. Atuamos pela defesa dos direitos e respeito aos animais.');
insert into empresas values (2, 'Pets', '01305-000 ', 'São Paulo', 'São Paulo', 'Bela Vista', 'R. Augusta', '215', '3699-3140', '920321748', '83.813.487/0001-59', '2022-11-27', '2022-11-27', '2222-01-01', 1, 'N', 'Pet shop ou loja de animais, a Petz é um estabelecimento comercial especializado em vender animais, geralmente filhotes, destinados a serem animais de estimação, bem como alimentos, acessórios e artigos para entusiastas, além de oferecer serviços de embelezamento como banho, tosa e perfumaria.');
insert into empresas values (3, 'Pet Shop', '36524-874 ', 'São Paulo', 'São Paulo', 'Mooca', 'Vila Hipódromo', '625', '1254-9520', '965412544', '48.144.183/0001-45', '2022-11-27', '2022-11-27', '2222-01-01', 1, 'S', 'Somos a maior organização de adoção animal do país.');
insert into empresas values (4, 'Hospital veterinário', '01613-002', 'São Paulo', 'São Paulo', 'Ipiranga', 'R. Lino Coutinho', '198', '36514-1948', '925612548', '63.254.226/0001-39', '2022-11-27', '2022-11-27', '2222-01-01', 1, 'S', 'Atuamos pela defesa dos direitos e respeito aos animais, fornecendo cuidados e amparo para eles.');

-- select * from resgatador;
insert into resgatador values (1, 1, '2022-11-28', 'Pet Love', 'Amo animais, comecei a resgatar por amor e farei meu melhor.', 1);
insert into resgatador values (2, 2, '2022-11-28', 'Petz', 'Tive dois animais de resgate que já faleceram, agora me empenharei para ajudar outros animais que precisarem.', 1);

-- select * from doacao_resgate;
insert into doacao_resgate values (1, 1, 2, '2022-11-27', '09:41:54', '500 reais');
insert into doacao_resgate values (2, 2, 1, '2022-11-27', '14:25:12', 'Ração para gatos de 10kg');

-- select * from animais_desaparecidos;
insert into animais_desaparecidos values (1, 1, 2, 'caramelo', '05681-022', 'São Paulo', 'São Paulo', 'Mooca', 'Jaguar de martineli', 'caramelo é um cachorro muito dócil, que se entrega mesmo para quem não conhece. Recompensa de 200 reais para quem o encontrar. Visto por último na mooca.', '2022-11-27', '2222-01-01', 1);

-- select * from animal_resgatador;
insert into animal_resgatador values (1, 2, 1, '04213-002 ', 'São Paulo', 'São Paulo', 'Ipiranga', 'R. Lino Coutinho', 'N', 'N', '2022-12-10');

-- select * from animal_empresa;
insert into animal_empresa values (1, 1, 2, '2222-01-01', 'P');

-- select * from doacao_empresa;
insert into doacao_empresa values (1, 2, 1, '2022-11-27', '12:21:23', '300 reais');