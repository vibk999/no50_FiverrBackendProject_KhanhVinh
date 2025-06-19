import * as ChiTietService from "../services/chiTietLoaiCongViec.service.js";
import { chiTietLoaiService } from "../services/chiTietLoaiCongViec.service.js";

export const getAll = async (req, res) => {
  const data = await ChiTietService.getAll();
  res.json(data);
};

export const getById = async (req, res) => {
  const data = await ChiTietService.getById(req.params.id);
  res.json(data);
};

export const create = async (req, res) => {
  const data = await ChiTietService.create(req.body);
  res.status(201).json(data);
};

export const update = async (req, res) => {
  const data = await ChiTietService.update(req.params.id, req.body);
  res.json(data);
};

export const remove = async (req, res) => {
  await ChiTietService.remove(req.params.id);
  res.json({ message: "Deleted successfully" });
};

const getChiTietLoaiPhanTrangTimKiem = async (req, res) => {
  try {
    const pageIndex = parseInt(req.query.pageIndex) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const keyword = req.query.keyword || "";

    if (pageIndex <= 0 || pageSize <= 0) {
      return res.status(400).send({
        statusCode: 400,
        message: "pageIndex và pageSize phải là số nguyên dương.",
      });
    }

    // Gọi service để lấy dữ liệu
    const result = await chiTietLoaiService.getChiTietLoaiPhanTrang(
      pageIndex,
      pageSize,
      keyword
    );

    res.status(200).send({
      statusCode: 200,
      message: "Lấy danh sách chi tiết loại công việc thành công!",
      content: {
        pageIndex: result.pageIndex,
        pageSize: result.pageSize,
        totalRow: result.total,
        keyword: keyword,
        data: result.data,
      },
    });
  } catch (error) {
    console.error("Error in getChiTietLoaiPhanTrangTimKiem:", error);
    res.status(500).send({
      statusCode: 500,
      message: "Lỗi server",
    });
  }
};

export const chiTietLoaiController = {
  getChiTietLoaiPhanTrangTimKiem,
};
export const createGroup = async (req, res) => {
  const data = await ChiTietService.createGroup(req.body);
  res.status(201).json(data);
};

export const uploadImage = async (req, res) => {
  try {
    const { MaNhomLoaiCongViec } = req.params;
    const image = req.file;

    if (!image) {
      return res
        .status(400)
        .json({ message: "File hình không được tìm thấy." });
    }

    const imageUrl = `/uploads/${image.filename}`; // hoặc dùng cloud URL nếu upload cloud
    const result = await ChiTietService.uploadImage(
      MaNhomLoaiCongViec,
      imageUrl
    );

    res.json({ message: "Upload thành công", result });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const updateGroup = async (req, res) => {
  const data = await ChiTietService.updateGroup(req.params.id, req.body);
  res.json(data);
};
