import express from "express";
import * as controller from "../controllers/thueCongViec.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.create);
router.get("/phan-trang-tim-kiem", controller.getPaginated);
router.get("/lay-danh-sach-da-thue", controller.getUserHires);
router.get("/:id", authMiddleware, controller.getById);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.remove);
router.post(
  "/hoan-thanh-cong-viec/:MaThueCongViec",
  authMiddleware,
  controller.completeJob
);

export default router;
