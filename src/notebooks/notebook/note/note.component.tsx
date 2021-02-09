import React, { MouseEvent } from 'react';
import { AppContext } from '../../../app';
import { SvgMarkdown } from '../../../icons/svg-markdown';
import { SvgNotebook } from '../../../icons/svg-notebook';
import { Note } from '../../../models/note';
import { FsUtils } from '../../../utils/fs-utils';

type NoteProps = { note: Note };
type NoteStates = { selected: boolean };

export class NoteComponent extends React.Component<NoteProps, NoteStates> {
  constructor(props: NoteProps) {
    super(props);
    this.state = { selected: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className='note'>
        <AppContext.Consumer>
          {({ setDisplayedNote }) => (
            <div
              title={'Last modified: ' + this.props.note.updateTime.toLocaleString()}
              onClick={(event) => this.handleClick(setDisplayedNote, this.props.note, event)}>
              {this.props.note.title}
              <SvgMarkdown color='red' iconsize={10} />
            </div>
          )}
        </AppContext.Consumer>
      </div>
    );
  }

  handleClick(setDisplayedNote: (displayedNote: Note) => void, note: Note, event: MouseEvent<HTMLSpanElement>): void {
    this.setState((state) => ({
      selected: !state.selected,
    }));

    note.content = FsUtils.readNoteContent(note.location);

    setDisplayedNote(note);
  }
}
