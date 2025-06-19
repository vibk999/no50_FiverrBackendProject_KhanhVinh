import express from "express";
import {
  getAllBinhLuan,
  createBinhLuan,
  updateBinhLuan,
  deleteBinhLuan,
  getByMaCongViec,
} from "../controllers/binhLuan.controller";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/", getAllBinhLuan);
router.post("/", authMiddleware, createBinhLuan);
router.put("/:id", authMiddleware, updateBinhLuan);
router.delete("/:id", authMiddleware, deleteBinhLuan);
router.get(
  "/lay-binh-luan-theo-cong-viec/:MaCongViec",
  authMiddleware,
  getByMaCongViec
);

export default router;
