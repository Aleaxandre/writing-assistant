import React from "react";
import { MarkdownEditorComponent } from "../markdown-editor/markdown-editor";
import { Note } from "../models/note";

type ViewerProps = {displayedNote: Note};

export class ViewerComponent extends React.Component<ViewerProps> {
  render() {
    return <div className='viewer'>
        <MarkdownEditorComponent displayedNoteContent={this.props.displayedNote.content}/>
      </div>;
  }
}