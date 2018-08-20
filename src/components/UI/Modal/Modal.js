import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import './Modal.css';

const Modal = (props) => (
    <Aux>
        <Backdrop
            showModal={props.showModal}
            clicked={props.modalClosed} />
        <div 
            className="Modal"
            style = {{
                transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.showModal ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;