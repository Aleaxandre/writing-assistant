import * as fs from 'fs';
import { v4 } from 'uuid';
import { Note } from '../models/note';
import { Notebook } from '../models/notebook';

export class FsUtils {
  public static readNotebooks(dataURL: string) {
    let titles: Notebook[] = [];

    fs.readdirSync(dataURL)
      .filter((notebookFile) => notebookFile.split('.nbk').length === 2)
      .forEach((notebookFile) => {
        const title = `${notebookFile.split('.nbk')[0]}`;
        const location = `${dataURL}/${notebookFile}`;

        const readFile = fs.readFileSync(`${dataURL}/${notebookFile}`, 'utf8');

        const notebookUuid = readFile.substring(0, 36);

        const notes: Note[] = FsUtils.readNotesList(`${dataURL}/${notebookUuid}`);

        titles.push({
          title,
          location,
          notes,
        });
      });
    return titles;
  }

  private static readNotesList(notebookDir: string): Note[] {
    return fs
      .readdirSync(notebookDir)
      .filter((noteFile) => noteFile.split('.md').length === 2)
      .map((noteFile) => {
        const title = `${noteFile.split('.md')[0]}`;
        const location = `${notebookDir}/${noteFile}`;

        var stats = fs.statSync(`${notebookDir}/${noteFile}`);
        var updateTime = stats.mtime;

        return { title, location, updateTime } as Note;
      });
  }

  public static readNoteContent(noteLocation: string) {
    const noteContent = fs.readFileSync(noteLocation, 'utf8');
    return noteContent;
  }

  public static writeNote(noteLocation: string, noteContent: string) {
    fs.writeFileSync(noteLocation, noteContent);
  }

  public static createNotebook(notebookName: string) {
    const notebookUuid = v4();
    const noteLocation = './data/' + notebookName + '.nbk';
    fs.writeFileSync(noteLocation, notebookUuid);
    fs.mkdirSync('./data/' + notebookUuid);
  }

  public static createNote(noteLocation: string, noteContent: string) {
    fs.writeFileSync(noteLocation, noteContent);
  }

  public static updateLastId(lastId: number) {
    fs.writeFileSync('./data/last-id', String(lastId));
  }

  public static getLastId() {
    if (!fs.existsSync('./data/last-id')) {
      fs.writeFileSync('./data/last-id', '0');
    }
    return fs.readFileSync('./data/last-id', 'utf8');
  }
}
