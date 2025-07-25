const authSwagger = {
  "/api/auth/signup": {
    post: {
      tags: ["Auth"],
      summary: "Đăng ký tài khoản",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "Nguyen Van A" },
                email: { type: "string", example: "a@gmail.com" },
                pass_word: { type: "string", example: "123456" },
                phone: { type: "string", example: "0123456789" },
                gender: { type: "string", example: "male" },
                role: { type: "string", example: "USER" },
              },
              required: ["name", "email", "pass_word", "role"],
            },
          },
        },
      },
      responses: {
        201: { description: "Tạo tài khoản thành công" },
      },
    },
  },

  "/api/auth/signin": {
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
                pass_word: { type: "string", example: "123456" },
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
