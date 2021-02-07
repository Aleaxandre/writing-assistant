import React, { MouseEvent } from "react";
import { AppContext } from "../../../app";
import { Note } from "../../../models/note";
type NoteProps = { note: Note };
type NoteStates = { selected: boolean };
export class NoteComponent extends React.Component<NoteProps, NoteStates> {
  constructor(props:NoteProps){
    super(props);
    this.state={selected: false};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div className="note">
      <AppContext.Consumer>
        {({setDisplayedNote})=>(
          <span title={this.props.note.updateTime.toLocaleString()} onClick={(event)=>this.handleClick(setDisplayedNote, this.props.note, event)}>{this.props.note.title}</span>
        )
        }
        </AppContext.Consumer>
      </div>;
  }

  handleClick(setDisplayedNote: (displayedNote:Note) => void, note: Note, event: MouseEvent<HTMLSpanElement>): void {
    this.setState(state => ({
      selected: !state.selected
    }));
    setDisplayedNote(note);
  }
}