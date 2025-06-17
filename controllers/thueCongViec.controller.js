import * as ThueCongViecService from "../services/thueCongViec.service.js";

export const getAll = async (req, res) => {
  try {
    const result = await ThueCongViecService.getAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const result = await ThueCongViecService.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const result = await ThueCongViecService.getById(Number(req.params.id));
    if (!result) return res.status(404).json({ message: "Không tìm thấy" });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const result = await ThueCongViecService.update(
      Number(req.params.id),
      req.body
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    await ThueCongViecService.remove(Number(req.params.id));
    res.status(200).json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getPaginated = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, keyword = "" } = req.query;
    const result = await ThueCongViecService.getPaginated(
      +page,
      +pageSize,
      keyword
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserHires = async (req, res) => {
  try {
    const userId = req.user?.id; // assuming user is from token
    const result = await ThueCongViecService.getUserHires(userId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const completeJob = async (req, res) => {
  try {
    const result = await ThueCongViecService.completeJob(
      Number(req.params.MaThueCongViec)
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
