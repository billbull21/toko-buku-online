import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    try {
      const server = express();

      server.get("*", (req: Request, res: Response, next) => handle(req, res));

      server.get("/produk/:id", (req: Request, res: Response) => {
        const actual = "/produk";
        const queryParams = { id: req.params.id };

        app.render(req, res, actual, queryParams);
      });

      server.listen(3000, () => {
        console.log("> Ready on port 3000");
      });
    } catch (error) {
      console.log("server error :: ", error);
    }
  })
  .catch((er) => {
    console.log("server error :: ", er.stack);
    process.exit(1);
  });

export default app;
