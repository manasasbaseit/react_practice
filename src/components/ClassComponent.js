import React,{Component} from 'react';
 class ClassComponent extends Component{
    state={
        name:"Sb@se Technologies"
    }
    render(){
        return(
            <div>
                <center>
                    <h2>{this.state.name}</h2>
                </center>
            </div>
        )
    }
}
export default ClassComponent