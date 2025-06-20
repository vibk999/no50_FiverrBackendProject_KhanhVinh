import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import YAML from "yamljs";
import authRoutes from "../routes/auth.route.js";
import binhLuanRoutes from "../routes/binhluan.route.js";
import congViecRoutes from "../routes/congViec.routes.js";
import layChiTietLoaiCongViec from "../routes/chiTietLoaiCongViec.route.js";
import loaiCongViec from "../routes/loaiCongViec.route.js";
import nguoiDung from "../routes/nguoiDung.route.js";
import thueCongViec from "../routes/thueCongViec.routes.js";
import swaggerDocs from "../common/swagger/index";
import swaggerUi from "swagger-ui-express";

dotenv.config();
const app = express();
// const swaggerDocument = YAML.load("./swagger.yaml");
// Middleware
app.use(cors());
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Routes (public)
app.use("/api/auth", authRoutes);
app.use("/api/binh-luan", binhLuanRoutes);
app.use("/api/cong-viec", congViecRoutes);
app.use("/api/chi-tiet-loai-cong-viec", layChiTietLoaiCongViec);

app.use("/api/loai-cong-viec", loaiCongViec);
app.use("/api/users", nguoiDung);
app.use("/api/thue-cong-viec", thueCongViec);
// Default route
app.get("/", (req, res) => res.send("Express on Vercel"));
// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Server start
const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;
