create table users (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(90) NOT NULL UNIQUE,
    phone VARCHAR(90) NOT NULL UNIQUE,
    password VARCHAR(90) NOT NULL
);