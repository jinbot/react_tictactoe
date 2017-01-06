import React,{ Component } from 'react';
import './Board.css';

class Board extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){


    this.props.StateChangeHandle(e,e.target.id);
  }
  render(){
    return(
      <div>
        <div className="boardboxs" id="0" onClick={this.handleClick}>
        </div>
        <div className="boardboxs" id="1" onClick={this.handleClick}>
        </div>
        <div className="boardboxs" id="2" onClick={this.handleClick}>
        </div><br/>
        <div className="boardboxs" id="3" onClick={this.handleClick}>
        </div>
        <div className="boardboxs" id="4" onClick={this.handleClick}>
        </div>
        <div className="boardboxs" id="5" onClick={this.handleClick}>
        </div><br/>
        <div className="boardboxs" id="6" onClick={this.handleClick}>
        </div>
        <div className="boardboxs" id="7" onClick={this.handleClick}>
        </div>
        <div className="boardboxs" id="8" onClick={this.handleClick}>
        </div>
      </div>
    );
  }
}
export default Board;
