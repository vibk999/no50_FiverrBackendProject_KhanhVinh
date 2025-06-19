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

export const uploadHinhCongViec = async (id, imageUrl) => {
  return await prisma.congViec.update({
    where: { id: Number(id) },
    data: { hinh_anh: imageUrl },
  });
};

export const getCongViecPaging = async (page = 1, size = 10, keyword = "") => {
  // Đảm bảo kiểu dữ liệu là số nguyên dương
  const currentPage = Math.max(parseInt(page) || 1, 1);
  const pageSize = Math.max(parseInt(size) || 10, 1);
  const skip = (currentPage - 1) * pageSize;

  // Nếu keyword trống, không cần thêm điều kiện tìm kiếm
  const whereCondition = {
    isDeleted: false,
    ...(keyword.trim() && {
      ten_cong_viec: {
        contains: keyword.trim(),
      },
    }),
  };

  const [data, total] = await Promise.all([
    prisma.congViec.findMany({
      where: whereCondition,
      skip,
      take: pageSize,
    }),
    prisma.congViec.count({
      where: whereCondition,
    }),
  ]);

  return { total, data };
};
export const layMenuLoaiCongViec = async () => {
  return await prisma.loaiCongViec.findMany({
    where: {
      isDeleted: false,
    },
    include: {
      chiTietLoai: {
        where: {
          isDeleted: false,
        },
      },
    },
  });
};
export const layChiTietLoaiCongViec = async (maLoaiCongViec) => {
  return await prisma.chiTietLoaiCongViec.findMany({
    where: { ma_chi_tiet_loai: Number(maLoaiCongViec) },
  });
};

export const layCongViecTheoChiTietLoai = async (maChiTietLoai) => {
  return await prisma.congViec.findMany({
    where: { ma_chi_tiet_loai: Number(maChiTietLoai) },
  });
};

export const layCongViecChiTiet = async (maCongViec) => {
  return await prisma.congViec.findUnique({
    where: { id: maCongViec },
    include: {
      chiTietLoai: {
        include: {
          loaiCongViec: true,
        },
      },
      nguoiTao: true,
      binhLuans: {
        include: {
          nguoiBinhLuan: true,
        },
      },
      thueCongViecs: true,
    },
  });
};
export const layDanhSachCongViecTheoTen = async (ten) => {
  return await prisma.congViec.findMany({
    where: {
      ten_cong_viec: {
        contains: ten,
        // mode: "insensitive",
      },
    },
  });
};
