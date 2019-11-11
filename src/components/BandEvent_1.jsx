//#region 绑定事件的标准格式

// import React,{Component} from 'react'

// class BindEvent extends Component {
//     constructor() {
//         super();
//         this.state = { }
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick = { () => this.myClickHandler( arg ) }>Button</button>
//             </div>
//         )
//     }

//     myClickHandler = ( arg ) => {
//         console.log(arg);
//     }
// } 

// export default BindEvent;

//#endregion

import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { createGunzip } from 'zlib';

class BindEvent extends Component {
    constructor() {
        super();

        this.state={
            msg:'hhh',
            gender:'jjj'
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
                <button onClick={ ()=>{ this.myClickHandler("000000") } }>按钮</button>
            </div>
        )
    }


    myClickHandler=(arg1)=>{

        /**
         * 在 React 中，如果想为state中的数据重新赋值
         * 应该调用 React 提供的this.setState
         */
        this.setState({
            /**
             * this.setState的执行时异步的;
             * 如果在 setState 之后想拿到最新的state值，需要回调(callback)；
             * this.setState({}, callback);
             */ 
            msg:'123' + arg1
        },function(){ /*回调*/ console.log(this.state) })

        //console.log(this.state);
    }
} 

export default BindEvent;