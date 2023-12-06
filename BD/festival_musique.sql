-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Lun 04 Décembre 2023 à 16:20
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `festival_musique`
--

-- --------------------------------------------------------

--
-- Structure de la table `musicien`
--

CREATE TABLE IF NOT EXISTS `musicien` (
  `Num_mus` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `Num_Rep` int(11) NOT NULL,
  PRIMARY KEY (`Num_mus`),
  KEY `Num_Rep` (`Num_Rep`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `musicien`
--


-- --------------------------------------------------------

--
-- Structure de la table `programmer`
--

CREATE TABLE IF NOT EXISTS `programmer` (
  `id_programmation` int(11) NOT NULL,
  `Date` int(11) NOT NULL,
  `Num_Rep` int(11) NOT NULL,
  `tarif` int(11) NOT NULL,
  PRIMARY KEY (`id_programmation`),
  KEY `Num_Rep` (`Num_Rep`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `programmer`
--


-- --------------------------------------------------------

--
-- Structure de la table `représentation`
--

CREATE TABLE IF NOT EXISTS `représentation` (
  `Num_Rep` int(11) NOT NULL,
  `titre_Rep` varchar(50) NOT NULL,
  `lieu` varchar(50) NOT NULL,
  PRIMARY KEY (`Num_Rep`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `représentation`
--


--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `musicien`
--
ALTER TABLE `musicien`
  ADD CONSTRAINT `musicien_ibfk_1` FOREIGN KEY (`Num_Rep`) REFERENCES `représentation` (`Num_Rep`);

--
-- Contraintes pour la table `programmer`
--
ALTER TABLE `programmer`
  ADD CONSTRAINT `programmer_ibfk_1` FOREIGN KEY (`Num_Rep`) REFERENCES `représentation` (`Num_Rep`);
