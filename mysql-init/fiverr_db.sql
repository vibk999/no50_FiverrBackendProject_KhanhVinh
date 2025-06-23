/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `BinhLuan`;
CREATE TABLE `BinhLuan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ma_cong_viec` int DEFAULT NULL,
  `ma_nguoi_binh_luan` int DEFAULT NULL,
  `ngay_binh_luan` datetime DEFAULT NULL,
  `noi_dung` varchar(255) DEFAULT NULL,
  `sao_binh_luan` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `ma_cong_viec` (`ma_cong_viec`),
  KEY `ma_nguoi_binh_luan` (`ma_nguoi_binh_luan`),
  CONSTRAINT `BinhLuan_ibfk_1` FOREIGN KEY (`ma_cong_viec`) REFERENCES `CongViec` (`id`),
  CONSTRAINT `BinhLuan_ibfk_2` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `ChiTietLoaiCongViec`;
CREATE TABLE `ChiTietLoaiCongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_chi_tiet` varchar(255) DEFAULT NULL,
  `hinh_anh` varchar(255) DEFAULT NULL,
  `ma_loai_cong_viec` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `ma_loai_cong_viec` (`ma_loai_cong_viec`),
  CONSTRAINT `ChiTietLoaiCongViec_ibfk_1` FOREIGN KEY (`ma_loai_cong_viec`) REFERENCES `LoaiCongViec` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `CongViec`;
CREATE TABLE `CongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_cong_viec` varchar(255) DEFAULT NULL,
  `danh_gia` int DEFAULT NULL,
  `gia_tien` int DEFAULT NULL,
  `hinh_anh` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `mo_ta_ngan` varchar(255) DEFAULT NULL,
  `sao_cong_viec` int DEFAULT NULL,
  `ma_chi_tiet_loai` int DEFAULT NULL,
  `nguoi_tao` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `ma_chi_tiet_loai` (`ma_chi_tiet_loai`),
  KEY `nguoi_tao` (`nguoi_tao`),
  CONSTRAINT `CongViec_ibfk_1` FOREIGN KEY (`ma_chi_tiet_loai`) REFERENCES `ChiTietLoaiCongViec` (`id`),
  CONSTRAINT `CongViec_ibfk_2` FOREIGN KEY (`nguoi_tao`) REFERENCES `NguoiDung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `LoaiCongViec`;
CREATE TABLE `LoaiCongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_loai_cong_viec` varchar(255) DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `NguoiDung`;
CREATE TABLE `NguoiDung` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pass_word` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `birth_day` varchar(50) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `certification` varchar(255) DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `ThueCongViec`;
CREATE TABLE `ThueCongViec` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ma_cong_viec` int DEFAULT NULL,
  `ma_nguoi_thue` int DEFAULT NULL,
  `ngay_thue` datetime DEFAULT NULL,
  `hoan_thanh` tinyint(1) DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `ma_cong_viec` (`ma_cong_viec`),
  KEY `ma_nguoi_thue` (`ma_nguoi_thue`),
  CONSTRAINT `ThueCongViec_ibfk_1` FOREIGN KEY (`ma_cong_viec`) REFERENCES `CongViec` (`id`),
  CONSTRAINT `ThueCongViec_ibfk_2` FOREIGN KEY (`ma_nguoi_thue`) REFERENCES `NguoiDung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `BinhLuan` (`id`, `ma_cong_viec`, `ma_nguoi_binh_luan`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 2, 3, '2024-01-18 00:00:00', 'Thiết kế hơi chậm nhưng chất lượng.', 4, 0, 0, NULL, '2025-05-27 13:36:49', '2025-05-27 13:36:49');
