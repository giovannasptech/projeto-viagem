create database projeto_individual;
use projeto_individual;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);
drop table usuario;
drop table resultados_quiz;

-- CREATE TABLE paises (
 --   id_pais INT PRIMARY KEY AUTO_INCREMENT,
 --   nome VARCHAR(100) NOT NULL,
 --   fkUsuario INT,
 --    FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario));
     
     CREATE TABLE paises (
    nome VARCHAR(100) NOT NULL,
    fkUsuario INT,
     FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario));
     
     drop table paises;
    
    select * from paises;
     
     
     
     
     

drop table paises;
CREATE TABLE quizzes (
    id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE resultados_quiz (
    id_resultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT NOT NULL,
    erradas int not null,
    fkUsuario INT,
    data_participacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario));
    
    drop table resultados_quiz;
    
    select * from resultados_quiz;
    
    select count(id_resultado) as total_tentativas from resultados_quiz where fkUsuario = 19;
    
    
    select u.nome, r.pontuacao, r.erradas from usuario u join resultados_quiz r on r.fkUsuario = u.id_usuario;

drop table usuario;
select * from paises;
select * from usuario;


select r.pontuacao, r.erradas, u.nome from usuario u join resultados_quiz r on r.fkusuario = u.idUsuario;