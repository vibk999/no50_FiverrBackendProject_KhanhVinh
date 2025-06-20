import prisma from "../common/prisma/prismaClient.js";

export const getAll = () => {
  return prisma.thueCongViec.findMany();
};

export const create = (data) => {
  return prisma.thueCongViec.create({ data });
};

export const getById = (id) => {
  return prisma.thueCongViec.findUnique({ where: { id } });
};

export const update = (id, data) => {
  return prisma.thueCongViec.update({
    where: { id },
    data,
  });
};

export const remove = (id) => {
  return prisma.thueCongViec.delete({ where: { id } });
};

export const getPaginated = async (page, pageSize, keyword) => {
  const skip = (page - 1) * pageSize;
  const where = keyword
    ? {
        congViec: {
          ten_cong_viec: {
            contains: keyword,
          },
        },
      }
    : {};

  const [data, total] = await Promise.all([
    prisma.thueCongViec.findMany({
      skip,
      take: pageSize,
      where,
      include: { congViec: true },
    }),
    prisma.thueCongViec.count({ where }),
  ]);

  return {
    data,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
};

export const getUserHires = (userId) => {
  return prisma.thueCongViec.findMany({
    where: { ma_nguoi_thue: userId },
    include: { congViec: true },
  });
};

export const completeJob = (id) => {
  return prisma.thueCongViec.update({
    where: { id },
    data: { hoan_thanh: true },
  });
};
