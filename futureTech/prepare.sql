DROP DATABASE IF EXISTS FutureTech;
CREATE DATABASE FutureTech;

CREATE USER IF NOT EXISTS 'ft_user'@'%' IDENTIFIED BY 'Bochum#2020';

GRANT ALL PRIVILEGES ON FutureTech.* TO 'ft_user'@'%' IDENTIFIED BY 'Bochum#2020';
FLUSH PRIVILEGES;

USE FutureTech;

DROP TABLE IF EXISTS User;

CREATE TABLE `User` 
( 
	`id` integer NOT NULL,
	`benutzername` VARCHAR(32),
	`passwort` VARCHAR(32),
	`email` VARCHAR(32),
	`idProfil` integer NOT NULL,
	`idAbo` integer NOT NULL
); 

CREATE TABLE `Abo` 
( 
	`id` integer NOT NULL
); 

CREATE TABLE `Profil` 
( 
	`id` integer NOT NULL,
	`bild` BLOB,
	`beschreibung` TEXT,
	`bildprodukt` BLOB
); 

CREATE TABLE `Abo_Profil` 
( 
	`idAbo` integer NOT NULL,
	`idProfil` integer NOT NULL
); 

ALTER TABLE `User` ADD PRIMARY KEY (`id`);
ALTER TABLE `Abo` ADD PRIMARY KEY (`id`);
ALTER TABLE `Profil` ADD PRIMARY KEY (`id`);
ALTER TABLE `Abo_Profil` ADD PRIMARY KEY (`idAbo`, `idProfil`);

ALTER TABLE `User` ADD CONSTRAINT `User_idProfil_fkey` FOREIGN KEY (`idProfil`) REFERENCES `Profil`(`id`);
ALTER TABLE `User` ADD CONSTRAINT `User_idAbo_fkey` FOREIGN KEY (`idAbo`) REFERENCES `Abo`(`id`);
ALTER TABLE `Abo_Profil` ADD CONSTRAINT `Abo_Profil_idAbo_fkey` FOREIGN KEY (`idAbo`) REFERENCES `Abo`(`id`);
ALTER TABLE `Abo_Profil` ADD CONSTRAINT `Abo_Profil_idProfil_fkey` FOREIGN KEY (`idProfil`) REFERENCES `Profil`(`id`);

ALTER TABLE User MODIFY id INTEGER NOT NULL AUTO_INCREMENT;

INSERT INTO Abo VALUES (1);
INSERT INTO Profil VALUES (1,'profilBild','Beschreibung','zweiteBIld');
INSERT INTO User (benutzername, passwort, email, idProfil, idAbo) VALUES ('ft_user2','einfach2020','ft.de',(SELECT MAX(id) FROM Profil),(SELECT MAX(id) FROM Abo));

INSERT INTO Abo (id) SELECT MAX(id) +1 FROM Abo;
INSERT INTO Profil (id) SELECT MAX(id) +1 FROM Profil;
INSERT INTO User (benutzername, passwort, email, idProfil, idAbo) VALUES ('bbb1','12345','abcd.de',(SELECT MAX(id) FROM Profil),(SELECT MAX(id) FROM Abo));

INSERT INTO Abo (id) SELECT MAX(id) +1 FROM Abo;
INSERT INTO Profil (id) SELECT MAX(id) +1 FROM Profil;
INSERT INTO User (benutzername, passwort, email, idProfil, idAbo) VALUES ('bbb2','12345','abcd.de',(SELECT MAX(id) FROM Profil),(SELECT MAX(id) FROM Abo));

INSERT INTO Abo (id) SELECT MAX(id) +1 FROM Abo;
INSERT INTO Profil (id) SELECT MAX(id) +1 FROM Profil;
INSERT INTO User (benutzername, passwort, email, idProfil, idAbo) VALUES ('bbb3','12345','abcd.de',(SELECT MAX(id) FROM Profil),(SELECT MAX(id) FROM Abo));

INSERT INTO Abo (id) SELECT MAX(id) +1 FROM Abo;
INSERT INTO Profil (id) SELECT MAX(id) +1 FROM Profil;
INSERT INTO User (benutzername, passwort, email, idProfil, idAbo) VALUES ('bbb4','12345','abcd.de',(SELECT MAX(id) FROM Profil),(SELECT MAX(id) FROM Abo));



INSERT INTO Abo_Profil VALUES (1,2);
INSERT INTO Abo_Profil VALUES (1,3);
INSERT INTO Abo_Profil VALUES (1,4);
INSERT INTO Abo_Profil VALUES (1,5);

UPDATE Profil SET beschreibung = '**Beschreiung 2' WHERE id = 2;
UPDATE Profil SET beschreibung = '**Beschreiung 3' WHERE id = 3;
UPDATE Profil SET beschreibung = '**Beschreiung 4' WHERE id = 4;
UPDATE Profil SET beschreibung = '**Beschreiung 5' WHERE id = 5;
