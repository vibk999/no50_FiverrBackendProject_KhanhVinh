import * as ChiTietService from "../services/chiTietLoaiCongViec.service.js";

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

export const searchWithPagination = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const data = await ChiTietService.searchWithPagination({
    page,
    limit,
    search,
  });
  res.json(data);
};

export const createGroup = async (req, res) => {
  const data = await ChiTietService.createGroup(req.body);
  res.status(201).json(data);
};

export const uploadImage = async (req, res) => {
  const result = await ChiTietService.uploadImage(
    req.params.MaNhomLoaiCongViec,
    req.body.imageUrl
  );
  res.json(result);
};

export const updateGroup = async (req, res) => {
  const data = await ChiTietService.updateGroup(req.params.id, req.body);
  res.json(data);
};
