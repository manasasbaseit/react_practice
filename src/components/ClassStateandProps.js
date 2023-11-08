import React,{Component} from 'react';
import Display from './Display';
 class ClassStateandProps extends Component{
    state={
        name:"welcome to react tutorials"
    }
    render(){
        return(
            <div>
                <center>
                    <Display name={this.state.name}/>
                </center>
            </div>
        )
    }
}
export default ClassStateandProps