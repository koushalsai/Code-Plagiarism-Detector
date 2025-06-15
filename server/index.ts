// server/index.ts

import express, { Request, Response } from "express";
import http, { Server } from "http";
import dotenv from "dotenv";
import { setupDev } from "./vite"; // make sure this path matches your file structure

dotenv.config();

const app = express();
const server: Server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// JSON body parsing
app.use(express.json());

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send({ status: "OK", message: "Server is running!" });
});

async function start() {
  try {
    // DEV‑only: attach Vite middleware for HMR + HTML transforms
    await setupDev(app);

    server.listen(PORT, () => {
      console.log(`server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
