const authSwagger = {
  "/auth/signup": {
    post: {
      tags: ["Auth"],
      summary: "Đăng ký tài khoản",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "Nguyen Van A" },
                email: { type: "string", example: "a@gmail.com" },
                password: { type: "string", example: "123456" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo tài khoản thành công" },
      },
    },
  },

  "/auth/signin": {
    post: {
      tags: ["Auth"],
      summary: "Đăng nhập",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string", example: "a@gmail.com" },
                password: { type: "string", example: "123456" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Đăng nhập thành công" },
      },
    },
  },
};

export default authSwagger;
