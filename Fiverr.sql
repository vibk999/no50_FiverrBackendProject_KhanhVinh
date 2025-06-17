
CREATE DATABASE fiverr_db;
USE fiverr_db;


CREATE TABLE LoaiCongViec (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ten_loai_cong_viec VARCHAR(255),
     `deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO LoaiCongViec (ten_loai_cong_viec) VALUES 
('Thiết kế đồ họa'),
('Lập trình Web'),
('Dịch thuật'),
('Marketing'),
('Viết nội dung');
-- Tạo bảng ChiTietLoaiCongViec
CREATE TABLE ChiTietLoaiCongViec (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ten_chi_tiet VARCHAR(255),
    hinh_anh VARCHAR(255),
    ma_loai_cong_viec INT,
    FOREIGN KEY (ma_loai_cong_viec) REFERENCES LoaiCongViec(id),
     `deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO ChiTietLoaiCongViec (ten_chi_tiet, hinh_anh, ma_loai_cong_viec) VALUES 
('Thiết kế logo', 'logo.png', 1),
('UI/UX Design', 'uiux.png', 1),
('Frontend ReactJS', 'react.png', 2),
('Backend NodeJS', 'node.png', 2),
('Dịch tiếng Anh', 'english.png', 3),
('Dịch tiếng Nhật', 'japanese.png', 3);

-- Tạo bảng NguoiDung
CREATE TABLE NguoiDung (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    pass_word VARCHAR(255),
    phone VARCHAR(20),
    birth_day VARCHAR(50),
    gender VARCHAR(10),
    role VARCHAR(50),
    skill VARCHAR(255),
    certification VARCHAR(255),
     `deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO NguoiDung (name, email, pass_word, phone, birth_day, gender, role, skill, certification) VALUES 
('Nguyen Van A', 'a@gmail.com', '123456', '0123456789', '1990-01-01', 'male', 'admin', 'Photoshop', 'Adobe Certified'),
('Tran Thi B', 'b@gmail.com', '123456', '0987654321', '1992-05-20', 'female', 'user', 'ReactJS', 'Google Developer'),
('Le Van C', 'c@gmail.com', '123456', '0912345678', '1995-09-10', 'male', 'user', 'NodeJS', 'Node Certified');
-- Tạo bảng CongViec
CREATE TABLE CongViec (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ten_cong_viec VARCHAR(255),
    danh_gia INT,
    gia_tien INT,
    hinh_anh VARCHAR(255),
    mo_ta VARCHAR(255),
    mo_ta_ngan VARCHAR(255),
    sao_cong_viec INT,
    ma_chi_tiet_loai INT,
    nguoi_tao INT,
    FOREIGN KEY (ma_chi_tiet_loai) REFERENCES ChiTietLoaiCongViec(id),
    FOREIGN KEY (nguoi_tao) REFERENCES NguoiDung(id),
     `deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO CongViec (ten_cong_viec, danh_gia, gia_tien, hinh_anh, mo_ta, mo_ta_ngan, sao_cong_viec, ma_chi_tiet_loai, nguoi_tao) VALUES 
('Thiết kế logo công ty', 100, 500000, 'logo1.jpg', 'Thiết kế logo chuyên nghiệp', 'Logo đẹp, chuyên nghiệp', 5, 1, 1),
('Thiết kế giao diện người dùng', 85, 800000, 'uiux1.jpg', 'Thiết kế UI/UX cho web/mobile', 'Thiết kế hiện đại', 4, 2, 1),
('Website bán hàng bằng ReactJS', 70, 2000000, 'react1.jpg', 'Xây dựng web bán hàng', 'ReactJS + Redux', 5, 3, 2),
('API NodeJS cho ứng dụng', 50, 1500000, 'node1.jpg', 'Xây dựng RESTful API', 'ExpressJS API', 4, 4, 3);
-- Tạo bảng ThueCongViec
CREATE TABLE ThueCongViec (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ma_cong_viec INT,
    ma_nguoi_thue INT,
    ngay_thue DATETIME,
    hoan_thanh BOOLEAN,
    FOREIGN KEY (ma_cong_viec) REFERENCES CongViec(id),
    FOREIGN KEY (ma_nguoi_thue) REFERENCES NguoiDung(id),
     `deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO ThueCongViec (ma_cong_viec, ma_nguoi_thue, ngay_thue, hoan_thanh) VALUES 
(1, 2, '2024-01-10', TRUE),
(2, 3, '2024-01-15', FALSE),
(3, 1, '2024-02-01', TRUE),
(4, 2, '2024-03-01', FALSE);
-- Tạo bảng BinhLuan
CREATE TABLE BinhLuan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ma_cong_viec INT,
    ma_nguoi_binh_luan INT,
    ngay_binh_luan DATETIME,
    noi_dung VARCHAR(255),
    sao_binh_luan INT,
    FOREIGN KEY (ma_cong_viec) REFERENCES CongViec(id),
    FOREIGN KEY (ma_nguoi_binh_luan) REFERENCES NguoiDung(id),
     `deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO BinhLuan (ma_cong_viec, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan) VALUES 
(1, 2, '2024-01-12', 'Logo rất đẹp, đúng ý tưởng!', 5),
(2, 3, '2024-01-18', 'Thiết kế hơi chậm nhưng chất lượng.', 4),
(3, 1, '2024-02-03', 'Web rất đẹp và nhanh.', 5),
(4, 2, '2024-03-03', 'API chạy mượt mà!', 5);