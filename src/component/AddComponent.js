import React, {useEffect, useRef, useState} from "react";
import {addNew, getAll} from "../service/studentService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getClassAll} from "../service/classService";

function AddComponent() {

    const navigate = useNavigate();
    const [classList, setClassList] = useState([]);
    useEffect(()=>{
        setClassList(getClassAll);
    })
    const [student, setStudent] = useState({
        id: "",
        name: "",
        gender: false,
        subject: [],
        classCG: {
            id: "",
            name: ""
        }
    });
    const handleAdd = (value) => {
        console.log(value);
        value = {
            ...value,
            classCG: JSON.parse(value.classCG)
        }
        console.log(value);
        addNew(value);
        console.log(getAll());
        navigate("/list");
        toast.success("Thêm mới thành công");
    }
    const hadleValidate = Yup.object({
        id: Yup.string().required('Yêu cầu nhập id'),
        name: Yup.string().required("Yêu cầu nhập tên")
            .matches(/^[A-Z]\w+$/,"Tên nhập chưa định dạng")
    })

    return <>
        {console.log("---- add render---------")}
        <Formik initialValues={student}
                onSubmit={handleAdd}
                validationSchema={hadleValidate}
        >
            <Form>
                <div>
                    <label>ID</label>
                    <Field type ="text" name ="id"/>
                    <ErrorMessage name="id" component={'div'} style={{color:'red'}}/>
                </div>
                <div>
                    <label>Name</label>
                    <Field type ="text" name ="name"/>
                    <ErrorMessage name="name" component={'div'} style={{color:'red'}}/>
                </div>

                <div>
                    <label>Gender</label>
                    <Field type ="radio" name ="gender" value ="true"/> Male
                    <Field type ="radio" name ="gender" value ="false"/> Female
                    <ErrorMessage name="gender" component={'div'} style={{color:'red'}}/>
                </div>

                <div>
                    <label>Subject</label>
                    <Field type ="checkbox" name ="subject" value ="JS"/> JS
                    <Field type ="checkbox" name ="subject" value ="Java"/> Java
                    <Field type ="checkbox" name ="subject" value ="SQL"/> SQL
                    <ErrorMessage name="subject" component={'div'} style={{color:'red'}}/>
                </div>

                <div>
                    <label>Class name</label>
                    <Field as ="select" name ="classCG">

                        {classList.map(cls=>
                         <option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>
                        )}

                    </Field>
                </div>
                <button type={"submit"}>save</button>
            </Form>
        </Formik>
    </>
}

export default React.memo(AddComponent);