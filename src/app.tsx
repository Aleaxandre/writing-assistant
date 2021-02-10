import React from 'react';
import ReactDom from 'react-dom';
import { Note } from './models/note';
import { Notebook } from './models/notebook';
import { NotebooksComponent } from './notebooks/notebooks.component';

import './styles/styles.css';
import { FsUtils } from './utils/fs-utils';
import { ViewerComponent } from './viewer/viewer.component';

const mainElement = document.createElement('div');

document.body.appendChild(mainElement);

export const AppContext = React.createContext({
  notebooks: [],
  displayedNote: {} as Note,
  setDisplayedNote: () => {},
} as AppState);

type AppProps = {};
type AppState = {
  notebooks: Notebook[];
  displayedNote: Note;
  setDisplayedNote: (displayedNote: Note) => void;
};

class App extends React.Component<AppProps, AppState> {
  lastId: number;

  constructor(props: AppProps) {
    super(props);
    this.setDisplayedNote = this.setDisplayedNote.bind(this);
    this.setNoteContent = this.setNoteContent.bind(this);
    this.writeNote = this.writeNote.bind(this);
    this.addNotebook = this.addNotebook.bind(this);

    this.state = {
      notebooks: this.loadNotebooksFromDisk(),
      displayedNote: {} as Note,
      setDisplayedNote: this.setDisplayedNote,
    };

    this.lastId = Number.parseInt(FsUtils.getLastId());
  }

  render() {
    return (
      <div className='main'>
        <AppContext.Provider value={this.state}>
          <NotebooksComponent notebooks={this.state.notebooks} addNotebook={this.addNotebook} />
          <ViewerComponent
            displayedNote={this.state.displayedNote}
            setNoteContent={this.setNoteContent}
            writeNote={this.writeNote}
          />
        </AppContext.Provider>
      </div>
    );
  }

  setDisplayedNote(displayedNote: Note): void {
    console.log(`Called : ${JSON.stringify(displayedNote)}`);
    this.setState({ displayedNote });
  }

  setNoteContent(newContent: string) {
    const displayedNote = this.state.displayedNote;
    displayedNote.content = newContent;
    this.setState({ displayedNote });
  }

  writeNote() {
    const displayedNote = this.state.displayedNote;
    FsUtils.writeNote(displayedNote.location, displayedNote.content);
  }

  addNotebook() {
    this.lastId++;
    console.log(`Adding Notebook ${this.lastId}`);
    FsUtils.createNotebook('Notebook-' + this.lastId);
    FsUtils.updateLastId(this.lastId);
    this.setState({ notebooks: this.loadNotebooksFromDisk() });
  }

  addNote() {
    const displayedNote = this.state.displayedNote;
    FsUtils.createNote(displayedNote.location, displayedNote.content);
  }

  private loadNotebooksFromDisk(): Notebook[] {
    const notebooks: Notebook[] = [];

    FsUtils.readNotebooks('./data').map(({ title, location, notes }) => {
      notebooks.push({ title, location, notes });
    });

    return notebooks;
  }
}
ReactDom.render(<App />, mainElement);
