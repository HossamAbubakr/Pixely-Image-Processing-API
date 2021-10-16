import { checkType, fileExists } from "../../utilities/fileHandler";
import path from "path";

const file = `${path.resolve("./")}/package.json`;

describe("Testing the fileHandler functions", () => {
  describe("Testing the checkType function", () => {
    it("testing the checkType function with malformed filename", () => {
      expect(checkType("image.jpg")).toBeTruthy();
    });
    it("testing the checkType function with correct filename", () => {
      expect(checkType("image")).toBeFalsy();
    });
  });
  describe("Testing the fileExists function", () => {
    it("testing the fileExists function with non-existing file", () => {
      expect(fileExists("invalid path")).toBeFalsy();
    });
    it("testing the fileExists function with existing file", () => {
      expect(fileExists(file)).toBeTruthy();
    });
  });
});
