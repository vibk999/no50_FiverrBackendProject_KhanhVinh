import authSwagger from "./auth.swagger.js";
import binhLuanSwagger from "./binhluan.swagger.js";
import chiTietLoaiCongViecSwagger from "./chiTietLoaiCongViec.swagger.js"; // nếu có
import congViecSwagger from "./congviec.swagger.js";
import loaiCongViecSwagger from "./loaiCongViecSwagger.js";
import nguoiDungSwagger from "./nguoiDung.swagger.js";
import thueCongViecSwagger from "./thueCongViec.swagger.js";
const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "FIVERR",
    version: "1.0.0",
  },
  servers: [
    {
      url: "",
      description: "Production Server",
    },
  ],
  components: {
    securitySchemes: {
      tokenAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: {
    ...authSwagger,
    ...binhLuanSwagger,
    ...chiTietLoaiCongViecSwagger,
    ...congViecSwagger,
    ...loaiCongViecSwagger,
    ...nguoiDungSwagger,
    ...thueCongViecSwagger,
  },
};

export default swaggerDocs;
