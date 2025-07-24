import {Component} from "react";
import {addNew, getAll} from "../service/studentService";

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            student: {
                id: 0,
                name:""
            }
        }
    }

    onChangeValue=(event)=>{
        let fieldName = event.target.name;
        let value = event.target.value;
        console.log(fieldName);
        console.log(value);
        this.setState(pre=>(
            {
                student: {
                    ...this.state.student,
                    [fieldName]:value
                }
            }
        ))

    }

    handleAdd=()=>{
      addNew(this.state.student);
        console.log(getAll());
        this.props.changeReloading();

    }

    render() {
        return <>
         <input name={'id'} onChange={this.onChangeValue} placeholder={'Enter Id'}/>
         <input name="name" onChange={this.onChangeValue} placeholder={'Enter name'}/>
            <button onClick={this.handleAdd}>save</button>
        </>
    }
}
export default AddComponent;