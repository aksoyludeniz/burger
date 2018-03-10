### burger

create database burger_db;

use burger_db;

create table burgers
(
 id int not null auto_increment,
 burger_name varchar(250) Not Null,
 devoured Boolean default false,
 primary key (id)
);
