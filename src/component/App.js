import { useState } from "react";

function App(){
  let [counter, setCounter] = useState(0)

  const addCounter = () =>{
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    {/*---   setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)-- useState hook contains a variable and a method where the method contains a callback function   ---*/}
  }

  let removeCounter = ()=>{
    setCounter(counter -1)
  }

  const username  = 'props and state'
  return(
    <div><h1>
      {username}</h1>
      <button onClick={addCounter}>Add Counter {counter}</button>
      <button onClick={removeCounter}>Remove Counter {counter}</button>
      </div>
  )
}

export default App;
