import prisma from "../../common/prisma/prismaClient.js";

export const getAll = () => prisma.chiTietLoaiCongViec.findMany();

export const getById = (id) =>
  prisma.chiTietLoaiCongViec.findUnique({ where: { id: +id } });

export const create = (data) => prisma.chiTietLoaiCongViec.create({ data });

export const update = (id, data) =>
  prisma.chiTietLoaiCongViec.update({
    where: { id: +id },
    data,
  });

export const remove = (id) =>
  prisma.chiTietLoaiCongViec.delete({ where: { id: +id } });

const getChiTietLoaiPhanTrang = async (pageIndex, pageSize, keyword) => {
  const skip = (pageIndex - 1) * pageSize;

  const whereCondition = {
    isDeleted: false,
  };

  if (keyword) {
    whereCondition.ten_chi_tiet = {
      contains: keyword,
    };
  }
  const data = await prisma.chiTietLoaiCongViec.findMany({
    where: whereCondition,
    skip: skip,
    take: pageSize,
  });

  const total = await prisma.chiTietLoaiCongViec.count({
    where: whereCondition,
  });

  return {
    data,
    total,
    pageIndex,
    pageSize,
  };
};

export const chiTietLoaiService = {
  getChiTietLoaiPhanTrang,
};

export const createGroup = (data) => prisma.loaiCongViec.create({ data });

export const uploadImage = (id, imageUrl) =>
  prisma.chiTietLoaiCongViec.update({
    where: { id: +id },
    data: { hinh_anh: imageUrl },
  });

export const updateGroup = (id, data) =>
  prisma.loaiCongViec.update({
    where: { id: +id },
    data,
  });
