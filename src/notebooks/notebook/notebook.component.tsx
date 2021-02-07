import React, { MouseEvent } from "react";
import { Notebook } from "../../models/notebook";
import { NoteComponent } from "./note/note.component";

type NotebookProps = { notebook: Notebook };
type NotebookStates = { toggled: boolean };

export class NotebookComponent extends React.Component<NotebookProps, NotebookStates> {
  constructor(props:NotebookProps){
    super(props);
    this.state={toggled: false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return <div className="notebook">
      <span title="Notebook" onClick={this.handleClick} >{this.state.toggled ? <i className='minusSign'/> : <i className='plusSign squared'/>}{this.props.notebook.title} ({this.props.notebook.notes.length})</span>

      { this.state.toggled && this.props.notebook.notes.map((item, index) => (
        <NoteComponent note={item} key={index}/>
      ))}
      </div>;
  }

  handleClick(event: MouseEvent<HTMLSpanElement>): void {
    this.setState(state => ({
      toggled: !state.toggled
    }));
  }
}