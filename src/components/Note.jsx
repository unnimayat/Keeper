import React from "react"; 
import './Note.css'
function Note(props)
{
    function handleClick(){
        props.onDelete(props.id);
    }
    return(
    <div className="box"> 
       <h1 className="h">{props.title}</h1>
       <p className="p">{props.content}</p>   
       <button onClick={handleClick} className="add">DELETE</button>
    </div>)
}
export default Note;