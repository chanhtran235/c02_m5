import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../service/studentService";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function DeleteComponent({deleteStudent,isShowModal,handleCloseModal}){
    const handleDelete = ()=>{
       deleteById(deleteStudent.id).then(status=>{
         handleCloseModal();
       });

    }
    useEffect(() => {
        return ()=>{
            console.log("component delete đã unmount")
        }
    }, []);
    return <>
        {console.log("------delete modal-------------")}
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn xoá sinh viên {deleteStudent.name}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
export default React.memo(DeleteComponent) ;