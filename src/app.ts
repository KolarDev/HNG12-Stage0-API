import path from "path";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors()); // Enable CORS for all routes

// Use morgan for logging HTTP requests (only in development)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message:
      "Hi 🖐, Welcome to Kolar HNG12 internship stage0 project using TypeScript + Express!",
  });
});

// Define the /api/v1/info route
app.get("/api/v1/info", (_req: Request, res: Response) => {
  const response = {
    email: "muhyideenabdulbasit11@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/KolarDev/HNG12-Stage0-API.git",
  };
  res.status(200).json(response); // Send JSON response
});

// Optional health check route
app.get("/api/v1/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "OK" });
});

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
