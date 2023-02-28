import React from "react";

import './Modal.css'

function Modal(props) {
    return (
        <div className="modal_main_container">

            <div className="modal_content">
                <div className="modal_header_div">
                    <p className="modal_close_title">{props.title}</p>
                    <p className="modal_close_btn" onClick={() => props.onCloseModal()}>×</p>
                </div>


                {props.children}
            </div>
            
        </div>
    )
}


export default Modal