import React from 'react';
import { SvgPlus } from '../icons/svg-plus';
import { Notebook } from '../models/notebook';
import { NotebookComponent } from './notebook/notebook.component';
type NotebookComponentProps = {
  notebooks: Notebook[];
  addNotebook: (event: React.MouseEvent) => void;
  addNote: (event: React.MouseEvent) => void;
};
export class NotebooksComponent extends React.Component<NotebookComponentProps> {
  render() {
    return (
      <div className='menu navigation-menu'>
        <h3>
          Notebooks&nbsp;
          <SvgPlus color={'white'} iconsize={20} handleclick={this.props.addNotebook} title={'Add Notebook'} />
        </h3>
        {this.props.notebooks.map((item, index) => (
          <NotebookComponent notebook={item} key={index} addNote={this.props.addNote} />
        ))}
      </div>
    );
  }
}
