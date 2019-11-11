import React,{Component} from 'react'

class BindEvent extends Component {
    constructor() {
        super();
        this.state = {
            msg:"hhh",
            name:"zsr",
            age:23,
            gender:"男",    
        }
    }

    render(){
        return(
            <div>
                <button onClick = { () => this.myClickHandler('lh','女') }>Button</button>
                <h3>{ this.state.name }</h3>
                {/* 如果只提供 value 属性，而不提供 onChange 处理函数，那么将得到只读的文本框 */}
                {/* 当为文本框绑定 value 值后，或提供 readonly 属性使文本框变为只读，或提供 onChange 处理函数 */}
                <input type="text" style={ {width:'100%'} } value={ this.state.msg } onChange={(e)=>this.txtChange(e)} ref='txt'/>
                <h3>{this.state.msg}</h3>
            </div>
        )
    }

    myClickHandler = (arg1,arg2) => {
        this.setState({
            name:arg1,
            gender:arg2,
        },console.log(this.state))
    }
    /**
     * React 中，默认数据流动是单向的；
     * state 的状态变化会自动更新页面；
     * 但页面的变化不会自动同步到 state 状态中；
     * 需要手动监听 onChange 事件；
     */
    txtChange = (e) => {

        // 在 onChange 事件中，获取文本框的值的两种方法：

        /**
         * 1. 通过事件参数 e ；
         *    e.target 是参数的源；
         *    console.log(e.target);
         */
        
        /**
         * 2. 通过 ref 属性；
         *    在react中获取页面元素的引用 ref this.refs.
         *    console.log(this.refs.txt)
         */
        
        const newValue = this.refs.txt.value;

        this.setState({
            msg: newValue,
        })
    }
} 

export default BindEvent;