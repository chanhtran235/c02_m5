
import {useCallback, useEffect, useState} from "react";
import {getAll} from "../service/studentService";
import {Link, useLocation} from "react-router-dom";
import DeleteComponent from "./DeleteComponent";
import LoadingSpinner from "./LoadingSpinner";

const ListComponent =()=>{
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id:0,name:""});
    useEffect( ()=>{
        console.log(" --------useEffect run-----------");
        fetData();
        return ()=>{
            console.log(" componet list đã bị unmount")
        }

    },[]);
    const fetData = async ()=>{
        setIsLoading(true);
        let list = await getAll();
        setStudentList(list);
        setIsLoading(false);
    }

    const handleShowModal =(student)=>{
        setIsShowModal(true);
        setDeleteStudent(student);
    }

    // sử dụng userCallback để không render lại modal khi không cần thiết=> tăng hiệu năng chương trình
    const handleCloseModal =useCallback(()=>{
        setIsShowModal(false);
        fetData();
    },[]);
    return <>
        {console.log("----list render -----------------")}
        <h1 className={'test'}>Danh sách</h1>
        {isLoading&&<LoadingSpinner/>}
        <table>
            <thead>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Class name</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {studentList && studentList.map((s, i) => (
                <tr key={s.id}>
                    <td>{i+1}</td>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.gender?"Male":"Female"}</td>
                    <td>
                        {s.subject}
                    </td>
                    <td>{s.classCG?.name}</td>
                    <td>
                        <Link to={`/detail/${s.id}`}>Detail</Link>
                    </td>
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