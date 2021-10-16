import { existsSync } from "fs";

const checkType = (fileName: string): boolean => {
  return fileName.includes(".jpg" || ".jpeg" || ".png" || ".gif"); // check if the file doesn't include an extension
};

const fileExists = (imageLocation: string): boolean => {
  return existsSync(imageLocation); // return whether or not the file exists synchronously
};

export { checkType, fileExists };
