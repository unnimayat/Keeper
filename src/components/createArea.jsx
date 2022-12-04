import React from "react";
import { useState } from "react";

function CreateArea(props){

    const [note,setNote]=useState({
        title:"",content:""
    });

    function handleChange(event){
        const{name,value}=event.target;
        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            };
        });
    }

    function  submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",content:""
        });
        event.preventDefault();
    }

    return(
        <div className="i">
            <form action="" className="g">
                <input className="input" name="title" onChange={handleChange} value={note.title} placeholder="title"/>
                <textarea className="input" name="content" onChange={handleChange} value={note.content} placeholder="take a note..." rows="3"/>
                <button className="add" onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}
export default CreateArea;