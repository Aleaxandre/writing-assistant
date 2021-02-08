import React from "react";
import { MarkdownEditorComponent } from "../markdown-editor/markdown-editor";
import { Note } from "../models/note";

type ViewerProps = {displayedNote: Note, setNoteContent: Function};

export class ViewerComponent extends React.Component<ViewerProps> {
  render() {
    return <div className='viewer'>
        <MarkdownEditorComponent noteContent={this.props.displayedNote.content} setNoteContent={this.props.setNoteContent}/>
      </div>;
  }
}