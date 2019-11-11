import React,{Component} from 'react'

class BindEvent extends Component {
    constructor() {
        super();
        this.state = { }
    }

    render(){
        return(
            <div>
                <button onClick = { () => this.myClickHandler( arg ) }>Button</button>
            </div>
        )
    }

    myClickHandler = ( arg ) => {
        console.log(arg);
    }
} 