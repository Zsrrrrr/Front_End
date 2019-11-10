import React,{Component} from 'react'
import ReactDOM from 'react-dom'


/**
 * 第二种创建组件的方法：
 * 用class定义组件，必须让组件继承自 React.Component
 * 
 * 在组件内部必须有render函数；
 * 在render函数中，必须返回合法的JSX虚拟DOM结构；
 */
class SimpleTest extends Component{
    constructor(){
        super();
        //state的数据是可读可写的
        this.state={
            msg:'我是class创建的组件'
        }
    }
    /**
     * render函数的作用：
     *     渲染当前组件对应的虚拟DOM结构；
     */
    render(){
        this.state.msg='msg的值被修改了!';
        return(
            /**
             * 在class创建的组件中，使用外界传来的props参数不需要接受；
             * 直接通过this.props.XXX访问即可；
             * 
             * 注意：class和function创建的组件中，props都是只读的；
             */

            <div>
                This is a component;
                <br/>
                {this.props.name}<br/>
                {this.props.age}<br/>
                {this.props.sex}<br/>

                <h3>{this.state.msg}</h3>
                
            </div>
        )
    }
}

export default SimpleTest;





