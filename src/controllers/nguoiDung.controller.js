import * as nguoiDungService from "../services/nguoiDung.service.js";

export const getAllNguoiDung = async (req, res) => {
  const data = await nguoiDungService.getAllNguoiDung();
  res.json(data);
};

export const createNguoiDung = async (req, res) => {
  try {
    const data = await nguoiDungService.createNguoiDung(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteNguoiDung = async (req, res) => {
  try {
    const { id } = req.params;
    await nguoiDungService.deleteNguoiDung(id);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(400).json({ message: "Không tìm thấy", err });
  }
};

export const paginateNguoiDung = async (req, res) => {
  const { page = 1, pageSize = 10, keyword = "" } = req.query;
  const data = await nguoiDungService.paginateNguoiDung({
    page,
    pageSize,
    keyword,
  });
  res.json(data);
};

export const getNguoiDungById = async (req, res) => {
  try {
    const data = await nguoiDungService.getNguoiDungById(+req.params.id);
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateNguoiDungById = async (req, res) => {
  try {
    const data = await nguoiDungService.updateNguoiDungById(
      +req.params.id,
      req.body
    );
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const searchNguoiDung = async (req, res) => {
  const { TenNguoiDung } = req.params;
  const data = await nguoiDungService.searchNguoiDung(TenNguoiDung);
  res.json(data);
};

export const uploadAvatar = async (req, res) => {
  try {
    const fileName = req.file?.filename;
    const { userId } = req.user;
    const data = await nguoiDungService.uploadAvatar(userId, fileName);
    res.json({ message: "Upload thành công", data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
