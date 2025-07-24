import {Component} from "react";
import {getAll} from "../service/studentService";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";

class ListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isShowModal: false,
            studentList: null,
            deleteStudent:{
                id: 0,
                name:""
            }
        }

    }
    componentDidMount() {
        console.log("---didMount------run------");
        this.setState(pre =>(
            {
                ...pre,
                studentList: [...getAll()]

            }
        ))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if (prevState.isLoading!== this.state.isLoading){
           this.setState(pre =>(
               {
                   ...pre,
                   studentList: [...getAll()]

               }
           ))
       }
    }

    changeReloading =()=>{
        this.setState(pre =>(
            {
                ...pre,
               isLoading : !this.state.isLoading

            }
        ))
    }
    handleShowModal=(student)=>{
        console.log(student)
        this.setState(pre =>(
            {
                ...pre,
                isShowModal : true,
                deleteStudent: {...student}

            }
        ))
    }
    handleCloseModal=(student)=>{
        this.setState(pre =>(
            {
                ...pre,
                isShowModal : false,
            }
        ))
    }

    render() {
        return <>
        {console.log("----list render -----------------")}
            <h1 className={'test'}>Danh sách</h1>
            <AddComponent changeReloading ={this.changeReloading} />
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
                {this.state.studentList&&this.state.studentList.map((s, i) => (
                    <tr key={s.id}>
                        <td>{i+1}</td>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>
                            <button onClick={()=>{this.handleShowModal(s)}}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteComponent
                deleteStudent ={this.state.deleteStudent}
                isShowModal ={this.state.isShowModal}
                handleCloseModal ={this.handleCloseModal}
            />
        </>
    }

}

export default ListComponent ;