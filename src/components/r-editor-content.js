import React from 'react';
import ReactDOM from 'react-dom';
import ETool from './r-editor-tool'
import {Editor, EditorState, RichUtils} from 'draft-js';
import {par} from './datas';
import '../style/contents.css';
import 'draft-js/dist/Draft.css';


function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        case 'ls': return 'RichEditor-ls';
        case 'rs': return 'RichEditor-rs';
        default: return null;
    }
}

export default class EContent extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {editorState: EditorState.createEmpty()};
		this.onChange = (editorState) => this.setState({editorState});
		this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
		this.toggleBlockType = this.toggleBlockType.bind(this);

	}
        // 切换行内样式事件，如加粗，斜体, 字体...
        toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
         )
        }
        // 切换块级样式，如有序列表，无序列表...
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

             <div className ='content-box'>
           
               <ETool  setInlineStyle={this.toggleInlineStyle} setBlockType={this.toggleBlockType}/>
              
              <Editor  blockStyleFn={getBlockStyle} customStyleMap={par} editorState = {this.state.editorState}  onChange = {this.onChange} />
             </div> 
            
			)
	}
}