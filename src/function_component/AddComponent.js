import React, {useRef} from "react";
import {addNew, getAll} from "../service/studentService";

function AddComponent({setIsLoading}){
    const idRef = useRef(null);
    const nameRef = useRef(null);

    const handleAdd =()=>{
         let student = {
             id: idRef.current.value,
             name: nameRef.current.value
         }
         addNew(student);
        console.log(getAll());
        setIsLoading(pre =>!pre);
    }
    return <>
        {console.log("---- add render---------")}
        <input ref={idRef} placeholder={'Enter Id'}/>
        <input ref={nameRef} placeholder={'Enter name'}/>
        <button onClick={handleAdd}>save</button>
    </>
}
export default React.memo(AddComponent) ;