import prisma from "../common/prisma/prismaClient.js";

export const getAllCongViec = async () => {
  return await prisma.congViec.findMany();
};

export const createCongViec = async (data) => {
  return await prisma.congViec.create({ data });
};

export const getCongViecById = async (id) => {
  return await prisma.congViec.findUnique({
    where: { id: Number(id) },
  });
};

export const updateCongViec = async (id, data) => {
  return await prisma.congViec.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteCongViec = async (id) => {
  return await prisma.congViec.delete({
    where: { id: Number(id) },
  });
};

export const uploadHinhCongViec = async (id, hinhAnh) => {
  return await prisma.congViec.update({
    where: { id: Number(id) },
    data: { hinhAnh },
  });
};

export const getCongViecPaging = async (page, size, keyword = "") => {
  const skip = (page - 1) * size;
  const [data, total] = await Promise.all([
    prisma.congViec.findMany({
      where: {
        tenCongViec: {
          contains: keyword,
          mode: "insensitive",
        },
      },
      skip,
      take: size,
    }),
    prisma.congViec.count({
      where: {
        tenCongViec: {
          contains: keyword,
          mode: "insensitive",
        },
      },
    }),
  ]);

  return { total, data };
};

export const layMenuLoaiCongViec = async () => {
  return await prisma.loaiCongViec.findMany({
    include: {
      nhomChiTietLoai: true,
    },
  });
};

export const layChiTietLoaiCongViec = async (maLoaiCongViec) => {
  return await prisma.chiTietLoaiCongViec.findMany({
    where: { maLoaiCongViec: Number(maLoaiCongViec) },
  });
};

export const layCongViecTheoChiTietLoai = async (maChiTietLoai) => {
  return await prisma.congViec.findMany({
    where: { maChiTietLoai: Number(maChiTietLoai) },
  });
};

export const layCongViecChiTiet = async (maCongViec) => {
  return await prisma.congViec.findUnique({
    where: { id: Number(maCongViec) },
    include: {
      chiTietLoaiCongViec: true,
      nguoiTao: true,
    },
  });
};

export const layDanhSachCongViecTheoTen = async (ten) => {
  return await prisma.congViec.findMany({
    where: {
      tenCongViec: {
        contains: ten,
        mode: "insensitive",
      },
    },
  });
};
