import React, { useState } from 'react'
import TaskList from './TaskList'
import UserInput from './UserInput'

const TaskApp = () => {
    const [tasks, setTasks] = useState([])
    const addTask = (input) => {
        let inputItem={
             text:input,
             done: false
        }
        setTasks([...tasks, inputItem]);
        console.log(tasks)
    }
    const markAsDone=(i)=>{
        var newTasks=[...tasks]
        
        newTasks[i].done=!newTasks[i].done
        setTasks(newTasks)
        console.log(newTasks)

    }
    const deleteItem=(i)=>{
        var newTasks=[...tasks]
        newTasks.splice(i,1)
        setTasks(newTasks)
    }
    return (
        <div>
            <UserInput addToTask={addTask} />
            <TaskList markAsDone={markAsDone} tasks={tasks}  deleteItem={deleteItem}/>
        </div>
    )
}

export default TaskApp