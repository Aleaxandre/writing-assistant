import React, { MouseEvent } from "react";
import { SvgNotebook } from "../../icons/svg-notebook";
import { Notebook } from "../../models/notebook";
import { NoteComponent } from "./note/note.component";

type NotebookProps = { notebook: Notebook };
type NotebookStates = { toggled: boolean };

export class NotebookComponent extends React.Component<
  NotebookProps,
  NotebookStates
> {
  constructor(props: NotebookProps) {
    super(props);
    this.state = { toggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="notebook">
        <div
          title={"Notebook: " + this.props.notebook.notes.length + " note(s)"}
          onClick={this.handleClick}
        >
          {this.state.toggled ? (
            <i className="minusSign" />
          ) : (
            <i className="plusSign" />
          )}
          {this.props.notebook.title}
          <SvgNotebook color="green" iconsize={10} />
        </div>

        {this.state.toggled &&
          this.props.notebook.notes.map((item, index) => (
            <NoteComponent note={item} key={index} />
          ))}
      </div>
    );
  }

  handleClick(event: MouseEvent<HTMLSpanElement>): void {
    this.setState((state) => ({
      toggled: !state.toggled,
    }));
  }
}
