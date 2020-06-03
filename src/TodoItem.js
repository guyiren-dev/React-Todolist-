import React,{Component} from "react";

class TodoItem extends Component{
    constructor(props){
        super(props);
				this.handleClick = this.handleClick.bind(this);
    }
    render(){
			// 代码优化
			  const {content} = this.props;
        return (
            <div onClick = {this.handleClick}>
                {content}
            </div>
        )
		}
		// 子组件如何调用父组件方法来修改父组件内容?
		handleClick(){
			const {deleteList,index} = this.props;
			deleteList(index)
		}
}

export default TodoItem;