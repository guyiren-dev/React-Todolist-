import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './App.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    // 原始数据
    this.state = {
      inputValue: "",
      list: []
    }
  }
  render(){
      return (
        <Fragment>
          <div>
            {/* for属性不能被直接使用，编译会作为for循环判错，要改为htmlFor*/}
            <label htmlFor = "labelName">输入内容：</label>
            <input id = "labelName"
                   className = "input"
                   value = {this.state.inputValue}
                   onChange = {this.handleValue.bind(this)}
            />
            <button onClick = {this.handleClickBtn.bind(this)}>提交</button>
          </div>
          <ul>
             {this.state.list.map((item,index) => {
               return (
                 <TodoItem content = {item}
                           key = {index}
                           index = {index}
                           deleteList = {this.handleClickList.bind(this)}
                 >
                 </TodoItem>
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

export default TodoList;
