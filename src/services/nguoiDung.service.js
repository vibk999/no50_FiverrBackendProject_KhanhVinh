import prisma from "../common/prisma/prismaClient.js";

export const getAllNguoiDung = () => {
  return prisma.nguoiDung.findMany();
};

export const createNguoiDung = (data) => {
  return prisma.nguoiDung.create({ data });
};

export const deleteNguoiDung = (ids) => {
  return prisma.nguoiDung.delete({
    where: { id: Number(ids) },
  });
};

export const paginateNguoiDung = async ({ page, pageSize, keyword }) => {
  const skip = (page - 1) * pageSize;

  const [data, total] = await Promise.all([
    prisma.nguoiDung.findMany({
      where: {
        name: { contains: keyword },
      },
      skip: +skip,
      take: +pageSize,
    }),
    prisma.nguoiDung.count({
      where: {
        name: { contains: keyword },
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
      name: {
        contains: TenNguoiDung,
        // mode: "insensitive",
      },
    },
  });
};

export const uploadAvatar = (userId, fileName) => {
  return prisma.nguoiDung.update({
    where: { id: userId },
    data: { avatar: fileName },
  });
};
