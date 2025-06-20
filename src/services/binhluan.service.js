import prisma from "../common/prisma/prismaClient.js";

const getAll = async () => {
  return await prisma.binhLuan.findMany();
};

const create = async (data) => {
  return await prisma.binhLuan.create({ data });
};

const update = async (id, data) => {
  return await prisma.binhLuan.update({
    where: { id: Number(id) },
    data,
  });
};

const remove = async (id) => {
  return await prisma.binhLuan.delete({
    where: { id: Number(id) },
  });
};

const getByMaCongViec = async (maCongViec) => {
  return await prisma.binhLuan.findMany({
    where: { ma_cong_viec: Number(maCongViec) },
  });
};

export default {
  getAll,
  create,
  update,
  remove,
  getByMaCongViec,
};
