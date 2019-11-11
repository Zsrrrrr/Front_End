import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class BindEvent extends Component {
    constructor() {
        super();

        this.state={
            msg:'hhh'
        }
    }

    render(){
        return(
            <div>
                BindEvent组件
                <br/>
                <h3>{this.state.msg}</h3>
                {/* onClick只接受 function 作为处理函数 */}
                {/* 箭头函数 本身就是一个匿名的 function 函数 */}
                {/* 箭头函数 谁调用指向谁 */}
                <button onClick={ ()=>{ this.myClickHandler("hhh") } }>按钮</button>
            </div>
        )
    }


    myClickHandler=(arg1)=>{
        console.log("222222"+arg1);
    }
} 

export default BindEvent;