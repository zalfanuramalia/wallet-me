import { Modal, Button } from 'react-bootstrap';
import modals from '../styles/ModalsTransfer.module.scss';

const ModalsTransfer = ({show,close,children,title,button,save}) => {
   return (
      <Modal show={show} onHide={close} aria-labelledby="contained-modal-title-vcenter" centered>
         <Modal.Header className={modals.modalHeader} closeButton >
            <Modal.Title>{title}</Modal.Title></Modal.Header>
         <Modal.Body className={modals.modalBody}>
            <div className='text-center'>
               {children}
            </div>
         </Modal.Body>
         <Modal.Footer className={modals.modalBody}>
            <Button className='btn-primary' onClick={save}>{button}</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default ModalsTransfer;