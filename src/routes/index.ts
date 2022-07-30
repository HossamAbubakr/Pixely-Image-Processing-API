import express from "express";
import resize from "./api/resize";
import logger from "../middleware/logger";

const routes = express.Router();

routes.use(logger);

routes.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to Pixely, the image manipulation API.");
});

routes.use("/resize", resize);

export default routes;
