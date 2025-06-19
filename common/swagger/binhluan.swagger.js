const binhLuanSwagger = {
  "/api/binh-luan": {
    get: {
      tags: ["BinhLuan"],
      summary: "Lấy danh sách bình luận",
      responses: {
        200: { description: "Thành công" },
      },
    },
    post: {
      tags: ["BinhLuan"],
      summary: "Thêm bình luận mới",
      security: [{ tokenAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "ma_cong_viec",
                "noi_dung",
                "ngay_binh_luan",
                "sao_binh_luan",
              ],
              properties: {
                ma_cong_viec: { type: "integer", example: 5 },
                noi_dung: { type: "string", example: "Dịch vụ rất tốt!" },
                ngay_binh_luan: {
                  type: "string",
                  format: "date-time",
                  example: "2025-06-18T14:00:00Z",
                },
                sao_binh_luan: { type: "integer", example: 5 },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Bình luận đã được thêm" },
      },
    },
  },

  "/api/binh-luan/{id}": {
    put: {
      tags: ["BinhLuan"],
      summary: "Cập nhật bình luận",
      security: [{ tokenAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                noi_dung: {
                  type: "string",
                  example: "Cập nhật nội dung bình luận",
                },
                sao_binh_luan: { type: "integer", example: 4 },
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
      tags: ["BinhLuan"],
      summary: "Xóa bình luận",
      security: [{ tokenAuth: [] }],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        204: { description: "Xóa thành công" },
      },
    },
  },

  "/api/binh-luan/lay-binh-luan-theo-cong-viec/{MaCongViec}": {
    get: {
      tags: ["BinhLuan"],
      summary: "Lấy bình luận theo mã công việc",
      security: [{ tokenAuth: [] }],
      parameters: [
        {
          name: "MaCongViec",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Lấy bình luận thành công" },
      },
    },
  },
};

export default binhLuanSwagger;
