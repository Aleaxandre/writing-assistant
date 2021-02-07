import * as fs from "fs";
import { Note } from "../models/note";
import { Notebook } from "../models/notebook";

export class FsUtils {
  public static readNotebooks(dataURL: string) {
    console.log(`Listing Notebooks !`);

    let titles: Notebook[] = [];

    fs.readdirSync(dataURL)
      .filter((notebookFile) => notebookFile.split(".nbk").length === 2)
      .forEach((notebookFile) => {
        console.log(`Notebook found: ${notebookFile}`);
        const title = `${notebookFile.split(".nbk")[0]}`;
        const location = `${dataURL}/${notebookFile}`;

        const readFile = fs.readFileSync(`${dataURL}/${notebookFile}`, "utf8");

        const notebookUuid = readFile.substring(0, 36);

        console.log(`Notebook UUID: ${notebookUuid}`);

        const notes: Note[] = FsUtils.readNotesList(
          `${dataURL}/${notebookUuid}`
        );

        titles.push({
          title,
          location,
          notes,
        });
      });
    return titles;
  }

  private static readNotesList(notebookDir: string): Note[] {
    console.log(`Listing Notes in folder ${notebookDir}`);
    return fs
      .readdirSync(notebookDir)
      .filter((noteFile) => noteFile.split(".md").length === 2)
      .map((noteFile) => {
        const title = `${noteFile.split(".md")[0]}`;
        const location = `${notebookDir}/${noteFile}`;

        console.log(`Reading file info :${notebookDir}/${noteFile}`);
        var stats = fs.statSync(`${notebookDir}/${noteFile}`);
        var updateTime = stats.mtime;
        console.log(`Reading file info :${updateTime}`);

        return { title, location, updateTime } as Note;
      });
  }

  public static readNoteContent(noteLocation: string) {
    const noteContent = fs.readFileSync(noteLocation, "utf8");
    return noteContent;
  }
}
