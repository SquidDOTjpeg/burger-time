DROP DATABASE IF EXISTS meaty_sandwichesDB;

CREATE DATABASE meaty_sandwichesDB;

USE meaty_sandwichesDB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    have_eaten BOOLEAN,
    PRIMARY KEY(id)
);