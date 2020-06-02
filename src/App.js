import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      list: []
    }
  }
  render(){
      return (
        <Fragment>
          <div>
            <input value = {this.state.inputValue}
                   onChange = {this.handleValue.bind(this)}
            />
            <button onClick = {this.handleClickBtn.bind(this)}>提交</button>
          </div>
          <ul>
             {this.state.list.map((item,index) => {
               return (
                 <li key = {index}
                   onClick = {this.handleClickList.bind(this,index)} 
               >{item}</li>
               )
             })} 
          </ul>
        </Fragment>
      );
  }
  handleValue(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClickBtn(){
    this.setState({
      list : [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  handleClickList(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
}

export default App;
