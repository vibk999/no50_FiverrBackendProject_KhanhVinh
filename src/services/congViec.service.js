import prisma from "../../common/prisma/prismaClient.js";

export const getAllCongViec = async () => {
  return await prisma.congViec.findMany();
};

export const createCongViec = async (data) => {
  return await prisma.congViec.create({ data });
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
export const layMenuLoaiCongViecService = async () => {
  try {
    const loaiCongViecList = await prisma.loaiCongViec.findMany({
      where: {
        isDeleted: false,
      },
      select: {
        id: true,
        ten_loai_cong_viec: true,
        chiTietLoai: {
          where: {
            isDeleted: false,
          },
          select: {
            id: true,
            ten_chi_tiet: true,
            hinh_anh: true,
            ma_loai_cong_viec: true,
          },
        },
      },
    });

    const result = loaiCongViecList.map((loai) => {
      // Gom nhóm theo ten_chi_tiet (tenNhom) và ma_loai_cong_viec
      const groupMap = {};

      loai.chiTietLoai.forEach((ct) => {
        const key = ct.ten_chi_tiet + ct.hinh_anh;

        if (!groupMap[key]) {
          groupMap[key] = {
            id: ct.id,
            tenNhom: ct.ten_chi_tiet,
            hinhAnh: ct.hinh_anh,
            maLoaiCongViec: ct.ma_loai_cong_viec,
            dsChiTietLoai: [],
          };
        }

        groupMap[key].dsChiTietLoai.push({
          id: ct.id,
          tenChiTiet: ct.ten_chi_tiet,
        });
      });

      return {
        id: loai.id,
        tenloaiCongViec: loai.ten_loai_cong_viec,
        dsNhomChiTietLoai: Object.values(groupMap),
      };
    });

    return {
      statusCode: 200,
      content: result,
    };
  } catch (error) {
    console.error("Lỗi khi lấy menu loại công việc:", error);
    return {
      statusCode: 500,
      message: "Lỗi khi lấy menu loại công việc",
      error: error.message,
    };
  }
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
  const parsedId = Number(maCongViec);
  if (isNaN(parsedId)) throw new Error("Mã công việc không hợp lệ");

  return await prisma.congViec.findUnique({
    where: { id: parsedId },
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
      },
    },
  });
};
export const getCongViecById = async (id) => {
  return await prisma.congViec.findUnique({
    where: { id },
  });
};
