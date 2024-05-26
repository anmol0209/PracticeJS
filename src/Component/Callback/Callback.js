import React, { useCallback, useState } from "react"
import Todo from "./Todo"

const Callback = ()=> {

    const [count, setCount] = useState(0)
    const [task,  setTask] = useState([])

    const handleClick = () => {
      setCount(count + 1)
    }

  const todo =   useCallback(() =>{
        setTask( (prev)=> [...prev , `new Entry`])
    }, [task])
 
    
    return(
         <>
        <Todo task={task} todo= {todo}/>
         <div>Count: {count}</div>
         <button onClick={handleClick}>Click +</button>
         </> 
    )
}

export default Callback