INSERT INTO `BinhLuan` (`id`, `ma_cong_viec`, `ma_nguoi_binh_luan`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(5, 1, 4, '2025-06-18 14:00:00', 'Dịch vụ rất tốt!', 5, 0, 0, NULL, '2025-06-19 14:57:25', '2025-06-19 14:57:25');


INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'Thiết kế logo', 'logo.png', 1, 0, 0, NULL, '2025-05-27 13:36:28', '2025-05-27 13:36:28');
INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 'UI/UX Design', 'uiux.png', 1, 0, 0, NULL, '2025-05-27 13:36:28', '2025-05-27 13:36:28');
INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(3, 'Frontend ReactJS', 'react.png', 2, 0, 0, NULL, '2025-05-27 13:36:28', '2025-05-27 13:36:28');
INSERT INTO `ChiTietLoaiCongViec` (`id`, `ten_chi_tiet`, `hinh_anh`, `ma_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, 'Backend NodeJS', 'node.png', 2, 0, 0, NULL, '2025-05-27 13:36:28', '2025-05-27 13:36:28'),
(5, 'Cập nhật thiết kế', '/uploads/1750357085643-Anime_Pastel_Dream_A_girl_is_playing_the_guitar_elegantly_and_2.jpg', 3, 0, 0, NULL, '2025-05-27 13:36:28', '2025-06-19 18:18:06'),
(6, 'Dịch tiếng Nhật', 'japanese.png', 3, 0, 0, NULL, '2025-05-27 13:36:28', '2025-05-27 13:36:28'),
(7, 'Thiết kế UI/UX', NULL, NULL, 0, 0, NULL, '2025-06-19 16:02:57', '2025-06-19 16:02:57'),
(8, 'Thiết kế UI', NULL, NULL, 0, 0, NULL, '2025-06-19 16:03:08', '2025-06-19 16:03:08'),
(9, 'Thiết kế UI', NULL, NULL, 0, 0, NULL, '2025-06-19 16:28:50', '2025-06-19 16:28:50');

INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'Thiết kế logo công ty', 100, 2000000, '/uploads/1750357383855-Anime_Pastel_Dream_A_girl_is_playing_the_guitar_elegantly_and_0.jpg', 'Thiết kế logo chuyên nghiệp', 'Cập nhật mô tả', 5, 1, 1, 0, 0, NULL, '2025-05-27 13:36:39', '2025-06-19 18:23:04');
INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 'Thiết kế giao diện người dùng', 85, 800000, '/uploads/1750433231253-1750353225304-Anime_Pastel_Dream_A_girl_is_playing_the_guitar_elegantly_and_2.jpg', 'Thiết kế UI/UX cho web/mobile', 'Thiết kế hiện đại', 4, 2, 1, 0, 0, NULL, '2025-05-27 13:36:39', '2025-06-20 15:27:11');
INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(3, 'Website bán hàng bằng ReactJS', 70, 2000000, 'react1.jpg', 'Xây dựng web bán hàng', 'ReactJS + Redux', 5, 3, 2, 0, 0, NULL, '2025-05-27 13:36:39', '2025-05-27 13:36:39');
INSERT INTO `CongViec` (`id`, `ten_cong_viec`, `danh_gia`, `gia_tien`, `hinh_anh`, `mo_ta`, `mo_ta_ngan`, `sao_cong_viec`, `ma_chi_tiet_loai`, `nguoi_tao`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, 'API NodeJS cho ứng dụng', 50, 1500000, 'node1.jpg', 'Xây dựng RESTful API', 'ExpressJS API', 4, 4, 3, 0, 0, NULL, '2025-05-27 13:36:39', '2025-05-27 13:36:39'),
(7, 'Chụp ảnh sự kiện', 120, 1500000, NULL, 'Dịch vụ chụp ảnh chuyên nghiệp', 'Chụp ảnh', 4, 2, NULL, 0, 0, NULL, '2025-06-19 18:08:40', '2025-06-19 18:08:40'),
(8, 'Chụp ảnh sự kiện', 120, 1500000, NULL, 'Dịch vụ chụp ảnh chuyên nghiệp', 'Chụp ảnh', 4, 2, NULL, 0, 0, NULL, '2025-06-19 18:08:41', '2025-06-19 18:08:41'),
(9, 'Chụp ảnh sự kiện', 120, 1500000, NULL, 'Dịch vụ chụp ảnh chuyên nghiệp', 'Chụp ảnh', 4, 2, NULL, 0, 0, NULL, '2025-06-19 18:08:42', '2025-06-19 18:08:42'),
(10, 'Chụp ảnh sự kiện', 120, 1500000, NULL, 'Dịch vụ chụp ảnh chuyên nghiệp', 'Chụp ảnh', 4, 2, NULL, 0, 0, NULL, '2025-06-19 18:08:44', '2025-06-19 18:08:44'),
(11, 'Chụp ảnh sự kiện', 120, 1500000, NULL, 'Dịch vụ chụp ảnh chuyên nghiệp', 'Chụp ảnh', 4, 2, NULL, 0, 0, NULL, '2025-06-19 18:08:44', '2025-06-19 18:08:44'),
(12, 'Chụp ảnh sự kiện', 120, 1500000, NULL, 'Dịch vụ chụp ảnh chuyên nghiệp', 'Chụp ảnh', 4, 2, NULL, 0, 0, NULL, '2025-06-19 18:08:46', '2025-06-19 18:08:46'),
(13, 'Chụp ảnh sự kiện', 120, 1500000, NULL, 'Dịch vụ chụp ảnh chuyên nghiệp', 'Chụp ảnh', 4, 2, NULL, 0, 0, NULL, '2025-06-20 15:02:50', '2025-06-20 15:02:50');

INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'hi', 0, 0, NULL, '2025-05-27 13:36:22', '2025-06-20 07:15:04');
INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 'Lập trình Web', 0, 0, NULL, '2025-05-27 13:36:22', '2025-05-27 13:36:22');
INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(3, 'Thiết kế Website nâng cao', 0, 0, NULL, '2025-05-27 13:36:22', '2025-06-19 16:59:57');
INSERT INTO `LoaiCongViec` (`id`, `ten_loai_cong_viec`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, 'Marketing', 0, 0, NULL, '2025-05-27 13:36:22', '2025-05-27 13:36:22'),
(5, 'Viết nội dung', 0, 0, NULL, '2025-05-27 13:36:22', '2025-05-27 13:36:22'),
(6, 'Thiết kế Website', 0, 0, NULL, '2025-06-19 16:37:52', '2025-06-19 16:37:52'),
(7, 'Thiết kế Website', 0, 0, NULL, '2025-06-19 16:40:53', '2025-06-19 16:40:53');

INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `avatar`) VALUES
(1, 'Nguyen Van A', 'a@gmail.com', '123456', '0987654321', '1990-01-01', 'male', 'admin', 'TypeScript', 'Adobe Certified', 0, 0, NULL, '2025-05-27 13:36:33', '2025-06-20 07:47:07', NULL);
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `avatar`) VALUES
(2, 'Tran Thi B', 'b@gmail.com', '123456', '0987654321', '1992-05-20', 'female', 'user', 'ReactJS', 'Google Developer', 0, 0, NULL, '2025-05-27 13:36:33', '2025-05-27 13:36:33', NULL);
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `avatar`) VALUES
(3, 'Le Van C', 'c@gmail.com', '123456', '0912345678', '1995-09-10', 'male', 'user', 'NodeJS', 'Node Certified', 0, 0, NULL, '2025-05-27 13:36:33', '2025-05-27 13:36:33', NULL);
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `skill`, `certification`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `avatar`) VALUES
(4, 'Nguyễn Văn A', 'vinh@example.com', '$2b$10$iM3aoPDsQHMVE/bED3aN4.0TRmH0T/TD4ifPH3sKx3SpSw/R.NO96', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, '2025-06-17 15:30:41', '2025-06-20 08:42:49', '1750408968901-Anime_Pastel_Dream_A_girl_is_playing_the_guitar_elegantly_and_0.jpg'),
(5, 'Nguyễn Văn A', '5@example.com', '123456', '0123456789', '1990-01-01', 'male', 'USER', 'JavaScript,Node.js', 'Prisma', 0, 0, NULL, '2025-06-20 08:39:06', '2025-06-20 08:39:06', ''),
(7, 'Nguyễn Văn A', 'a@example.com', '123456', '0123456789', '1990-01-01', 'male', 'USER', 'JavaScript,Node.js', 'Prisma', 0, 0, NULL, '2025-06-20 08:36:39', '2025-06-20 08:36:39', ''),
(10, 'Nguyễn Văn A', '1@example.com', '123456', '0123456789', '1990-01-01', 'male', 'USER', 'JavaScript,Node.js', 'Prisma', 0, 0, NULL, '2025-06-20 08:36:50', '2025-06-20 08:36:50', ''),
(11, 'Nguyễn Văn A', '2@example.com', '123456', '0123456789', '1990-01-01', 'male', 'USER', 'JavaScript,Node.js', 'Prisma', 0, 0, NULL, '2025-06-20 08:36:55', '2025-06-20 08:36:55', ''),
(13, 'Nguyễn Văn A', '4@example.com', '123456', '0123456789', '1990-01-01', 'male', 'USER', 'JavaScript,Node.js', 'Prisma', 0, 0, NULL, '2025-06-20 08:37:06', '2025-06-20 08:37:06', '');

INSERT INTO `ThueCongViec` (`id`, `ma_cong_viec`, `ma_nguoi_thue`, `ngay_thue`, `hoan_thanh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, '2024-01-10 00:00:00', 1, 0, 0, NULL, '2025-05-27 13:36:43', '2025-05-27 13:36:43');
INSERT INTO `ThueCongViec` (`id`, `ma_cong_viec`, `ma_nguoi_thue`, `ngay_thue`, `hoan_thanh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 2, 3, '2024-01-15 00:00:00', 0, 0, 0, NULL, '2025-05-27 13:36:43', '2025-05-27 13:36:43');
INSERT INTO `ThueCongViec` (`id`, `ma_cong_viec`, `ma_nguoi_thue`, `ngay_thue`, `hoan_thanh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(3, 3, 1, '2024-02-01 00:00:00', 1, 0, 0, NULL, '2025-05-27 13:36:43', '2025-05-27 13:36:43');
INSERT INTO `ThueCongViec` (`id`, `ma_cong_viec`, `ma_nguoi_thue`, `ngay_thue`, `hoan_thanh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, 4, 2, '2024-03-01 00:00:00', 1, 0, 0, NULL, '2025-05-27 13:36:43', '2025-06-20 13:30:01'),
(5, 2, 5, '2025-07-20 00:00:00', 1, 0, 0, NULL, '2025-06-20 13:14:03', '2025-06-20 13:29:24'),
(6, 1, 5, '2025-06-20 00:00:00', 1, 0, 0, NULL, '2025-06-20 13:14:17', '2025-06-20 13:14:17'),
(14, 2, 3, '2025-07-20 00:00:00', 1, 0, 0, NULL, '2025-06-20 13:09:45', '2025-06-20 13:30:59'),
(15, 1, 5, '2025-06-20 00:00:00', 1, 0, 0, NULL, '2025-06-20 13:14:28', '2025-06-20 13:14:28');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;