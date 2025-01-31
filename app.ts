import path from "path";
import express from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const app = express();

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
