import React, { MouseEvent } from 'react';
import { SvgNotebook } from '../../icons/svg-notebook';
import { SvgPlus } from '../../icons/svg-plus';
import { Notebook } from '../../models/notebook';
import { NoteComponent } from './note/note.component';

type NotebookProps = { notebook: Notebook; addNote: (event: React.MouseEvent) => void };
type NotebookStates = { toggled: boolean };

export class NotebookComponent extends React.Component<NotebookProps, NotebookStates> {
  constructor(props: NotebookProps) {
    super(props);
    this.state = { toggled: false };
    this.handleclick = this.handleclick.bind(this);
  }

  render() {
    return (
      <div className='notebook'>
        <div title={'Notebook: ' + this.props.notebook.notes.length + ' note(s)'} onClick={this.handleclick}>
          {this.state.toggled ? <i className='minusSign' /> : <i className='plusSign' />}
          {this.props.notebook.title}
          <SvgNotebook color='green' iconsize={10} />
          <SvgPlus color={'white'} iconsize={10} handleclick={this.props.addNote} title={'Add Notebook'} />
        </div>

        {this.state.toggled &&
          this.props.notebook.notes.map((item, index) => (
            <span>
              <NoteComponent note={item} key={index} />
            </span>
          ))}
      </div>
    );
  }

  handleclick(event: MouseEvent<HTMLSpanElement>): void {
    this.setState((state) => ({
      toggled: !state.toggled,
    }));
  }
}
