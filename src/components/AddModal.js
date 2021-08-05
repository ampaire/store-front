import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function AddModal({ showModal, setShowModal }) {

    const handleClose = () => setShowModal(false)

    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop='static' className="mt-5">
                <Modal.Header style={{ margin: '10px' }}>
                    <Modal.Title>F O R N A | F A S H I O N S</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ margin: '20px' }}>Item added to Cart!</Modal.Body>
                <Modal.Footer style={{ margin: '10px' }}>
                    <Button style={{ marginRight: '1rem' }} variant="secondary" onClick={handleClose}>
                        Got it
                    </Button>
                    <Button href='/cart' style={{ marginRight: '1rem' }} variant="dark" onClick={handleClose}>
                        View Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
