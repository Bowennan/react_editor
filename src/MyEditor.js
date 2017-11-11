import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './MyEditor.css'

const styleMap = { 'RED': {color: 'red'},
                       'BLUE': {color: 'blue'},
                       'YELLOW': {color: 'yellow'},
                       'PINK': {color: 'pink'},
                       'GRAY': {color: 'gray'},
                       'BLACK': {color: 'black'},
                       'ORANGE': {color: '#FF8900'},
                       'ORA': {color: '#FFCC00'},
                       'UN': {color: '#AACC89'},
                       
                                            }

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.focus = () => this.editor.focus();
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
  }

  toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

  toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }  

  render() {
    return (
        <div>
          <button onClick={() => {this.toggleBlockType('header-one')}}>H1</button>
          <button onClick={() => {this.toggleBlockType('blockquote')}}>blockquote</button>
          <button onClick={() => {this.toggleInlineStyle('YELLOW')}}>变黄</button>
          <button onClick={() => {this.toggleInlineStyle('BOLD')}}>Bold</button>
          <button onClick={() => {this.toggleInlineStyle('BOLD')}}>Font</button>
          <Editor 
          editorState={this.state.editorState} onChange={this.onChange} customStyleMap={styleMap}/>
        </div>
    );
  }
}

export default MyEditor;
