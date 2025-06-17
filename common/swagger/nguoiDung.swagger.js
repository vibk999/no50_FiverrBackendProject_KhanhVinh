const nguoiDungSwagger = {
  "/users": {
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
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ho_ten: { type: "string", example: "Nguyễn Văn A" },
                email: { type: "string", example: "email@example.com" },
                mat_khau: { type: "string", example: "123456" },
                so_dien_thoai: { type: "string", example: "0901234567" },
                vai_tro: { type: "string", example: "user" },
                hinh_anh: { type: "string", example: "avatar.png" },
              },
              required: ["ho_ten", "email", "mat_khau"],
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
      summary: "Xoá nhiều người dùng theo danh sách",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ids: {
                  type: "array",
                  items: { type: "integer" },
                },
              },
              required: ["ids"],
            },
          },
        },
      },
      responses: {
        200: { description: "Xoá thành công" },
        400: { description: "Lỗi dữ liệu" },
      },
    },
  },

  "/users/phan-trang-tim-kiem": {
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

  "/users/{id}": {
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
                ho_ten: { type: "string", example: "Nguyễn Văn B" },
                email: { type: "string", example: "newemail@example.com" },
                so_dien_thoai: { type: "string", example: "0987654321" },
                vai_tro: { type: "string", example: "admin" },
                hinh_anh: { type: "string", example: "new_avatar.png" },
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

  "/users/search/{TenNguoiDung}": {
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

  "/users/upload-avatar": {
    post: {
      tags: ["NguoiDung"],
      summary: "Tải ảnh đại diện người dùng",
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
