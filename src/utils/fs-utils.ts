import * as fs from "fs";
import { Notebook } from "../models/notebook";

export class FsUtils {
  public static readNotebooks(dataURL: string) {
    let titles: Notebook[] = [];

    fs.readdirSync(dataURL).forEach((file, i) => {
      if (file.split(".md").length == 2) {
        const title = `${file.split(".md")[0]}`;
        const location = `${dataURL}/${file}`;
        const readFile = fs.readFileSync(`${dataURL}/${file}`, "utf8");
        const noteCount = readFile.split("\n").length;
        titles.push({
          title,
          location,
          noteCount,
        });
      }
    });
    return titles;
  }
}
