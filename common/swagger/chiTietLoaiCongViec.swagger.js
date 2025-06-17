const chiTietLoaiCongViecSwagger = {
  "/chi-tiet-loai-cong-viec": {
    get: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Lấy danh sách chi tiết loại công việc",
      responses: {
        200: { description: "Lấy danh sách thành công" },
      },
    },
    post: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Tạo chi tiết loại công việc mới",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_chi_tiet: { type: "string", example: "Thiết kế UI" },
                ma_nhom: { type: "integer", example: 1 },
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

  "/chi-tiet-loai-cong-viec/phan-trang-tim-kiem": {
    get: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Tìm kiếm và phân trang",
      parameters: [
        { name: "page", in: "query", schema: { type: "integer", example: 1 } },
        {
          name: "limit",
          in: "query",
          schema: { type: "integer", example: 10 },
        },
        {
          name: "search",
          in: "query",
          schema: { type: "string", example: "thiết kế" },
        },
      ],
      responses: {
        200: { description: "Kết quả tìm kiếm" },
      },
    },
  },

  "/chi-tiet-loai-cong-viec/{id}": {
    get: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Lấy chi tiết loại công việc theo ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Lấy dữ liệu thành công" },
      },
    },
    put: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Cập nhật loại công việc",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_chi_tiet: { type: "string", example: "Chỉnh sửa UI" },
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
      summary: "Xóa loại công việc",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Xóa thành công" },
      },
    },
  },

  "/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai": {
    post: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Thêm nhóm chi tiết loại",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_nhom: { type: "string", example: "Frontend" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo nhóm thành công" },
      },
    },
  },

  "/chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/{MaNhomLoaiCongViec}":
    {
      post: {
        tags: ["ChiTietLoaiCongViec"],
        summary: "Upload hình nhóm loại công việc",
        parameters: [
          {
            name: "MaNhomLoaiCongViec",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  imageUrl: {
                    type: "string",
                    example: "https://example.com/image.png",
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

  "/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/{id}": {
    put: {
      tags: ["ChiTietLoaiCongViec"],
      summary: "Cập nhật nhóm chi tiết loại",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_nhom: { type: "string", example: "Backend" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Cập nhật thành công" },
      },
    },
  },
};

export default chiTietLoaiCongViecSwagger;
