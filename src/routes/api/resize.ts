import express from "express";
import path from "path";
import { checkType, fileExists, createDir } from "../../utilities/fileHandler";
import resizeImage from "../../utilities/imageHandler";

const convert = express.Router();

convert.get("/", async (req: express.Request, res: express.Response) => {
  const { filename, width, height } = req.query;
  const imgDir = path.resolve("./") + "/assets/"; //  ex: c:\project\assets
  const outputDir = imgDir + "thumbnails/"; //  ex: c:\project\assets\thumbnails
  const targetImage = `${imgDir}${filename}.jpg`; //  ex: c:\project\assets\thumbnails\pic.jpg

  if (Object.keys(req.query).length === 0) {
    return res
      .status(200)
      .send("Welcome to the conversion endpoint. An image filename, height and width are required parameters.");
  }

  if (!filename || !width || !height || isNaN(Number(width)) || isNaN(Number(height))) {
    return res.status(400).send("Error, missing or malformed parameters");
  }

  if (checkType(String(filename))) {
    return res.status(400).send("Filename shouldn't include the extension");
  }

  if (!fileExists(targetImage)) {
    return res.status(404).send("Oh uh, image not found");
  }

  if (!fileExists(outputDir)) {
    createDir(outputDir);
  }

  const outputImage = outputDir + `${filename}-thumbnail-${width}x${height}.jpg`; // ex: pic.jpg => pic-thumbnail-500x400.jpg
  if (fileExists(outputImage)) {
    // Caching system
    res.sendFile(outputImage);
  } else {
    await resizeImage(targetImage, outputImage, Number(width), Number(height));
    res.sendFile(outputImage);
  }
});

export default convert;
