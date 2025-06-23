import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import YAML from "yamljs";
import authRoutes from "./src/routes/auth.route.js";
import binhLuanRoutes from "./src/routes/binhluan.route.js";
import congViecRoutes from "./src/routes/congViec.routes.js";
import layChiTietLoaiCongViec from "./src/routes/chiTietLoaiCongViec.route.js";
import loaiCongViec from "./src/routes/loaiCongViec.route.js";
import nguoiDung from "./src/routes/nguoiDung.route.js";
import thueCongViec from "./src/routes/thueCongViec.routes.js";
import swaggerDocs from "./src/common/swagger/index.js";
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
app.get("/", (req, res) => res.send("API is running"));
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
