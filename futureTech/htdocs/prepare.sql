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

delimiter $$
CREATE TRIGGER user_insert
    BEFORE INSERT ON User FOR EACH ROW
    BEGIN
        DECLARE maxaboid integer;
        DECLARE maxprofilid INT;

        SELECT MAX(id)+1 INTO maxaboid FROM Abo;
        SELECT MAX(id)+1 INTO maxprofilid FROM Profil;

        INSERT INTO Abo (id) VALUE (maxaboid);
        INSERT INTO Profil (id) VALUE (maxprofilid);
        set new.idProfil = maxprofilid;
        set new.idAbo = maxaboid;
    end $$
    delimiter ;
