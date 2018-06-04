CREATE TABLE `user` IF NOT EXISTS (
	`id` int NOT NULL AUTO_INCREMENT,
	`username` varchar(30) NOT NULL,
	`password` varchar(255) NOT NULL,
	`pokja` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `pokja` IF NOT EXISTS (
	`id` int NOT NULL AUTO_INCREMENT,
	`pokja` varchar(30) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `borang` IF NOT EXISTS (
	`id` int NOT NULL AUTO_INCREMENT,
	`idPokja` int NOT NULL,
	`borang` varchar(50) NOT NULL,
	`file` varchar(30) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `user` ADD CONSTRAINT `user_fk0` FOREIGN KEY (`pokja`) REFERENCES `pokja`(`id`);

ALTER TABLE `borang` ADD CONSTRAINT `borang_fk0` FOREIGN KEY (`idPokja`) REFERENCES `pokja`(`id`);
