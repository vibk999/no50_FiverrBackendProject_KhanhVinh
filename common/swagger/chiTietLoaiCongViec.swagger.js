const chiTietCongViecSwagger = {
  "/api/chi-tiet-loai-cong-viec": {
    get: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Lấy danh sách chi tiết công việc",
      responses: {
        200: { description: "Lấy danh sách thành công" },
      },
    },
    post: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Tạo chi tiết công việc mới",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_chi_tiet: {
                  type: "string",
                  example: "Thiết kế Landing Page",
                },
                id: { type: "integer", example: 5 },
                ma_loai_cong_viec: { type: "integer", example: 2 },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo thành công" },
      },
    },
  },

  "/api/chi-tiet-loai-cong-viec/phan-trang-tim-kiem": {
    get: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Tìm kiếm và phân trang chi tiết công việc",
      parameters: [
        {
          name: "pageIndex",
          in: "query",
          schema: { type: "integer", example: 1 },
        },
        {
          name: "pageSize",
          in: "query",
          schema: { type: "integer", example: 10 },
        },
        {
          name: "keyword",
          in: "query",
          schema: { type: "string", example: "thiết kế" },
        },
      ],
      responses: {
        200: { description: "Kết quả tìm kiếm" },
      },
    },
  },

  "/api/chi-tiet-loai-cong-viec/{id}": {
    get: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Lấy chi tiết công việc theo ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Lấy dữ liệu thành công" },
      },
    },
    put: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Cập nhật chi tiết công việc",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_cong_viec: {
                  type: "string",
                  example: "Chỉnh sửa Landing Page",
                },
                mo_ta: {
                  type: "string",
                  example: "Cập nhật nội dung và ảnh nền",
                },
                gia_tien: { type: "number", example: 2000000 },
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
      tags: ["ChiTietLoaiCongViec"],
      summary: "Xoá chi tiết công việc",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Xoá thành công" },
      },
    },
  },
  "/api/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai": {
    post: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Tạo nhóm chi tiết loại công việc mới",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_nhom: {
                  type: "string",
                  example: "Thiết kế Web",
                },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo nhóm thành công" },
        400: { description: "Dữ liệu không hợp lệ" },
      },
    },
  },

  "/api/chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/{MaNhomLoaiCongViec}":
    {
      post: {
        tags: ["ChiTietLoaiCongViec"],
        summary: "Upload hình nhóm loại công việc",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "MaNhomLoaiCongViec",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          required: true,
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
                required: ["formFile"],
              },
            },
          },
        },
        responses: {
          200: { description: "Upload thành công" },
          400: { description: "Thiếu file hình ảnh" },
          500: { description: "Lỗi server" },
        },
      },
    },

  "/api/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/{id}": {
    put: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Cập nhật nhóm chi tiết loại công việc",
      security: [{ bearerAuth: [] }],
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
                ten_nhom: {
                  type: "string",
                  example: "Thiết kế ứng dụng di động",
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Cập nhật thành công" },
        400: { description: "Dữ liệu không hợp lệ" },
      },
    },
  },
};

export default chiTietCongViecSwagger;
