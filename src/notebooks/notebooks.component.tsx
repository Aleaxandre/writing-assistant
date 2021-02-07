import React from "react";
import { Notebook } from "../models/notebook";
import { FsUtils } from "../utils/fs-utils";
import { NotebookComponent } from "./notebook/notebook.component";

export class NotebooksComponent extends React.Component {
  render() {
    const notebooks = this.loadNotebooksFromDisk();

    return <div className="menu navigation-menu">
      <h1>Notebooks</h1>
      {notebooks.map((item, index) => (
        <NotebookComponent notebook={item} key={index}/>
      ))}
    </div>;
  }

  private loadNotebooksFromDisk(): Notebook[] {
    const notebooks: Notebook[] = [];

    FsUtils.readNotebooks('./data').map(({ title, location, notes }) => {
      console.log(`${title}/${location}/${notes}`);
      notebooks.push({ title, location, notes });
    });

    return notebooks;
  }
}
