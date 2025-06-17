const binhLuanSwagger = {
  "/binh-luan": {
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
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                noiDung: { type: "string", example: "Bài viết rất hay" },
                maCongViec: { type: "integer", example: 5 },
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

  "/binh-luan/{id}": {
    put: {
      tags: ["BinhLuan"],
      summary: "Cập nhật bình luận",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                noiDung: { type: "string", example: "Cập nhật bình luận" },
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
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "integer" } },
      ],
      responses: {
        200: { description: "Xóa thành công" },
      },
    },
  },

  "/binh-luan/lay-binh-luan-theo-cong-viec/{MaCongViec}": {
    get: {
      tags: ["BinhLuan"],
      summary: "Lấy bình luận theo mã công việc",
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
