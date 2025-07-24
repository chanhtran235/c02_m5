import {Component} from "react";
import {Button, Modal} from "react-bootstrap";

class DeleteComponent1 extends Component{
    constructor(props) {
        super(props);
    }
    handleClose =()=>{
         this.props.handleCloseModal();
    }
    render() {
        return <>
            {console.log("-----------delelete modal---------------------")}
            <Modal show={this.props.isShowModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá </span><span>{this.props.deleteStudent.name}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    }
}
export default DeleteComponent1 ;