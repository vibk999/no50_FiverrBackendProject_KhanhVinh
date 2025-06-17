import express from "express";
import * as congViecController from "../controllers/congViec.controller.js";
import { upload } from "../middlewares/upload.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// GET - Lấy tất cả công việc
router.get("/", congViecController.getAllCongViec);

// GET - Phân trang + tìm kiếm
router.get("/phan-trang-tim-kiem", congViecController.getCongViecPaging);

// GET - Lấy công việc theo ID
router.get("/:id", congViecController.getCongViecById);

// POST - Thêm công việc mới (có token)
router.post("/", authMiddleware, congViecController.createCongViec);

// PUT - Cập nhật công việc
router.put("/:id", authMiddleware, congViecController.updateCongViec);

// DELETE - Xóa công việc
router.delete("/:id", authMiddleware, congViecController.deleteCongViec);

// POST - Upload hình công việc
router.post(
  "/upload-hinh-cong-viec/:MaCongViec",
  authMiddleware,
  upload.single("hinhAnh"),
  congViecController.uploadHinhCongViec
);

// GET - Lấy menu loại công việc
router.get("/lay-menu-loai-cong-viec", congViecController.layMenuLoaiCongViec);

// GET - Lấy chi tiết loại công việc theo mã loại
router.get(
  "/lay-chi-tiet-loai-cong-viec/:MaLoaiCongViec",
  congViecController.layChiTietLoaiCongViec
);

// GET - Lấy công việc theo chi tiết loại
router.get(
  "/lay-cong-viec-theo-chi-tiet-loai/:MaChiTietLoai",
  congViecController.layCongViecTheoChiTietLoai
);

// GET - Lấy chi tiết công việc theo mã công việc
router.get(
  "/lay-cong-viec-chi-tiet/:MaCongViec",
  congViecController.layCongViecChiTiet
);

// GET - Tìm công việc theo tên
router.get(
  "/lay-danh-sach-cong-viec-theo-ten/:TenCongViec",
  congViecController.layDanhSachCongViecTheoTen
);

export default router;
