import BinhLuanService from "../services/binhluan.service.js";

export const getAllBinhLuan = async (req, res) => {
  const data = await BinhLuanService.getAll();
  res.status(200).json(data);
};

export const createBinhLuan = async (req, res) => {
  const userId = req.user.userId;
  const newComment = await BinhLuanService.create({
    ...req.body,
    ma_nguoi_binh_luan: userId,
  });
  res.status(201).json(newComment);
};
export const updateBinhLuan = async (req, res) => {
  const { id } = req.params;
  const data = await BinhLuanService.update(id, req.body);
  res.status(200).json(data);
};

export const deleteBinhLuan = async (req, res) => {
  const { id } = req.params;
  await BinhLuanService.remove(id);
  res.status(204).send();
};

export const getByMaCongViec = async (req, res) => {
  const { MaCongViec } = req.params;
  const data = await BinhLuanService.getByMaCongViec(MaCongViec);
  res.status(200).json(data);
};
