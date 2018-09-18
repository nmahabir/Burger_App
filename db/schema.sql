### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE all_burgers
(
	id int NOT NULL AUTO_INCREMENT,
	type varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

