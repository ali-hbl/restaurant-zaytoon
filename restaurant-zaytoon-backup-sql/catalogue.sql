-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mar. 16 mai 2023 à 12:00
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `restaurant-zaytoon`
--

-- --------------------------------------------------------

--
-- Structure de la table `catalogue`
--

CREATE TABLE `catalogue` (
  `id` varchar(255) NOT NULL DEFAULT 'stripe_id_here',
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `category` enum('entrees','plats','desserts','boissons') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `catalogue`
--

INSERT INTO `catalogue` (`id`, `name`, `description`, `price`, `image_url`, `category`) VALUES
('price_1MzFfULEZw1RbHzdAL6mKZgQ', 'Tajine d\'agneau', 'Un délicieux plat marocain à base d\'agneau, de légumes et d\'épices.', '15.99', 'tajine.png', 'plats'),
('price_1MzFg9LEZw1RbHzdFJIIrz3S', 'Pastilla au poulet', 'Un plat sucré-salé marocain à base de feuilles de brick, de poulet et d\'amandes.', '16.99', 'pastilla.png', 'plats'),
('price_1MzFgrLEZw1RbHzdv4SGBQq6', 'Couscous royal', 'Un plat traditionnel du Maghreb à base de semoule, de légumes et de viande.', '12.50', 'couscous.png', 'plats'),
('price_1MzFhKLEZw1RbHzdAM5htduv', 'Houmous', 'Une délicieuse purée de pois chiches, d\'ail et de tahini.', '6.99', 'houmous.png', 'plats'),
('price_1MzFi7LEZw1RbHzd1Hfl4Ukr', 'Mousse au chocolat', 'Dessert classique à base de chocolat et de crème fouettée.', '4.50', 'mousse.png', 'desserts'),
('price_1MzFiiLEZw1RbHzdNKt4Tdg7', 'Crème brûlée', 'Dessert français traditionnel à base de crème custard et de sucre caramélisé.', '4.50', 'creme-brulee.png', 'desserts'),
('price_1MzFj9LEZw1RbHzdxFSDucxB', 'Tarte aux pommes', 'Tarte classique aux pommes avec une croûte feuilletée.', '4.50', 'tarte-pommes.png', 'desserts'),
('price_1MzFjcLEZw1RbHzdirYFw0rZ', 'Salade de chèvre chaud', 'Salade verte, tomates, oignons rouges, fromage de chèvre et vinaigrette.', '5.50', 'salade-chevre.png', 'entrees'),
('price_1MzFk6LEZw1RbHzdvIjrMAP8', 'Poulet aux olives', 'Un plat généreux et savoureux, aux saveurs orientales.', '14.99', 'poulet-olives.png', 'plats'),
('price_1MzFkXLEZw1RbHzdMZT0MYfL', 'Thé à la menthe', 'Thé vert à la menthe traditionnel marocain.', '2.50', 'the.png', 'boissons'),
('price_1MzFkxLEZw1RbHzdzQGD0Qof', 'Eau plate', 'Eau minérale plate en bouteille.', '1.00', 'eau.png', 'boissons'),
('price_1MzFlSLEZw1RbHzd3u35Krot', 'Jus d\'orange', 'Jus d\'orange fraîchement pressé.', '3.00', 'jus-orange.jpg', 'boissons'),
('price_1MzFlyLEZw1RbHzdMYl0F4zO', 'Coca-Cola', 'Boisson gazeuse sucrée.', '2.50', 'coca.jpg', 'boissons'),
('price_1MzFmOLEZw1RbHzd9XfRuCdB', 'Café', 'Café noir traditionnel.', '1.50', 'coffee.png', 'boissons'),
('price_1MzFmvLEZw1RbHzdKGlEXd2A', 'Virgin Mojito', 'Boisson fraîche et rafraîchissante à base de menthe, de citron vert et de soda, sans alcool.', '4.50', 'mojito.png', 'boissons'),
('price_1MzFnQLEZw1RbHzdLGgt21oQ', 'Chorba algérienne', 'Soupe traditionnelle algérienne servie avec du citron et de la coriandre fraîche.', '4.50', 'chorba.png', 'entrees'),
('price_1MzFnrLEZw1RbHzdLvXCmJ4M', 'Falafel', 'Des boulettes de pois chiches et d\'épices frites, parfaites pour les végétariens.', '9.99', 'falafel.jpg', 'plats'),
('price_1MzFoFLEZw1RbHzdiaWM1yc3', 'Baba ganoush', 'Une purée d\'aubergines grillées, d\'ail et de tahini.', '5.99', 'babaganoush.png', 'plats'),
('price_1MzFooLEZw1RbHzdPurFVop2', 'Chakchouka', 'Un plat tunisien à base de poivrons, de tomates et d\'oeufs.', '8.99', 'chakchouka.png', 'plats'),
('price_1MzFpLLEZw1RbHzdDITwt4Bt', 'Crevettes à la chermoula', 'Des crevettes marinées dans une sauce épicée marocaine.', '4.99', 'crevettes.png', 'entrees');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `catalogue`
--
ALTER TABLE `catalogue`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
