import React from 'react';



/**
 * 第一种创建组件的方式：
 * 在组建中必须返回一个合法的JSX虚拟DOM元素；
 */
    
function Hello(props){
    return (
        <div>
            test--{props.name}
            <br />
            test--{props.sex}
        </div>
    );
}

/**
 * 
 */


export default Hello;