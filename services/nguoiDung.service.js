import prisma from "../common/prisma/prismaClient.js";

export const getAllNguoiDung = () => {
  return prisma.nguoiDung.findMany();
};

export const createNguoiDung = (data) => {
  return prisma.nguoiDung.create({ data });
};

export const deleteManyNguoiDung = (ids) => {
  return prisma.nguoiDung.deleteMany({
    where: { id: { in: ids } },
  });
};

export const paginateNguoiDung = async ({ page, pageSize, keyword }) => {
  const skip = (page - 1) * pageSize;

  const [data, total] = await Promise.all([
    prisma.nguoiDung.findMany({
      where: {
        ho_ten: { contains: keyword, mode: "insensitive" },
      },
      skip: +skip,
      take: +pageSize,
    }),
    prisma.nguoiDung.count({
      where: {
        ho_ten: { contains: keyword, mode: "insensitive" },
      },
    }),
  ]);

  return { data, total, page: +page, pageSize: +pageSize };
};

export const getNguoiDungById = (id) => {
  return prisma.nguoiDung.findUniqueOrThrow({ where: { id } });
};

export const updateNguoiDungById = (id, data) => {
  return prisma.nguoiDung.update({ where: { id }, data });
};

export const searchNguoiDung = (TenNguoiDung) => {
  return prisma.nguoiDung.findMany({
    where: {
      ho_ten: {
        contains: TenNguoiDung,
        mode: "insensitive",
      },
    },
  });
};

export const uploadAvatar = (userId, fileName) => {
  return prisma.nguoiDung.update({
    where: { id: userId },
    data: { hinh_anh: fileName },
  });
};
