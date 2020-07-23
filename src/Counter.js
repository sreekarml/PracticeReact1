import React,{Component} from 'react';

export default class Counter extends Component{

    constructor(props){
        super(props)

        this.state = {
            count: props.initialCount
        }

    }

    render() {
        console.log("rendering hooks");
        return (
            <div>
            <button onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button onClick={() => this.changeCount(+1)}>+</button>
          </div>
        )
    }

    changeCount(value){
        this.setState(prevState => {                     // each time when state change it will take prev state value
            return { count: prevState.count + value }    //  and performs the actions .....
            }
        );
      //  this.setState({ count: this.state.count + value }); //if u use this line 3 times only once it will update
      
        
    }
}