import "../css/myCss.css"
import AddComponent from "./AddComponent";
import {useEffect, useState} from "react";
import {getAll} from "../service/studentService";

const ListComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [studentList, setStudentList] = useState([]);
    useEffect(()=>{
        setStudentList(getAll());
    },[isLoading]);

    return <>
        <h1 className={'test'}>Danh sách</h1>
        <AddComponent setIsLoading={setIsLoading}/>
        <table>
            <thead>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {studentList && studentList.map((e, i) => (
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}

export default ListComponent;