
import { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";

export async function setupDev(app: Express) {
  // Create Vite in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // Attach Vite's middleware (HMR, transforms)
  app.use(vite.middlewares);

  // For all routes, serve and transform index.html
  app.use("*", async (req, res, next) => {
    try {
      const template = await fs.promises.readFile(
        path.resolve("client", "index.html"),
        "utf-8"
      );
      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
