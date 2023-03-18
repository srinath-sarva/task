import React from 'react'
import Task from './Task'
import UserInput from './UserInput'

const TaskList = ({tasks,markAsDone,deleteItem}) => {
  return (
    <div>
    {
        tasks.map((element,index)=>{

            return <>
            <Task key={index} index={index} obj={element} markAsDone={markAsDone} deleteItem={deleteItem}/>
            </>
        })
    }
    
     </div>
  )
}

export default TaskList