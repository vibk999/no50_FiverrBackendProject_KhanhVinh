const loaiCongViecSwagger = {
  "/api/loai-cong-viec": {
    get: {
      tags: ["LoaiCongViec"],
      summary: "Lấy tất cả loại công việc",
      responses: {
        200: { description: "Thành công" },
      },
    },
    post: {
      tags: ["LoaiCongViec"],
      summary: "Tạo loại công việc mới",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ten_loai_cong_viec: {
                  type: "string",
                  example: "Thiết kế",
                },
              },
              required: ["ten_loai_cong_viec"],
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

  "/api/loai-cong-viec/phan-trang-tim-kiem": {
    get: {
      tags: ["LoaiCongViec"],
      summary: "Phân trang & tìm kiếm loại công việc",
      parameters: [
        {
          name: "page",
          in: "query",
          schema: { type: "integer" },
          example: 1,
        },
        {
          name: "pageSize",
          in: "query",
          schema: { type: "integer" },
          example: 10,
        },
        {
          name: "keyword",
          in: "query",
          schema: { type: "string" },
          example: "Thiết kế",
        },
      ],
      responses: {
        200: { description: "Danh sách loại công việc phân trang" },
      },
    },
  },

  "/api/loai-cong-viec/{id}": {
    get: {
      tags: ["LoaiCongViec"],
      summary: "Lấy thông tin loại công việc theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Chi tiết loại công việc" },
        404: { description: "Không tìm thấy" },
      },
    },
    put: {
      tags: ["LoaiCongViec"],
      summary: "Cập nhật loại công việc theo ID",
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
        400: { description: "Lỗi dữ liệu đầu vào" },
      },
    },
    delete: {
      tags: ["LoaiCongViec"],
      summary: "Xoá loại công việc theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Xoá thành công" },
        404: { description: "Không tìm thấy" },
      },
    },
  },
};

export default loaiCongViecSwagger;
