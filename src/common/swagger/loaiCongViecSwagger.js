const loaiCongViecSwagger = {
  "/api/loai-cong-viec": {
    get: {
      tags: ["LoaiCongViec"],
      summary: "Lấy tất cả loại công việc",
      responses: {
        200: {
          description: "Lấy thành công danh sách loại công việc",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/LoaiCongViec",
                },
              },
            },
          },
        },
      },
    },

    post: {
      tags: ["LoaiCongViec"],
      summary: "Tạo loại công việc mới",
      security: [{ tokenAuth: [] }],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_loai_cong_viec: {
                  type: "string",
                  example: "Lập trình web",
                },
                id: {
                  type: "integer",
                  example: "1",
                },
              },
              required: ["ten_loai_cong_viec"],
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo thành công" },
        400: { description: "Trùng ID" },
      },
    },
  },

  "/api/loai-cong-viec/phan-trang-tim-kiem": {
    get: {
      tags: ["LoaiCongViec"],
      summary: "Tìm kiếm và phân trang loại công việc",
      parameters: [
        {
          name: "page",
          in: "query",
          schema: { type: "integer", default: 1 },
        },
        {
          name: "pageSize",
          in: "query",
          schema: { type: "integer", default: 10 },
        },
        {
          name: "keyword",
          in: "query",
          schema: { type: "string", default: "" },
        },
      ],
      responses: {
        200: {
          description: "Kết quả tìm kiếm",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: { $ref: "#/components/schemas/LoaiCongViec" },
                  },
                  total: { type: "integer", example: 50 },
                },
              },
            },
          },
        },
      },
    },
  },

  "/api/loai-cong-viec/{id}": {
    get: {
      tags: ["LoaiCongViec"],
      summary: "Lấy loại công việc theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: {
          description: "Thông tin loại công việc",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoaiCongViec" },
            },
          },
        },
        404: { description: "Không tìm thấy loại công việc" },
      },
    },

    put: {
      tags: ["LoaiCongViec"],
      summary: "Cập nhật loại công việc",
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
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_loai_cong_viec: {
                  type: "string",
                  example: "Thiết kế đồ họa",
                },
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
      tags: ["LoaiCongViec"],
      summary: "Xóa loại công việc",
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
        200: {
          description: "Xoá thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Xoá thành công" },
                },
              },
            },
          },
        },
        404: { description: "Không tìm thấy loại công việc" },
      },
    },
  },
};

export default loaiCongViecSwagger;
