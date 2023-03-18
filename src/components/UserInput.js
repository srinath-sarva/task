import React, { useState } from 'react'

const UserInput = ({addToTask}) => {
    const [input, setInput] = useState("")
    const changeHandler = (e) => {
        setInput(e.target.value);

    }
    const addTask=()=>{
          addToTask(input);
    }
    return (
        <>
            <div id="input-div" className="form-group">
            <h2 id="label">Task App</h2>
                <input type={"text"} className="form-control" onChange={changeHandler} placeholder="Enter Your Tasks Here" value={input} />
                <br />
                <button onClick={addTask} className='btn btn-primary '>Add To Tasks</button>
            </div>
        </>
    )
}

export default UserInput