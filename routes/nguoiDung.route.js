import express from "express";
import {
  getAllNguoiDung,
  createNguoiDung,
  deleteManyNguoiDung,
  paginateNguoiDung,
  getNguoiDungById,
  updateNguoiDungById,
  searchNguoiDung,
  uploadAvatar,
} from "../controllers/nguoiDung.controller.js";

import upload from "../middlewares/upload.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllNguoiDung);
router.post("/", createNguoiDung);
router.delete("/", deleteManyNguoiDung);

router.get("/phan-trang-tim-kiem", paginateNguoiDung);
router.get("/search/:TenNguoiDung", searchNguoiDung);

router.get("/:id", getNguoiDungById);
router.put("/:id", updateNguoiDungById);

router.post(
  "/upload-avatar",
  authMiddleware,
  upload.single("file"),
  uploadAvatar
);

export default router;
