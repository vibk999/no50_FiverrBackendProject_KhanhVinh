import prisma from "../common/prisma/prismaClient.js";

export const loaiCongViecService = {
  getAll: async () => {
    return await prisma.loaiCongViec.findMany();
  },

  create: async (data) => {
    return await prisma.loaiCongViec.create({
      data,
    });
  },

  getById: async (id) => {
    return await prisma.loaiCongViec.findUnique({
      where: { id: Number(id) },
    });
  },

  update: async (id, data) => {
    return await prisma.loaiCongViec.update({
      where: { id: Number(id) },
      data,
    });
  },

  remove: async (id) => {
    return await prisma.loaiCongViec.delete({
      where: { id: Number(id) },
    });
  },

  searchWithPaging: async (page = 1, pageSize = 10, keyword = "") => {
    const skip = (page - 1) * pageSize;
    const [data, total] = await Promise.all([
      prisma.loaiCongViec.findMany({
        skip,
        take: Number(pageSize),
        where: {
          ten_loai_cong_viec: {
            contains: keyword,
            mode: "insensitive",
          },
        },
      }),
      prisma.loaiCongViec.count({
        where: {
          ten_loai_cong_viec: {
            contains: keyword,
            mode: "insensitive",
          },
        },
      }),
    ]);
    return { data, total };
  },
};
