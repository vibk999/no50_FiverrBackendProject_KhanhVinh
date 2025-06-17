import express from "express";
import { loaiCongViecController } from "../controllers/loaiCongViec.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", loaiCongViecController.getAll);
router.get("/phan-trang-tim-kiem", loaiCongViecController.searchWithPaging);
router.get("/:id", loaiCongViecController.getById);

router.post("/", authMiddleware, loaiCongViecController.create);
router.put("/:id", authMiddleware, loaiCongViecController.update);
router.delete("/:id", authMiddleware, loaiCongViecController.remove);

export default router;
