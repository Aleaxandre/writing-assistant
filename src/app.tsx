import React from 'react';
import ReactDom from 'react-dom';
import { Note } from './models/note';
import { NotebooksComponent } from './notebooks/notebooks.component';

import './styles/styles.css';
import { ViewerComponent } from './viewer/viewer.component';

const mainElement = document.createElement('div');

document.body.appendChild(mainElement);

export const AppContext = React.createContext({displayedNote: {} as Note, setDisplayedNote: ()=>{}} as AppState)

type AppProps = { };
type AppState = { displayedNote: Note, setDisplayedNote: (displayedNote:Note) => void };

class App extends React.Component<AppProps, AppState> {
  constructor(props:AppProps) {
    super(props);
    this.setDisplayedNote = this.setDisplayedNote.bind(this);
    this.setNoteContent = this.setNoteContent.bind(this);

    this.state = {
      displayedNote: {} as Note,
      setDisplayedNote: this.setDisplayedNote,
    };
  }

  render() {
    return (
      <div className='main'>
        <AppContext.Provider value={this.state}>
          <NotebooksComponent/>
          <ViewerComponent displayedNote={this.state.displayedNote} setNoteContent={this.setNoteContent}/>
        </AppContext.Provider>
      </div>
    );
  }

  setDisplayedNote(displayedNote: Note): void{
    console.log(`Called : ${JSON.stringify(displayedNote)}`);
    this.setState({displayedNote});
  };

  setNoteContent(newContent: string){
    const displayedNote = this.state.displayedNote;
    displayedNote.content = newContent;
    this.setState({displayedNote});
  }
}
ReactDom.render(<App />, mainElement);