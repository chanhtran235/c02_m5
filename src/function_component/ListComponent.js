import AddComponent from "./AddComponent";
import {useCallback, useEffect, useState} from "react";
import {getAll} from "../service/studentService";
import DeleteComponent from "./DeleteComponent";

const ListComponent =()=>{
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id:0,name:""});
    useEffect(()=>{
        console.log(" --------useEffect run-----------");
        setStudentList([...getAll()])
    },[isLoading,isShowModal]);

    const handleShowModal =(student)=>{
        setIsShowModal(pre =>!pre);
        setDeleteStudent(student);
    }

    // sử dụng userCallback để không render lại modal khi không cần thiết=> tăng hiệu năng chương trình
    const handleCloseModal =useCallback(()=>{
        setIsShowModal(pre =>!pre);
    },[]);
    return <>
        {console.log("----list render -----------------")}
        <h1 className={'test'}>Danh sách</h1>
        <AddComponent  setIsLoading = {setIsLoading} />
        <table>
            <thead>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {studentList && studentList.map((s, i) => (
                <tr key={s.id}>
                    <td>{i+1}</td>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>
                        <button onClick={()=>{handleShowModal(s)}}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <DeleteComponent
            deleteStudent ={deleteStudent}
            isShowModal ={isShowModal}
            handleCloseModal ={handleCloseModal}
        />
    </>
}
export default ListComponent ;