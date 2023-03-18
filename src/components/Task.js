import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
const Task = ({ obj ,markAsDone,key, index, deleteItem}) => {
   
    const done=()=>{
         markAsDone(index);
    }
    return (
        <>
            <div id="task">
              <button onClick={done}><DoneIcon /></button>
                
                {
                     
                  !obj.done ? <h2>{obj.text}</h2> : <h2><del>{obj.text}</del></h2>

                }
                <button onClick={deleteItem}><DeleteForeverIcon /></button>


            </div>


        </>
    )
}

export default Task