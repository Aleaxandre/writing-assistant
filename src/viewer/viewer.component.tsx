import React from "react";
import { MarkdownEditorComponent } from "../markdown-editor/markdown-editor";
import { TextEditor } from "../text-editor/text-editor.component";

export class ViewerComponent extends React.Component {
  render() {
    return <div className='viewer'>
      {/* <TextEditor/> */}
      <MarkdownEditorComponent/>
      </div>;
  }
}