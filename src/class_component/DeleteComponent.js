import {Component} from "react";
import {Button, Modal} from "react-bootstrap";

class DeleteComponent extends Component {
    constructor(props) {
        super(props);
    }
    handleClose=()=>{
      this.props.handleCloseModal();
    }
    handleDelete=()=>{
     // xoá dữ liệu
        this.props.handleCloseModal();
    }
    render() {
        return <>
            {console.log("------delete modal-------------")}
            <Modal show={this.props.isShowModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có muốn xoá sinh viên {this.props.deleteStudent.name}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    }
}
export default DeleteComponent ;