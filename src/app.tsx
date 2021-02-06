import React from 'react';
import ReactDom from 'react-dom';
import { NotebooksComponent } from './notebooks/notebooks.component';

import './styles/styles.css';
import { ViewerComponent } from './viewer/viewer.component';

const mainElement = document.createElement('div');

document.body.appendChild(mainElement);

const App = () => {
  return (
    <div className='main'>
      <NotebooksComponent/>
      <ViewerComponent/>
    </div>
  )
}
ReactDom.render(<App />, mainElement);