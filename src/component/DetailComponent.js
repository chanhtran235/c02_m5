import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById} from "../service/studentService";

const DetailComponent=()=>{
    const {id} = useParams();
    const [student,setStudent] = useState({id:"",name:""});
    useEffect(()=>{
        setStudent(findById(id));
    },[])
    return <>
       <h2>Detail</h2>
        <p>ID</p>
        <p>{student.id}</p>
        <p>Name</p>
        <p>{student.name}</p>
    </>
}
export default DetailComponent;