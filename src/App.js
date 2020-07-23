import React, {useState} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();
function App() {

  
  const [theme,setTheme] = useState("red");

  return (
    <ThemeContext.Provider value={{ backgroundColor:theme }}>
    Counter with class component
    <Counter initialCount={12}/>
    Counter with function component
    <CounterHooks initialCount={13}/>
    <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'; 
    }) 
    }>Toggle Colors</button>
    </ThemeContext.Provider >
  )
}

export default App;
