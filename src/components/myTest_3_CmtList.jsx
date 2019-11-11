import React, {Component} from 'react'
import CmtItem from './myTest_3_CmtItem'    //导入子组件



class CmtList extends Component {
    constructor(){
        super();
        this.state={
            CommentList: [  //评论列表数据
                { id: 1, user: 'zsr', content: 'hhh'},
                { id: 2, user: 'zsr', content: 'hhh'},
                { id: 3, user: 'zsr', content: 'hhh'},
                { id: 4, user: 'zsr', content: 'hhh'},
                { id: 5, user: 'zsr', content: 'hhh'},
            ]
        }
    }
    render(){
        return(
            <div>
                {/* 在jsx中行内样式： */}
                {/* style={{ color : 'red' }} */}
                <h1 id='listHead' className='title'>这是评论列表组件</h1>
                {
                    this.state.CommentList.map(item=><CmtItem {...item} key={item.id}></CmtItem>)
                }
                <button>Button</button>
            </div>
        )
    }
}

export default CmtList;
