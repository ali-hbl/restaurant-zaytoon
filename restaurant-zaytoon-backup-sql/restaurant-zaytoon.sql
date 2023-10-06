-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mar. 16 mai 2023 à 12:01
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

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `product_id`, `product_name`, `quantity`, `price`, `created_at`) VALUES
(26, 'A3UYwtmIpjYg0Ilspz54gCb074e2', 'price_1MzFmOLEZw1RbHzd9XfRuCdB', 'Café', 1, '1.50', '2023-05-16 11:11:45'),
(27, 'A3UYwtmIpjYg0Ilspz54gCb074e2', 'price_1MzFmvLEZw1RbHzdKGlEXd2A', 'Virgin Mojito', 1, '4.50', '2023-05-16 11:11:45');

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `num_guests` int(11) NOT NULL,
  `status` enum('confirmed','cancelled') DEFAULT 'confirmed'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`id`, `user_id`, `name`, `email`, `phone`, `time`, `num_guests`, `status`) VALUES
(1, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Ali', 'ali@test.be', '0487654321', '2023-05-31 10:30:00', 2, 'confirmed'),
(2, 'XqIudKHXbtP6atpBoxBJjP3AWIA3', 'Emile', 'emile@efp.be', '0987654321', '2023-05-31 17:00:00', 2, 'confirmed'),
(3, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Alexsandre', 'alex@test.be', '0487654321', '2023-05-09 10:00:00', 3, 'confirmed'),
(4, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Julien', 'juju@test.be', '0487654321', '2023-05-09 13:00:00', 4, 'confirmed'),
(5, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Clement', 'clem@test.be', '0487654321', '2023-05-09 11:30:00', 5, 'confirmed'),
(6, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Laura', 'laura@test.be', '0487654321', '2023-05-09 17:30:00', 5, 'confirmed'),
(7, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Sammy', 'sammy@test.be', '0487654321', '2023-05-09 18:30:00', 6, 'confirmed'),
(8, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Josianne', 'jojo@test.be', '0485654321', '2023-05-09 19:00:00', 7, 'confirmed'),
(9, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Marco', 'marco@test.be', '0489457321', '2023-05-09 10:00:00', 8, 'confirmed'),
(10, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Chiara', 'chiara@test.be', '0484254325', '2023-05-09 20:00:00', 10, 'confirmed'),
(11, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Eddy', 'eddy@test.be', '0485634324', '2023-05-09 19:45:00', 4, 'confirmed');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','user') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `uid`, `username`, `email`, `role`) VALUES
(1, 'A3UYwtmIpjYg0Ilspz54gCb074e2', 'Admin', 'admin@zaytoon.com', 'admin'),
(2, 'hPRyqqii6DdN3nHCddFttq6jjDm1', 'Ali', 'ali@test.be', 'user'),
(3, 'XqIudKHXbtP6atpBoxBJjP3AWIA3', 'Jose', 'jose@gmail.com', 'user');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `catalogue`
--
ALTER TABLE `catalogue`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id_fk` (`product_id`),
  ADD KEY `product_name_fk` (`product_name`),
  ADD KEY `user_uid_fk` (`user_id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uid` (`uid`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);

--
-- Contraintes pour la table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `catalogue` (`id`),
  ADD CONSTRAINT `product_name_fk` FOREIGN KEY (`product_name`) REFERENCES `catalogue` (`name`),
  ADD CONSTRAINT `user_uid_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
