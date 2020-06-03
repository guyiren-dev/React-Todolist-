import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './App.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    // 原始数据存放在state中
    this.state = {
      inputValue: "",
      list: []
    }
    this.handleValue = this.handleValue.bind(this);
    this.handleClickBtn = this.handleClickBtn.bind(this);
    this.handleClickList = this.handleClickList.bind(this);
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
                   onChange = {this.handleValue}
            />
            <button onClick = {this.handleClickBtn}>提交</button>
          </div>
          <ul>
             {this.getTodoItem()}
          </ul>
        </Fragment>
      );
  }
  handleValue(e){
    const value =  e.target.value;
    this.setState(() => ({
      inputValue :  value
    }))
  }

  handleClickBtn(){
    this.setState((preState)=>({
      list : [...preState.list,preState.inputValue],
      inputValue: ''
    }))
  }
  getTodoItem(){
    return (this.state.list.map((item,index) => {
      return (
        <TodoItem content = {item}
                  key = {index}
                  index = {index}
                  deleteList = {this.handleClickList}
        >
        </TodoItem>
      )
    }))
  }
  handleClickList(index){
    this.setState((preState)=>{
        const list = [...preState.list];
        list.splice(index,1);   
        return {list}
    })
  }
}

export default TodoList;
