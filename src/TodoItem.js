import React,{Component} from "react";

class TodoItem extends Component{
    constructor(props){
        super(props);
				this.handleClick = this.handleClick.bind(this);
    }
    render(){
        return (
            <div onClick = {this.handleClick}>
                {this.props.content}
            </div>
        )
		}
		// 子组件如何调用父组件方法来修改父组件内容
		handleClick(){
			this.props.deleteList(this.props.index)
		}
}

export default TodoItem;