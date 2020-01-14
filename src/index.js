//1. 导入包
import React from 'react';  //创建组件、虚拟DOM元素、生命周期；
import ReactDOM from 'react-dom';   //把创建好的组件和虚拟DOM放在页面上展示；
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * 引入外部文件：myTest
 * 注意：引入jsx文件需要加后缀；
 */

import CmtList from './components/myTest_3_CmtList'
import BindEvent from './components/BandEvent_2';



/*
    2. 在index.html中创建容器；
*/

/*
    3. 创建虚拟DOM元素
    参数1：创建的元素的类型，字符串，表示元素的名称；
    参数2：是一个对象或null，表示 当前DOM元素的属性；
    参数3：子节点（包括其他虚拟DOM 获取文本子节点）；
    参数n：其他子节点；
*/
// const myTest =React.createElement('h1',null,'My First Test!');
const myTest = <h1 id = 'mytitle'>My First Test</h1>;
// const mydiv=React.createElement('div',null,'这是在外部嵌套的div',myTest);

/*
    const mydiv = <div id="...">...</div>
    这种在JS中混合写入类似于HTML的语法，叫做JSX语法，是符合XML规范的JS；
    JSX本质是：在运行时，通过babel将Html代码转换成了React.createElement形式来执行的；
*/

/*
    4. 使用ReactDOM把虚拟DOM渲染到页面上
    参数1：要渲染的虚拟DOM元素；
    参数2：指定页面上的一个DOM元素作为容器；
*/

const I = {
    name:'zsr',
    age:23,
    sex:'male',
}
//...为展开运算符,将数组中元素平铺；


// ReactDOM.render(virtualDOM, containerDOM);
ReactDOM.render(<BindEvent />, document.getElementById('root'));
//ReactDOM.render(mydiv,document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();