"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// import morgan from "morgan";
dotenv_1.default.config({ path: "./config.env" });
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Enable CORS for all routes
// // Use morgan for logging HTTP requests (only in development)
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hi 🖐, Welcome to Kolar HNG12 internship stage0 project using TypeScript + Express!",
    });
});
// Define the /api/v1/info route
app.get("/api/v1/info", (_req, res) => {
    const response = {
        email: "muhyideenabdulbasit11@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/KolarDev/HNG12-Stage0-API.git",
    };
    res.status(200).json(response); // Send JSON response
});
// Optional health check route
app.get("/api/v1/health", (_req, res) => {
    res.status(200).json({ status: "OK" });
});
const port = process.env.PORT || 6001;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
