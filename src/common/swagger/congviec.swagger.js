const congViecSwagger = {
  "/api/cong-viec/": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy danh sách tất cả công việc",
      responses: {
        200: {
          description: "Danh sách công việc",
        },
      },
    },
    post: {
      tags: ["CongViec"],
      summary: "Tạo công việc mới",
      security: [{ tokenAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_cong_viec: { type: "string" },
                mo_ta: { type: "string" },
                ma_chi_tiet_loai: { type: "integer" },
              },
              required: ["ten_cong_viec", "ma_chi_tiet_loai"],
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo công việc thành công" },
        400: { description: "Lỗi tạo công việc" },
      },
    },
  },

  "/api/cong-viec/phan-trang-tim-kiem": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy danh sách công việc theo phân trang và tìm kiếm",
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: { type: "integer" },
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: { type: "integer" },
        },
        {
          name: "keyword",
          in: "query",
          required: false,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Danh sách công việc phân trang" },
      },
    },
  },

  "/api/cong-viec/{id}": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy công việc theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Chi tiết công việc" },
        404: { description: "Không tìm thấy công việc" },
      },
    },
    put: {
      tags: ["CongViec"],
      summary: "Cập nhật công việc theo ID",
      security: [{ tokenAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_cong_viec: { type: "string" },
                mo_ta: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Cập nhật thành công" },
        400: { description: "Lỗi cập nhật" },
      },
    },
    delete: {
      tags: ["CongViec"],
      summary: "Xóa công việc theo ID",
      security: [{ tokenAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Xóa thành công" },
        400: { description: "Lỗi xóa công việc" },
      },
    },
  },

  "/api/cong-viec/upload-hinh-cong-viec/{MaCongViec}": {
    post: {
      tags: ["CongViec"],
      summary: "Upload hình cho công việc",
      security: [{ tokenAuth: [] }],
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
                formFile: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Upload hình thành công" },
        400: { description: "Không có file được upload" },
      },
    },
  },

  "/api/cong-viec/lay-menu-loai-cong-viec": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy menu loại công việc",
      responses: {
        200: { description: "Danh sách menu loại công việc" },
      },
    },
  },

  "/api/cong-viec/lay-chi-tiet-loai-cong-viec/{MaLoaiCongViec}": {
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
        200: { description: "Danh sách chi tiết loại công việc" },
      },
    },
  },

  "/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/{MaChiTietLoai}": {
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
        200: { description: "Danh sách công việc theo chi tiết loại" },
      },
    },
  },

  "/api/cong-viec/lay-cong-viec-chi-tiet/{MaCongViec}": {
    get: {
      tags: ["CongViec"],
      summary: "Lấy công việc chi tiết",
      parameters: [
        {
          name: "MaCongViec",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Chi tiết công việc" },
        404: { description: "Không tìm thấy công việc" },
      },
    },
  },

  "/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/{TenCongViec}": {
    get: {
      tags: ["CongViec"],
      summary: "Tìm công việc theo tên",
      parameters: [
        {
          name: "TenCongViec",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Danh sách công việc theo tên" },
      },
    },
  },
};
export default congViecSwagger;
