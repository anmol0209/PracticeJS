import React, {memo} from 'react'

function Todo({todo, task}) {

    return (
        <>
        {task.map((todo, index)=>{ 
            return(
               
                   <div key={index}>{todo}  {index}</div>
                
            )
         })}
         <button onClick={todo}>Add Task</button>
         </>
    );
    
} 

export default memo(Todo)