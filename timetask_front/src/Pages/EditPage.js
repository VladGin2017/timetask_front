import React from "react"
import { useParams } from "react-router-dom"

import Modal from 'react-bootstrap/Modal';

export default function EditPage() {
    const {id} = useParams();

    return (
        <div>
            1111111111111 {id}
        </div>
    )
    

    // function MyVerticallyCenteredModal(props) {
    //     return (
    //     <Modal
    //         {...props}
    //         size="lg"
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //     >
    //         <Modal.Header closeButton>
    //         <Modal.Title id="contained-modal-title-vcenter">
    //             Modal heading
    //         </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //         <h4>Centered Modal</h4>
    //         <p>
    //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //             consectetur ac, vestibulum at eros.
    //         </p>
    //         </Modal.Body>
    //         <Modal.Footer>
    //         <button onClick={props.onHide}>Close</button>
    //         </Modal.Footer>
    //     </Modal>
    //     );
    // }

    // return (
    //     <>
    //         <button variant="primary" onClick={() => setModalShow(true)}>
    //             Launch vertically centered modal
    //         </button>

    //         <MyVerticallyCenteredModal
    //             show={modalShow}
    //             onHide={() => setModalShow(false)}
    //         />
    //     </>
    // )

}