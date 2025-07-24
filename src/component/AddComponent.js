import {useEffect, useRef, useState} from "react";
import {addNew, getAll,} from "../service/studentService";

function AddComponent({setIsLoading}){
    const idRef = useRef(null);
    const nameRef = useRef(null);
    const handleAdd =()=>{
        const student = {
            id: idRef.current.value,
            name: nameRef.current.value,
        };
        addNew(student);
        console.log(getAll());
        setIsLoading(pre =>!pre);
    }
    return <>
    <h2>Add new</h2>
        <input  ref={idRef} placeholder={'ID'}/>
        <input  ref={nameRef} placeholder={'Name'}/>
        <button onClick={handleAdd}>Save</button>
    </>
}
export default AddComponent;