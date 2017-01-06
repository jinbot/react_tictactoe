import React,{ Component, PropTypes } from 'react';
import Board from './Board';
import update from 'react-addons-update';

class App extends Component{
  constructor(props){
    super(props);
    this.StateChange=this.StateChange.bind(this);
    this.state={
      turn: 0,
      value: [
        0,0,0,
        0,0,0,
        0,0,0
      ]
    }
  }
  StateChange(e,index){

    if (this.state.value[index]===0) {


      if(this.state.turn%2===0){
          e.target.style.backgroundColor="red";
          document.getElementById("preview").style.backgroundColor="blue";

          this.setState({
            value: update(
                this.state.value,
                {
                  [index]: { $set:1 }
                }
              )
          });
      }
      else{
        e.target.style.backgroundColor="blue";
        document.getElementById("preview").style.backgroundColor="red";
        this.setState({
          value: update(
              this.state.value,
              {
                  [index]: { $set:2 }
              }
            )
        });
      }
      this.setState({
        turn: this.state.turn+1
      });
      //

    }
  }
  componentDidUpdate(){
    let full=0;
    for(let i=1;i<3;i++){
      if(
          (this.state.value[0]===i && this.state.value[1]===i  && this.state.value[2]===i) ||
          (this.state.value[3]===i && this.state.value[4]===i  && this.state.value[5]===i) ||
          (this.state.value[6]===i && this.state.value[7]===i  && this.state.value[8]===i) ||
          (this.state.value[0]===i && this.state.value[3]===i  && this.state.value[6]===i) ||
          (this.state.value[1]===i && this.state.value[4]===i  && this.state.value[7]===i) ||
          (this.state.value[2]===i && this.state.value[5]===i  && this.state.value[8]===i) ||
          (this.state.value[0]===i && this.state.value[4]===i  && this.state.value[8]===i) ||
          (this.state.value[2]===i && this.state.value[4]===i  && this.state.value[6]===i)
        ){
        document.body.style.backgroundColor="rgba(0,0,0,1.2)";
        if(i===1){
          document.getElementById("box").innerHTML=
          "<h1 class='winnerRedText'>Red Win!!<br/><br/><input type='button' value='regame' class='redbtn' onClick='window.location.reload();'></h1>";
        }
        else{
          document.getElementById("box").innerHTML=
          "<h1 class='winnerBlueText'>Blue Win!!<br/><br/><input type='button' value='regame' class='bluebtn' onClick='window.location.reload();'></h1>  ";
        }

      }
    }
    for(let i=0;i<9;i++){
      if(this.state.value[i]!=0){
        full++;
      }
    }
    if(full==9){
      document.body.style.backgroundColor="rgba(0,0,0,1.2)";
      document.getElementById("box").innerHTML=
      "<h1 class='drawText'>Draw!!<br/><br/><input type='button' value='regame' class='drawbtn' onClick='window.location.reload();'></h1>  ";
    }
  }
  render(){
    return(

      <div id="box">
        <Board StateChangeHandle={this.StateChange}/>
        <div id = "winnerbox"></div>
        <br /><br />
        turn <br/>
        <div id = "preview" className="boardboxs defaultbox"></div>

      </div>

    );
  }
}

export default App;
