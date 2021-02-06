import React from "react";
import { Notebook } from "../../models/notebook";
type NotebookProps = { notebook: Notebook };
export class NotebookComponent extends React.Component<NotebookProps> {
  render() {
    return <div className="notebook"><span title="Notebook">{this.props.notebook.title} ({this.props.notebook.noteCount})</span></div>;
  }
}