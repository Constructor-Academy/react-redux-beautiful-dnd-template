import React, {forwardRef, useImperativeHandle} from 'react';
import ReactDOM from "react-dom";

import {ModalWrapper, ModalBackdrop, ModalBox} from "./style";

const ToDoModal = forwardRef( (props, ref) => {

    const [displayModal, setDisplayModal] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            closeModal: () => close()
        }
    })

    const open = () => {
        setDisplayModal(true);
    }

    const close = () => {
        setDisplayModal(false);
    }

    return (
        displayModal ?

            ReactDOM.createPortal(
                <ModalWrapper>
                    <ModalBackdrop onClick={close} />
                    <ModalBox>
                        {props.children}
                    </ModalBox>
                </ModalWrapper>,
                document.getElementById("modal-root")
            )
            
        :
            null
    )

});

export default ToDoModal;