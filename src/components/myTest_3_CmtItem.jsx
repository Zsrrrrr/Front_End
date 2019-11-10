import React, {Component} from 'react';
import  '../CSS/CmtList.css' //直接导入的样式表默认全局生效

//使用function构造函数，定义普通的无状态组件
function CmtItem(props){
    return(
        <div id='comment'>
            <h1 id='cmtHead' className='title'>评论人：{props.user}</h1>
            <p id='content'>评论内容：{props.content}</p>
        </div>
    )
}

export default CmtItem;