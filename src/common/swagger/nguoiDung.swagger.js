const nguoiDungSwagger = {
  "/api/users": {
    get: {
      tags: ["NguoiDung"],
      summary: "Lấy danh sách tất cả người dùng",
      responses: {
        200: { description: "Thành công" },
      },
    },
    post: {
      tags: ["NguoiDung"],
      summary: "Tạo người dùng mới",
      security: [{ tokenAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id: { type: "integer" },
                name: { type: "string", example: "Nguyễn Văn A" },
                email: { type: "string", example: "email@example.com" },
                pass_word: { type: "string", example: "123456" },
                phone: { type: "string", example: "0901234567" },
                role: { type: "string", example: "USER" },
                avatar: { type: "string", example: "avatar.png" },
              },
              required: ["id", "name", "email", "pass_word"],
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo thành công" },
        400: { description: "Lỗi dữ liệu đầu vào" },
      },
    },
    delete: {
      tags: ["NguoiDung"],
      summary: "Xoá  người dùng theo id",
      security: [{ tokenAuth: [] }],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Xoá thành công" },
        400: { description: "Lỗi dữ liệu" },
      },
    },
  },

  "/api/users/phan-trang-tim-kiem": {
    get: {
      tags: ["NguoiDung"],
      summary: "Phân trang và tìm kiếm người dùng",
      parameters: [
        {
          in: "query",
          name: "page",
          schema: { type: "integer" },
        },
        {
          in: "query",
          name: "pageSize",
          schema: { type: "integer" },
        },
        {
          in: "query",
          name: "keyword",
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/api/users/{id}": {
    get: {
      tags: ["NguoiDung"],
      summary: "Lấy thông tin người dùng theo ID",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
        404: { description: "Không tìm thấy người dùng" },
      },
    },
    put: {
      tags: ["NguoiDung"],
      summary: "Cập nhật người dùng theo ID",
      security: [{ tokenAuth: [] }],
      parameters: [
        {
          in: "path",
          name: "id",
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
                name: { type: "string", example: "Nguyễn Văn B" },
                email: { type: "string", example: "newemail@example.com" },
                phone: { type: "string", example: "0987654321" },
                role: { type: "string", example: "admin" },
                avatar: { type: "string", example: "new_avatar.png" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Cập nhật thành công" },
        400: { description: "Lỗi dữ liệu đầu vào" },
      },
    },
  },

  "/api/users/search/{TenNguoiDung}": {
    get: {
      tags: ["NguoiDung"],
      summary: "Tìm kiếm người dùng theo tên",
      parameters: [
        {
          in: "path",
          name: "TenNguoiDung",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/api/users/upload-avatar": {
    post: {
      tags: ["NguoiDung"],
      summary: "Tải ảnh đại diện người dùng",
      security: [{ tokenAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                file: {
                  type: "string",
                  format: "binary",
                },
              },
              required: ["file"],
            },
          },
        },
      },
      responses: {
        200: { description: "Upload thành công" },
        400: { description: "Lỗi upload" },
      },
    },
  },
};

export default nguoiDungSwagger;
