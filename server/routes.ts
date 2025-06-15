import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
    app.get("/api", (_req, res) => {
        res.json({
            message: "API is working",
            version: "1.0.0",
            timestamp: new Date().toISOString(),
        });
    });

    const httpServer = createServer(app);
    return httpServer;

}
