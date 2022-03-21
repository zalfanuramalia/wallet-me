import { Modal, Button } from "react-bootstrap";

const ModalsForgotPass = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reset Password Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>OTP has been sent, please check your email!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalsForgotPass