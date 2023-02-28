import React, {useState} from "react";

import './Home.css'
import Modal from "./Modal";


function Home() {
    const [encodeModal, setEncodeModal] = useState(false)

    const [enCoverFile, setEnCoverFile] = useState("")
    const [enRealFile, setEnRealFile] = useState("")
    const [enPassword, setEnPassword] = useState("")


    // decode states:
    const [decodeModal, setDecodeModal] = useState(false)

    const [deRealFile, setDeRealFile] = useState("")
    const [deKeyFile, setDeKeyFile] = useState("")
    const [dePassword, setDePassword] = useState("")



    // Functions:

    const beginEncode = () => {
        console.log(enCoverFile)
        console.log(enPassword)
        console.log(enRealFile)
    }


    const beginDecode = () => {
        console.log(deRealFile)
        console.log(dePassword)
        console.log(deKeyFile)
    }




    return (
        <div className="home_main_container">

            <div className="home_button_div">

                <div className="">
                    <label for='encodefile' className="encode_btn_label" onClick={() => setEncodeModal(true)}>Encode</label>
                    {/* <input className="encode_btn" type="file" id="encodefile" name="encodeFile" /> */}
                </div>
                

                <div>
                    <label for='decodefile' className="encode_btn_label" onClick={() => setDecodeModal(true)}>Decode</label>
                    {/* <input className="encode_btn" type="file" id="decodefile" name="encodeFile" /> */}
                </div>
            </div>


            {encodeModal && 
                <Modal title="Encode File" onCloseModal={() => setEncodeModal(false)}>
                    <div className="encode_modal_main_content">

                        <div className="encode_modal_row">
                            <div className="encode_modal_label">
                                Cover file
                            </div>
                            <div className="encode_modal_upload_btn">
                                <label for='encode_btn'>Choose a cover file to upload</label>
                                <input type='file' id='encode_btn' className="hide_input_btn" value={enCoverFile} onChange={(e) => setEnCoverFile(e.target.value) } />
                            </div>
                        </div>

                        <div className="encode_modal_row">
                            <div className="encode_modal_label">
                                File to Hide
                            </div>
                            <div className="encode_modal_upload_btn">
                                <label for='encode_btn_realFile'>Choose a original file to hide</label>
                                <input type='file' id='encode_btn_realFile' className="hide_input_btn" value={enRealFile} onChange={(e) => setEnRealFile(e.target.value) } />
                            </div>
                        </div>

                        <div className="encode_modal_row">
                            <div className="encode_modal_label">
                                Password
                            </div>
                            <div className="">
                                <input type='password' id='encode_btn' className="encode_input_password" value={enPassword} onChange={(e) => setEnPassword(e.target.value) } />
                            </div>
                        </div>

                        <button className="encode_button_div" onClick={() => beginEncode()}>Encode</button>

                    </div>
                </Modal>
            }



            {/* DECODE MODAL */}

            {decodeModal && 
                <Modal title="Encode File" onCloseModal={() => setDecodeModal(false)}>
                    <div className="encode_modal_main_content">

                        <div className="encode_modal_row">
                            <div className="encode_modal_label">
                                Decode File
                            </div>
                            <div className="encode_modal_upload_btn">
                                <label for='encode_btn'>Choose a real file to decode</label>
                                <input type='file' id='encode_btn' className="hide_input_btn" value={deRealFile} onChange={(e) => setDeRealFile(e.target.value) } />
                            </div>
                        </div>

                        <div className="encode_modal_row">
                            <div className="encode_modal_label">
                                Keys File
                            </div>
                            <div className="encode_modal_upload_btn">
                                <label for='encode_btn_realFile'>Choose a Keys file to upload</label>
                                <input type='file' id='encode_btn_realFile' className="hide_input_btn" value={deKeyFile} onChange={(e) => setDeKeyFile(e.target.value) } />
                            </div>
                        </div>

                        <div className="encode_modal_row">
                            <div className="encode_modal_label">
                                Password
                            </div>
                            <div className="">
                                <input type='password' id='encode_btn' className="encode_input_password" value={dePassword} onChange={(e) => setDePassword(e.target.value) } />
                            </div>
                        </div>

                        <button className="encode_button_div" onClick={() => beginDecode()}>Decode</button>

                    </div>
                </Modal>
            }
        </div>
    )
}

export default Home