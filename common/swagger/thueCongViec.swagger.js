const thueCongViecSwagger = {
  "/api/thue-cong-viec": {
    get: {
      tags: ["ThueCongViec"],
      summary: "Lấy tất cả thuê công việc",
      responses: {
        200: { description: "Thành công" },
      },
    },
    post: {
      tags: ["ThueCongViec"],
      summary: "Tạo thuê công việc mới",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ma_cong_viec: { type: "integer", example: 1 },
                ma_nguoi_thue: { type: "integer", example: 5 },
                ngay_thue: {
                  type: "string",
                  format: "date-time",
                  example: "2025-06-13T10:00:00Z",
                },
              },
              required: ["ma_cong_viec", "ma_nguoi_thue", "ngay_thue"],
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo thành công" },
        400: { description: "Lỗi dữ liệu đầu vào" },
      },
    },
  },

  "/api/thue-cong-viec/phan-trang-tim-kiem": {
    get: {
      tags: ["ThueCongViec"],
      summary: "Phân trang & tìm kiếm thuê công việc",
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: { type: "integer", example: 1 },
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: { type: "integer", example: 10 },
        },
        {
          name: "keyword",
          in: "query",
          required: false,
          schema: { type: "string", example: "thiết kế" },
        },
      ],
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/api/thue-cong-viec/{id}": {
    get: {
      tags: ["ThueCongViec"],
      summary: "Lấy thuê công việc theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer", example: 1 },
        },
      ],
      responses: {
        200: { description: "Thành công" },
        404: { description: "Không tìm thấy" },
      },
    },
    put: {
      tags: ["ThueCongViec"],
      summary: "Cập nhật thuê công việc theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer", example: 1 },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ma_cong_viec: { type: "integer", example: 2 },
                ma_nguoi_thue: { type: "integer", example: 6 },
                ngay_thue: {
                  type: "string",
                  format: "date-time",
                  example: "2025-06-14T14:00:00Z",
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
      tags: ["ThueCongViec"],
      summary: "Xoá thuê công việc theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer", example: 1 },
        },
      ],
      responses: {
        200: { description: "Xoá thành công" },
        404: { description: "Không tìm thấy" },
      },
    },
  },

  "/api/thue-cong-viec/lay-danh-sach-da-thue": {
    get: {
      tags: ["ThueCongViec"],
      summary: "Lấy danh sách công việc đã thuê theo người dùng đăng nhập",
      responses: {
        200: { description: "Thành công" },
      },
    },
  },

  "/api/thue-cong-viec/hoan-thanh-cong-viec/{MaThueCongViec}": {
    post: {
      tags: ["ThueCongViec"],
      summary: "Hoàn thành công việc thuê",
      parameters: [
        {
          name: "MaThueCongViec",
          in: "path",
          required: true,
          schema: { type: "integer", example: 7 },
        },
      ],
      responses: {
        200: { description: "Cập nhật thành công" },
        404: { description: "Không tìm thấy công việc thuê" },
      },
    },
  },
};
export default thueCongViecSwagger;
