import React from 'react';
import ReactDOM from 'react-dom';
import '../style/tool-box.css';
import {stylePar} from './datas';
import '../style/style.css';

const style = {
   
    B: 'BOLD',
    I: 'ITALIC',
    U: 'UNDERLINE'
}



export default class ETool extends React.Component {
	constructor(props){
		super(props);
		this.state = {displayCol: 'none',
                      displayFont: 'none',
                      displaySize: 'none'
	                 }
	}

	displayColList() {
		this.setState({displayCol: 'block'})
	}

	undisplayColList() {
		this.setState({displayCol: 'none'})
	}

	displaySizeList() {
		this.setState({displaySize: 'block'})
	}

	undisplaySizeList() {
		this.setState({displaySize: 'none'})
	}

	displayFontList() {
		this.setState({displayFont: 'block'})
	}

	undisplayFontList() {
		this.setState({displayFont: 'none'})
	}

    setFonts(par) {
       this.props.setInlineStyle(par)
    }

	setBold() {
		this.props.setInlineStyle(style.B);
	}

	setItalic() {
		this.props.setInlineStyle(style.I);
	}

	setUnderline() {
		this.props.setInlineStyle(style.U);
	}

	setBlock() {
		this.props.setBlockType('blockquote')
	}

	setOrderlist() {
		this.props.setBlockType('ordered-list-item')
	}

	setUnorderlist() {
		this.props.setBlockType('unordered-list-item')
	}

	setCodeblock() {
		this.props.setBlockType('code-block')
	}

	setLeft() {
		this.props.setBlockType('ls')
	}

	setRight() {
		this.props.setBlockType('rs')
	}

	render() {
		const colorBtns = []
		for(let item of stylePar){
			let color = item.color
			colorBtns.push(
               
                 <span className="col-selector" style={{backgroundColor: color, display:this.state.displayCol}} onClick={this.setFonts.bind(this, color)} key={color}></span>
               
				)
		}

		const sizeBtns = []
		for(let item of stylePar){
			let size = item.size
			sizeBtns.push(
                
                 <span className="size-selector" style={{backgroundColor: '#a8d9c9', display:this.state.displaySize}} onClick={this.setFonts.bind(this, size)} key={size}>{size}</span>
               
				)
		}

		const fontBtns = []
		for(let item of stylePar){
			let font = item.font
			fontBtns.push(
                
                 <span className="font-selector" style={{backgroundColor: '#a8d9c9', display:this.state.displayFont}} onClick={this.setFonts.bind(this, font)} key={font}>{font}</span>
               
				)
		}
		return (

             <div className='tool'>
              <span className="item icon-font font-family" onMouseEnter={this.displayFontList.bind(this)} onMouseLeave={this.undisplayFontList.bind(this)}>{fontBtns}</span>
              <span className="item icon-pencil2" onMouseEnter={this.displayColList.bind(this)} onMouseLeave={this.undisplayColList.bind(this)}>{colorBtns}</span>
              <span className="item icon-text-height" onMouseEnter={this.displaySizeList.bind(this)} onMouseLeave={this.undisplaySizeList.bind(this)}>{sizeBtns}</span>
              <span className="item icon-bold" onClick={this.setBold.bind(this)}></span>
              <span className="item icon-italic" onClick={this.setItalic.bind(this)}></span>
              <span className="item icon-underline" onClick={this.setUnderline.bind(this)}></span>
              <span className="item icon-insert-template" onClick={this.setBlock.bind(this)}></span>
              <span className="item icon-paragraph-center" onClick={this.setLeft.bind(this)}></span>
              <span className="item icon-paragraph-right" onClick={this.setRight.bind(this)}></span>
              <span className="item icon-list-numbered" onClick={this.setOrderlist.bind(this)}></span>
              <span className="item icon-list2" onClick={this.setUnorderlist.bind(this)}></span>
              <span className="item icon-embed2" onClick={this.setCodeblock.bind(this)}></span>
             </div> 
            
			)
	}
}