-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 02-Jun-2021 às 16:27
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bestride`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_group_id_b120cbf9` (`group_id`),
  KEY `auth_group_permissions_permission_id_84c5c92e` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE IF NOT EXISTS `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  KEY `auth_permission_content_type_id_2f476e4b` (`content_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add user', 7, 'add_user'),
(26, 'Can change user', 7, 'change_user'),
(27, 'Can delete user', 7, 'delete_user'),
(28, 'Can view user', 7, 'view_user'),
(29, 'Can add turist info', 8, 'add_turistinfo'),
(30, 'Can change turist info', 8, 'change_turistinfo'),
(31, 'Can delete turist info', 8, 'delete_turistinfo'),
(32, 'Can view turist info', 8, 'view_turistinfo'),
(33, 'Can add roles', 9, 'add_roles'),
(34, 'Can change roles', 9, 'change_roles'),
(35, 'Can delete roles', 9, 'delete_roles'),
(36, 'Can view roles', 9, 'view_roles'),
(37, 'Can add user roles', 10, 'add_userroles'),
(38, 'Can change user roles', 10, 'change_userroles'),
(39, 'Can delete user roles', 10, 'delete_userroles'),
(40, 'Can view user roles', 10, 'view_userroles');

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE IF NOT EXISTS `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE IF NOT EXISTS `auth_user_groups` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_user_id_6a12ed8b` (`user_id`),
  KEY `auth_user_groups_group_id_97559544` (`group_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE IF NOT EXISTS `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permissions_user_id_a95ead1b` (`user_id`),
  KEY `auth_user_user_permissions_permission_id_1fbb5f2c` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `bestrideapi_user`
--

DROP TABLE IF EXISTS `bestrideapi_user`;
CREATE TABLE IF NOT EXISTS `bestrideapi_user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `password` varchar(15) DEFAULT NULL,
  `login_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `password` (`password`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE IF NOT EXISTS `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE IF NOT EXISTS `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(2, 'auth', 'permission'),
(3, 'auth', 'group'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(7, 'BestRideApi', 'user'),
(8, 'BestRideApi', 'turistinfo'),
(9, 'BestRideApi', 'roles'),
(10, 'BestRideApi', 'userroles');

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE IF NOT EXISTS `django_migrations` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'BestRideApi', '0001_initial', '2021-05-28 19:32:13.565118'),
(2, 'BestRideApi', '0002_alter_user_options', '2021-05-28 19:32:13.565118'),
(3, 'BestRideApi', '0003_auto_20210514_1511', '2021-05-28 19:32:13.565118'),
(4, 'BestRideApi', '0004_auto_20210521_1542', '2021-05-28 19:32:13.565118'),
(5, 'BestRideApi', '0005_roles_userroles', '2021-05-28 19:32:13.580740'),
(6, 'contenttypes', '0001_initial', '2021-05-28 19:32:13.596385'),
(7, 'auth', '0001_initial', '2021-05-28 19:32:13.752604'),
(8, 'admin', '0001_initial', '2021-05-28 19:32:13.799497'),
(9, 'admin', '0002_logentry_remove_auto_add', '2021-05-28 19:32:13.815060'),
(10, 'admin', '0003_logentry_add_action_flag_choices', '2021-05-28 19:32:13.815060'),
(11, 'contenttypes', '0002_remove_content_type_name', '2021-05-28 19:32:13.846347'),
(12, 'auth', '0002_alter_permission_name_max_length', '2021-05-28 19:32:13.861987'),
(13, 'auth', '0003_alter_user_email_max_length', '2021-05-28 19:32:13.877591'),
(14, 'auth', '0004_alter_user_username_opts', '2021-05-28 19:32:13.877591'),
(15, 'auth', '0005_alter_user_last_login_null', '2021-05-28 19:32:13.893167'),
(16, 'auth', '0006_require_contenttypes_0002', '2021-05-28 19:32:13.908833'),
(17, 'auth', '0007_alter_validators_add_error_messages', '2021-05-28 19:32:13.908833'),
(18, 'auth', '0008_alter_user_username_max_length', '2021-05-28 19:32:13.924443'),
(19, 'auth', '0009_alter_user_last_name_max_length', '2021-05-28 19:32:13.955696'),
(20, 'auth', '0010_alter_group_name_max_length', '2021-05-28 19:32:13.971309'),
(21, 'auth', '0011_update_proxy_permissions', '2021-05-28 19:32:13.971309'),
(22, 'auth', '0012_alter_user_first_name_max_length', '2021-05-28 19:32:14.002611'),
(23, 'sessions', '0001_initial', '2021-05-28 19:32:14.018137');

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_session`
--

DROP TABLE IF EXISTS `django_session`;
CREATE TABLE IF NOT EXISTS `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `driver_coments`
--

DROP TABLE IF EXISTS `driver_coments`;
CREATE TABLE IF NOT EXISTS `driver_coments` (
  `id` int(11) NOT NULL,
  `coment` varchar(45) DEFAULT NULL,
  `pontuation` varchar(45) DEFAULT NULL,
  `User_idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_driver_coments_User1_idx` (`User_idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `driver_info`
--

DROP TABLE IF EXISTS `driver_info`;
CREATE TABLE IF NOT EXISTS `driver_info` (
  `idInfo_Extra_Condutor` int(11) NOT NULL AUTO_INCREMENT,
  `nif` varchar(45) DEFAULT NULL,
  `driver_card` varchar(45) DEFAULT NULL,
  `driver_card_validate` date DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `User_idUser` int(11) NOT NULL,
  PRIMARY KEY (`idInfo_Extra_Condutor`),
  UNIQUE KEY `nif_UNIQUE` (`nif`),
  UNIQUE KEY `carta_conducao_UNIQUE` (`driver_card`),
  KEY `fk_driver_info_User1_idx` (`User_idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa`
--

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE IF NOT EXISTS `empresa` (
  `idEmpresa_Condutor` int(11) NOT NULL AUTO_INCREMENT,
  `nome_empresa` varchar(45) DEFAULT NULL,
  `morada_empresa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEmpresa_Condutor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa_condutor`
--

DROP TABLE IF EXISTS `empresa_condutor`;
CREATE TABLE IF NOT EXISTS `empresa_condutor` (
  `idEmpresa_Condutor` int(11) NOT NULL AUTO_INCREMENT,
  `Empresa_idEmpresa_Condutor` int(11) NOT NULL,
  PRIMARY KEY (`idEmpresa_Condutor`,`Empresa_idEmpresa_Condutor`),
  KEY `fk_Empresa_Condutor_Empresa1_idx` (`Empresa_idEmpresa_Condutor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `itineary_route`
--

DROP TABLE IF EXISTS `itineary_route`;
CREATE TABLE IF NOT EXISTS `itineary_route` (
  `id` int(11) NOT NULL,
  `Ponto_Interesse_idPercurso` int(11) NOT NULL,
  `road_map_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Ponto_Interesse_idPercurso`,`road_map_id`),
  KEY `fk_itineary_route_Ponto_Interesse1_idx` (`Ponto_Interesse_idPercurso`),
  KEY `fk_itineary_route_road_map1_idx` (`road_map_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `log_viagem`
--

DROP TABLE IF EXISTS `log_viagem`;
CREATE TABLE IF NOT EXISTS `log_viagem` (
  `idlog_viagem` int(11) NOT NULL,
  `time` datetime DEFAULT NULL,
  `Viagem_idViagem` int(11) NOT NULL,
  PRIMARY KEY (`idlog_viagem`),
  KEY `fk_log_viagem_Viagem1_idx` (`Viagem_idViagem`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `idPagamento` int(11) NOT NULL AUTO_INCREMENT,
  `way_payment` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPagamento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `point_interest`
--

DROP TABLE IF EXISTS `point_interest`;
CREATE TABLE IF NOT EXISTS `point_interest` (
  `idPercurso` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `lat_inicial` varchar(45) DEFAULT NULL,
  `lng_initial` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPercurso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `recover_account`
--

DROP TABLE IF EXISTS `recover_account`;
CREATE TABLE IF NOT EXISTS `recover_account` (
  `recupera_conta_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `User_idUser` int(11) NOT NULL,
  PRIMARY KEY (`recupera_conta_id`),
  KEY `fk_recuperar_conta_User1_idx` (`User_idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `roadmapevaluation`
--

DROP TABLE IF EXISTS `roadmapevaluation`;
CREATE TABLE IF NOT EXISTS `roadmapevaluation` (
  `idComentario` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(80) DEFAULT NULL,
  `roteiro_idroteiro` int(11) NOT NULL,
  `road_map_id` int(11) NOT NULL,
  PRIMARY KEY (`idComentario`),
  KEY `fk_avaliacao_roteiro_road_map1_idx` (`road_map_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `road_map`
--

DROP TABLE IF EXISTS `road_map`;
CREATE TABLE IF NOT EXISTS `road_map` (
  `id` int(11) NOT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `lng` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id_roles` int(11) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_roles`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `roles`
--

INSERT INTO `roles` (`id_roles`, `role`) VALUES
(0, 'turist'),
(1, 'driver');

-- --------------------------------------------------------

--
-- Estrutura da tabela `travel`
--

DROP TABLE IF EXISTS `travel`;
CREATE TABLE IF NOT EXISTS `travel` (
  `idTravel` int(11) NOT NULL AUTO_INCREMENT,
  `Pagamento_idPagamento` int(11) NOT NULL,
  `travel_date` date DEFAULT NULL,
  `turist_id` int(11) NOT NULL,
  `startTime` date DEFAULT NULL,
  `endTime` date DEFAULT NULL,
  `road_map_id` int(11) NOT NULL,
  PRIMARY KEY (`idTravel`),
  KEY `fk_Viagem_Pagamento1_idx` (`Pagamento_idPagamento`),
  KEY `fk_Viagem_User1_idx` (`turist_id`),
  KEY `fk_Viagem_road_map1_idx` (`road_map_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `travel_points`
--

DROP TABLE IF EXISTS `travel_points`;
CREATE TABLE IF NOT EXISTS `travel_points` (
  `Ponto_Interesse_idPercurso` int(11) NOT NULL,
  `Viagem_idViagem` int(11) NOT NULL,
  KEY `fk_Pontos_Viagens_Ponto_Interesse1_idx` (`Ponto_Interesse_idPercurso`),
  KEY `fk_Pontos_Viagens_Viagem1_idx` (`Viagem_idViagem`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `travel_schedule`
--

DROP TABLE IF EXISTS `travel_schedule`;
CREATE TABLE IF NOT EXISTS `travel_schedule` (
  `idAgendaViagem` int(11) NOT NULL AUTO_INCREMENT,
  `turist_id` int(11) NOT NULL,
  `travel_date` date DEFAULT NULL,
  `driver_id` int(11) NOT NULL,
  PRIMARY KEY (`idAgendaViagem`),
  KEY `fk_AgendaViagem_User1_idx` (`turist_id`),
  KEY `fk_AgendaViagem_User2_idx` (`driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `turist_info`
--

DROP TABLE IF EXISTS `turist_info`;
CREATE TABLE IF NOT EXISTS `turist_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `adress` varchar(45) DEFAULT NULL,
  `postal_code` varchar(45) DEFAULT NULL,
  `User_idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`,`User_idUser`),
  KEY `fk_turist_info_User1_idx` (`User_idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `turist_info`
--

INSERT INTO `turist_info` (`id`, `email`, `name`, `dob`, `city`, `gender`, `phone_number`, `adress`, `postal_code`, `User_idUser`) VALUES
(6, 'tes@gmail.com', 'teste', '2014-05-28T21:36:32.373+01:00', 'Lisbon', 'male', '22222', 'rua das cruzes 23 3a', '123', 8),
(8, 'familiacaetano21@gmail.com', 'familiacaetano', NULL, NULL, NULL, NULL, NULL, NULL, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `login_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `password_UNIQUE` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`idUser`, `password`, `login_type`) VALUES
(8, 'pbkdf2_sha256$260000$pbkdf2_sha256$K71iPnyw6Z9HsD24ptigAVyvclLbU+lH7HLP8ICitto=', '0'),
(9, 'pbkdf2_sha256$260000$pbkdf2_sha256$KbYkPlJxJmW09yP8oqYkbVSsvpizh8acnQ+2I9zazeg=', '1'),
(10, 'pbkdf2_sha256$260000$pbkdf2_sha256$jciina3qkTXHMusE+ufxROOZuu+rCHnbIAHlc1TxJJM=', '1');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE IF NOT EXISTS `user_roles` (
  `roles_id_roles` int(11) NOT NULL,
  `User_idUser` int(11) NOT NULL,
  KEY `fk_user_roles_roles1_idx` (`roles_id_roles`),
  KEY `fk_user_roles_User1_idx` (`User_idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user_roles`
--

INSERT INTO `user_roles` (`roles_id_roles`, `User_idUser`) VALUES
(0, 8),
(0, 9),
(0, 10);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `driver_coments`
--
ALTER TABLE `driver_coments`
  ADD CONSTRAINT `fk_driver_coments_User1` FOREIGN KEY (`User_idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `driver_info`
--
ALTER TABLE `driver_info`
  ADD CONSTRAINT `fk_driver_info_User1` FOREIGN KEY (`User_idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `empresa_condutor`
--
ALTER TABLE `empresa_condutor`
  ADD CONSTRAINT `fk_Empresa_Condutor_Empresa1` FOREIGN KEY (`Empresa_idEmpresa_Condutor`) REFERENCES `empresa` (`idEmpresa_Condutor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `itineary_route`
--
ALTER TABLE `itineary_route`
  ADD CONSTRAINT `fk_itineary_route_Ponto_Interesse1` FOREIGN KEY (`Ponto_Interesse_idPercurso`) REFERENCES `point_interest` (`idPercurso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_itineary_route_road_map1` FOREIGN KEY (`road_map_id`) REFERENCES `road_map` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `log_viagem`
--
ALTER TABLE `log_viagem`
  ADD CONSTRAINT `fk_log_viagem_Viagem1` FOREIGN KEY (`Viagem_idViagem`) REFERENCES `travel` (`idTravel`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `recover_account`
--
ALTER TABLE `recover_account`
  ADD CONSTRAINT `fk_recuperar_conta_User1` FOREIGN KEY (`User_idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `roadmapevaluation`
--
ALTER TABLE `roadmapevaluation`
  ADD CONSTRAINT `fk_avaliacao_roteiro_road_map1` FOREIGN KEY (`road_map_id`) REFERENCES `road_map` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `travel`
--
ALTER TABLE `travel`
  ADD CONSTRAINT `fk_Viagem_Pagamento1` FOREIGN KEY (`Pagamento_idPagamento`) REFERENCES `payment` (`idPagamento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Viagem_User1` FOREIGN KEY (`turist_id`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Viagem_road_map1` FOREIGN KEY (`road_map_id`) REFERENCES `road_map` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `travel_points`
--
ALTER TABLE `travel_points`
  ADD CONSTRAINT `fk_Pontos_Viagens_Ponto_Interesse1` FOREIGN KEY (`Ponto_Interesse_idPercurso`) REFERENCES `point_interest` (`idPercurso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pontos_Viagens_Viagem1` FOREIGN KEY (`Viagem_idViagem`) REFERENCES `travel` (`idTravel`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `travel_schedule`
--
ALTER TABLE `travel_schedule`
  ADD CONSTRAINT `fk_AgendaViagem_User1` FOREIGN KEY (`turist_id`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_AgendaViagem_User2` FOREIGN KEY (`driver_id`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `turist_info`
--
ALTER TABLE `turist_info`
  ADD CONSTRAINT `fk_turist_info_User1` FOREIGN KEY (`User_idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `fk_user_roles_User1` FOREIGN KEY (`User_idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_roles_roles1` FOREIGN KEY (`roles_id_roles`) REFERENCES `roles` (`id_roles`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
