import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Modal extends from React.Component {
    render() {
        return(
            <div>
            <BeastDisplayModal />
        <Button variant="primary"
                onClick={this.handleShow}>
          Launch Modal
        </Button>
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Beasts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalBeastName}</h2>
            <img src={this.state.modalImgUrl} />
          </Modal.Body>
        </Modal>
        </div>
        );
    }
}

export default Modal 