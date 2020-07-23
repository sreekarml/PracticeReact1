import React ,{useState,useContext} from 'react';
import { ThemeContext } from './App'

/* using use state for getting and updating the values ...
export default function CounterHooks({initialCount}){
  const[state,setState] = useState({count: initialCount})
    return (
        <div>
        <button onClick={() => setState({count: state.count - 1 })}>-</button>
        <span>{state.count}</span>
        <button onClick={() => setState({count: state.count + 1})}>+</button>
      </div>
    );
  }
  */
 
export default function CounterHooks({initialCount}){
  console.log("rendering countr hooks");
  const[count,setCount] = useState(initialCount)
  const style = useContext(ThemeContext);
  
    return (
        <div>
        <button style = {style} onClick={() => setCount(prevCount => prevCount - 1 )}>-</button>
        <span>{count}</span>
        <button style = {style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    );
  }

  /*   using prevState - beacuse if we have continously increment twice or thrice it wil not work 
export default function CounterHooks({initialCount}){
  const[state,setState] = useState({count: initialCount})
    return (
        <div>
        <button onClick={() => setState( prevState => {
           return {count: prevState.count - 1  } 
           })}>-</button>
        <span>{state.count}</span>
        <button onClick={() => setState( prevState => {     
           return {count: prevState.count + 1  }        
           })}>+</button>
      </div>
    );
  }
  */