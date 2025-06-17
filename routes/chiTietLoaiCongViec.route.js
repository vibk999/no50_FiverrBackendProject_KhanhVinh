import express from "express";
import * as ChiTietController from "../controllers/chiTietLoaiCongViec.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Áp dụng middleware cho toàn bộ
router.use(authMiddleware);

router.get("/", ChiTietController.getAll);
router.get("/phan-trang-tim-kiem", ChiTietController.searchWithPagination);
router.get("/:id", ChiTietController.getById);
router.post("/", ChiTietController.create);
router.put("/:id", ChiTietController.update);
router.delete("/:id", ChiTietController.remove);

router.post("/them-nhom-chi-tiet-loai", ChiTietController.createGroup);
router.post(
  "/upload-hinh-nhom-loai-cong-viec/:MaNhomLoaiCongViec",
  ChiTietController.uploadImage
);
router.put("/sua-nhom-chi-tiet-loai/:id", ChiTietController.updateGroup);

export default router;
