import express from "express";
import convert from "./api/convert";
import logger from "../middleware/logger";

const routes = express.Router();

routes.use(logger);

routes.get("/", (req, res) => {
  res.send("Welcome to Pixely, the image manipulation API.");
});

routes.use("/convert", convert);

export default routes;
