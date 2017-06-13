CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL,
  name varchar(50),
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id int NOT NULL,
  name varchar(50),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL,
  text varchar(1000),
  userId int,
  roomId int,
  PRIMARY KEY(id),
  FOREIGN KEY(userId) REFERENCES users(id),
  FOREIGN KEY(roomId) REFERENCES rooms(id)
);

-- why cant we get the id of rooms and users in the mesages table
/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
