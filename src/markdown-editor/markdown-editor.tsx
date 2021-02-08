import React, { ChangeEvent, MouseEvent } from "react";
import { Marked, Renderer } from '@ts-stack/markdown';
import { HideButton } from "../components/hide-button/hide-button";

type MarkdownEditorProps = {noteContent: string, setNoteContent:Function}; // (newContent:string)=>{}
type MarkdownEditorState = {originalHidden: boolean};

export class MarkdownEditorComponent extends React.Component<MarkdownEditorProps, MarkdownEditorState>{
  constructor(props:MarkdownEditorProps){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleHideOriginal = this.handleHideOriginal.bind(this);
    
    Marked.setOptions({
      renderer: new Renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  render () {
    return (
      <div className='markdown-editor'>
        <div className='md-editor-column-toolbar'>
          <HideButton hidden={this.state?.originalHidden} clicked={this.handleHideOriginal} />
        </div>
        <div className='markdown-editor-dualview'>
          <div className={(this.state?.originalHidden?'md-editor-column':'hidden')}>
              <textarea 
                  className='md-editor-textarea' 
                  onChange={this.handleChange}
                  value={this.props.noteContent}
              />
          </div>
          <div className='md-editor-column'>
              <div dangerouslySetInnerHTML={this.renderText(this.props.noteContent)} className='md-editor-preview'></div>
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate () {
    // const { noteContent } = this.props;
    // localStorage.setItem('text', noteContent);
  }
  
  componentDidMount () {
    this.setState({originalHidden: false});
    // const text = localStorage.getItem('text')
    // if (text) {
    //   this.setState({ text });
    // } else {
    //   this.setState({ text: '# Title\n## Sub-Title \n### Deeper title \n \n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.\n\n Attributs: *italic*, **bold**, \n`monospace`, ~~striped~~.\n\n List:\n\n * apples\n * oranges\n * pears\n\n Numbered list:\n\n 1. tofu\n 2. mushrooms\n 3. bread\n\n Link with placeholder text: *[Medium](https://www.medium.com)* \n\n Simple link: https://www.medium.com/ \n\n Code: ```\n console.log("Hello folks! I hoped you enjoyed this quick tutorial. Thanks for reading."); \n``` ' })
    // }
  }

  renderText(text: string): {__html: string}{
    const __html = Marked.parse(text)
    return {__html};
  }

  handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const text = event.target.value;
    // this.setState({ text })
    this.props.setNoteContent(text);
  }

  handleHideOriginal(event: MouseEvent){
    this.setState({originalHidden:!this.state.originalHidden});
    console.log(this.state.originalHidden);
  }
}
