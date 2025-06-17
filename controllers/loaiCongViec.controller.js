import { loaiCongViecService } from "../services/loaiCongViec.service.js";

export const loaiCongViecController = {
  getAll: async (req, res) => {
    try {
      const data = await loaiCongViecService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Lỗi server", error });
    }
  },

  create: async (req, res) => {
    try {
      const data = req.body;
      const newLoai = await loaiCongViecService.create(data);
      res.status(201).json(newLoai);
    } catch (error) {
      res.status(400).json({ message: "Lỗi tạo mới", error });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await loaiCongViecService.getById(id);
      if (!item) {
        return res
          .status(404)
          .json({ message: "Không tìm thấy loại công việc" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Lỗi server", error });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = await loaiCongViecService.update(id, data);
      res.json(updated);
    } catch (error) {
      res.status(400).json({ message: "Lỗi cập nhật", error });
    }
  },

  remove: async (req, res) => {
    try {
      const { id } = req.params;
      await loaiCongViecService.remove(id);
      res.json({ message: "Xoá thành công" });
    } catch (error) {
      res.status(404).json({ message: "Không tìm thấy", error });
    }
  },

  searchWithPaging: async (req, res) => {
    try {
      const { page = 1, pageSize = 10, keyword = "" } = req.query;
      const result = await loaiCongViecService.searchWithPaging(
        Number(page),
        Number(pageSize),
        keyword
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Lỗi phân trang tìm kiếm", error });
    }
  },
};
