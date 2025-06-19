import express from "express";
import * as ChiTietController from "../controllers/chiTietLoaiCongViec.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import { chiTietLoaiController } from "../controllers/chiTietLoaiCongViec.controller";
const router = express.Router();

router.get("/", ChiTietController.getAll);
router.get(
  "/phan-trang-tim-kiem",
  chiTietLoaiController.getChiTietLoaiPhanTrangTimKiem
);
router.get("/:id", ChiTietController.getById);
router.post("/", authMiddleware, ChiTietController.create);
router.put("/:id", authMiddleware, ChiTietController.update);
router.delete("/:id", authMiddleware, ChiTietController.remove);

router.post(
  "/them-nhom-chi-tiet-loai",
  authMiddleware,
  ChiTietController.createGroup
);
router.post(
  "/upload-hinh-nhom-loai-cong-viec/:MaNhomLoaiCongViec",
  authMiddleware,
  upload.single("formFile"),
  ChiTietController.uploadImage
);
router.put(
  "/sua-nhom-chi-tiet-loai/:id",
  authMiddleware,
  ChiTietController.updateGroup
);

export default router;
