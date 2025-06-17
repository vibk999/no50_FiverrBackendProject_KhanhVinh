import prisma from "../common/prisma/prismaClient.js";

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

export const searchWithPagination = async ({ page, limit, search }) => {
  const skip = (page - 1) * limit;
  const where = {
    ten_chi_tiet: {
      contains: search,
      mode: "insensitive",
    },
  };

  const [items, total] = await Promise.all([
    prisma.chiTietLoaiCongViec.findMany({ skip: +skip, take: +limit, where }),
    prisma.chiTietLoaiCongViec.count({ where }),
  ]);

  return { items, total, page: +page };
};

export const createGroup = (data) => prisma.loaiCongViec.create({ data });

export const uploadImage = (id, imageUrl) =>
  prisma.loaiCongViec.update({
    where: { id: +id },
    data: { hinh_anh: imageUrl },
  });

export const updateGroup = (id, data) =>
  prisma.loaiCongViec.update({
    where: { id: +id },
    data,
  });
