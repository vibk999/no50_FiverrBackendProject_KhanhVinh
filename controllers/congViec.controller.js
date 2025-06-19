import * as congViecService from "../services/congViec.service";

// Lấy tất cả công việc
export const getAllCongViec = async (req, res) => {
  try {
    const data = await congViecService.getAllCongViec();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Lấy công việc theo ID
export const getCongViecById = async (req, res) => {
  try {
    const { id } = req.params;
    const congViec = await congViecService.getCongViecById(id);
    if (!congViec)
      return res.status(404).json({ message: "Không tìm thấy công việc" });
    res.status(200).json(congViec);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo công việc mới
export const createCongViec = async (req, res) => {
  try {
    const { body } = req;
    const nguoiTao = req.user?.id; // lấy từ middleware verifyToken
    const data = await congViecService.createCongViec({
      ...body,
      nguoi_tao: nguoiTao,
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật công việc
export const updateCongViec = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await congViecService.updateCongViec(id, req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xoá công việc
export const deleteCongViec = async (req, res) => {
  try {
    const { id } = req.params;
    await congViecService.deleteCongViec(id);
    res.status(200).json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Upload hình công việc
export const uploadHinhCongViec = async (req, res) => {
  try {
    const { MaCongViec } = req.params;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "Không có file được upload" });
    }

    // Đường dẫn ảnh lưu vào DB, có thể dùng đường dẫn cloud nếu bạn upload cloud
    const imageUrl = `/uploads/${file.filename}`;

    const updated = await congViecService.uploadHinhCongViec(
      MaCongViec,
      imageUrl
    );

    res.status(200).json({
      message: "Upload hình công việc thành công",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Lấy menu loại công việc
export const layMenuLoaiCongViec = async (req, res) => {
  try {
    const data = await congViecService.layMenuLoaiCongViec();
    res.status(200).json(data);
  } catch (error) {
    console.error("Lỗi khi lấy menu loại công việc:", error);
    res.status(500).json({ message: "Lỗi máy chủ." });
  }
};
// Lấy chi tiết loại công việc theo mã loại
export const layChiTietLoaiCongViec = async (req, res) => {
  try {
    const { MaLoaiCongViec } = req.params;
    const data = await congViecService.layChiTietLoaiCongViec(MaLoaiCongViec);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy công việc theo mã chi tiết loại
export const layCongViecTheoChiTietLoai = async (req, res) => {
  try {
    const { MaChiTietLoai } = req.params;
    const data = await congViecService.layCongViecTheoChiTietLoai(
      MaChiTietLoai
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy công việc chi tiết

export const layCongViecChiTiet = async (req, res) => {
  try {
    const { MaCongViec } = req.params;

    const congViecChiTiet = await congViecService.layCongViecChiTiet(
      parseInt(MaCongViec)
    );

    if (!congViecChiTiet) {
      return res.status(404).json({ message: "Không tìm thấy công việc." });
    }

    res.status(200).json(congViecChiTiet);
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết công việc:", error);
    res.status(500).json({ message: "Lỗi máy chủ." });
  }
};
// Tìm công việc theo tên
export const layDanhSachCongViecTheoTen = async (req, res) => {
  try {
    const { TenCongViec } = req.params;
    const data = await congViecService.layDanhSachCongViecTheoTen(TenCongViec);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Phân trang & tìm kiếm công việc
export const getCongViecPaging = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, keyword = "" } = req.query;
    const data = await congViecService.getCongViecPaging({
      page: Number(page),
      pageSize: Number(pageSize),
      keyword,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
