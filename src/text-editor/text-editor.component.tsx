import React from "react";
import { AppContext } from "../app";
import { FsUtils } from "../utils/fs-utils";

export class TextEditor extends React.Component {
  // static contextType = ViewerContext;
  render() {
    console.log(JSON.stringify(this.context));
	  return (
          <AppContext.Consumer>
            {value => {
                if (value.displayedNote) {
                  const noteContent = FsUtils.readNoteContent(value.displayedNote?.location);
                  return (<div><h1>{value.displayedNote?.title}</h1><p>{noteContent}</p></div>)
                }
              }
            }
          </AppContext.Consumer>
        );
    }

}