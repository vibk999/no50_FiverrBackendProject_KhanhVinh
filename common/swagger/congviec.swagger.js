const congViecSwagger = {
  "/cong-viec": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy danh sách công việc",
      responses: {
        200: { description: "Thành công" },
      },
    },
    post: {
      tags: ["CongViec"],
      summary: "Thêm công việc mới",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                tenCongViec: { type: "string", example: "Chỉnh sửa video" },
                danhGia: { type: "integer", example: 5 },
                giaTien: { type: "number", example: 500000 },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo công việc thành công" },
      },
    },
  },

  "/cong-viec/phan-trang-tim-kiem": {
    get: {
      tags: ["CongViec"],
      summary: "Tìm kiếm công việc theo phân trang",
      responses: {
        200: { description: "Danh sách phân trang công việc" },
      },
    },
  },

  "/cong-viec/{id}": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy chi tiết công việc theo ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
    put: {
      tags: ["CongViec"],
      summary: "Cập nhật công việc",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                tenCongViec: { type: "string", example: "Dịch thuật tài liệu" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Cập nhật thành công" },
      },
    },
    delete: {
      tags: ["CongViec"],
      summary: "Xóa công việc",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Xóa thành công" },
      },
    },
  },

  "/cong-viec/upload-hinh-cong-viec/{MaCongViec}": {
    post: {
      tags: ["CongViec"],
      summary: "Upload hình ảnh cho công việc",
      parameters: [
        {
          name: "MaCongViec",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                hinhAnh: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Upload thành công" },
      },
    },
  },

  "/cong-viec/lay-menu-loai-cong-viec": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy menu loại công việc",
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/cong-viec/lay-chi-tiet-loai-cong-viec/{MaLoaiCongViec}": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy chi tiết loại công việc theo mã loại",
      parameters: [
        {
          name: "MaLoaiCongViec",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/cong-viec/lay-cong-viec-theo-chi-tiet-loai/{MaChiTietLoai}": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy công việc theo mã chi tiết loại",
      parameters: [
        {
          name: "MaChiTietLoai",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/cong-viec/lay-cong-viec-chi-tiet/{MaCongViec}": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy chi tiết công việc",
      parameters: [
        {
          name: "MaCongViec",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/cong-viec/lay-danh-sach-cong-viec-theo-ten/{TenCongViec}": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy danh sách công việc theo tên",
      parameters: [
        {
          name: "TenCongViec",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
  },
};

export default congViecSwagger;
