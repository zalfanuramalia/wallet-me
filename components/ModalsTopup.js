import { Modal, Button, Form } from "react-bootstrap";

const ModalsTopup = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Top Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Enter the amount of money, and click submit</h6>
          <Form className="mt-3">            
            <Form.Control type="text" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' className="bg-color1 text-color4" onClick={props.onHide}>submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalsTopup