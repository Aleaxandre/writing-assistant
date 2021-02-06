import React from "react";
import { TextEditor } from "../text-editor/text-editor.component";

export class ViewerComponent extends React.Component {
  render() {
    return <div className='viewer'>
      <h1>Viewer</h1>
      <TextEditor/>
      </div>;
  }
}