import React, { ChangeEvent } from "react";
import { Marked, Renderer } from '@ts-stack/markdown';

type MarkdownEditorProps = {};
type MarkdownEditorState = {text: string};

export class MarkdownEditorComponent extends React.Component<MarkdownEditorProps, MarkdownEditorState>{
  constructor(props:MarkdownEditorProps){
    super(props);
    this.state={text: ''};
    this.handleChange = this.handleChange.bind(this);
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
            <div className='md-editor-column'>
                <textarea 
                    className='md-editor-textarea' 
                    rows={35} 
                    onChange={this.handleChange}
                    value={this.state.text}
                />
            </div>
            <div className='md-editor-column'>
                <div dangerouslySetInnerHTML={this.renderText(this.state.text)} className='md-editor-preview'></div>
            </div>
          </div>
        )
      }

      componentDidUpdate () {
        const { text } = this.state
        localStorage.setItem('text', text)
      }

      componentDidMount () {
        const text = localStorage.getItem('text')
        if (text) {
          this.setState({ text });
        } else {
          this.setState({ text: '# Title\n## Sub-Title \n### Deeper title \n \n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.\n\n Attributs: *italic*, **bold**, \n`monospace`, ~~striped~~.\n\n List:\n\n * apples\n * oranges\n * pears\n\n Numbered list:\n\n 1. tofu\n 2. mushrooms\n 3. bread\n\n Link with placeholder text: *[Medium](https://www.medium.com)* \n\n Simple link: https://www.medium.com/ \n\n Code: ```\n console.log("Hello folks! I hoped you enjoyed this quick tutorial. Thanks for reading."); \n``` ' })
        }
      }

      renderText(text: string): {__html: string}{
        console.log(text);
        const __html = Marked.parse(text)
        return {__html};
      }

      handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        const text = event.target.value;
        this.setState({ text })
      }
}
