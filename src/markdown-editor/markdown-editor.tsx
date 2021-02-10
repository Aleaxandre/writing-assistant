import React, { ChangeEvent, MouseEvent } from 'react';
import { Marked, Renderer } from '@ts-stack/markdown';
import { HideButton } from '../components/hide-button/hide-button';
import { SvgSave } from '../icons/svg-save';

type MarkdownEditorProps = {
  noteContent: string;
  setNoteContent: Function;
  writeNote: Function;
}; // (newContent:string)=>{}
type MarkdownEditorState = { originalHidden: boolean };

export class MarkdownEditorComponent extends React.Component<MarkdownEditorProps, MarkdownEditorState> {
  constructor(props: MarkdownEditorProps) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHideOriginal = this.handleHideOriginal.bind(this);

    Marked.setOptions({
      renderer: new Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    });
  }

  render() {
    return (
      <div className='markdown-editor'>
        <div className='md-editor-column-toolbar'>
          <HideButton hidden={this.state?.originalHidden} clicked={this.handleHideOriginal} />
          <SvgSave color='green' iconsize={20} title={'Save'} handleclick={this.handleSave} />
        </div>
        <div className='markdown-editor-dualview'>
          <div className={this.state?.originalHidden ? 'md-editor-column' : 'hidden'}>
            <textarea className='md-editor-textarea' onChange={this.handleChange} value={this.props.noteContent} />
          </div>
          <div className='md-editor-column'>
            <div dangerouslySetInnerHTML={this.renderText(this.props.noteContent)} className='md-editor-preview'></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    console.log('Updating...');
  }

  componentDidMount() {
    this.setState({ originalHidden: false });
  }

  renderText(text: string): { __html: string } {
    const __html = Marked.parse(text);
    return { __html };
  }

  handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const text = event.target.value;
    // this.setState({ text })
    this.props.setNoteContent(text);
  }

  handleSave(event: MouseEvent) {
    this.props.writeNote();
  }

  handleHideOriginal(event: MouseEvent) {
    this.setState({ originalHidden: !this.state.originalHidden });
    console.log(this.state.originalHidden);
  }
}
