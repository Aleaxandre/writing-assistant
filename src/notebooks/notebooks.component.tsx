import React from "react";
import { Notebook } from "../models/notebook";
import { FsUtils } from "../utils/fs-utils";
import { NotebookComponent } from "./notebook/notebook.component";

export class NotebooksComponent extends React.Component {
  render() {
    const notebooks: Notebook[]=[];
    FsUtils.readNotebooks('./data').map(({title, location, noteCount}) => {
      console.log(`${title}/${location}`);
      notebooks.push({title, location, noteCount});
    });

    return <div className="menu navigation-menu">
      <h1>Notebooks</h1>
      {notebooks.map((item, index) => (
        <NotebookComponent notebook={item} key={index}/>
      ))}
    </div>;
  }
}
